import React from 'react';
import {SRLWrapper} from "simple-react-lightbox";

const ImperfectionGallery = () => {
	return (
		<SRLWrapper>
			<div className="row gap-1">
				<div className="col-2-lg col-4-md col-6-sm col-12-xs">
					{/*todo nu fonctioneaza 1.webp*/}
					<a href="/imp/1i.webp" className="photo-imp">
						<img
							src='/imp/1i.webp'
							alt="Picture of the author"
							srl_gallery_image="true"
						/>
					</a>
				</div>
				<div className="col-2-lg col-4-md col-6-sm col-12-xs">
					<a href="/imp/2i.webp" className="photo-imp">
						<img
							src='/imp/2i.webp'
							alt="Picture of the author"
							srl_gallery_image="true"
						/>
					</a>
				</div>
				<div className="col-2-lg col-4-md col-6-sm col-12-xs">
					<a href="/imp/3i.webp" className="photo-imp">
						<img
							src='/imp/3i.webp'
							alt="Picture of the author"
							srl_gallery_image="true"
						/>
					</a>
				</div>
				<div className="col-2-lg col-4-md col-6-sm col-12-xs">
					<a href="/imp/4i.webp" className="photo-imp">
						<img
							src='/imp/4i.webp'
							alt="Picture of the author"
							srl_gallery_image="true"
						/>
					</a>
				</div>
				<div className="col-2-lg col-4-md col-6-sm col-12-xs">
					<a href="/imp/5i.webp" className="photo-imp">
						<img
							src='/imp/5i.webp'
							alt="Picture of the author"
							srl_gallery_image="true"
						/>
					</a>
				</div>
				<div className="col-2-lg col-4-md col-6-sm col-12-xs">
					<a href="/imp/6i.webp" className="photo-imp">
						<img
							src='/imp/6i.webp'
							alt="Picture of the author"
							srl_gallery_image="true"
						/>
					</a>
				</div>
				<div className="col-2-lg col-4-md col-6-sm col-12-xs">
					<a href="/imp/7i.webp" className="photo-imp">
						<img
							src='/imp/7i.webp'
							alt="Picture of the author"
							srl_gallery_image="true"
						/>
					</a>
				</div>
				<div className="col-2-lg col-4-md col-6-sm col-12-xs">
					<a href="/imp/8i.webp" className="photo-imp">
						<img
							src='/imp/8i.webp'
							alt="Picture of the author"
							srl_gallery_image="true"
						/>
					</a>
				</div>
				<div className="col-2-lg col-4-md col-6-sm col-12-xs">
					<a href="/imp/9i.webp" className="photo-imp">
						<img
							src='/imp/9i.webp'
							alt="Picture of the author"
							srl_gallery_image="true"
						/>
					</a>
				</div>
				<div className="col-2-lg col-4-md col-6-sm col-12-xs">
					<a href="/imp/10i.webp" className="photo-imp">
						<img
							src='/imp/10i.webp'
							alt="Picture of the author"
							srl_gallery_image="true"
						/>
					</a>
				</div>
				<div className="col-2-lg col-4-md col-6-sm col-12-xs">
					<a href="/imp/11i.webp" className="photo-imp">
						<img
							src='/imp/11i.webp'
							alt="Picture of the author"
							srl_gallery_image="true"
						/>
					</a>
				</div>
				<div className="col-2-lg col-4-md col-6-sm col-12-xs">
					<a href="/imp/12i.webp" className="photo-imp">
						<img
							src='/imp/12i.webp'
							alt="Picture of the author"
							srl_gallery_image="true"
						/>
					</a>
				</div>


			</div>

		</SRLWrapper>
	);
};

export default ImperfectionGallery;