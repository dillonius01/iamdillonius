import React, { Component } from 'react';

/* -----------------    STATEFUL REACT COMPONENT     ------------------ */

class Places extends Component {
	constructor(props) {
		super(props);
		this.state = {
			picture: ''
		}
		this.selectPicture = this.selectPicture.bind(this);
		this.clearPicture = this.clearPicture.bind(this);
	}

	selectPicture(evt) {
		const picture = evt.target.name;
		this.setState({ picture });
	}

	clearPicture() {
		this.setState({ picture: '' });
	}
 
	render() {

		const { language } = this.props;

		return(
			
			<DumbPlaces
				language={language}
				selectPicture={this.selectPicture}
			/>
		
		)
	}	
}


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */

const DumbPlaces = props => {
	const { language, selectPicture } = props;
	return(
		<div className="clearfix intro-container">
			<div className="sm-col sm-col-12">
				<h2 className="txt-center txt-intro name">
					{ (language === 'English') ?
						"I've lived in some cool places" :
						"我住过的地方满有意思"
					}
				</h2>
				<h2 className="txt-center txt-intro">
					{ (language === 'English') ?
						"Here are some pictures of my favorites" :
						"看看我最喜欢的"
					}
				</h2>
				<h2 className="txt-center txt-intro">
				{ (language === 'English') ?
					"(click to expand)" :
					"(点击展开)"
				}
				</h2>
			</div>

			<div className="sm-col sm-col-12">
				<div className="sm-col sm-col-12 md-col md-col-6">
					<img name="pic1" onClick={selectPicture} />
					<h2 className="center">New York, NY</h2>
				</div>

				<div className="sm-col sm-col-12 md-col md-col-6">
					<img name="pic2" onClick={selectPicture} />
					<h2 className="center">Beijing, China</h2>
				</div>

				<div className="sm-col sm-col-12 md-col md-col-6">
					<img name="pic3" onClick={selectPicture} />
					<h2 className="center">Honolulu, HI</h2>
				</div>

				<div className="sm-col sm-col-12 md-col md-col-6">
					<img name="pic4" onClick={selectPicture} />
					<h2 className="center">Cambridge, MA</h2>
				</div>

				<div className="sm-col sm-col-12 md-col md-col-6">
					<img name="pic5" onClick={selectPicture} />
					<h2 className="center">Naples, Italy</h2>
				</div>

				<div className="sm-col sm-col-12 md-col md-col-6">
					<img name="pic6" onClick={selectPicture} />
					<h2 className="center">Seattle, WA</h2>
				</div>

			</div>
		</div>
	)
}

export default Places;


