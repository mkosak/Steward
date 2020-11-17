import React from 'react';
import PropTypes from 'prop-types';
import Request from './../request/Request';

import './accordion.scss';

const Accordion = (props) => {
    const { user, active } = props;

    return (
        <div className="stewart-accordion">
            <details className="flix-accordion" open={active === 'dashboard'}>
                <summary className="flix-accordion__title stewart-accordion__title">
                    <h3 className="flix-h3">
                        <i className="flix-icon flix-icon--sm flix-icon-apps" />
                        Dashboard
                    </h3>
                </summary>
                <article className="flix-accordion__content stewart-accordion__content">
                    <div className="user-card">
                        <img src={user.img} alt="" className="user-card__img" />
                        <div className="user-card__name">
                            {user.name}
                            <span className="user-card__position">
                                {user.position}
                            </span>
                        </div>
                    </div>
                    <ul className="user-data">
                        <li>
                            <div className="user-data__name">Start Date</div>
                            <div className="user-data__value">
                                {user.startDate}
                            </div>
                        </li>
                        <li>
                            <div className="user-data__name">
                                Vacation Policy
                            </div>
                            <div className="user-data__value">
                                {user.policy}
                            </div>
                        </li>
                        <li>
                            <div className="user-data__name">Approver</div>
                            <div className="user-data__value">
                                {user.approver}
                            </div>
                        </li>
                    </ul>
                </article>
            </details>
            <details className="flix-accordion" open={active === 'calendar'}>
                <summary className="flix-accordion__title stewart-accordion__title">
                    <h3 className="flix-h3">
                        <i className="flix-icon flix-icon--sm flix-icon-calendar" />
                        Calendar
                    </h3>
                </summary>
                <article className="flix-accordion__content stewart-accordion__content">
                    <Request />
                </article>
            </details>
            <details className="flix-accordion" open={active === 'requests'}>
                <summary className="flix-accordion__title stewart-accordion__title">
                    <h3 className="flix-h3">
                        <i className="flix-icon flix-icon--sm flix-icon-invoice" />
                        Requests
                    </h3>
                </summary>
                <article className="flix-accordion__content stewart-accordion__content"></article>
            </details>
            <details className="flix-accordion" open={active === 'teams'}>
                <summary className="flix-accordion__title stewart-accordion__title">
                    <h3 className="flix-h3">
                        <i className="flix-icon flix-icon--sm flix-icon-collaboration" />
                        Teams
                    </h3>
                </summary>
                <article className="flix-accordion__content stewart-accordion__content"></article>
            </details>
        </div>
    );
};

Accordion.propTypes = {
    user: PropTypes.object.isRequired,
    active: PropTypes.string.isRequired,
};

export default Accordion;
