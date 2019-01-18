import React, { Component } from 'react';

const Disclaimer = ({ language }) => (
	<div className="col-12 mx-auto">
			<h3 className="center m0">&copy; 2019 iamdillonius</h3>
			{ (language === 'English') ?
				<h3 className="center m0">All site content was written and translated by Dillon</h3> :
				<h3 className="center m0">此网站的所有双语内容是彭郎自己翻译的</h3>
			}
			{(language === 'English') ?
	
				<h3 className="center m0">Be excellent to each other</h3> :
				<h3 className="center m0">推己及人</h3>
			}
	</div>
);


export default Disclaimer;
