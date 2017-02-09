import React, { Component } from 'react';


/* -----------------   CLASS-BASED REACT COMPONENT     ------------------ */

class Places extends Component {
	constructor(props) {
		super(props);

		this.selectPicture = this.selectPicture.bind(this);
	}

	selectPicture(evt) {
		const picture = evt.target.name;
		const { setPicture } = this.props;
		setPicture(picture);
	}


	render() {

		const { language } = this.props;
		return(

				<DumbPlaces
					language={language}
					selectPicture={this.selectPicture}
				/>

		);
	}
}


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */

const DumbPlaces = props => {
	const { language, selectPicture } = props;
	return(
		<div className="clearfix card-container">
			<div className="sm-col sm-col-12">
				<h2 className="txt-center txt-intro name">
					{ (language === 'English') ?
						"I've lived in some interesting places" :
						"我住过的地方满有意思"
					}
				</h2>
				<h2 className="txt-center txt-intro">
					{ (language === 'English') ?
						"Here are pictures of my favorites" :
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

			<div className="col-12">
				<div className="inline-block col-6 md-col md-col-4">
					<div className="aspect">
						<img name="MzWva2M.jpg" className="img-thumbnail" src="http://i.imgur.com/MzWva2M.jpg" onClick={selectPicture} />
					</div>
					<h2 className="center">{(language === 'English') ? "New York, NY" : "纽约"}</h2>
				</div>

				<div className="inline-block col-6 md-col md-col-4">
					<div className="aspect">
						<img name="TAkDLDM.jpg" className="img-thumbnail" src="http://i.imgur.com/TAkDLDM.jpg" onClick={selectPicture} />
					</div>
					<h2 className="center">{(language === 'English') ? "Beijing, China" : "北京"}</h2>
				</div>

				<div className="inline-block col-6 md-col md-col-4">
					<div className="aspect">
						<img name="UILCsnl.jpg" className="img-thumbnail" src="http://i.imgur.com/UILCsnl.jpg" onClick={selectPicture} />
					</div>
					<h2 className="center">{(language === 'English') ? "Honolulu, HI" : "夏威夷"}</h2>
				</div>

				<div className="inline-block col-6 md-col md-col-4">
					<div className="aspect">
						<img name="CO2xs17.jpg" className="img-thumbnail" src="http://i.imgur.com/CO2xs17.jpg" onClick={selectPicture}/>
					</div>
					<h2 className="center">{(language === 'English') ? "Cambridge, MA" : "波士顿"}</h2>
				</div>

				<div className="inline-block col-6 md-col md-col-4">
					<div className="aspect">
						<img name="dJnY8na.jpg" className="img-thumbnail" src="http://i.imgur.com/dJnY8na.jpg" onClick={selectPicture}/>
					</div>
					<h2 className="center">{(language === 'English') ? "Naples, Italy" : "意大利"}</h2>
				</div>

				<div className="inline-block col-6 md-col md-col-4">
					<div className="aspect">
						<img name="tZ9ovtX.jpg" src="http://i.imgur.com/tZ9ovtX.jpg" className="img-thumbnail" onClick={selectPicture} />
					</div>
					<h2 className="center">{(language === 'English') ? "Seattle, WA" : "西雅图"}</h2>
				</div>

			</div>
		</div>
	)
}

export default Places;

