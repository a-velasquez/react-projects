import React, {useState, useRef, useEffect} from 'react'
import {useGlobalContext} from './context'

const Submenu = () => {
	const {
		isSubmenuOpen,
		location,
		page: {page, links}
	} = useGlobalContext()
	const container = useRef(null)

	useEffect(() => {
		const submenu = container.current
		console.log(submenu)
		const {center, bottom} = location
		submenu.style.left = `${center}px`
		submenu.style.top = `${bottom}px`
	}, [location])

	return (
		<aside
			className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
			ref={container}
		>
			<section>
				<h4>section title</h4>
				<div className='submenu-center'>links</div>
			</section>
		</aside>
	)
}

export default Submenu
