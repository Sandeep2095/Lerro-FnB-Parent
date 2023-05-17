import React from 'react';

const Faqs = () => {
	return (
		<div>
			<div>
				<div class='faq-1'>
					<h1 class='text-center faq-2 ml-1'>
						<b>FAQ's: </b> Frequently Asked Questions:-
					</h1>
				</div>
				<div
					class='container faq-question'
					style={{ padding: '60px 0px', margin: '0px 175px' }}
				>
					<div class='row'>
						<div class='col-lg-6'>
							<button
								class='accordion'
								style={{ fontFamily: ('Montserrat', 'sans-serif') }}
							>
								<img alt='check' class='check' src={check} />
								Can you tell us about First Fiddle Restaurant?
							</button>
							<div class='panel'>
								<p class='answers'>
									First Fiddle is one of the world’s largest F &amp; B Company in the
									casual dining sector, serving over 5 lakhs of customers monthly across
									25+ outlets. The company has also been lauded with endless numbers of
									awards by ‘Times Nightlife’, ‘GQ’, ‘Indian Restaurant Awards’- to name
									a few.
								</p>
							</div>
							<button
								class='accordion'
								style={{ fontFamily: ('Montserrat', 'sans-serif') }}
							>
								<img alt='check' class='check' src={check} />
								What will be my investment, if i wish to acquire a First Fiddle
								Franchise?
							</button>
							<div class='panel'>
								<p class='answers'>
									If you wish to acquire a First Fiddle Restaurant Franchise, then a
									minimum investment of ₹2 Cr is mandatory to start with depending upon
									how much you want to increase it further.
								</p>
							</div>
							<button
								class='accordion'
								style={{ fontFamily: ('Montserrat', 'sans-serif') }}
							>
								<img alt='check' class='check' src={check} />
								How long will it take to set up the Store and The Kitchen?
							</button>
							<div class='panel'>
								<p class='answers'>
									Generally, it takes approx. 3-4 months to set up the store and the
									Kitchen depending upon various circumstances. Once, it is set up, we
									are good to go running the place.
								</p>
							</div>
						</div>
						<div class='col-lg-6'>
							<button
								class='accordion'
								style={{ fontFamily: ('Montserrat', 'sans-serif') }}
							>
								<img alt='check' class='check' src={check} />
								What are my monthly expenses?
							</button>
							<div class='panel'>
								<p class='answers'>
									Your monthly expenses would depend upon the following factors, like-
								</p>
								<p class='answers'>
									1. Location
									<br /> 2. Target Group (TG)
									<br /> 3. Market Group
								</p>
								<p class='answers'>
									Depending on all of these factors, an estimate can be made accordingly.
								</p>
							</div>
							<button
								class='accordion'
								style={{ fontFamily: ('Montserrat', 'sans-serif') }}
							>
								<img alt='check' class='check' src={check} />
								Will you help us in training our managers and employees?
							</button>
							<div class='panel'>
								<p class='answers'>
									Yes, definitely. Training of managers and all the employees will be
									done from our end.
								</p>
							</div>
							<button
								class='accordion'
								style={{ fontFamily: ('Montserrat', 'sans-serif') }}
							>
								<img alt='check' class='check' src={check} />
								What about Promotion &amp; Marketing? Will the company help us?
							</button>
							<div class='panel'>
								<p class='answers'>
									Surely, we take full responsibility for the marketing and promotions of
									the place. We have a designated team for the stated work, who will help
									you out with this.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faqs;
