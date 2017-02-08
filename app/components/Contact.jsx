import React, { Component } from 'react';

/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */


const Contact = props => {
	const { language } = props;
	return(
		<div className="clearfix card-container">
			<div className="sm-col sm-col-12">
				<h2 className="txt-center txt-intro name">
					{ (language === 'English') ?
						"FIN" :
						"完了，还看啥？"
					}
				</h2>
				<h2 className="txt-center txt-intro">
					{ (language === 'English') ?
						"Still want more? Check out these links!" :
						"下面链接有更多的精彩"
					}
				</h2>
			</div>

			
		</div>

	)
}

export default Contact;