import React from 'react';
import Banner from '../components/shared/banner/Banner';
import OurStory from '../assets/new-about-us-1.jpg';
import image1 from '../assets/ffabout.png';
import image2 from '../assets/director-img.jpg';
import image3 from '../assets/aboutFamily.jpg';

import Card from '../components/shared/card/Card';

const Aboutus = () => {
	return (
		<div className='aboutus-container'>
			<Banner title={'OUR STORY'} bgImg={OurStory} />

			<div className='container-fluid mt-5'>
				<div className='container'>
					<h2 className='text-center ml-1' style={{ fontFamily: 'Prague' }}>
						ONCE UPON <b style={{ color: '#fbaa1a' }}>AN AFFAIRE</b>
					</h2>
					<br />
					<div className='row'>
						<div className='col-md-7'>
							<p className='text-justify banner-content'>
								{' '}
								First Fiddle Restaurants, formerly known as The Lazeez Affaire Group,
								was conceived in the year 1999 by Priyank Sukhija and Y.P. Ashok. Since
								then, the company has made a name for itself as innovators and leaders
								in the industry. Starting with their first brand, Lazeez Affaire,
								Priyank popularised the conceptof fine dining at a time when the same
								was unheard of. Following its success, First Fiddle introduced the
								concept of casual dining with brands such as Warehouse Cafe, Tamasha,
								Lord of The Drinks, Flying Saucer Cafe, and more, storming Delhi’s
								nightlife. WIth each new brand, First Fiddle brought a concept that was
								never experienced or heard of before, such as Plum by Bent Chair, Miso
								Sexy, Diablo, and more. The restaurants are spread all over India in
								major metropolitan cities like New Delhi, Mumbai, Pune, Lucknow and
								more, with plans to expand internationally soon.
								<br />
								<br />
							</p>
						</div>
						<div className='col-md-5 text-center mb-md-5 mb-4'>
							<img
								alt='about'
								className='aboutimage aboutus-banner-image'
								src={image1}
								style={{
									width: '100%',
									boxShadow:
										'0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
								}}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className='mb-3'>
				<Card
					title={'The Game Changer'}
					para={
						'The company is dedicated to being a game changer in the F&B industry with the introduction of ‘concept’ restaurants. It is committed to catering to the ever-changing cosmopolitan taste of its customers & customer satisfaction is an utmost priority.'
					}
				/>
			</div>
			<div>
				<div className='container my-5'>
					<h2 className='text-center ml-1' style={{ fontFamily: 'Prague' }}>
						THE MAN BEHIND <b style={{ color: '#fbaa1a' }}> THE LERRO</b>
					</h2>
					<br />
					<div className='row'>
						<div className='col-lg-4 text-center mb-4'>
							<img alt='Local' className='priyank-image' src={image2} width='80%' />
						</div>
						<div className='col-lg-8 text-left'>
							<p className='banner-content text-justify'>
								{' '}
								With over 30 restaurants in 23 years under his belt, the prolific
								restaurateur (__________) has become somewhat of a legend in the
								industry, starting his journey at a mere age of 19. Priyank was the
								first in his family to venture into business, hailing from a family of
								lawyers, going on to create an empire in F&amp;B. Following his heart
								and tongue through his F&amp;B career, Priyank has successfully created
								some of the most talked-about brands in the industry - Diablo, Lord of
								the Drinks, Plum by Bent Chair, Lazeez Affaire, Tamasha, The Flying
								Saucer Cafe, and many more.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='container-fluid'>
				<div className='container mb-5'>
					<h2 className='text-center ml-1' style={{ fontFamily: 'Prague' }}>
						JOIN <b style={{ color: '#fbaa1a' }}>OUR FAMILY</b>
					</h2>
					<br />
					<div className='row'>
						<div className='col-md-8'>
							<p className='text-justify banner-content'>
								At First Fiddle Restaurants, we leave no stone unturned to provide the
								most desirable experience across markets and restaurants. Serving over
								five lakh customers monthly with 15+ brands and 35+ restaurants, our
								brands like Diablo, Plum by Bent Chair, Dragonfly Experience, Tamasha,
								Daddy, JLWA, and more have revolutionized the experience of dining &amp;
								nightlife for everyone. Exploring a franchise with First Fiddle
								Restaurants provides you with a large existing customer base besides the
								added advantage of nation-wide recognition.
							</p>
							<button
								className='btn mbottomp btn mtop '
								style={{
									boxShadow:
										'0 4px 8px 0 rgba(0, 0, 0, 0.2) 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
									backgroundColor: '#fbac29',
									margin: '20px',
								}}
							>
								FRANCHISE WITH US
							</button>
						</div>
						<div className='col-md-4 text-center'>
							<img alt='about' className='img-fluid banner-image' src={image3} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aboutus;
