import React, { Component } from 'react';
import WeJay from './WeJay';
import RatMap from './RatMap';
import NewsMirror from './NewsMirror';


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
						"Hi, my name is Dillon" :
						"你好，我名字叫彭郎"
					}
				</h2>
				<h2 className="txt-center txt-intro">
					{ (language === 'English') ?
						"Among other things, I am a web developer" :
						"我有不同身份，其中一个是软件工程师"
					}
				</h2>
				<h2 className="txt-center txt-intro">
				{ (language === 'English') ?
					"Here are some cool projects I built" :
					"看看我做过的酷毙项目"
				}
				</h2>
			</div>

			<div className="col-12 project-button-container">
				<div className="col-4 inline-block">
					<button className={`project-name-txt ripple ${(project === 'wejay') ? 'selected' : ''}`} name="wejay" value={0} onClick={handleSelectProject}>weJay</button>
				</div>
				<div className="col-4 inline-block">
					<button className={`project-name-txt ripple ${(project === 'ratmap') ? 'selected' : ''}`} name="ratmap" value={1} onClick={handleSelectProject}>RatMap</button>
				</div>
				<div className="col-4 inline-block">
					<button className={`project-name-txt ripple ${(project === 'newsmirror') ? 'selected' : ''}`} name="newsmirror" value={2} onClick={handleSelectProject}>News Mirror</button>
				</div>
			</div>
			<div className="col-12 underline-container">
				<div className={`underline pos-${idx}`}></div>
			</div>

			<div className="col-12">
				{
					(project === 'wejay') ?
					<WeJay language={language} />
					:
					null

				}

				{
					(project === 'ratmap') ?
					<RatMap language={language} />
					:
					null
				}
				{
					(project === 'newsmirror') ?
					<NewsMirror language={language} />
					:
					null
				}
			</div>


		</div>
	)
}


export default Intro;

