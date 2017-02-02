import React, { Component } from 'react';
import { connect } from 'react-redux';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */


const Intro = props => {
	const { language } = props;
	return(
		<div>
			<h2>{ (language === 'English') ? "Hi, my name is Dillon" : "你好，我名字叫彭郎" }</h2>
			<h2>{ (language === 'English') ? "Here's some cool stuff I built" : "看看我做过的项目" }</h2>

			<div>
				<h3>weJay</h3>
				<h5>{ (language === 'English') ? "Everyone's a DJ" : "连你也可以当DJ"}</h5>
				<p>{ (language === 'English') ?
					"Collaborative DJ web app that lets party-goers democratically create a playlist"
					:
					"与朋友们携手创造播放列表"
					}
				</p>
				<a target="_blank" href="http://wejay.me">wejay.me</a>
				<a target="_blank" href="https://github.com/christophermanahan/wejay">Github</a>
			</div>

		</div>
	)	
}


export default Intro;
