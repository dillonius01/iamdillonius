import React, { Component } from 'react';
import WeJay from './WeJay';
import RatMap from './RatMap';



/* -----------------    STATEFUL REACT COMPONENT     ------------------ */


class Intro extends Component {

	constructor(props) {
		super(props);
		this.state = {
			project: 'wejay'
		};
		this.handleSelectProject = this.handleSelectProject.bind(this);
	}

	handleSelectProject(evt) {
		const project = evt.target.name; 
		this.setState({ project });
	}

	render() {
		const { language } = this.props;
		const { project } = this.state;

		return (
			<DumbIntro
				language={language}
				project={project}
				handleSelectProject={this.handleSelectProject}
			/>
		)
	}



}

/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */

const DumbIntro = props => {
	const { language, project, handleSelectProject } = props;
	return(
		<div className="clearfix intro-container">
			<div className="sm-col sm-col-12">
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

			<div className="sm-col sm-col-12">
				<div className="sm-col sm-col-4">
					<button className={`project-name-txt ripple ${(project === 'wejay') ? 'selected' : ''}`} name="wejay" onClick={handleSelectProject}>weJay</button>
				</div>
				<div className="sm-col sm-col-4">
					<button className={`project-name-txt ripple ${(project === 'ratmap') ? 'selected' : ''}`} name="ratmap" onClick={handleSelectProject}>RatMap</button>
				</div>
				<div className="sm-col sm-col-4">
					<button className={`project-name-txt ripple ${(project === 'hearts') ? 'selected' : ''}`} name="hearts" onClick={handleSelectProject}>Hearts</button>
				</div>
			</div>

			<div className="sm-col sm-col-12">
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
					(project === 'hearts') ?
					<div language={language}>{(language === 'English') ? "Hearts" : '打牌'}</div>
					:
					null
				}
			</div>


		</div>
	)
}


export default Intro;

