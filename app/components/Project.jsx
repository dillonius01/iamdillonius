import React, { Component } from 'react';
import LinkList from './LinkList';

/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */


const Project = ({ language, projectData }) => (

	<div className="card-container clearfix">
		<div className="col-12 card-title">
			<h3 className="subtitle">{(language === 'English') ? 
				projectData.title.english : 
				projectData.title.chinese }
			</h3>
			<h5 className="subtitle">{ (language === 'English') ? 
				projectData.subtitle.english : 
				projectData.subtitle.chinese }
			</h5>
		</div>

		<div className="col-12">
			<ul className="project-bullets">
				{ (language === 'English') ?
						projectData.bullets.map((b, idx) => <li key={idx}>{`${b.english}`}</li>) :
						projectData.bullets.map((b, idx) => <li key={idx}>{`${b.chinese}`}</li>)
				}
			</ul>			
		</div>

		<LinkList links={ projectData.links } />
	
	</div>
);

export default Project;


