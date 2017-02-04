import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SparkScroll, SparkProxy } from './AppSpark';

import Header from './Header';
import Intro from './Intro';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */


class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { language } = this.props;
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
					  }}
					 >
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
						}}
					>
						<div style={{ height: "25vh" }}>this will be moar cool stuff</div>
					</SparkScroll.div>
				</SparkProxy.div>

				<div className="big"><p>some big text here</p></div>
			</div>
		)
	}

}


/* -----------------    REDUX CONTAINER     ------------------ */


const mapStateToProps = ({ language }) => ({ language });

export default connect(mapStateToProps, null)(Home);
