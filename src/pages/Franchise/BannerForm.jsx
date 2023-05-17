import React from 'react';

const BannerForm = () => {
	return (
		<div>
			<section>
				<div className='franchise-top-banner'>
					<Banner bgImg={img} className='banner-div' />

					<div class='franchise-top-form'>
						<div class='row'>
							<div class='col-6 col-12 ml-auto'>
								<div
									class='modal-content '
									id='inquiry'
									style={{ background: '#fbb029', padding: '10px' }}
								>
									<div class='modal-header text-center' style={{ display: 'block' }}>
										<h4 class='modal-title' style={{ color: 'white' }}>
											<b>Inquiry Form</b>
										</h4>
									</div>
									<div>
										<p
											class='text-center form-line banner-content'
											style={{ lineHeight: '15px' }}
										>
											For more information about how you can become the part of First
											Fiddle Restaurants, submit your information below and the Franchise
											Manager will get in touch with you.
										</p>
									</div>
									<form autocomplete='off' name='form' novalidate=''>
										<div class='row'>
											<div class='form-group col-lg-6'>
												<b>
													<h6>Name*</h6>
												</b>
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
											<div class='form-group col-lg-6'>
												<b>
													<h6>Mobile*</h6>
												</b>
												<input
													class='form-control ng-untouched ng-pristine ng-invalid'
													formcontrolname='mobile'
													id='mobile'
													name='mobile'
													placeholder='Mobile'
													type='number'
												/>
												<div class='invalid-feedback'>
													<div>Mobile is required</div>
													<div> Please, Enter 10 digit Mobile Number. </div>
												</div>
											</div>
										</div>
										<div class='row'>
											<div class='form-group col-lg-6'>
												<b>
													<h6>Email*</h6>
												</b>
												<input
													class='form-control ng-untouched ng-pristine ng-invalid'
													formcontrolname='email'
													id='email'
													name='email'
													placeholder='Email'
													type='text'
													ng-reflect-name='email'
												/>
											</div>
											<div class='form-group col-lg-6'>
												<b>
													<h6>Business Location*</h6>
												</b>
												<input
													class='form-control ng-untouched ng-pristine ng-invalid'
													formcontrolname='business_location'
													name='business_location'
													placeholder='Business Location'
													ng-reflect-name='business_location'
													ng-reflect-klass='form-control'
													ng-reflect-ng-class='[object Object]'
												/>
												<div class='invalid-feedback'>
													<div>Business Location is required</div>
												</div>
											</div>
										</div>
										<div class='row'>
											<div class='form-group col-lg-6'>
												<b>
													<h6>Investment Budget*</h6>
												</b>
												<select
													class='custom-select ng-untouched ng-pristine ng-invalid'
													formcontrolname='investment_budget'
													name='investment_budget'
												>
													<option disabled='' value='' ng-reflect-value=''>
														Investment Budget
													</option>
													<option value='1 Cr to 2 Cr' ng-reflect-value='1 Cr to 2 Cr'>
														1 Cr to 2 Cr
													</option>
													<option value='2 Cr to 3 Cr' ng-reflect-value='2 Cr to 3 Cr'>
														2 Cr to 3 Cr
													</option>
													<option value='3 Cr to 4 Cr' ng-reflect-value='3 Cr to 4 Cr'>
														3 Cr to 4 Cr
													</option>
													<option value='4 Cr to Above' ng-reflect-value='4 Cr to Above'>
														4 Cr to Above
													</option>
												</select>
												<div class='invalid-feedback '>
													<div>Investment Budget is required</div>
												</div>
											</div>
											<div class='form-group col-lg-6'>
												<b>
													<h6>Brand*</h6>
												</b>
												<select
													class='custom-select ng-untouched ng-pristine ng-invalid'
													formcontrolname='all_brands'
													name='all_brands'
													ng-reflect-name='all_brands'
													ng-reflect-klass='custom-select'
													ng-reflect-ng-class='[object Object]'
												>
													<option disabled='' value='' ng-reflect-value=''>
														Select a Brand
													</option>
													<option
														value='Lord of The Drinks'
														ng-reflect-value='Lord of The Drinks'
													>
														Lord of The Drinks
													</option>
													<option
														value='Dragonfly Experience'
														ng-reflect-value='Dragonfly Experience'
													>
														Dragonfly Experience
													</option>
													<option
														value='Plum by Bentchair'
														ng-reflect-value='Plum by Bentchair'
													>
														Plum by Bentchair
													</option>
													<option
														value='Daddy Everyday Bar'
														ng-reflect-value='Daddy Everyday Bar'
													>
														Daddy Everyday Bar
													</option>
													<option value='JLWA Cafe' ng-reflect-value='JLWA Cafe'>
														JLWA Cafe
													</option>
													<option
														value='The Flying Saucer Cafe'
														ng-reflect-value='The Flying Saucer Cafe'
													>
														The Flying Saucer Cafe
													</option>
													<option
														value='Rocky Star Cocktail Bar'
														ng-reflect-value='Rocky Star Cocktail Bar'
													>
														Rocky Star Cocktail Bar
													</option>
													<option
														value='TAMASHA Everyday Bar'
														ng-reflect-value='TAMASHA Everyday Bar'
													>
														TAMASHA Everyday Bar
													</option>
													<option value='Lazeez Affaire' ng-reflect-value='Lazeez Affaire'>
														Lazeez Affaire
													</option>
													<option value='Warehouse Cafe' ng-reflect-value='Warehouse Cafe'>
														Warehouse Cafe
													</option>
													<option value='Openhouse Cafe' ng-reflect-value='Openhouse Cafe'>
														Openhouse Cafe
													</option>
													<option value='Diablo' ng-reflect-value='Diablo'>
														Diablo
													</option>
													<option value='Miso Sexy' ng-reflect-value='Miso Sexy'>
														Miso Sexy
													</option>
													<option
														value='Lies by Bentchair'
														ng-reflect-value='Lies by Bentchair'
													>
														Lies by Bentchair
													</option>
												</select>
												<div class='invalid-feedback '>
													<div>Brand name is required</div>
												</div>
											</div>
										</div>
										<div class='form-group'>
											<b>
												<h6>Message*</h6>
											</b>
											<textarea
												aria-invalid='false'
												class='form-control ng-untouched ng-pristine ng-invalid'
												formcontrolname='message'
												id='message'
												name='message'
												placeholder='Message'
												ng-reflect-name='message'
												ng-reflect-klass='form-control'
												ng-reflect-ng-class='[object Object]'
											></textarea>
											<div class='invalid-feedback'>
												<div>Message is required</div>
											</div>
										</div>
										{/* <h5 class='text-success'></h5> */}
										<div class='text-center'>
											<button
												class='btn mbottomp'
												style={{
													backgroundColor: '#000000',
													borderColor: '#000000',
													width: '150px',
												}}
												type='submit'
												disabled=''
											>
												SUBMIT FORM
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default BannerForm;
