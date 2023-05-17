import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const navLinks = [
		{
			title: 'Home',
			link: '',
		},
		{
			title: 'our team',
			link: 'ourteam',
		},
		{
			title: 'brands',
			link: 'brands',
		},
		{
			title: 'about us',
			link: 'aboutus',
		},
		{
			title: 'careers',
			link: 'careers',
		},
		{
			title: 'contact',
			link: 'contact',
		},
		{
			title: 'franchise',
			link: 'franchise',
		},
	];

	return (
		<nav className='custom-nav-class navbar fixed-top navbar-expand-lg navbar-dark p-md-3'>
			<div className='container'>
				<Link to={'/'} className='navbar-brand'>
					LerroF&B
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarNav'>
					<div className='mx-auto'></div>
					<ul style={{ alignItems: 'center' }} className='navbar-nav'>
						{navLinks.map((nav) => (
							<li
								className={`nav-item ${nav.title === 'franchise' && 'franchise-link'}`}
							>
								<Link to={`/${nav.link}`} className='nav-link text-white'>
									{nav.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
