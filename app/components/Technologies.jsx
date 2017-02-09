import React, { Component } from 'react';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */

const Technologies = ({ language }) => (
	<div className="clearfix card-container">
		<div className="col-12">
			<h2 className="txt-center txt-intro name">
				{ (language === 'English') ?
					"I love JavaScript" :
					"我爱JS"
				}
			</h2>
			<h2 className="txt-center txt-intro">
				{ (language === 'English') ?
					"These are the tools that I use most" :
					"往下看我经常使用的工具"
				}
			</h2>

			<h2 className="txt-center txt-intro">
				{ (language === 'English') ?
					"I built this site from scratch with React-Redux and Node" :
					"本网站是我自己亲手做的，主要的框架是React-Redux与Node"
				}
			</h2>

			<h2 className="txt-center txt-intro">
				{ (language === 'English') ?
					"I also did all the translations myself" :
					"双语内容也是我自己翻译的"
				}
			</h2>
		</div>
		<div className="col-12">
			
			<div className="col-3 inline-block">
				<img className="fit" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" alt=""/>
			</div>

			<div className="col-3 inline-block">
				<img className="fit" src="http://daynin.github.io/clojurescript-presentation/img/react-logo.png" alt=""/>
			</div>

			<div className="col-3 inline-block">
				<img className="fit" src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" alt=""/>
			</div>

			<div className="col-3 inline-block">
				<img className="fit" src="https://lh3.googleusercontent.com/-whXBCDVxIto/Vz2Rsyz-UjI/AAAAAAAAiJc/UjvR-M2b9tY5SyKFkDY6Q_MbusEINRXkQ/w1024-h1024/Firebase_16-logo.png" alt=""/>
			</div>

			<div className="col-3 inline-block">
				<img className="fit" src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" alt=""/>
			</div>

			<div className="col-3 inline-block">
				<img className="fit" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1000px-Postgresql_elephant.svg.png" alt=""/>
			</div>

			<div className="col-3 inline-block">
				<img className="fit" src="http://mean.io/wp-content/themes/twentysixteen-child/images/express.png" alt=""/>
			</div>
			
			<div className="col-3 inline-block">
				<img className="fit" src="https://onsen.io/blog/content/images/2015/Aug/chaijs-mocha.png" alt=""/>
			</div>
			
		</div>


	</div>

);


export default Technologies;




/*

node url: https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png

redux url: https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png

react url: http://daynin.github.io/clojurescript-presentation/img/react-logo.png

firebase WITH WORDS: https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png
firebase NO WORDS: https://lh3.googleusercontent.com/-whXBCDVxIto/Vz2Rsyz-UjI/AAAAAAAAiJc/UjvR-M2b9tY5SyKFkDY6Q_MbusEINRXkQ/w1024-h1024/Firebase_16-logo.png

git: https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png

postgres: https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1000px-Postgresql_elephant.svg.png

express: https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png

express-trans: http://mean.io/wp-content/themes/twentysixteen-child/images/express.png
mocha-chai: https://onsen.io/blog/content/images/2015/Aug/chaijs-mocha.png
*/