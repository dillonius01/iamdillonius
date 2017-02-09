import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SparkScroll, SparkProxy } from './AppSpark';

import Header from './Header';
import Intro from './Intro';
import Places from './Places';
import Image from './Image';
import Contact from './Contact';
import Technologies from './Technologies';
import Disclaimer from './Disclaimer';

import { setPicture, clearPicture } from '../ducks/picture';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */


class Home extends Component {
	constructor(props) {
		super(props);
		const width = window.innerWidth;
		this.state = {
			width
		};
		this.handleResize = this.handleResize.bind(this);
	}

	handleResize(evt) {
		const width = evt.target.innerWidth;
		if (!width) return;
		this.setState({ width });
	}

	componentWillMount() {
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}


	render() {
		const { language, picture, setPicture, clearPicture } = this.props;
		const { width } = this.state;
		return(
			<div>
				<Header />

				{(width < 750) ?
					<div className="info-card">
						<Intro language={language} />
					</div>
					:
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
				}

				{(width < 750) ?
					<div className="info-card">
						<Technologies language={language} />
					</div>
					:
					<SparkProxy.div>
						<SparkScroll.div
							className="info-card"
						  timeline={{
								topBottom: { marginRight: '-1000px', opacity: 0  },
								topCenter: { marginRight: '0px', opacity: 1, ease: 'bouncePast' },
								bottomCenter: { marginRight: '0px', opacity: 1, ease: 'bouncePast' },
								bottomTop: { marginRight: '-1000px', opacity: 0 }
						  }}>
							<Technologies language={language} />
						</SparkScroll.div>
					</SparkProxy.div>
				}

				{
					(width < 750) ?
					<div className="info-card">
						<Places language={language} setPicture={setPicture} />
					</div>
					:
					<SparkProxy.div proxyId="scale-proxy">
						<SparkScroll.div
							proxy="scale-proxy"
							className="info-card"
							timeline={{
								topBottom: { scale: 0, opacity: 0 },
								topCenter: { scale: 1, opacity: 1 },
								centerTop: { scale: 1, opacity: 1 },
								bottomTop: { scale: 0, opacity: 0 }
							}}>
							<Places language={language} setPicture={setPicture} />
						</SparkScroll.div>
					</SparkProxy.div>
				}

				{
					(width < 750) ?
					<div className="info-card">
						<Contact language={language} />
					</div>
					:
					<SparkProxy.div proxyId="rotate-proxy">
						<SparkScroll.div
							proxy="rotate-proxy"
							className="info-card"
							timeline={{
								centerBottom: { rotation: '0' },
								centerCenter: { rotation: '360' }
							}}>
							<Contact language={language} />
						</SparkScroll.div>
					</SparkProxy.div>
				}


				<Disclaimer language={language} />

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
