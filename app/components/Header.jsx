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
        <h2>Dillon Powers</h2>
        <p>CURRENT LANGUAGE: { language }</p>
        <button onClick={handleToggle}>{ (language === 'English') ? '汉语' : 'English' }</button>
      </div>
    );
  }
}

const mapStateToProps = ({ language }) => ({ language });

const mapDispatchToProps = dispatch => ({
  handleToggle: () => dispatch(toggleLanguage())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
