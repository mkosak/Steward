import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    NavLink,
} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';

import {
    MainWrapper,
    PageContainer,
    ThemeWrapper,
    Header,
    HeaderUserWidget,
} from '@flixbus/honeycomb-react';

import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRoute from './components/private-route/PrivateRoute';
import Dashboard from './components/dashboard/Dashboard';
import CalendarView from './components/calendar/CalendarView';

import './App.scss';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        // Redirect to login
        window.location.href = './login';
    }
}

class App extends Component {
    render() {
        const headerBrand = {
            alt: 'Stewart',
            image: 'logo.svg',
            href: '/',
        };

        const navigation = [
            {
                content: 'Dashboard',
                href: '/dashboard',
                RouterLink: NavLink,
            },
            {
                content: 'Calendar',
                href: '/calendar',
                RouterLink: NavLink,
            },
        ];
        const profileNavigation = [
            {
                content: 'Profile',
                href: '/profile',
                RouterLink: NavLink,
            },
            {
                content: 'Logout',
                href: '/logout',
                RouterLink: NavLink,
            },
        ];

        return (
            <Provider store={store}>
                <Router>
                    <ThemeWrapper theme="default">
                        <MainWrapper extraClasses="stewart-main-wrapper">
                            <Header
                                brand={headerBrand}
                                navigation={navigation}
                                widget={
                                    <HeaderUserWidget
                                        url={{
                                            RouterLink: Link,
                                            to: '/logout',
                                        }}
                                        text="John Doe"
                                        navigation={profileNavigation}
                                    />
                                }
                                extraClasses="stewart-header"
                                stickyWidget
                                fixed={false}
                            />

                            <PageContainer extraClasses="stewart-page-container">
                                <section className="flix-page-container flix-space-xs-top stewart-page-container">
                                    <Route exact path="/" component={Landing} />
                                    <Route
                                        exact
                                        path="/register"
                                        component={Register}
                                    />
                                    <Route
                                        exact
                                        path="/login"
                                        component={Login}
                                    />

                                    <Switch>
                                        <PrivateRoute
                                            exact
                                            path="/dashboard"
                                            component={Dashboard}
                                        />
                                        <PrivateRoute
                                            exact
                                            path="/calendar"
                                            component={CalendarView}
                                        />
                                    </Switch>
                                </section>
                            </PageContainer>
                        </MainWrapper>
                    </ThemeWrapper>
                </Router>
            </Provider>
        );
    }
}
export default App;
