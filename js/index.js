window.onload = () => {
	function Product(name, itemPrice, quantity) {
		this.name = name
		this.itemPrice = itemPrice
		this.quantity = quantity
		this.price = this.itemPrice * this.quantity

		this.toString = () => {
			return `
				<th><i>${this.name}</i></th>
				<th>$${(this.itemPrice / 100).toFixed(2)}</th>
				<th>${this.quantity}</th>
				<th>$${(this.price / 100).toFixed(2)}</th>
			`
		}
	}

	function mapProductsToString(productsToMap) {
		return productsToMap.map(product => `<tr>${product.toString()}</tr>`).join('')
	}

	function invalidateProducts() {
		console.log(document.getElementById('productsTable').innerHTML = `
			<tbody>
			<tr>
				<th><b>Name</b></th>
				<th><b>Item Price</b></th>
				<th><b>Quantity</b></th>
				<th><b>Price</b></th>
			</tr>
				${mapProductsToString(products)}
				${!products.length ? '<th colspan="4">- Nothing -</th>' : ''}
			<tr>
				<th colspan="3" id="total"><b>Total</b></th>
				<th>$${(products.reduce((p, c) => p + c.price, 0) / 100).toFixed(2)}</th>
			</tr>
			</tbody>
		`)
	}

	const products = [
		new Product('Book', 3000, 10),
		new Product('Elantra', 2200000, 2),
		new Product('Tucson', 3500000, 1),
		new Product('Sausage', 1000, 20),
		new Product('Laptop', 300000, 5),
		new Product('Phone', 100000, 10),
		new Product('Table', 20000, 7),
		new Product('Coffee', 500, 40),
		new Product('Cushion', 12000, 10),
		new Product('Display', 200000, 10),
	]
	invalidateProducts()

	document.getElementById('addForm').onsubmit = (e) => {
		e.preventDefault()
		const name = document.getElementById('newName')
		const itemPrice = document.getElementById('newItemPrice')
		const quantity = document.getElementById('newQuantity')
		products.push(new Product(name.value, +itemPrice.value * 100, quantity.value))
		invalidateProducts()
		name.value = ''
		itemPrice.value = ''
		quantity.value = ''
	}
	document.getElementById('clearAll').onclick = (e) => {
		e.preventDefault()
		while (products.length) {
			products.pop()
		}
		invalidateProducts()
	}

}
