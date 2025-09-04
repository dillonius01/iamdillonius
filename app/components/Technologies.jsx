import React, { Component } from 'react';

/* -----------------    STATEFUL REACT COMPONENT     ------------------ */

class Technologies extends Component {

	constructor(props) {
		super(props);
		this.state = {
			animate0: false,
			animate1: false,
			animate2: false,
			animate3: false,
			animate4: false,
			animate5: false,
			animate6: false,
			animate7: false
		};
		this.handleMouseEvt = this.handleMouseEvt.bind(this);
		this.setIcon = this.setIcon.bind(this);
		this.animationDone = this.animationDone.bind(this);
	}

	animationDone(evt) {
		const toReset = `animate${evt.target.name}`;
		this.setState({[toReset]: false});
	}

	componentDidMount() {
		this.icons.forEach(icon => icon.addEventListener('animationend', this.animationDone));
	}

	componentWillUnmount() {
		this.icons.forEach(icon => icon.removeEventListener('animationend', this.animationDone))
	}

	generateRandomAnimation() {
		const animations = ['pulse', 'spin', 'wiggle', 'zoom', 'hop'];
		const randomIndex = Math.floor(Math.random() * animations.length);
		return animations[randomIndex];
	}

	handleMouseEvt(evt) {
		const toAnimate = `animate${evt.target.name}`;
		this.setState({ [toAnimate]: true });
	}

	setIcon(icon) {
		this.icons = this.icons || [];
		this.icons.push(icon);
	}

	render() {
		const { language } = this.props;
		const { animate0, animate1, animate2, animate3, animate4, animate5, animate6, animate7 } = this.state;
		return (
			<DumbTechnologies
				language={language}
				handleMouseEvt={this.handleMouseEvt}
				generateRandomAnimation={this.generateRandomAnimation}
				setIcon={this.setIcon}
				animate0={animate0}
				animate1={animate1}
				animate2={animate2}
				animate3={animate3}
				animate4={animate4}
				animate5={animate5}
				animate6={animate6}
				animate7={animate7}
			/>
		);
	}

}


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */

const DumbTechnologies = props => {
	const { language,
					handleMouseEvt,
					generateRandomAnimation,
					setIcon,
					animate0,
					animate1,
					animate2,
					animate3,
					animate4,
					animate5,
					animate6,
					animate7 } = props;

	return (
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
					<img onClick={handleMouseEvt} onMouseOver={handleMouseEvt} name="0" ref={ setIcon } className={`tech-img ${animate0 ? generateRandomAnimation() : ''}`} src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt=""/>
				</div>

				<div className="col-6 md-col md-col-3 inline-block tech-img-container">
					<img onClick={handleMouseEvt} onMouseOver={handleMouseEvt} name="1" ref={ setIcon } className={`tech-img ${animate1 ? generateRandomAnimation() : ''}`} src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt=""/>
				</div>

				<div className="col-6 md-col md-col-3 inline-block tech-img-container">
					<img onClick={handleMouseEvt} onMouseOver={handleMouseEvt} name="2" ref={ setIcon } className={`tech-img ${animate2 ? generateRandomAnimation() : ''}`} src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" alt=""/>
				</div>

				<div className="col-6 md-col md-col-3 inline-block tech-img-container">
					<img onClick={handleMouseEvt} onMouseOver={handleMouseEvt} name="3" ref={ setIcon } className={`tech-img ${animate3 ? generateRandomAnimation() : ''}`} src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt=""/>
				</div>

				<div className="col-6 md-col md-col-3 inline-block tech-img-container">
					<img onClick={handleMouseEvt} onMouseOver={handleMouseEvt} name="4" ref={ setIcon } className={`tech-img ${animate4 ? generateRandomAnimation() : ''}`} src="https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png" alt=""/>
				</div>

				<div className="col-6 md-col md-col-3 inline-block tech-img-container">
					<img onClick={handleMouseEvt} onMouseOver={handleMouseEvt} name="5" ref={ setIcon } className={`tech-img ${animate5 ? generateRandomAnimation() : ''}`} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1000px-Postgresql_elephant.svg.png" alt=""/>
				</div>

				<div className="col-6 md-col md-col-3 inline-block tech-img-container">
					<img onClick={handleMouseEvt} onMouseOver={handleMouseEvt} name="6" ref={ setIcon } className={`tech-img ${animate6 ? generateRandomAnimation() : ''}`} src="https://ourcodeworld.com/public-media/gallery/categorielogo-5713d627ccabf.png" alt=""/>
				</div>

				<div className="col-6 md-col md-col-3 inline-block tech-img-container">
					<img onClick={handleMouseEvt} onMouseOver={handleMouseEvt} name="7" ref={ setIcon } className={`tech-img ${animate7 ? generateRandomAnimation() : ''}`} src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt=""/>
				</div>
			</div>
		</div>

	);
};

// instead of passing pulse, pass a function that returns a randomized animation
// could be defined above and invoked inside of the img dumb component

export default Technologies;
