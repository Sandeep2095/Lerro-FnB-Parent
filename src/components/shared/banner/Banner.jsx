import React from 'react';
import './Banner.css';

const Banner = ({ title, bgImg }) => {
	return (
		<div className='position-relative'>
			<img
				style={{ minHeight: '700px', objectFit: 'cover' }}
				className='w-100 d-block'
				src={bgImg}
				alt='banner'
			/>
			<div className='d-flex justify-content-center w-100 position-absolute top-50'>
				<h1
					style={{
						color: '#fff',
						letterSpacing: '6px',
						textTransform: 'uppercase',
						fontSize: '4rem',
						fontFamily: 'Prague',
					}}
					className='text-center fs-1 fw-bold'
				>
					{title}
				</h1>
			</div>
		</div>
	);
};

export default Banner;
