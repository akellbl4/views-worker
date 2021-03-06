import './lib/response'
import { incrementCounter } from './lib/increment'
import { getViewsMap, getViewsBySlug } from './lib/get-views'
import { normalizeUrl } from './lib/normalize-url'

addEventListener('fetch', event => {
	event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
	const method = request.method.toUpperCase()
	const url = new URL(request.url)
	const response = fetch(request)

	if (method !== 'GET') {
		return response
	}

	// Get all views
	if (url.pathname === '/' && url.searchParams.has('views')) {
		const map = await getViewsMap()

		return Response.json(map)
	}

	const slug = normalizeUrl(url.pathname)
		.split('/')
		.pop()

	// Get views by slug
	if (typeof slug === 'string' && request.headers.get('X-Requested-With') === 'fetch') {
		const count = await getViewsBySlug(slug)

		return new Response(count, { headers: { 'Content-Type': 'text/plain' } })
	}

	// Increment views counter
	if (typeof slug === 'string') {
		await incrementCounter(slug)
	}

	return response
}
