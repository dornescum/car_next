import React from 'react';
// import Image from 'react-bootstrap/Image'
import Image from 'next/image'
// import car from '../../public/img/1-2.jpg'
import car from '../../public/webp/1-full.webp'



const Hero = () => {
	return (
		<div className="hero">
			<img src='/webp/1-full.webp' alt="Travel" className="hero__image" id='fata' />
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
// 		src='/webp/1-full.webp'
// 		alt="Picture of the author"
// 		srl_gallery_image="true"
// 		id='fata'
// 	/>
// </>