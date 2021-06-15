import React, {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import {useParams, Link} from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
	const {id} = useParams()
	const [loading, setLoading] = useState(false)
	const [cocktail, setCocktail] = useState(null)

	useEffect(() => {
		setLoading(true)
		const getCocktails = async () => {
			try {
				const response = await fetch(`${url}${id}`)
				const data = await response.json()
				console.log(data.drinks)
				if (data.drinks) {
				} else {
					setCocktail(null)
				}
				setLoading(false)
			} catch (error) {
				console.log(error)
				setLoading(false)
			}
		}
		getCocktails()
	}, [id])

	return (
		<div>
			<h2>{id} </h2>
		</div>
	)
}

export default SingleCocktail
