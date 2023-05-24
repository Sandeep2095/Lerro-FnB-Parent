import React from 'react';
import Banner from '../components/shared/banner/Banner';
import Career from '../assets/CONTACT-US.jpg';

const Careers = () => {
	return (
		<div className='careers-container'>
			<Banner title={'Careers'} bgImg={Career} />

			<section>
				<div class='container'>
					<div class='row text-justify mt-4'>
						<div class='col-md-12'>
							<h2 class='text-center ml-1' style={{ fontFamily: 'Prague' }}>
								COME WORK <b style={{ color: '#fbaa1a' }}>WITH US!</b>
							</h2>
							<br />
							<p class='banner-content'>
								First Fiddle is all about innovation, creativity and understanding
								ever-changing consumer needs. The work environment enables both
								professional and personal growth.{' '}
							</p>
						</div>
						<div class='col-md-12'>
							<h2 class='text-center ml-1' style={{ fontFamily: 'Prague' }}>
								HOW TO <b style={{ color: '#fbaa1a' }}>APPLY!</b>
							</h2>
							<br />
							<p class='banner-content'>
								First Fiddle is all about innovation, creativity and understanding
								ever-changing consumer needs. The work environment enables both
								professional and personal growth.{' '}
							</p>
						</div>
					</div>
				</div>
			</section>

			<div>
				<div class='container-fluid careers-style'>
					<div class='container-fluid mt-4'>
						<div class='row'>
							<div class='col-md-6 col-sm-12 car_step'>
								<div class='row mt-3'>
									<div class='col-md-12 col-sm-12'>
										<h5>
											<strong className='career-strong'>Steep learning curve</strong>
										</h5>
										<p class='banner-content'>
											Talent and merit are rewarded at First Fiddle Restaurants. Add value,
											and see yourself grow!{' '}
										</p>
										<br />
									</div>
									<div class='col-md-12 col-sm-12'>
										<h5>
											<strong className='career-strong'>Growth opportunities</strong>
										</h5>
										<p class='banner-content'>
											{' '}
											Talent and merit are rewarded at First Fiddle Restaurants. Add value,
											and see yourself grow!{' '}
										</p>
										<br />
									</div>
									<div class='col-md-12 col-sm-12'>
										<h5>
											<strong className='career-strong'>Exciting work environment</strong>
										</h5>
										<p class='banner-content'>
											{' '}
											Work in a highly motivated environment with talented people. A
											positive work environment, ensures a productive and happy you.{' '}
										</p>
										<br />
									</div>
								</div>
							</div>

							<div class='col-md-6 col-sm-12 my-3'>
								<div
									class='card'
									style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
								>
									<div class='card-body'>
										<h5 class='card-title'>Share your Details</h5>
										<form autocomplete='off' name='form' novalidate='' />
										<div class='form-group'>
											<label for='name'>Your Name:*</label>
											<input
												class='form-control'
												formcontrolname='name'
												id='name'
												name='name'
												placeholder='Name'
												type='text'
											/>
											<div class='invalid-feedback'>
												<div>Name is required</div>
											</div>
										</div>
										<div class='form-group'>
											<label for='email'>Your Email:*</label>
											<input
												class='form-control '
												formcontrolname='email'
												id='email'
												name='email'
												placeholder='Email'
												type='text'
											/>
										</div>
										<div class='form-group'>
											<label for='email'>Your Phone:*</label>
											<input
												class='form-control '
												formcontrolname='mobile'
												id='mobile'
												name='mobile'
												placeholder='Phone'
												type='number'
											/>
											<div class='invalid-feedback'>
												<div>Mobile is required</div>
												<div> Please, Enter 10 digit Mobile Number. </div>
											</div>
										</div>
										<div class='form-group'>
											<label for='email'>Your Message:*</label>
											<textarea
												aria-invalid='false'
												class='form-control '
												formcontrolname='message'
												id='message'
												name='message'
												placeholder='Message'
											></textarea>
											<div class='invalid-feedback'>
												<div>Message is required</div>
											</div>
										</div>
										<br />
										<button class='btn' type='submit' disabled=''>
											Submit
										</button>{' '}
										<br />
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

export default Careers;
