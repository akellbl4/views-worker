export function getViewsBySlug(key) {
	return global.views.get(key)
}

export async function getViewsMap() {
	const list = await global.views.list()
	const counters = await Promise.all(list.keys.map(key => global.views.get(key.name)))

	return list.keys.reduce(
		(acc, item, i) => [...acc, { ...item, value: parseInt(counters[i], 10) ?? 0 }],
		[]
	)
}
