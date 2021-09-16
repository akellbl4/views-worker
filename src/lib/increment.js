export async function incrementCounter(key) {
	try {
		const c = await global.views.get(key)
		const count = typeof c === 'string' ? parseInt(c, 10) + 1 : 1

		await global.views.put(key, count)

		return count
	} catch (e) {
		console.error(e)
	}
}
