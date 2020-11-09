import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { Calendar } from '@flixbus/honeycomb-react';
import Accordion from './../panel/Accordion';

const CalendarView = (props) => {
    const { user } = props.auth;
    const [selected, setSelected] = useState(null);

    return (
        <div className="flix-grid">
            <div className="flix-col-3">
                <Accordion user={user} />
            </div>
            <div className="flix-col-9">
                CALENDAR
                {/* <Calendar
                    id="simple-picker"
                    selected={selected}
                    startDate={new Date()}
                    endDate={new Date()}
                    handleSelect={(date) => setSelected(date)}
                /> */}
            </div>
        </div>
    );
};

CalendarView.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(CalendarView);
