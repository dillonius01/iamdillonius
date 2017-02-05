import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SparkScroll, SparkProxy } from './AppSpark';

import Header from './Header';
import Intro from './Intro';
import Places from './Places';
import Image from './Image';

import { setPicture, clearPicture } from '../ducks/picture';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */


class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { language, picture, setPicture, clearPicture } = this.props;
		return(
			<div>
				<Header />

				<div className="spacer"></div>

				<SparkProxy.div>
					<SparkScroll.div
						className="info-card"
					  timeline={{
							topBottom: { marginLeft: '-1000px', opacity: 0  },
					    topCenter: { marginLeft: '0px', opacity: 1, ease: 'bouncePast' },
					    bottomCenter: { marginLeft: '0px', opacity: 1, ease: 'bouncePast' },
					    bottomTop: { marginLeft: '-1000px', opacity: 0 }
					  }}>
						<Intro language={language} />
					</SparkScroll.div>
				</SparkProxy.div>

				<div className="spacer"></div>

				<SparkProxy.div>
					<SparkScroll.div
						className="info-card"
						timeline={{
							topBottom: { marginRight: '-1000px', opacity: 0  },
							topCenter: { marginRight: '0px', opacity: 1, ease: 'bouncePast' },
							bottomCenter: { marginRight: '0px', opacity: 1, ease: 'bouncePast' },
							bottomTop: { marginRight: '-1000px', opacity: 0 }
						}}>
						<Places language={language} setPicture={setPicture} />
					</SparkScroll.div>
				</SparkProxy.div>

				<div className="spacer"></div>

				<Image picture={picture} clearPicture={clearPicture} />

			</div>
		);
	}

}


/* -----------------    REDUX CONTAINER     ------------------ */


const mapStateToProps = ({ language, picture }) => ({ language, picture });

const mapDispatchToProps = dispatch => ({

	setPicture: picture => dispatch(setPicture(picture)),
	clearPicture: () => dispatch(clearPicture())

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
