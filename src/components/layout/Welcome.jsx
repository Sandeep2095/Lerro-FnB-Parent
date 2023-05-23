import React from 'react';
import image1 from '../../assets/welcome.jpg';

const Welcome = () => {
	return (
		<div>
			<div className='container-fluid mt-5 mb-5 h-100'>
				<div className='container'>
					<h2
						className='text-center m-1'
						style={{ letterSpacing: '3px', fontFamily: 'Prague', fontSize: '2.1rem' }}
					>
						WELCOME TO{' '}
						<b style={{ color: '#fbaa1a', letterSpacing: '3px' }}>LERRO F&B</b>{' '}
					</h2>
					<div className='row mt-5'>
						<div className='col-md-7'>
							<p className='banner-content'>
								First Fiddle Restaurants, one of India’s most prominent F&B companies in
								the casual dining sector, is headed by Priyank Sukhija. Starting the
								journey from Lazeez Affair in 1999 to Miso Sexy and Bougie in 2022, we
								have created wave after wave in the industry with over 30+ restaurants,
								brands, and franchises across India.
							</p>
							<div class='row justify-content-around mt-0'>
								<div class='col-md-8 text-center welcome-btn'>
									<a
										href='#!'
										target='_blank'
										rel='noreferrer'
										class='btn wbtn '
										style={{ color: '#fff' }}
									>
										JOIN THE JOURNEY
									</a>
								</div>
							</div>
						</div>
						<div className='col-md-5 text-center'>
							<img
								src={image1}
								alt='wel_img'
								style={{
									boxShadow:
										'0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
								}}
								className='img-fluid welcome-banner-image'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
