import React from 'react';

const CountCards = () => {
	return (
		<div>
			<div class='container-fluid' style={{ backgroundColor: '#ececec' }}>
				<div class='container' style={{ backgroundColor: '#ececec' }}>
					<div class='row fofo'>
						<div class='col-lg-4 text-center'>
							<h1
								class='text-left'
								style={{
									fontFamily: ('Montserrat', 'sans-serif'),
									fontSize: '130px',
									color: '#e1e1e1',
								}}
							>
								<b>01</b>
							</h1>
							<h5 class='text-left foco ml-1'>
								<b>Franchise own and Franchise Operated (FOFO) </b>
							</h5>
							<p class='text-left banner-content'>
								The franchise owner will have the complete ownership and responsibility
								of maintaining all operational activities from set up of interiors to
								daily operations. First Fiddle Restaurants will provide full support on
								how to manage the operations and also have regular audits to check if
								the company processes are followed.
							</p>
						</div>
						<div class='col-lg-4 text-center'>
							<h1
								class='text-left'
								style={{
									fontFamily: ('Montserrat', 'sans-serif'),
									fontSize: '130px',
									color: '#e1e1e1',
								}}
							>
								<b>02</b>
							</h1>
							<h5 class='text-left foco ml-1'>
								<b>Franchise own company-operated (FOCO)</b>
							</h5>
							<p class='text-left banner-content'>
								The franchise owner and First Fiddle Restaurant together work together
								where the brand guidelines are maintained. The company will manage the
								marketing and provide with all the help that is required starting from
								set up of interiors to daily operations.
							</p>
						</div>
						<div class='col-lg-4 text-center'>
							<h1
								class='text-left'
								style={{
									fontFamily: ('Montserrat', 'sans-serif'),
									fontSize: '130px',
									color: '#e1e1e1',
								}}
							>
								<b>03</b>
							</h1>
							<h5 class='text-left foco ml-1'>
								<b>Direct Investment</b>
							</h5>
							<p class='text-left direct-investment banner-content'>
								In Direct Investment, you acquire a lasting interest in terms of shares
								of the brand you choose to be associated with First Fiddle Restaurants.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountCards;
