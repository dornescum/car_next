import React from 'react';
// import Image from 'react-bootstrap/Image'
import Image from 'next/image'
import car from '../../public/img/1-2.jpg'


const Hero = () => {
	return (
		<>
			<Image src={car}
				   height='1300'
				   width='1920'
				   objectFit='cover'
				   alt='a car'
				   layout="responsive"
				   lazy='true' />
		</>
	);
};

export default Hero;