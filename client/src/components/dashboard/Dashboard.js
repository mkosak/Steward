import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

const Dashboard = (props) => {
    const { user } = props.auth;

    const initialState = {
        type: '',
        email: user.email,
        dateStart: '',
        dateEnd: '',
        status: 'pending',
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'type':
                return { type: action.payload };
            case 'dateStart':
                return { dateStart: action.payload };
            case 'dateEnd':
                return { dateEnd: action.payload };
            default:
                throw new Error();
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const onInput = ({ name, target }) => () => {
        dispatch({ type: name, payload: target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const newVacation = state;

        console.log('SUBMIT FORM', newVacation);

        //props.addVacation(newVacation, props.history);
    };

    return (
        <div>
            <div className="row">
                <form noValidate onSubmit={onSubmit}>
                    <div className="input-field col s12">
                        <input
                            onChange={onInput('type')}
                            defaultValue={state.type}
                            id="type"
                            type="type"
                        />
                        <label htmlFor="type">Type</label>
                    </div>
                    <div className="col s12">
                        <button
                            type="submit"
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                            Add vacation
                        </button>
                    </div>
                </form>
                {/* type: req.body.name, email: req.body.email, dateStart:
                req.body.dateStart, dateEnd: req.body.dateEnd, status:
                'pending', */}
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
