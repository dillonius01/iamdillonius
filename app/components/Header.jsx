import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLanguage } from '../ducks/language';

/* Think of this Home component as your main content. If you add new routes,
their content will replace what you see here (when you navigate to them).  */

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
        <div className="center-horiz">
          <h1>{ (language === 'English') ? 'Dillon Powers' : '彭郎' }</h1>
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
