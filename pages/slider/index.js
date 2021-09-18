import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import Image from 'next/image'
import picture from '../../assets/roland-hechanova-wiXWe_--AWY-unsplash (1).jpg'


const Index = () => {
	return (
		<SRLWrapper>
			{/*<a href="/img/1.jpg">*/}
			{/*	<img src="/img/1.jpg" alt="Umbrella" />*/}
			{/*</a>*/}
			{/*<a href="/link/to/the/full/width/image_two.jpg">*/}
			{/*	<img src="/link/for/the/thumbnail/image_two.jpg" alt="Blue sky" />*/}
			{/*</a>*/}
			<a href='/img/1.jpg'>
				<Image
					src={picture}
					alt="Picture of the author"
					width={300}
					height={300}
					srl_gallery_image="true" // Add this if your thumbnail is not recognized
				/>
			</a>
			<a href='/img/1.jpg'>
				<Image
					src={picture}
					alt="Picture of the author"
					width={300}
					height={300}
					srl_gallery_image="true" // Add this if your thumbnail is not recognized
				/>
			</a>
			<a href='/img/1.jpg'>
				<Image
					src={picture}
					alt="Picture of the author"
					width={300}
					height={300}
					srl_gallery_image="true" // Add this if your thumbnail is not recognized
				/>
			</a>


		</SRLWrapper>
	);
};

export default Index;