export const state = () => ({
	user: undefined,
	site: {},
	cart: {
		total: 0,
		vat: 0,
		quantity: 0,
		products: [],
	},
	season: 1,
})

export const getters = {
	site: (state: { site: any }) => state.site,
	user: (state: { user: UserInfo | undefined }) => state.user,
	cart: (state: { cart: CartData }) => state.cart,
	season: (state: { season: number }) => state.season,
}

export const actions = {
	addProduct({ commit, state }: any, newProduct: ProductCart) {
		const products = [...state.cart.products]
		const productIndex = products.findIndex((p) => p.cartId === newProduct.cartId)

		if (productIndex !== -1) {
			commit('updateProductQuantity', {
				index: productIndex,
				quantity: newProduct.quantity,
			})
		} else {
			products.push(newProduct)
		}

		commit('updateCart', {
			...state.cart,
			products: [...products],
		})
	},
}

export const mutations = {
	site: (state: { site: object }, data: object) => (state.site = data),
	user: (state: { user: UserInfo | undefined }, data: UserInfo | undefined) => {
		state.user = data
		if (data !== undefined) {
			localStorage.setItem('user', JSON.stringify(data))
		} else {
			localStorage.removeItem('user')
		}
	},
	cart: (state: { cart: CartData }, data: CartData) => (state.cart = data),
	updateCart: (state: { cart: CartData }, newCart: CartData) => {
		let total = 0
		let vat = 0
		let quantity = 0

		newCart.products.forEach((element, index) => {
			const productQty: number = Number(element.quantity)
			const productTotal: number = Number(element.priceUsed) * productQty
			const productVat: number = (productTotal * Number(element.vat)) / 100

			newCart.products[index].priceTotal = productTotal
			newCart.products[index].priceVat = productVat

			total = total + productTotal
			vat = vat + productVat
			quantity = quantity + productQty
		})

		state.cart = {
			...newCart,
			total,
			vat,
			quantity,
		}

		localStorage.setItem('cart', JSON.stringify(state.cart))
	},
	updateProductQuantity: (state: { cart: CartData }, data: { index: number; quantity: number }) => {
		const products = [...state.cart.products]
		products[data.index].quantity = products[data.index].quantity + data.quantity

		state.cart = {
			...state.cart,
			products: [...products],
		}
	},
	season: (state: { season: number }, data: number) => (state.season = data),
	logout: (state: { user: UserInfo | undefined }) => {
		state.user = undefined
		localStorage.removeItem('user')
		localStorage.removeItem('cart')
	},
}
