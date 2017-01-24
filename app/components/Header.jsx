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
      playing: true
    };

    this.changePointer = this.changePointer.bind(this);
    this.togglePlay = this.togglePlay.bind(this);

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

  togglePlay() {
    // seems weird for React but this is a very limited DOM manipulation
    let video = document.getElementById('wheel-vid');
    if (this.state.playing) {
      video.pause();
      this.setState({playing: false});
    } else {
      video.play();
      this.setState({playing: true});
    }
  }

  render() {
    const { language, handleToggle } = this.props;
    const { playing, pointer } = this.state;

    return (
      <div>
        <div id="btn-language-container">
          <button id="btn-language" onClick={handleToggle}>{ (language === 'English') ? '汉语' : 'English' }</button>
        </div>
        <div id="top-container">
          <div id="video-overlay" className="center-horiz">
            <div id="title-container">
              <h1>{ (language === 'English') ? 'Dillon Powers' : '彭郎' }</h1>
              <h3 key={pointer} className="header-adj">{this.state[language][this.state.pointer]}</h3>
            </div>
          </div>
          <div id="video-container">
            <video playsInline autoPlay muted loop id="wheel-vid">
              <source src="public/media/nara-wheel.mp4" />
            </video>
            <button onClick={this.togglePlay}>{ playing ? 'Pause' : 'Play' }</button>
          </div>
        </div>
      </div>
    );
  }
}

/* -----------------    REDUX CONTAINER     ------------------ */


const mapStateToProps = ({ language }) => ({ language });

const mapDispatchToProps = dispatch => ({
  handleToggle: () => dispatch(toggleLanguage())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
