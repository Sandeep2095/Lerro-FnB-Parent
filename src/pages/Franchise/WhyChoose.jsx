import React from 'react';
import n1 from '../../assets/one.png';
import n2 from '../../assets/two.png';
import n3 from '../../assets/three.png';
import n4 from '../../assets/four.png';

const WhyChoose = () => {
	return (
		<div>
			<div class='container why-choose-4 mb-5'>
				<div class='row'>
					<div class='col-lg-4 why-choose-3'>
						<div class='why-choose text-left'>
							<h2
								class='why-choose-2'
								style={{ fontFamily: ('Montserrat', 'serif'), letterSpacing: '2px' }}
							>
								<b>
									Why to choose <br />a restaurant franchise?
								</b>
							</h2>
						</div>
					</div>
					<div class='col-lg-8 why-choose-points'>
						<div class='row'>
							<div
								className='column text-right'
								style={{ color: 'white', backgroundColor: '#020202' }}
							>
								<img alt='one' class='count' src={n1} />
								<p class='text-left why-choose-content'>
									<b>
										The foodservice industry is a booming industry with an anticipated
										CAGR of 10 percent for the five-year period between 2017 and 2022.
										With such a forecast and expected rise to the industry to a value of
										INR5,52,000 crore by 2022, any investment made in this sector will
										lead to profitable results and higher return.{' '}
									</b>
								</p>
							</div>
							<div
								class='column text-right'
								style={{ color: 'white', backgroundColor: '#020202' }}
							>
								<img alt='two' class='count' src={n2} />
								<p class='text-left why-choose-content '>
									<b>
										By 2022, the Indian food service industry is predicted to have a
										volume of 77 billion transactions which is 28.5 percent increase since
										2017 along with a forecast of 5.1 percent CAGR. With such a great
										expansion rate, the probability of yielding high profits in the
										hospitality sector increases manifolds.{' '}
									</b>
								</p>
							</div>
						</div>
						<div class='row'>
							<div
								class='column text-right'
								style={{ color: 'white', backgroundColor: '#020202' }}
							>
								<img alt='three' class='count' src={n3} />
								<p class='text-left why-choose-content'>
									<b>
										When it comes to the developing world, India’s economy is among the
										fastest-growing and has great potential to be exploited and turn big.
										With many other external forces at work to promote restaurants in
										India, this is a golden time to invest in the Food &amp; Beverage
										industry and make use of the augmentation.{' '}
									</b>
								</p>
							</div>
							<div
								class='column text-right'
								style={{ color: 'white', backgroundColor: '#020202' }}
							>
								<img alt='four' class='count' src={n4} />
								<p class='text-left why-choose-content'>
									<b>
										India has more than 45% of the population under 25 years of age. This
										results in an already existing huge customer base already supporting
										the idea of casual dining as a popular means of socializing. With such
										an opportunity and India being one of the largest global markets,
										investing in foodservice industry becomes the right choice.{' '}
									</b>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChoose;
