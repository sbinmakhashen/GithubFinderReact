import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({gitIcon, navTitle}) =>{

    return (
      <nav className="navbar bg-primary">
      <h1>
        <i className={gitIcon} />
        {navTitle}
      </h1>
    </nav>
    )
}
  // creating default properties
  Navbar.defaultProps = {
    gitIcon: 'fab fa-github',
    navTitle: 'Navbar'
  };

  Navbar.propTypes = {
    gitIcon: PropTypes.string.isRequired,
    navTitle: PropTypes.string.isRequired
  }
export default Navbar
