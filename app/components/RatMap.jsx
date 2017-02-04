import React, { Component } from 'react';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */


const RatMap = ({ language }) => (

	<div className="card-container clearfix">
		<div className="md-col md-col-12 card-title">
			<h3 className="subtitle">RatMap</h3>
			<h5 className="subtitle">{ (language === 'English') ? "Experience the realy New York City" : "体验地道的纽约"}</h5>
		</div>

		<div className="md-col md-col-12">
			{ (language === 'English') ?
				<ul className="project-bullets">
					<li>
						Visualization for NYC Open Data's rat infestation inspections
					</li>
					<li>
						Users can filter by borough or location and calculate likelihood of infestation
					</li>
					<li>
						Built using React, Redux, Socrata Web API, and Google Maps API
					</li>
				</ul>
				:
				<ul className="project-bullets">
					<li>
						他妈太多老鼠, 卧槽看看有多少老鼠
					</li>
					<li>
						用户可以通过地区或地址计算。。。
					</li>
					<li>
						使用的工具包括React, Redux, Socrata联网API, 与谷歌地图API
					</li>

				</ul>
				}
		</div>

		<div className="md-col md-col-12 center-vert">
			<div className="md-col md-col-4 link-container">
				<a target="_blank" href="https://github.com/dillonius01/ratmap">
					<i className="zmdi zmdi-github zmdi-hc-2x"></i>
				</a>
			</div>
			<div className="md-col md-col-4 link-container">
				<a target="_blank" href="#">
					<span>Deploying soon!</span>
				</a>
			</div>
			<div className="md-col md-col-4 link-container">
				<a target="_blank" href="https://www.youtube.com/watch?v=eCVuL15I0G4">
					<i className="zmdi zmdi-youtube-play zmdi-hc-2x"></i>
				</a>
			</div>
		</div>
	</div>
);

export default RatMap;


