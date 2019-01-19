import React, { Component } from 'react';
import Project from './Project';
import RatMapData from '../props/RatMapData';
import WeJayData from '../props/WeJayData';
import NewsMirrorData from '../props/NewsMirrorData';
import IntroData from '../props/IntroData';



/* -----------------    STATEFUL REACT COMPONENT     ------------------ */


class Intro extends Component {

	constructor(props) {
		super(props);
		this.state = {
			projects: ['wejay', 'ratmap', 'newsmirror'],
			idx: 0
		};
		this.handleSelectProject = this.handleSelectProject.bind(this);
	}

	handleSelectProject(evt) {
		const idx = +evt.target.value;
		this.setState({ idx });
	}

	render() {
		const { language } = this.props;
		const { projects, idx } = this.state;

		return (
			<DumbIntro
				language={language}
				project={projects[idx]}
				idx={idx}
				handleSelectProject={this.handleSelectProject}
			/>
		)
	}
}



/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */



const DumbIntro = props => {
	const { language, project, handleSelectProject, idx } = props;

	return(
		<div className="clearfix card-container">
			<div className="col-12">
				<h2 className="txt-center txt-intro name">
					{ (language === 'English') ?
						IntroData[0].english :
						IntroData[0].chinese
					}
				</h2>
				<h2 className="txt-center txt-intro">
					{ (language === 'English') ?
						IntroData[1].english :
						IntroData[1].chinese
					}
				</h2>
				<h2 className="txt-center txt-intro">
				{ (language === 'English') ?
						IntroData[2].english :
						IntroData[2].chinese
				}
				</h2>
			</div>

			<div className="col-12 project-button-container">
				<div className="col-4 inline-block">
					<button
						className={`project-name-txt ripple ${(project === 'wejay') ? 'selected' : ''}`}
						name="wejay"
						value={0}
						onClick={handleSelectProject}>
						{(language === 'English') ? WeJayData.title.english : WeJayData.title.chinese }
					</button>
				</div>
				<div className="col-4 inline-block">
					<button className={`project-name-txt ripple ${(project === 'ratmap') ? 'selected' : ''}`}
						name="ratmap"
						value={1}
						onClick={handleSelectProject}>
						{(language === 'English') ? RatMapData.title.english : RatMapData.title.chinese }
					</button>
				</div>
				<div className="col-4 inline-block">
					<button
						className={`project-name-txt ripple ${(project === 'newsmirror') ? 'selected' : ''}`}
						name="newsmirror"
						value={2}
						onClick={handleSelectProject}>
						{(language === 'English') ? NewsMirrorData.title.english : NewsMirrorData.title.chinese }
					</button>
				</div>
			</div>
			<div className="col-12 underline-container">
				<div className={`underline pos-${idx}`}></div>
			</div>

			<div className="col-12">
				{
					(project === 'wejay') ?
					<Project language={language} projectData={WeJayData} />
					:
					null

				}
				{
					(project === 'ratmap') ?
					<Project language={language} projectData={RatMapData} />
					:
					null
				}
				{
					(project === 'newsmirror') ?
					<Project language={language} projectData={NewsMirrorData} />
					:
					null
				}
			</div>
		</div>
	)
}


export default Intro;

