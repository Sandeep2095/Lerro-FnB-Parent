import React from 'react';

const Experience = ({ title, para, button }) => {
	return (
		<div>
			<div class='container-fluid why-2'>
				<div class='container h-100'>
					<div class='row'>
						<div class='col-md-2'></div>
						<div class='col-md-8 text-center'>
							<h2
								class='text-center ml-1 text-white mt-20'
								style={{ fontFamily: 'Prague' }}
							>
								EXPERIENCE OUR CONCEPTS
							</h2>
							<p
								style={{
									lineHeight: '40px',
									letterSpacing: '1px',
									color: 'white',
									fontSize: '16px',
									fontFamily: ('Montserrat', 'sans-serif'),
								}}
							>
								Moving beyond just offering Indian, international, and fusion cuisines,
								our restaurants create magic with our special events, mood-setting
								music, Insta-worthy aesthetics, and tongue-tingling signatures! Head
								over to experience it for yourself!{' '}
							</p>
							<a
								class='btn mtop'
								style={{
									backgroundColor: '#fbac29',
									borderRadius: '0px',
									margin: '30px 10px 80px 10px',
									boxShadow:
										'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
								}}
								href='/brands'
							>
								KNOW MORE
							</a>
						</div>
						<div class='col-md-2'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;
