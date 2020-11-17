import React, { useReducer } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    FormControl,
    Select,
    Textarea,
    Button,
    Text,
    Icon,
    IconCalendar,
} from '@flixbus/honeycomb-react';
import CONFIG from './../../config';

const Request = (props) => {
    const { user, dates } = props;

    const initialForm = {
        type: 'vacation',
        email: user.email,
        dateStart: dates.start,
        dateEnd: dates.end,
        cause: '',
        status: 'pending',
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case 'type':
                return { type: action.payload };
            case 'cause':
                return { cause: action.payload };
            default:
                throw new Error();
        }
    };
    const [form, dispatch] = useReducer(reducer, initialForm);

    const onSubmit = (e) => {
        e.preventDefault();

        console.log('SUBMIT FORM', form);

        //props.addVacation(newVacation, props.history);
    };

    const types = [
        {
            value: 'vacation',
            displayValue: 'Regular vacation',
        },
        {
            value: 'sick-day',
            displayValue: 'Sick day',
        },
        {
            value: 'work-from-home',
            displayValue: 'Work from home',
        },
        {
            value: 'unpaid-leave',
            displayValue: 'Unpaid leave',
        },
    ];

    return (
        <div>
            <h4 className="flix-h4">New Request</h4>
            <form noValidate onSubmit={onSubmit}>
                <FormControl>
                    <Select
                        id="type"
                        label="Type"
                        options={types}
                        placeholder="Select a type"
                        onChange={(e) =>
                            dispatch({ type: 'type', payload: e.target.value })
                        }
                    />
                </FormControl>
                <FormControl>
                    <Text>
                        <Icon InlineIcon={IconCalendar} size="sm" />
                        From: {dates.start}
                    </Text>
                    <Text>
                        <Icon InlineIcon={IconCalendar} size="sm" />
                        To: {dates.end}
                    </Text>
                </FormControl>
                <FormControl>
                    <Textarea
                        name="cause"
                        id="cause"
                        label="Cause"
                        onChange={(e) =>
                            dispatch({ type: 'cause', payload: e.target.value })
                        }
                    />
                </FormControl>
                <Button appearance="secondary">Send request</Button>
            </form>
        </div>
    );
};

Request.propTypes = {
    user: PropTypes.object.isRequired,
    dates: PropTypes.shape({ start: PropTypes.string, end: PropTypes.string }),
};

const mapStateToProps = (state) => ({
    user: state.auth,
    dates: {
        start: moment(state.dates.start).format(CONFIG.dateFormat),
        end: moment(state.dates.end).format(CONFIG.dateFormat),
    },
});

export default connect(mapStateToProps)(Request);
