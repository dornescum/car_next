import React from 'react';
import {SRLWrapper} from "simple-react-lightbox";



const Galerry = () => {

	return (
		<div className="container gallery" id='galerie'>
			<h3>Galerie foto</h3>
			<SRLWrapper>
				<div className="row gap-1">

					<div className="col-3-lg col-6-sm col-12-xs">
						<a href="/webp/1.webp" className="photo">
							<img
								src='/webp/1-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>

						</a>

					</div>
					<div className="col-3-lg col-6-sm col-12-xs">
						<a href="/webp/2.webp" className="photo">
							<img
								src='/webp/2-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-3-lg col-6-sm col-12-xs">
						<a href="/webp/3.webp" className="photo">
							<img
								src='/webp/3-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-3-lg col-6-sm col-12-xs">
						<a href="/webp/4.webp" className="photo">
							<img
								src='/webp/4-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-3-lg col-6-sm col-12-xs">
						<a href="/webp/5.webp" className="photo">
							<img
								src='/webp/5-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-3-lg col-6-sm col-12-xs">
						<a href="/webp/6.webp" className="photo">
							<img
								src='/webp/6-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-3-lg col-6-sm col-12-xs">
						<a href="/webp/7.webp" className="photo">
							<img
								src='/webp/7-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-3-lg col-6-sm col-12-xs">
						<a href="/webp/8.webp" className="photo">
							<img
								src='/webp/8-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-3-lg col-6-sm col-12-xs">
						<a href="/webp/9.webp" className="photo">
							<img
								src='/webp/9-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-3-lg col-6-sm col-12-xs">
						<a href="/webp/10.webp" className="photo">
							<img
								src='/webp/10-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-3-lg col-6-sm col-12-xs">
						<a href="/webp/11.webp" className="photo">
							<img
								src='/webp/11-sm.webp'
								alt="Picture of the author"
								srl_gallery_image="true"
							/>
						</a>
					</div>
					<div className="col-3-lg col-6-sm col-12-xs">
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
