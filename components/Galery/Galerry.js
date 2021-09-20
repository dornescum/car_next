import React from 'react';
import {SRLWrapper} from "simple-react-lightbox";
import picture from '../../assets/roland-hechanova-wiXWe_--AWY-unsplash (1).jpg';
import car_1 from '../../public/img/1.jpg';
import car_12 from '../../public/img/1-2.jpg';
import Image from "next/image";


const Galerry = () => {
	return (
		<div className="container gallery" id='galerie'>
			<h3>Galerie foto</h3>
			<SRLWrapper>
				<div className="row gap-1">

					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/webp/1.webp" className="photo">
							<img
								src='/webp/1-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/webp/2.webp" className="photo">
							<img
								src='/webp/2-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/webp/3.webp" className="photo">
							<img
								src='/webp/3-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/webp/4.webp" className="photo">
							<img
								src='/webp/4-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/webp/5.webp" className="photo">
							<img
								src='/webp/5-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/webp/6.webp" className="photo">
							<img
								src='/webp/6-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/webp/7.webp" className="photo">
							<img
								src='/webp/7-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/webp/8.webp" className="photo">
							<img
								src='/webp/8-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/webp/9.webp" className="photo">
							<img
								src='/webp/9-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/webp/10.webp" className="photo">
							<img
								src='/webp/10-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/webp/11.webp" className="photo">
							<img
								src='/webp/11-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/webp/12.webp" className="photo">
							<img
								src='/webp/12-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>


				</div>

			</SRLWrapper>


		</div>

	);
};

export default Galerry;
// <div className="row gap-1">
// 	<div className="col-2-lg col-4-md col-6-sm col-12-xs">
// 		{/*<a href="/thumb/t-1.jpg" className="photo">*/}
// 		<a href="/img/1-2.jpg" className="photo">
// 			<Image
// 				src={car_12}
// 				alt="Picture of the author"
// 				width={400}
// 				height={400}
// 				srl_gallery_image="true"
// 			/>
// 		</a>
// 	</div>
// 	<div className="col-2-lg col-4-md col-6-sm col-12-xs">
// 		<a href="/img/2.jpg" className="photo">
// 			<Image
// 				src="/img/2.jpg"
// 				alt="Picture of the author"
// 				width={400}
// 				height={400}
// 				srl_gallery_image="true"
// 			/>
// 		</a>
// 	</div>
// 	<div className="col-2-lg col-4-md col-6-sm col-12-xs">
// 		<a href="/img/3.jpg" className="photo">
// 			<Image
// 				src="/img/3.jpg"
// 				alt="Picture of the author"
// 				width={400}
// 				height={400}
// 				srl_gallery_image="true"
// 			/>
// 		</a>
// 	</div>
// 	<div className="col-2-lg col-4-md col-6-sm col-12-xs">
// 		<a href="/img/4.jpg" className="photo">
// 			<Image
// 				src="/img/4.jpg"
// 				alt="Picture of the author"
// 				width={400}
// 				height={400}
// 				srl_gallery_image="true"
// 			/>
// 		</a>
// 	</div>
// 	<div className="col-2-lg col-4-md col-6-sm col-12-xs">
// 		<a href="/img/5.jpg" className="photo">
// 			<Image
// 				src="/img/5.jpg"
// 				alt="Picture of the author"
// 				width={400}
// 				height={400}
// 				srl_gallery_image="true"
// 			/>
// 		</a>
// 	</div>
// 	<div className="col-2-lg col-4-md col-6-sm col-12-xs">
// 		<a href="/img/6.jpg" className="photo">
// 			<Image
// 				src="/img/6.jpg"
// 				alt="Picture of the author"
// 				width={400}
// 				height={400}
// 				srl_gallery_image="true"
// 			/>
// 		</a>
// 	</div>
//
// 	<div className="col-2-lg col-4-md col-6-sm col-12-xs">
// 		<a href="/img/7.jpg" className="photo">
// 			<Image
// 				src="/img/7.jpg"
// 				alt="Picture of the author"
// 				width={400}
// 				height={400}
// 				srl_gallery_image="true"
// 			/>
// 		</a>
// 	</div>
// 	<div className="col-2-lg col-4-md col-6-sm col-12-xs">
// 		<a href="/img/8.jpg" className="photo">
// 			<Image
// 				src="/img/8.jpg"
// 				alt="Picture of the author"
// 				width={400}
// 				height={400}
// 				srl_gallery_image="true"
// 			/>
// 		</a>
// 	</div>
// 	<div className="col-2-lg col-4-md col-6-sm col-12-xs">
// 		<a href="/img/9.jpg" className="photo">
// 			<Image
// 				src="/img/9.jpg"
// 				alt="Picture of the author"
// 				width={400}
// 				height={400}
// 				srl_gallery_image="true"
// 			/>
// 		</a>
// 	</div>
// 	<div className="col-2-lg col-4-md col-6-sm col-12-xs">
// 		<a href="/img/10.jpg" className="photo">
// 			<Image
// 				src="/img/10.jpg"
// 				alt="Picture of the author"
// 				width={400}
// 				height={400}
// 				srl_gallery_image="true"
// 			/>
// 		</a>
// 	</div>
// 	<div className="col-2-lg col-4-md col-6-sm col-12-xs">
// 		<a href="/img/11.jpg" className="photo">
// 			<Image
// 				src="/img/11.jpg"
// 				alt="Picture of the author"
// 				width={400}
// 				height={400}
// 				srl_gallery_image="true"
// 			/>
// 		</a>
// 	</div>
// 	<div className="col-2-lg col-4-md col-6-sm col-12-xs">
// 		<a href="/img/12.jpg" className="photo">
// 			<img
// 				src="/img/12.jpg"
// 				alt="Picture of the author"
// 				width={400}
// 				height={400}
// 				srl_gallery_image="true"
// 			/>
// 		</a>
// 	</div>
//
// </div>


