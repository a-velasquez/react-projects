import React, {useState, useContext, useReducer, useEffect} from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const intialState = {
	loading: false,
	cart: cartItems,
	total: 0,
	amount: 0
}

const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, intialState)

	const clearCart = () => {
		// action being dipatched to provider
		dispatch({type: 'CLEAR_CART'})
	}

	const removeItem = (id) => {
		dispatch({type: 'REMOVE_ITEM', payload: id})
	}
	const increaseItem = (id) => {
		dispatch({type: 'INCREASE_ITEM', payload: id})
	}
	const decreaseItem = (id) => {
		dispatch({type: 'DECREASE_ITEM', payload: id})
	}

	const fetchData = async () => {
		dispatch({type: 'LOADING'})
		const response = await fetch(url)
		const cart = await response.json()
		dispatch({type: 'DISPLAY_ITEMS', payload: cart})
	}

	const toggleAmount = (id, type) => {
		dispatch({type: 'TOGGLE_AMOUNT', payload: {id, type}})
	}

	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		dispatch({type: 'GET_TOTALS'})
	}, [state.cart])

	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				removeItem,
				increaseItem,
				decreaseItem,
				toggleAmount
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext)
}

export {AppContext, AppProvider}
