import React, { Component } from 'react';
import WeJay from './WeJay';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */



const Intro = props => {
	const { language } = props;
	return(
		<div className="clearfix fit">
			<div className="sm-col sm-col-12">
				<h2 className="txt-center txt-intro">{ (language === 'English') ? "Hi, my name is Dillon" : "你好，我名字叫彭郎" }</h2>
				<h2 className="txt-center txt-intro">{ (language === 'English') ? "Here are some cool projects I built" : "看看我做过的酷毙项目" }</h2>
			</div>

			<div className="md-col md-col-12">
				<WeJay language={language} />
			</div>


		</div>
	)
}


export default Intro;

