import React from 'react';
import {SRLWrapper} from "simple-react-lightbox";
import picture from '../../assets/roland-hechanova-wiXWe_--AWY-unsplash (1).jpg';
import car_1 from '../../public/img/1.jpg';
import car_12 from '../../public/img/1-2.jpg';
import Image from "next/image";


const Galerry = () => {
	return (
		<div className="container gallery">
			<h3>Galerie foto</h3>
			<SRLWrapper>
				<div className="row gap-1">
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/thumb/t-1.jpg" className="photo">
							<Image
								src={car_1}
								alt="Picture of the author"
								width={400}
								height={400}
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/img/2.jpg" className="photo">
							<Image
								src="/img/2.jpg"
								alt="Picture of the author"
								width={400}
								height={400}
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/img/3.jpg" className="photo">
							<Image
								src="/img/3.jpg"
								alt="Picture of the author"
								width={400}
								height={400}
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/img/4.jpg" className="photo">
							<Image
								src="/img/4.jpg"
								alt="Picture of the author"
								width={400}
								height={400}
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/img/5.jpg" className="photo">
							<Image
								src="/img/5.jpg"
								alt="Picture of the author"
								width={400}
								height={400}
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/img/6.jpg" className="photo">
							<Image
								src="/img/6.jpg"
								alt="Picture of the author"
								width={400}
								height={400}
								srl_gallery_image="true"
							/>
						</a>
					</div>

					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/img/7.jpg" className="photo">
							<Image
								src="/img/7.jpg"
								alt="Picture of the author"
								width={400}
								height={400}
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/img/8.jpg" className="photo">
							<Image
								src="/img/8.jpg"
								alt="Picture of the author"
								width={400}
								height={400}
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/img/9.jpg" className="photo">
							<Image
								src="/img/9.jpg"
								alt="Picture of the author"
								width={400}
								height={400}
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/img/10.jpg" className="photo">
							<Image
								src="/img/10.jpg"
								alt="Picture of the author"
								width={400}
								height={400}
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/img/11.jpg" className="photo">
							<Image
								src="/img/11.jpg"
								alt="Picture of the author"
								width={400}
								height={400}
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-2-lg col-4-md col-6-sm col-12-xs">
						<a href="/img/12.jpg" className="photo">
							<Image
								src="/img/12.jpg"
								alt="Picture of the author"
								width={400}
								height={400}
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