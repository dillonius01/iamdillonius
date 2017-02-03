import React, { Component } from 'react';
import WeJay from './WeJay';
import RatMap from './RatMap';
import { Link } from 'react-router';



/* -----------------    STATEFUL REACT COMPONENT     ------------------ */


class Intro extends Component {

	constructor(props) {
		super(props);
		this.state = {
			project: null
		};
		this.handleSelectProject = this.handleSelectProject.bind(this);
	}

	handleSelectProject(evt) {
		const project = evt.target.name; // each button needs a name property that matches with the project
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
		<div className="clearfix fit">
			<div className="sm-col sm-col-12">
				<h2 className="txt-center txt-intro">
					{ (language === 'English') ?
						"Hi, my name is Dillon" :
						"你好，我名字叫彭郎" 
					}
				</h2>
				<h2 className="txt-center txt-intro">
				{ (language === 'English') ?
					"Here are some cool projects I built" :
					"看看我做过的酷毙项目"
				}
				</h2>
			</div>

			<div className="md-col md-col-12">
				<button name="wejay" onClick={handleSelectProject}>weJay</button>
				<button name="ratmap" onClick={handleSelectProject}>RatMap</button>
			</div>

			<div className="md-col md-col-12">
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
			</div>


		</div>
	)
}


export default Intro;

