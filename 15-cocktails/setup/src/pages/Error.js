import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
	return (
		<section className='error-page section'>
			<div className='error-container'>
				<h1>Oops, you've hit a dead end</h1>
				<Link to='/' className='btn-primary'>
					back to home page
				</Link>
			</div>
		</section>
	)
}

export default Error
