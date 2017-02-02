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
				<SparkProxy.div>
					<SparkScroll.div
						className="info-card"
					  timeline={{
					    250: { marginLeft: '-1000px', opacity: 0 },
					    450: { marginLeft: '0px', opacity: 1, ease: 'bouncePast' }
					  }}
					 >
					  <Intro language={language} />
					 </SparkScroll.div>
				 </SparkProxy.div>

				<div className="big">
				  <p>paragraph that takes up a bunch of space</p>
				</div>


			</div>
		)
	}

}


/* -----------------    REDUX CONTAINER     ------------------ */


const mapStateToProps = ({ language }) => ({ language });

export default connect(mapStateToProps, null)(Home);
