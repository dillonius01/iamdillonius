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
      pulse: false,
      zoom: false
    };

    this.changePointer = this.changePointer.bind(this);
    this.onLanguageClick = this.onLanguageClick.bind(this);
    this.animationDone = this.animationDone.bind(this);

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

  componentDidMount() {
    this.langBtn.addEventListener('animationend', this.animationDone);
  }

  componentWillUnmount() {
    this.langBtn.removeEventListener('animationend', this.animationDone);
  }

  changePointer() {
    this.setState(prevState => {
      let adjLen = prevState.English.length - 1;
      let plusOne = prevState.pointer + 1;
      let pointer = (plusOne > adjLen) ? 0 : plusOne;
      return { pointer };
    });
  }


  animationDone() {
    this.setState({pulse: false}); // resets class name so can re-animate
  }

  onLanguageClick() {
    const { toggleLanguage } = this.props;
    this.setState({pulse: true}); // toggles class name so animation runs
    toggleLanguage();
  }

  render() {
    const { language } = this.props;
    const { pointer, pulse } = this.state;

    return (
      <div>
        <div id="btn-language-container">
          <button
            id="btn-language"
            onClick={this.onLanguageClick}
            className={pulse ? 'pulse' : ''}
            ref={ langBtn => this.langBtn = langBtn }
          >
            { (language === 'English') ? '汉语' : 'English' }
          </button>
        </div>
          <div id="pic-parent">
            <div id="pic-child" className="center-horiz">
              <div id="title-container">
                <h1 className="header-txt">{ (language === 'English') ? 'Dillon Powers' : '彭郎' }</h1>
                <h3 key={pointer} className="header-txt header-adj">{this.state[language][this.state.pointer]}</h3>
              </div>
            </div>
          </div>
      </div>
    );
  }
}


/* -----------------    REDUX CONTAINER     ------------------ */


const mapStateToProps = ({ language }) => ({ language });

const mapDispatchToProps = dispatch => ({
  toggleLanguage: () => dispatch(toggleLanguage())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
