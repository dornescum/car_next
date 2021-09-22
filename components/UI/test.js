import React from 'react';

const Test = (props) => {
	return (
		// <svg  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" {...props}
		// 	 preserveAspectRatio="xMidYMid meet" viewBox="-14 -1 24 24">
		// 	<path d="M17 4v6l-2-2l-2 2V4H9v16h3.1c.1.7.4 1.4.7 2H7c-1.1 0-2-1-2-2v-1H3v-2h2v-4H3v-2h2V7H3V5h2V4c0-1.1.9-2 2-2h12c1 0 2 1 2 2v9.8c-.6-.4-1.3-.6-2-.7V4h-2M5 19h2v-2H5v2m0-6h2v-2H5v2m0-6h2V5H5v2m12 8v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z"
		// 		 />
		// </svg>
		<svg xmlns="http://www.w3.org/2000/svg" className="test-1" viewBox="0 0 20 20" fill="black" {...props}>
			<path
				d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"/>
		</svg>
	);
};

export default Test;