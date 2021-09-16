Response.json = (data, init = { headers: {} }) => {
	return new Response(JSON.stringify(data), {
		headers: {
			'Content-Type': 'application/json',
			...init.headers,
		},
		...init,
	})
}

Response.html = (body, init = { headers: {} }) => {
	return new Response(body, {
		headers: {
			'Content-Type': 'text/html',
			...init.headers,
		},
		...init,
	})
}
