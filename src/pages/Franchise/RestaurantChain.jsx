import React from 'react';
import img3 from '../../assets/local9.png';

const RestaurantChain = () => {
	return (
		<div>
			<div class='container my-5'>
				<div class='row'>
					<div class='col-lg-7'>
						<h2 class='text-center ml-1' style={{ fontFamily: 'Prague' }}>
							LARGEST RESTAURANT CHAIN <b style={{ color: '#fbaa1a' }}>OF INDIA</b>
						</h2>
						<br />
						<p class='largest-restaurants banner-content'>
							First Fiddle Restaurants, one of the india’s largest F&amp;B company in
							the casual dining sector, is headed by Priyank Sukhija. From Lazeez
							Affair, the first brand conceived in 1999 to Dragonfly Experience and
							Plum By Bent Chair, its latest ventures, it has brought a wave of
							innovation in the hospitality industry.
							<br /> It has been lauded with an endless number of awards by ‘Times
							Nightlife’, ‘GQ’, ‘Indian Restaurant Awards’- to name a few. With more
							than 35 brands under its name such as Lord Of The Drinks, Tamasha, The
							Flying Saucer Café, JLWA, it has grown manifold in the past 20 years and
							continues to do so.
						</p>
					</div>
					<div class='col-lg-5 local-image image-right'>
						<img
							alt='Local'
							class='local'
							src={img3}
							style={{
								boxShadow:
									'0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RestaurantChain;
