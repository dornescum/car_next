import React from 'react';
// import Image from 'react-bootstrap/Image'
import Image from 'next/image'
// import car from '../../public/img/1-2.jpg'
// import car from '../../public/webp/car.webp'
import car from '/public/1.jpg'




const Hero = () => {
	return (
		<div className="hero">
			<img src='webp/car.webp' alt="Travel" className="hero__image" id='home' />
			{/*<Image src="/webp/car.webp" height='1300' width='1920' />*/}
			{/*<Image*/}
			{/*	src="/webp/car.webp"*/}
			{/*	alt="Picture of the author"*/}
			{/*	width={1920}*/}
			{/*	height={600}*/}
			{/*	srl_gallery_image="true" // Add this if your thumbnail is not recognized*/}
			{/*	 id='fata'*/}
			{/*	className="hero__image"*/}
			{/*/>*/}
			<h1 className="hero__title">Best car ever.</h1>
		</div>
	);
};

export default Hero;
// <>
// 	{/*<img src={car}*/}
// 	{/*	   // height='1300'*/}
// 	{/*	   // width='1920'*/}
// 	{/*	   // objectFit='cover'*/}
// 	{/*	   alt='a car'*/}
// 	{/*	   // layout="responsive"*/}
// 	{/*	   // lazy='true'*/}
// 	{/*	   id='fata'*/}
// 	{/*/>*/}
// 	<img
// 		src='/webp/car.webp'
// 		alt="Picture of the author"
// 		srl_gallery_image="true"
// 		id='fata'
// 	/>
// </>