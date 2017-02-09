import React, { Component } from 'react';

const Disclaimer = ({ language }) => (
	<div className="col-12 mx-auto">
			<h3 className="center m0">&copy; 2017 iamdillonius</h3>
			{(language === 'English') ?
		
				<h3 className="center m0">Be excellent to each other</h3> :
				<h3 className="center m0">推己及人</h3>
			}
	</div>
);


export default Disclaimer;
