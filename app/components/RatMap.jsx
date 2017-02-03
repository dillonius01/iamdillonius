import React, { Component } from 'react';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */


const RatMap = ({ language }) => (

	<div>
		<div className="md-col md-col-2">
			<h3>RatMap</h3>
			<h5>{ (language === 'English') ? "Loogit those rats" : "卧槽看看有多少老鼠"}</h5>
		</div>
		<div className="md-col md-col-8">
			<p>{ (language === 'English') ?
				"Visualization for NYC Open Data's rat infestation inspections"
				:
				"他妈太多老鼠"
				}
			</p>
		</div>
		<div className="md-col md-col-2">
			<a target="_blank" href="https://github.com/dillonius01/ratmap">
				<i className="zmdi zmdi-github zmdi-hc-3x"></i>Github
			</a>
		</div>
	</div>
);

export default RatMap;
