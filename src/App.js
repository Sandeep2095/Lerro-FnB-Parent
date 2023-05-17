import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/footer/Footer';

import Hero from './components/Hero';
import Welcome from './components/layout/Welcome';
import Experience from './components/layout/Experience';

// Pages
import Brands from './pages/Brands';
import Team from './pages/Team';
import Aboutus from './pages/Aboutus';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import Franchise from './pages/Franchise';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Hero />
							<Welcome />
							<Experience />
						</>
					}
				/>
				<Route path='/' element={<Hero />} />
				<Route path='/brands' element={<Brands />} />
				<Route path='/ourteam' element={<Team />} />
				<Route path='/aboutus' element={<Aboutus />} />
				<Route path='/careers' element={<Careers />} />
				<Route path='/contact' element={<ContactUs />} />
				<Route path='/franchise' element={<Franchise />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
