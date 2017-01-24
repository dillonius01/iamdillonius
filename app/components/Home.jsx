import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SparkScroll, SparkProxy } from './AppSpark';

import Header from './Header';


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
				<div>{(language === 'English') ? 'Hello, World!' : '世界，你好！'}</div>
				<SparkProxy.div>
					<SparkScroll.div
						className="info-card"
					  timeline={{
					    100: { marginLeft: '-500px', opacity: 0 },
					    250: { marginLeft: '0px', opacity: 1, ease: 'bouncePast' }
					  }}
					 >
					  <h2>{(language === 'English') ? 'Some Content!' : '有些内容'}</h2>
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
