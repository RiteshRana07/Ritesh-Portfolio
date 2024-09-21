import React from 'react';
// import { useState, useEffect, useRef } from 'react';
// import { name } from '../constants';
import Footer from './Footer';
import Image from '../assets/Ritesh_pics.jpg'


const Home = () => {

	// const ref = useRef(0);
	// const [text, setText] = useState('');

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		if (ref.current < name.length) {
	// 			ref.current++;
	// 			setText(() => text + name[ref.current - 1]);
	// 		}
	// 	}, 500);
	// 	return () => clearInterval(interval);
	// }, [text]);

	return (<>
		<div className='absolute top-20 right-10 z-0 h-40 w-40 rounded-[6%] shadow-red-700 overflow-hidden'>
			<img src={Image} alt='ritesh-image'/>
		</div>
		<div className='area relative z-0 bg-black w-screen h-screen'>
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
				<div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
					<h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{'Ritesh'}</span></h1>
					<p className='mt-3 text-xl'>I love to learn and build scalable and optimized frontend systems.</p>
				</div>      
			</div>
			<Footer/>
		</div>	
		</>
	);
}

export default Home;