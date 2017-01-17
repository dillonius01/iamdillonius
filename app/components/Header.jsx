import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLanguage } from '../ducks/language';


class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { language, handleToggle } = this.props;

    return (
      <div>
        <div id="btn-language-container">
          <button id="btn-language" onClick={handleToggle}>{ (language === 'English') ? '汉语' : 'English' }</button>
        </div>
        <div id="top-container">
          <div id="name-container" className="center-horiz">
            <h1>{ (language === 'English') ? 'Dillon Powers' : '彭郎' }</h1>
          </div>
          <div id="video-container">
            <video playsInline autoPlay muted loop id="wheel-vid">
              <source src="public/media/nara-wheel.mp4" />
            </video>
          </div>
        </div>
        <div className="big">
          <p>paragraph that takes up a bunch of space</p>
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
