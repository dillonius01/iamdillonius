import React, { Component } from 'react';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */

const DumbImage = props => {
	
	const { picture } = props;

	return (
		<div>
			{
				picture ?
					<img src={`public/media/${picture}`} className="img-jumbo" /> :
					null
			}
			
		</div>
	)
}

export default DumbImage;
