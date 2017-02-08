import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SparkScroll, SparkProxy } from './AppSpark';

import Header from './Header';
import Intro from './Intro';
import Places from './Places';
import Image from './Image';
import Contact from './Contact';

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
		// console.log('evt.target is', evt.target)
		const width = evt.target.innerWidth;
		console.log('handling for new width ', width)
		if (!width) return;
		this.setState({ width });
	}

	componentWillMount() {
		console.log('shit is mounting')
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

				{
					(width < 750) ?
					<div className="info-card">
						<Places language={language} setPicture={setPicture} />
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
							<Places language={language} setPicture={setPicture} />
						</SparkScroll.div>
					</SparkProxy.div>	
				}
				
				<div className="spacer"></div>

				<div className="info-card">
					<Contact language={language}/>
				</div>

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
