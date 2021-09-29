import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {

    renderError({ error, touched }) {
        if (error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }

    }

    renderInput = (formProps) => {
        return (
            <div className="field ">
                <label>{formProps.label}</label>
                <input {...formProps.input} autoComplete="off" />
                <div>{this.renderError(formProps.meta)}</div>
            </div>
        )
    };

    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.createStream(formValues);
    }



    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'Invalid Title'
    }
    if (!formValues.description) {
        errors.description = 'Invalid Description'
    }
    return errors;
};

const formWrapped = reduxForm({
    form: 'createStream',
    validate: validate
})(StreamCreate);

export default connect(null, { createStream: createStream })(formWrapped);