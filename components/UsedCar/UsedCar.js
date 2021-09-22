import React from 'react';
import Link from 'next/link';
import { BsChevronRight} from "react-icons/bs";

const UsedCar = () => {
	return (
		<div className='container used-car'>
			<h3>Starea actuala</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, assumenda beatae blanditiis earum ex harum hic libero, maiores nostrum officiis optio praesentium quam rerum sit sunt tempora vel veritatis vitae!</p>
			<Link href='/slider'><a>MAI MULTE INFORMATI SI FOTOGRAFII AICI </a>

			</Link>
			<BsChevronRight />
		</div>
	);
};

export default UsedCar;