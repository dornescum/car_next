import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import Image from 'next/image'

const Slider = () => {
	return (
		<SRLWrapper>
			<a href="https://images.unsplash.com/photo-1631889211536-4a2a9bb985f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80">
				<img src="https://images.unsplash.com/photo-1631889211536-4a2a9bb985f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Umbrella" />
			</a>
			{/*<a href="/link/to/the/full/width/image_two.jpg">*/}
			{/*	<img src="/link/for/the/thumbnail/image_two.jpg" alt="Blue sky" />*/}
			{/*</a>*/}
			<a href="https://images.unsplash.com/photo-1631889211536-4a2a9bb985f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80">
				<Image
					src="https://images.unsplash.com/photo-1631889211536-4a2a9bb985f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
					alt="Picture of the author"
					width={500}
					height={900}
					srl_gallery_image="true" // Add this if your thumbnail is not recognized
				/>
			</a>
		</SRLWrapper>
	);
};

export default Slider;