import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLanguage } from '../ducks/language';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      English: ['developer', 'runner', 'linguist'],
      Mandarin: ['黑客', '跑步爱好者', '语言学家'],
      pointer: 0,
      interval: null
    };

    this.changePointer = this.changePointer.bind(this);
  }

  componentWillMount() {
    this.setState(prevState => {
      if (prevState.interval) {
        clearInterval(prevState.interval);
        return { interval: null };
      }
      let interval = setInterval(this.changePointer, 2000);
      return { interval };
    })
  }

  changePointer() {
    this.setState(prevState => {
      let adjLen = prevState.English.length - 1;
      let plusOne = prevState.pointer + 1;
      let pointer = (plusOne > adjLen) ? 0 : plusOne;
      return { pointer };
    })
  }

  render() {
    const { language, handleToggle } = this.props;

    return (
      <div>
        <div id="btn-language-container">
          <button id="btn-language" onClick={handleToggle}>{ (language === 'English') ? '汉语' : 'English' }</button>
        </div>
        <div id="top-container">
          <div id="video-overlay" className="center-horiz">
            <div id="title-container">
              <h1>{ (language === 'English') ? 'Dillon Powers' : '彭郎' }</h1>
              <p>{this.state[language][this.state.pointer]}</p>
            </div>
          </div>
          <div id="video-container">
            <video playsInline autoPlay muted loop id="wheel-vid">
              <source src="public/media/nara-wheel.mp4" />
            </video>
          </div>
        </div>
        <div className="big">
          <h3>paragraph that takes up a bunch of space</h3>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ language }) => ({ language });

const mapDispatchToProps = dispatch => ({
  handleToggle: () => dispatch(toggleLanguage())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
