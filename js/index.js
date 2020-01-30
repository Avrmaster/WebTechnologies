function wordIndex(source, n) {
	let currentWordInd = -1
	for (let i = 0; i < source.length; ++i) {
		if (
			(source[i - 1] === undefined || source[i - 1] === ' ') &&
			(source[i] !== ' ')
		) {
			if (++currentWordInd === n) {
				return i
			}
		}
	}
	return -1
}

console.log(wordIndex(' Hello World Baa  Ghj', 0))
console.log(wordIndex(' Hello World Baa  Ghj', 1))
console.log(wordIndex(' Hello World Baa  Ghj', 2))
console.log(wordIndex(' Hello World Baa  Ghj', 3))
console.log(wordIndex(' Hello World Baa  Ghj', 4))
