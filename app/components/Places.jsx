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
						<img name="central-park.jpg" className="img-thumbnail" src="public/media/central-park.jpg" onClick={selectPicture} />
					</div>
					<h2 className="center">{(language === 'English') ? "New York, NY" : "纽约"}</h2>
				</div>

				<div className="inline-block col-6 md-col md-col-4">
					<div className="aspect">
						<img name="scooter.jpg" className="img-thumbnail" src="public/media/scooter.jpg" onClick={selectPicture} />
					</div>
					<h2 className="center">{(language === 'English') ? "Beijing, China" : "北京"}</h2>
				</div>

				<div className="inline-block col-6 md-col md-col-4">
					<div className="aspect">
						<img name="diamondhead.jpg" className="img-thumbnail" src="public/media/diamondhead.jpg" onClick={selectPicture} />
					</div>
					<h2 className="center">{(language === 'English') ? "Honolulu, HI" : "夏威夷"}</h2>
				</div>

				<div className="inline-block col-6 md-col md-col-4">
					<div className="aspect">
						<img name="weeks.jpg" className="img-thumbnail" src="public/media/weeks.jpg" onClick={selectPicture}/>
					</div>
					<h2 className="center">{(language === 'English') ? "Cambrdige, MA" : "波士顿"}</h2>
				</div>

				<div className="inline-block col-6 md-col md-col-4">
					<div className="aspect">
						<img name="trevi.jpg" className="img-thumbnail" src="public/media/trevi.jpg" onClick={selectPicture}/>
					</div>
					<h2 className="center">{(language === 'English') ? "Naples, Italy" : "意大利"}</h2>
				</div>

				<div className="inline-block col-6 md-col md-col-4">
					<div className="aspect">
						<img name="seattle.jpg" src="public/media/seattle.jpg" className="img-thumbnail" onClick={selectPicture} />
					</div>
					<h2 className="center">{(language === 'English') ? "Seattle, WA" : "西雅图"}</h2>
				</div>

			</div>
		</div>
	)
}

export default Places;

