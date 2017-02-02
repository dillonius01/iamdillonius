import React, { Component } from 'react';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */


const WeJay = ({ language }) => (

	<div>
		<div className="md-col md-col-2">
			<h3>weJay</h3>
			<h5>{ (language === 'English') ? "Everyone's a DJ" : "连你也可以当DJ"}</h5>
		</div>
		<div className="md-col md-col-8">
			<p>{ (language === 'English') ?
				"Collaborative DJ web app that lets party-goers democratically create a playlist"
				:
				"与朋友们携手创造播放列表"
				}
			</p>
		</div>
		<div className="md-col md-col-2">
			<a target="_blank" href="http://wejay.me">wejay.me</a>
			<a target="_blank" href="https://github.com/christophermanahan/wejay">Github</a>
		</div>
	</div>
);

export default WeJay;
