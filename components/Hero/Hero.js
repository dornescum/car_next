import React from 'react';
// import Image from 'react-bootstrap/Image'
import Image from 'next/image'


const Hero = () => {
	return (
		<div>
			<Image src="/img/car.webp" height='1300' width='1920' alt='a car' layout="responsive" lazy='true' />
		</div>
	);
};

export default Hero;