import React from 'react';

const OurService = () => {
	return (
		<div>
			{' '}
			<div
				class='container-fluid'
				style={{
					backgroundColor: '#22222c',
				}}
			>
				<div class='container' style={{ backgroundColor: '#22222c' }}>
					<div class='row'>
						<div class='col-lg-1'></div>
						<div class='col-lg-5' style={{ padding: '60px' }}>
							<div class='row'>
								<h1 class='our-services ml-1'>
									{' '}
									OUR
									<br />
									SERVICES
								</h1>
								<p class='providing-service banner-content'>
									Providing the ace of all the trades and progressing with proficiency of
									running a restaurant, the team at First Fiddle Restaurants believes in
									360 (degree symbol) excellence.
								</p>
							</div>
						</div>
						<div class='col-lg-5 ml-1' style={{ padding: '60px' }}>
							<div class='row'>
								<h3
									style={{
										fontFamily: ('Merriweather', 'serif'),
										letterSpacing: '2px',
										fontSize: '18px',
										color: '#feaf00',
									}}
								>
									<b>SERVICES OFFERING BY FIRST FIDDLE</b>
								</h3>
								<ul class='service-points' style={{ fontFamily: 'Pargue' }}>
									<b>
										<li>
											<span class='bullets'>Brand designing and set-up</span>
										</li>
										<li>
											<span class='bullets'>100% transparency &amp; online support</span>
										</li>
										<li>
											<span class='bullets'>Real-Time Sales Report Access</span>
										</li>
										<li>
											<span class='bullets'>Product and Business Training</span>
										</li>
										<li>
											<span class='bullets'>Provision of a complete in-house team</span>
										</li>
										<li>
											<span class='bullets'>Vendor finalizations and contracts</span>
										</li>
										<li>
											<span class='bullets'>Online ood delivery portals contracts</span>
										</li>
										<li>
											<span class='bullets'>Social Media &amp; Digital Marketing</span>
										</li>
									</b>
								</ul>
							</div>
						</div>
						<div class='col-lg-1'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurService;
