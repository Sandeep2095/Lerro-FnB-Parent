import React from 'react';
import img1 from '../../assets/templogo.jpeg';
import './Footer.css';

const Footer = () => {
	return (
		<div>
			<div>
				<div className='mainFooter'>
					<div className='container-fluid'>
						<div className='row'>
							<div className='col-md-5 col-sm-5'>
								<div>
									<div className='text-center'>
										<a href='#!'>
											<img
												alt='img'
												src={img1}
												style={{ marginTop: '30px', borderRadius: '50%' }}
												width='50%'
												height='250px'
											/>
										</a>
									</div>
								</div>
							</div>
							<div className='col-md-7 col-sm-7'>
								<div>
									<b>
										<h2
											class='ml-1'
											style={{
												fontFamily: 'Prague',
												fontSize: '2rem',
												lineHeight: '50px',
												letterSpacing: '3px',
												color: '#fff',
											}}
										>
											<span style={{ color: '#ffad00' }}>CONTACT</span> US{' '}
										</h2>
									</b>
									<p>
										We're a team focusing on redefining the way the hospitality industry{' '}
										<br />
										works by bringing in concept based restaurants across India. We are
										truly <br /> committed to catering to the ever-changing cosmopolitan
										taste of the <br /> customer and revolutioning the F &amp; B industry!
									</p>
									<div>
										<div className='row'>
											<div class='col-md-6 foot-add'>
												<span>
													<strong>Address</strong>
													<br /> 6, Chanakyapuri Shopping Complex, 48, <br /> Malcha Marg,
													New Delhi 110021{' '}
												</span>
											</div>
											<div class='col-md-6 foot-add'>
												<span>
													<strong>Franchise Enquiry </strong>
													<br />
													Mobile:{' '}
													<a href='tel:09313663486'>
														<b>+91 XXXXXXXXXX</b>
													</a>
													<br /> Email:{' '}
													<a href='mailto:franchise@firstfiddle.in'>
														<b>franchise@lerro.in</b>
													</a>
												</span>
											</div>
										</div>
										<div class='row'>
											<div class='col-md-6 foot-add'>
												<span>
													<strong>HR Enquiry</strong>
													<br /> Mobile:{' '}
													<a href='tel:09999304427'>
														<b>+91 XXXXXXXXXX</b>
													</a>
													<br /> Email:{' '}
													<a href='mailto:hr@firstfiddle.in'>
														<b>hr@lerro.in</b>
													</a>
												</span>
											</div>
											<div class='col-md-6 foot-add'>
												<span>
													<strong>Other Enquiry</strong>
													<br />
													Email:{' '}
													<a href='mailto:customercare@firstfiddle.in'>
														<b>customercare@lerro.in</b>
													</a>
												</span>
											</div>
										</div>

										<div class='social-icons text-left'>
											<a
												href='https://www.linkedin.com/company/'
												target='_blank'
												rel='noreferrer'
											>
												<i class='fab fa-linkedin fa-2x'></i>
											</a>
											&nbsp; &nbsp;{' '}
											<a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
												<i class='fab fa-facebook-square fa-2x'></i>
											</a>
											&nbsp; &nbsp;{' '}
											<a href='https://twitter.com/' target='_blank' rel='noreferrer'>
												<i class='fab fa-twitter fa-2x'></i>
											</a>
											&nbsp; &nbsp;{' '}
											<a
												href='https://www.instagram.com/'
												target='_blank'
												rel='noreferrer'
											>
												<i class='fab fa-instagram fa-2x'></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>{' '}
				</div>
			</div>
			<div>
				<div
					class='container-fluid'
					style={{
						backgroundColor: '#000',
						paddingTop: '30px',
						paddingBottom: '30px',
						overflowX: 'hidden',
					}}
				>
					<div class='row' style={{ display: 'block' }}>
						<div class='text-center'>
							<p
								class='copyright-text'
								style={{
									fontSize: '13px',
									color: 'white',
									marginTop: '0px',
									marginBottom: '0rem',
								}}
							>
								<a
									routerlink='/employee-policy'
									style={{ textDecoration: 'none', color: '#fff' }}
									ng-reflect-router-link='/employee-policy'
									href='/employee-policy'
								>
									EMPLOYEE POLICIES
								</a>{' '}
								|
								<a
									routerlink='/privacy-policy'
									style={{ textDecoration: 'none', color: '#fff' }}
									ng-reflect-router-link='/privacy-policy'
									href='/privacy-policy'
								>
									{' '}
									PRIVACY POLICY
								</a>{' '}
								|
								<a
									routerlink='/terms-conditions'
									style={{ textDecoration: 'none', color: '#fff' }}
									ng-reflect-router-link='/terms-conditions'
									href='/terms-conditions'
								>
									{' '}
									TERMS AND CONDITIONS
								</a>{' '}
								|{' '}
								<a
									routerlink='/blog'
									style={{ textDecoration: 'none', color: '#fff' }}
									ng-reflect-router-link='/blog'
									href='/blog'
								>
									BLOG
								</a>{' '}
								|{' '}
								<a
									routerlink='/qr'
									style={{ textDecoration: 'none', color: '#fff' }}
									ng-reflect-router-link='/qr'
									href='/qr'
								>
									APP
								</a>{' '}
								<br /> COPYRIGHT © 2021{' '}
								<a
									href='http://www.firstfiddle.in'
									style={{ textDecoration: 'none', color: '#fff' }}
									target='_blank'
								>
									FIRST FIDDLE F&amp;B PRIVATE LIMITED
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
