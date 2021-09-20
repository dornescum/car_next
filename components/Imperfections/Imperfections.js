import React from 'react';
import IGallery from './ImperfectionGallery'
import IDesc from './ImperfectionDescriptions'


const Imperfections = () => {
	return (
		<div className='about' id='imperfectiuni'>
			<h3>Mici imperfectiuni</h3>
			<div className="container">
				<div className="row">
					<div className="col-4-lg">
						<IDesc />
					</div>
					<div className="col-8-lg">
						<IGallery />
					</div>
				</div>

			</div>

		</div>
	);
};

export default Imperfections;