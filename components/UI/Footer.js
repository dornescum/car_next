import React, {useState} from 'react';
import { FaEnvelope, FaPhoneAlt} from 'react-icons/fa';



const Footer = () => {
	const [showNumber, setShowNumber] = useState(false);
	const [showEmail, setShowEmail] = useState(false);

	const handleNumber = () => {
		setShowNumber(!showNumber)
	}
	const handleEmail = () => {
		setShowEmail(!showEmail)
	}

	return (
		<div className='footer o-70'>
			<div className='container'>
				<div className="row-footer mt-1">
					<div className="col">
						<button onClick={handleNumber} className='btn-info' >
							<FaPhoneAlt />
						</button>
						<div className='row'>
							{showNumber && <p className='show-info'>898989</p>}
						</div>
					</div>
					<div className="col">
						<button  className='btn-info'>
							<FaEnvelope  onClick={handleEmail}/>
						</button>
						<div className="row">
							{showEmail && <p className='show-info'>email@ya</p>}
						</div>
					</div>




				</div>
			</div>
		</div>
	);
};


export default Footer;