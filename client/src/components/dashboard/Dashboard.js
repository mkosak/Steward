import axios from 'axios';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

import Accordion from './../panel/Accordion';

import './Dashboard.scss';

const Dashboard = (props) => {
    const { user } = props.auth;
    const [isLoaded, setIsLoaded] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get('/api/vacations', { params: { email: user.email } })
            .then((res) => {
                setItems(res.data);
                setIsLoaded(false);
            })
            .catch();
    }, [user.email]);

    useEffect(() => {
        axios
            .get('/api/vacations', { params: { email: user.email } })
            .then((res) => {
                setItems(res.data);
                setIsLoaded(false);
            })
            .catch();
    }, [user.email]);

    return (
        <div className="flix-grid">
            <div className="user-panel">
                <Accordion user={user} active="dashboard" />
            </div>
            <div className="flix-grid main-panel">
                <div className="flix-col-9 vacations">
                    <div className="flix-box">
                        {isLoaded ? (
                            <div>
                                <span className="flix-skeleton flix-skeleton--h-md flix-skeleton--w-md"></span>
                                <p className="flix-text">
                                    <span className="flix-skeleton"></span>
                                    <span className="flix-skeleton"></span>
                                    <span className="flix-skeleton flix-skeleton--w-lg"></span>
                                    <span className="flix-skeleton flix-skeleton--w-sm"></span>
                                </p>
                                <span className="flix-skeleton flix-skeleton--h-lg flix-skeleton--w-md flix-skeleton--flush-bottom"></span>
                            </div>
                        ) : (
                            <div>
                                <h2 className="flix-h2">Vacation Overview</h2>
                                <div className="flix-grid">
                                    <div className="flix-col">
                                        Planned {items.length}
                                    </div>
                                    <div className="flix-col">Casual</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flix-col-3">
                    <h2 className="flix-h2">Public holidays (Ukraine)</h2>
                </div>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
