import React from 'react';

import BannerForm from './Franchise/BannerForm';
import WhyChoose from './Franchise/WhyChoose';
import OurService from './Franchise/OurService';
import GameChanger from './Franchise/GameChanger';
import CountCards from './Franchise/CountCards';
import Faqs from './Franchise/Faqs';
import ExploreOurBrands from '../components/layout/ExploreOurBrands';
import RestaurantChain from './Franchise/RestaurantChain';

const Franchise = () => {
	return (
		<div className='franchise-container'>
			<BannerForm />
			<RestaurantChain />
			<ExploreOurBrands />
			<WhyChoose />
			<OurService />
			<GameChanger />
			<CountCards />
			<Faqs />
		</div>
	);
};

export default Franchise;
