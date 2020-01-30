function findWords(source, search) {
	for (let i = 0; i < source.length; ++i) {
		if (checkMatch(source, i, search)) {
			return true
		}
	}

	return false
}

function checkMatch(
	source, indSrc, search,
) {
	for (let i = 0; i < search.length; ++i) {
		if (source[indSrc + i] !== search[i]) {
			return false
		}
	}
	return true
}

console.log(findWords('Hello World Baa', 'World'))
console.log(findWords('Hello World Baa', 'Hell o'))
console.log(findWords('Hello World Baa', 'd B'))
console.log(findWords('Hello World Baa', 'd Bb'))
console.log(findWords('Hello World Baa', 'Baa'))
