import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../actions/authActions';

const Navbar = (props) => {
    const { user, isAuthenticated } = props.auth;

    const onLogoutClick = (e) => {
        e.preventDefault();
        props.logoutUser();
    };

    const navbar = (
        <div className="flix-header-navbar">
            <div className="flix-header-nav-wrapper">
                <ul className="flix-header-nav">
                    <li className="flix-header-nav__item">
                        <Link
                            to="/"
                            className="flix-header-nav__link flix-header-nav__link--active"
                        >
                            Dashboard
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flix-header-navbar__overlay flix-overlay"></div>
        </div>
    );

    const profile = (
        <div className="flix-header-widgets flix-header-widgets--sticky">
            <div className="flix-header-user-widget">
                <div className="flix-header-user-widget__content">
                    <ul className="flix-header-nav">
                        <li className="flix-header-nav__item flix-header-nav__item--has-subnav">
                            <span className="flix-header-nav__link">
                                {user.name}
                            </span>
                            <ul className="flix-header-subnav">
                                <li className="flix-header-subnav__item">
                                    <Link
                                        to="/profile"
                                        className="flix-header-subnav__link"
                                    >
                                        Profile
                                    </Link>
                                </li>
                                <li className="flix-header-subnav__item">
                                    <a
                                        href="/logout"
                                        onClick={onLogoutClick}
                                        className="flix-header-subnav__link"
                                    >
                                        Log out
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

    return (
        <header className="flix-header flix-header--unfixed">
            <div className="flix-header__inner">
                <button className="flix-header-nav-toggle" title="Toggle menu">
                    <i className="flix-icon flix-icon-burger"></i>
                </button>

                <div className="flix-header-brand flix-header-brand--square">
                    <Link to="/" className="flix-header-brand__link">
                        <img
                            src="logo.svg"
                            alt="Flix visual"
                            width="101"
                            height="27"
                        />
                    </Link>
                </div>

                {isAuthenticated && navbar}

                {isAuthenticated && profile}
            </div>
        </header>
    );
};

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
