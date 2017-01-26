import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLanguage } from '../ducks/language';


/* -----------------    PRESENTATIONAL COMPONENT     ------------------ */


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      English: ['developer', 'runner', 'linguist', 'cellist', 'historian', 'singer'],
      Mandarin: ['黑客', '跑步爱好者', '语言学家', '大提琴手', '历史学家', '歌手'],
      pointer: 0,
      interval: null,
      playing: true,
      pulse: false
    };

    this.changePointer = this.changePointer.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.onLanguageClick = this.onLanguageClick.bind(this);

  }

  componentWillMount() {
    this.setState(prevState => {
      if (prevState.interval) {
        clearInterval(prevState.interval);
        return { interval: null };
      }
      let interval = setInterval(this.changePointer, 4000);
      return { interval };
    });
  }

  changePointer() {
    this.setState(prevState => {
      let adjLen = prevState.English.length - 1;
      let plusOne = prevState.pointer + 1;
      let pointer = (plusOne > adjLen) ? 0 : plusOne;
      return { pointer };
    });
  }

  togglePlay(evt) {
    const video = evt.target;
    if (this.state.playing) {
      video.pause();
      this.setState({playing: false});
    } else {
      video.play();
      this.setState({playing: true});
    }
  }

  onLanguageClick() {
    const { toggle_language } = this.props;
    this.setState({pulse: true}); // NEED TO SET BACK TO FALSE onanimationend
    console.log('this.state.pulse is', this.state.pulse)
    toggle_language();
  }

  render() {
    const { language } = this.props;
    const { playing, pointer, pulse } = this.state;

    return (
      <div>
        <div id="btn-language-container">
          <button id="btn-language" onClick={this.onLanguageClick}>{ (language === 'English') ? '汉语' : 'English' }</button>
        </div>
        <div id="top-container">
          <div id="video-overlay" className="center-horiz">
            <div id="title-container">
              <h1>{ (language === 'English') ? 'Dillon Powers' : '彭郎' }</h1>
              <h3 key={pointer} className="header-adj">{this.state[language][this.state.pointer]}</h3>
              <div id="play-pause-container">
                <span className={pulse ? 'pulse' : ''} id="play-pause">{ playing ? 'Pause' : 'Play' }</span>
              </div>
            </div>
          </div>
          <div id="video-container">
            <video onClick={this.togglePlay} playsInline autoPlay muted loop id="wheel-vid">
              <source src="public/media/nara-wheel.mp4" />
            </video>
          </div>
        </div>
      </div>
    );
  }
}


/* -----------------    REDUX CONTAINER     ------------------ */


const mapStateToProps = ({ language }) => ({ language });

const mapDispatchToProps = dispatch => ({
  toggle_language: () => dispatch(toggleLanguage())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
