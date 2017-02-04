import React, { Component } from 'react';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */


const WeJay = ({ language }) => (

	<div className="card-container clearfix">
		<div className="md-col md-col-12 card-title">
			<h3 className="md-col md-col-12 subtitle">weJay</h3>
			<h5 className="md-col md-col-12 subtitle">{ (language === 'English') ? "Everyone's a DJ" : "连你也可以当DJ"}</h5>
		</div>

		<div className="md-col md-col-2">
			<i className="zmdi zmdi-flower-alt"></i>
		</div>

		<div className="md-col md-col-10">
			<ul>{ (language === 'English') ?
				<li>
					Collaborative DJ web app that lets party-goers democratically create a playlist
				</li>
				
				:
				<li>
					与朋友们携手创造播放列表
				</li>
				}
			</ul>
		</div>

		<div className="md-col md-col-12">
			<div className="md-col md-col-4 link-container">
				<a target="_blank" href="https://github.com/christophermanahan/wejay">
					<i className="zmdi zmdi-github zmdi-hc-3x"></i>
				</a>
			</div>
			<div className="md-col md-col-4 link-container">
				<a target="_blank" href="http://wejay.me">wejay.me</a>
			</div>
			<div className="md-col md-col-4 link-container">
				<a target="_blank" href="https://www.youtube.com/watch?v=-XEOkNGz8m0">
					<i className="zmdi zmdi-youtube-play zmdi-hc-3x"></i>
				</a>
			</div>
		</div>
	</div>
);

export default WeJay;
