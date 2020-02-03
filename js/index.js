window.onload = () => {
	// Task 1
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

	document.getElementById('task1Form').onsubmit = (e) => {
		e.preventDefault()
		const input = document.getElementById('task1Input').value
		const index = document.getElementById('task1Index').value
		document.getElementById('task1Result').innerHTML = `Result: ${wordIndex(input, +index)}`
	}

	// Task 2
	function medians(a, b) {
		return {
			math: (a + b) / 2,
			geo: Math.sqrt(a * b),
		}
	}

	document.getElementById('task2Form').onsubmit = (e) => {
		e.preventDefault()
		const a = document.getElementById('task2A').value
		const b = document.getElementById('task2B').value
		const meds = medians(+a, +b)
		document.getElementById('task2Result').innerHTML = `
			Mathematical median: ${meds.math.toFixed(3)}<br/>
			Geometrical median: ${meds.geo.toFixed(3)}
		`
	}

	// Task 3
	function fact(n) {
		if (n === 0) {
			return 1
		}
		return n * fact(n - 1)
	}

	function arccos(x, N) {
		let sum = 0
		for (let n = 0; n < N; ++n) {
			sum += (fact(2 * n) * Math.pow(x, 2 * n + 1)) /
				//	-----------------------------------------------------
				(Math.pow(4, n) * Math.pow(fact(n), 2) * (2 * n + 1))
		}

		return Math.PI / 2 - sum
	}

	document.getElementById('task3Form').onsubmit = (e) => {
		e.preventDefault()
		const x = document.getElementById('task3X').value
		const n = document.getElementById('task3N').value
		const res = arccos(+x, +n)
		document.getElementById('task3Result').innerHTML = `
			Custom arccos(x): ${res.toFixed(15)}<br/>
			Math.arccos(x): ${Math.acos(x).toFixed(15)}
		`
	}

	//	Task 4
	function circleRadius(top, bottom, side) {
		return {
			inner: Math.sqrt(top * bottom) / 2,
			outer: side * Math.sqrt((top * bottom + side * side) / (4 * side * side - Math.pow((top - bottom), 2))),
		}
	}

	document.getElementById('task4Form').onsubmit = (e) => {
		e.preventDefault()
		const top = document.getElementById('task4Top').value
		const bottom = document.getElementById('task4Bottom').value
		const side = document.getElementById('task4Side').value
		const res = circleRadius(+top, +bottom, +side)
		document.getElementById('task4Result').innerHTML = `
			Inner circle radius: ${res.inner.toFixed(5)}<br/>
			Outer circle radius: ${res.outer.toFixed(5)}
		`
	}

	//	Task 5
	function Product(name, manufacturer, price, expirationDate, quantity) {
		this.name = name
		this.manufacturer = manufacturer
		this.price = price
		this.expirationDate = expirationDate
		this.quantity = quantity

		this.toString = () => {
			return `
				Name: <i>${this.name}</i>;<br/>
				Manufacturer: ${this.manufacturer};<br/>
				Price: $${(this.price / 100).toFixed(2)};<br/>
				Expiration Date: ${this.expirationDate.toLocaleDateString()};<br/>
				Quantity: ${this.quantity};<br/>
			`
		}
	}

	const products = [
		new Product('Book', 'Ababahalamaha', 3000, new Date('2100'), 10),
		new Product('Elantra', 'Hyundai', 2200000, new Date('2050'), 2),
		new Product('Tucson', 'Hyundai', 3500000, new Date('2070'), 1),
		new Product('Sausage', 'Koropishi', 1000, new Date(2020, 3, 1), 20),
		new Product('Laptop', 'Apple', 300000, new Date(2025, 4, 25), 5),
		new Product('Phone', 'Samsung', 100000, new Date(2022, 5, 10), 10),
		new Product('Table', 'Ikea', 20000, new Date('2090'), 7),
		new Product('Coffee', 'FirstPoint', 500, new Date(2020, 2, 8), 40),
		new Product('Cushion', 'Ikea', 12000, new Date(2030, 5, 10), 10),
		new Product('Display', 'Samsung', 200000, new Date(2035, 9, 10), 10),
	]

	function mapProductsToString(productsToMap) {
		return productsToMap
			.map((product, index) => `<b>Product ${index + 1}</b><br/>${product.toString()}`)
			.join('<br/><br/>')
	}

	function invalidateProducts() {
		document.getElementById('task5AllProducts').innerHTML = mapProductsToString(products)
	}

	invalidateProducts()

	document.getElementById('task5Form').onsubmit = (e) => {
		e.preventDefault()
		const name = document.getElementById('task5Name').value
		const manufacturer = document.getElementById('task5Manufacturer').value
		const price = +document.getElementById('task5Price').value
		const expirationDate = document.getElementById('task5ExpirationDate').value
		const quantity = +document.getElementById('task5Quantity').value
		products.push(new Product(name, manufacturer, price, new Date(expirationDate), quantity))
		invalidateProducts()
	}

	document.getElementById('task5FilterForm').onsubmit = (e) => {
		e.preventDefault()
		const name = document.getElementById('task5FilterName').value
		const price = +document.getElementById('task5FilterPrice').value
		const expirationDate = new Date(document.getElementById('task5FilterExpirationDate').value)

		document.getElementById('task5Result').innerHTML = `
			<b>a)</b><br/>${mapProductsToString(products.filter(product => product.name === name))}<br/>
			<b>b)</b><br/>${mapProductsToString(products.filter(product => product.name === name && product.price < price))}<br/>
			<b>c)</b><br/>${mapProductsToString(products.filter(product => +product.expirationDate > +expirationDate))}<br/>
		`
	}

}
