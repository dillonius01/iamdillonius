import React, { Component } from 'react';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */

const Technologies = ({ language }) => (
	<div className="clearfix card-container">
		<div className="col-12">
			<h2 className="txt-center txt-intro name">
				{ (language === 'English') ?
					"I love coding" :
					"我爱写代码"
				}
			</h2>
			<h2 className="txt-center txt-intro">
				{ (language === 'English') ?
					"These are the tools that I use all the time" :
					"往下看我经常使用的工具"
				}
			</h2>

			<h2 className="txt-center txt-intro">
				{ (language === 'English') ?
					"I built this site myself using React, Redux, and Node" :
					"本网站是我自己亲手做的，主要的框架是React,Redux与Node"
				}
			</h2>

			<h2 className="txt-center txt-intro">
				{ (language === 'English') ?
					"(click or hover for some fun animations!)" :
					"(按键看看有什么好玩的!)"
				}
			</h2>
		</div>

		<div className="col-12">
	
			<div className="col-6 md-col md-col-3 inline-block tech-img-container">
				<img className="tech-img" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt=""/>
			</div>

			<div className="col-6 md-col md-col-3 inline-block tech-img-container">
				<img className="tech-img" src="http://daynin.github.io/clojurescript-presentation/img/react-logo.png" alt=""/>
			</div>

			<div className="col-6 md-col md-col-3 inline-block tech-img-container">
				<img className="tech-img" src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" alt=""/>
			</div>

			<div className="col-6 md-col md-col-3 inline-block tech-img-container">
				<img className="tech-img" src="https://lh3.googleusercontent.com/-whXBCDVxIto/Vz2Rsyz-UjI/AAAAAAAAiJc/UjvR-M2b9tY5SyKFkDY6Q_MbusEINRXkQ/w1024-h1024/Firebase_16-logo.png" alt=""/>
			</div>

			<div className="col-6 md-col md-col-3 inline-block tech-img-container">
				<img className="tech-img" src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" alt=""/>
			</div>

			<div className="col-6 md-col md-col-3 inline-block tech-img-container">
				<img className="tech-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1000px-Postgresql_elephant.svg.png" alt=""/>
			</div>

			<div className="col-6 md-col md-col-3 inline-block tech-img-container">
				<img className="tech-img" src="http://mean.io/wp-content/themes/twentysixteen-child/images/express.png" alt=""/>
			</div>

			<div className="col-6 md-col md-col-3 inline-block tech-img-container">
				<img className="tech-img" src="https://onsen.io/blog/content/images/2015/Aug/chaijs-mocha.png" alt=""/>
			</div>
		</div>
	</div>

);


export default Technologies;
