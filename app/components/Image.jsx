import React, { Component } from 'react';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */

const DumbImage = props => {
	
	const { picture, clearPicture } = props;

	return (
		<div className={`modal-container ${(picture) ? 'showing' : ''}`} onClick={clearPicture}>
			{
				picture ?
					<img src={`public/media/${picture}`} className="img-jumbo img-zoom" />
					:
					null
			}	
		</div>
	)
}

export default DumbImage;
