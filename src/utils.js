export function arrayToMap(arr) {
    return arr.reduce((acc, entity) => ({
        ...acc, [entity.id]: entity
    }), {})
}

export function mapToArr(map) {
    return Object.keys(map).map(id => map[id])
}

export function getRandomID(existingIDs = []) {
    let ID = Math.floor(10000 + Math.random() * 30000);

	while (existingIDs.includes(ID.toString())) {

		ID = Math.floor(10000 + Math.random() * 30000);

	}

    return ID;
}