// ===================










// <a href="/img/1.jpg" className='photo'>
// 	<Image
// 		src={car_1}
// 		alt="Picture of the author"
// 		width={400}
// 		height={400}
// 		srl_gallery_image="true" // Add this if your thumbnail is not recognized
// 	/>
// </a>
// <a href="/img/2.jpg" className='photo'>
// 	<Image
// 		src="/img/2.jpg"
// 		alt="Picture of the author"
// 		width={300}
// 		height={300}
// 		srl_gallery_image="true" // Add this if your thumbnail is not recognized
// 	/>
// </a>
// <a href="/img/3.jpg" className='photo'>
// 	<Image
// 		src="/img/3.jpg"
// 		alt="Picture of the author"
// 		width={300}
// 		height={300}
// 		srl_gallery_image="true" // Add this if your thumbnail is not recognized
// 	/>
// </a>
// <a href="/img/4.jpg" className='photo'>
// 	<Image
// 		src="/img/4.jpg"
// 		alt="Picture of the author"
// 		width={300}
// 		height={300}
// 		srl_gallery_image="true" // Add this if your thumbnail is not recognized
//
// 	/>
// </a>
//
//
// <a href="/img/5.jpg" className='photo'>
// 	<Image
// 		src="/img/5.jpg"
// 		alt="Picture of the author"
// 		width={300}
// 		height={300}
// 		srl_gallery_image="true" // Add this if your thumbnail is not recognized
// 	/>
// </a>
// <a href="/img/6.jpg" className='photo'>
// 	<Image
// 		src="/img/6.jpg"
// 		alt="Picture of the author"
// 		width={300}
// 		height={300}
// 		srl_gallery_image="true" // Add this if your thumbnail is not recognized
// 	/>
// </a>
// <a href="/img/7.jpg" className='photo'>
// 	<Image
// 		src="/img/7.jpg"
// 		alt="Picture of the author"
// 		width={300}
// 		height={300}
// 		srl_gallery_image="true" // Add this if your thumbnail is not recognized
//
// 	/>
// </a>