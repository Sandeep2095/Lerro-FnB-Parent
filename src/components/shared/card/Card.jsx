import React from 'react';

const Card = ({ title, para, button }) => {
	return (
		<div>
			<div class='container-fluid why-3'>
				<div class='container h-100'>
					<div class='row'>
						<div class='col-md-2'></div>
						<div class='col-md-8 text-center'>
							<h2
								class='text-center ml-1 text-white mt-20'
								style={{ fontFamily: 'Prague' }}
							>
								{title}
							</h2>
							<p
								style={{
									lineHeight: '40px',
									letterSpacing: '1px',
									color: 'white',
									fontSize: '16px',
									fontFamily: ('Montserrat', 'sans-serif'),
									marginBottom: '102px',
								}}
							>
								{para}
							</p>
							{/* <a
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
							</a> */}
						</div>
						<div class='col-md-2'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
