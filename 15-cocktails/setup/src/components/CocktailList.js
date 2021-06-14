import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import {useGlobalContext} from '../context'

const CocktailList = () => {
	const {loading, CocktailList} = useGlobalContext()

	if (loading) {
		return <Loading />
	}
	return (
		<div>
			<h2>cocktail list component</h2>
		</div>
	)
}

export default CocktailList
