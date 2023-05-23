import React from 'react';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Faqs = () => {
	return (
		<div>
			<div class='faq-1'>
				<h1 class='text-center faq-2 ml-1'>
					<b>FAQ's: </b> Frequently Asked Questions:-
				</h1>
			</div>
			<div
				class='container faq-question'
				style={{ padding: '60px 0px', fontFamily: 'Montserrat' }}
			>
				<div class='row'>
					<div class='col-lg-6'>
						<div class='accordion' id='accordionExample'>
							<div class='accordion-item'>
								<h2 class='accordion-header'>
									<button
										class='accordion-button'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseOne'
										aria-expanded='true'
										aria-controls='collapseOne'
									>
										<CheckCircleIcon style={{ color: '#fcb21b', marginRight: '10px' }} />
										Can you tell us about First Fiddle Restaurant?
									</button>
								</h2>
								<div
									id='collapseOne'
									class='accordion-collapse collapse show'
									data-bs-parent='#accordionExample'
								>
									<div class='accordion-body'>
										First Fiddle is one of the world’s largest F & B Company in the casual
										dining sector, serving over 5 lakhs of customers monthly across 25+
										outlets. The company has also been lauded with endless numbers of
										awards by ‘Times Nightlife’, ‘GQ’, ‘Indian Restaurant Awards’- to name
										a few.
									</div>
								</div>
							</div>
							<div class='accordion-item'>
								<h2 class='accordion-header'>
									<button
										class='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseTwo'
										aria-expanded='false'
										aria-controls='collapseTwo'
									>
										<CheckCircleIcon style={{ color: '#fcb21b', marginRight: '10px' }} />
										What will be my investment, if i wish to acquire a First Fiddle
										Franchise?
									</button>
								</h2>
								<div
									id='collapseTwo'
									class='accordion-collapse collapse'
									data-bs-parent='#accordionExample'
								>
									<div class='accordion-body'>
										If you wish to acquire a First Fiddle Restaurant Franchise, then a
										minimum investment of ₹2 Cr is mandatory to start with depending upon
										how much you want to increase it further.
									</div>
								</div>
							</div>
							<div class='accordion-item'>
								<h2 class='accordion-header'>
									<button
										class='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseThree'
										aria-expanded='false'
										aria-controls='collapseThree'
									>
										<CheckCircleIcon style={{ color: '#fcb21b', marginRight: '10px' }} />
										How long will it take to set up the Store and The Kitchen?
									</button>
								</h2>
								<div
									id='collapseThree'
									class='accordion-collapse collapse'
									data-bs-parent='#accordionExample'
								>
									<div class='accordion-body'>
										Generally, it takes approx. 3-4 months to set up the store and the
										Kitchen depending upon various circumstances. Once, it is set up, we
										are good to go running the place
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class='col-lg-6'>
						<div class='accordion' id='accordionExample'>
							<div class='accordion-item'>
								<h2 class='accordion-header'>
									<button
										class='accordion-button'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseFour'
										aria-expanded='true'
										aria-controls='collapseFour'
									>
										<CheckCircleIcon style={{ color: '#fcb21b', marginRight: '10px' }} />{' '}
										What are my monthly expenses?
									</button>
								</h2>
								<div
									id='collapseFour'
									class='accordion-collapse collapse show'
									data-bs-parent='#accordionExample'
								>
									<div class='accordion-body'>
										Your monthly expenses would depend upon the following factors, like-{' '}
										<br />
										1. Location <br /> 2. Target Group (TG) <br /> 3. Market Group <br />
										Depending on all of these factors, an estimate can be made
										accordingly.
									</div>
								</div>
							</div>
							<div class='accordion-item'>
								<h2 class='accordion-header'>
									<button
										class='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseFive'
										aria-expanded='false'
										aria-controls='collapseFive'
									>
										<CheckCircleIcon style={{ color: '#fcb21b', marginRight: '10px' }} />
										Will you help us in training our managers and employees?
									</button>
								</h2>
								<div
									id='collapseFive'
									class='accordion-collapse collapse'
									data-bs-parent='#accordionExample'
								>
									<div class='accordion-body'>
										Yes, definitely. Training of managers and all the employees will be
										done from our end.
									</div>
								</div>
							</div>
							<div class='accordion-item'>
								<h2 class='accordion-header'>
									<button
										class='accordion-button collapsed'
										type='button'
										data-bs-toggle='collapse'
										data-bs-target='#collapseSix'
										aria-expanded='false'
										aria-controls='collapseSix'
									>
										<CheckCircleIcon style={{ color: '#fcb21b', marginRight: '10px' }} />
										What about Promotion & Marketing? Will the company help us?
									</button>
								</h2>
								<div
									id='collapseSix'
									class='accordion-collapse collapse'
									data-bs-parent='#accordionExample'
								>
									<div class='accordion-body'>
										Surely, we take full responsibility for the marketing and promotions
										of the place. We have a designated team for the stated work, who will
										help you out with this.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faqs;
