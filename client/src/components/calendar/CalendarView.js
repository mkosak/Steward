import React, { useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components
import { Dropdown, ButtonArrow, Calendar } from '@flixbus/honeycomb-react';
import Accordion from '../panel/Accordion';

// actions
// import { setStartDate, setEndDate } from './../../actions/datesActions';
import { SET_START_DATE, SET_END_DATE } from './../../actions/types';
import store from './../../store';

import './calendar.scss';

const CalendarView = (props) => {
    const { user, dates } = props;

    // console.log('dates', dates);

    const getYear = moment().year(); // current year
    const currentDate = moment().toDate(); // current date
    const endDate = moment().add(1, 'year').toDate(); // end date is current year plus one year
    const yearsDropdown = [
        { text: moment().add(1, 'year').year(), href: '/' }, // next year
        { text: moment().add(2, 'year').year(), href: '/' }, // and a year after
    ];

    // Years dropdown
    const [arrowDirection, setArrowDirection] = useState('bottom');
    const toggleArrowButton = (isActive) => {
        setArrowDirection(isActive ? 'top' : 'bottom');
    };

    // User dates input
    const handleSelection = (date) => {
        if (dates.start === null) {
            store.dispatch({ type: SET_START_DATE, payload: date });
            // setStartDate(date);
            return;
        }
        if (dates.end === null) {
            store.dispatch({ type: SET_END_DATE, payload: date });
            //setEndDate(date);
            return;
        }
        if (dates.end !== null && dates.start !== null) {
            store.dispatch({ type: SET_START_DATE, payload: null });
            store.dispatch({ type: SET_START_DATE, payload: date });
            // setEndDate(null);
            // setStartDate(date);
            return;
        }
    };

    return (
        <div className="flix-grid">
            <div className="user-panel">
                <Accordion user={user} active="calendar" />
            </div>
            <div className="main-panel">
                <Dropdown
                    links={yearsDropdown}
                    onToggle={toggleArrowButton}
                    extraClasses="stewart-year-dropdown"
                >
                    <ButtonArrow Elem="button" direction={arrowDirection}>
                        {getYear}
                    </ButtonArrow>
                </Dropdown>
                <Calendar
                    flat
                    id="stewart-calendar"
                    extraClasses="stewart-calendar-list"
                    startDate={currentDate}
                    endDate={endDate}
                    startSelected={dates.start}
                    endSelected={dates.end}
                    handleSelect={handleSelection}
                />
            </div>
        </div>
    );
};

CalendarView.propTypes = {
    user: PropTypes.object.isRequired,
    dates: PropTypes.shape({
        start: PropTypes.instanceOf(Date),
        end: PropTypes.instanceOf(Date),
    }),
};

const mapStateToProps = (state) => ({
    user: state.auth,
    dates: state.dates,
});

export default connect(mapStateToProps)(CalendarView);
