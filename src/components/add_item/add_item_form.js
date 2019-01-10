import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addNewItem} from '../../actions';

class AddItemForm extends Component {
    renderInput(props){
            console.log(arguments);
        return (
            <div className={`col ${props.size || 's12'}`}>
                <div className="input-field">
                    <input type="text" {...props.input} autoComplete="off"/>
                    <label htmlFor={props.id}>{props.label}</label>
                </div>
                <p className="text-red text-darken-2">{props.meta.touched && props.meta.error}</p>
            </div>
            
        )
    }
    handleAddItem = async (values) => {
        console.log('Add Item form values:',values);
        await this.props.addNewItem(values);
        
    }

    render(){
        const{handleSubmit, reset}=this.props
        return(
            <form onSubmit={handleSubmit(this.handleAddItem)}>
                <div className="row">
                    <Field component={this.renderInput} name="title" id="title" label="Title" size="s12 m8 offset-m2"/>                        
                </div>
                <div className="row">
                    <Field component={this.renderInput} name="details" id="details" label="Details" size="s12 m8 offset-m2"/>
                </div>
                <div className="row">
                    <div className="col s6 center">
                        <button onClick={reset} className="btn grey lighten-1">Add Item</button>
                    </div>
                    <div className="col s6 center">
                        <button className="btn purple lighten-2">Add Item</button>
                    </div>
                </div>
            </form>
        );
    }
}

function validate(values){
    const {title, details} = values;
    const errors = {}

    if(!title){
        errors.title = 'Please enter a title'; //put a funtion in here to do some really cool things
    }

    if(!details){
        errors.details = 'Please enter some details';
    }

    return errors;
}

function mapStateToProps(state){
    return{
        initialValues:{
            title:"Title"
        }
    }
}

AddItemForm = connect(mapStateToProps,{
    addNewItem
})(withRouter(AddItemForm));

export default reduxForm({
    form:'add-item-form',
    validate,
    // initialValues: {
    //     title: 'This is the default title',
    //     details: 'Enter your details here'
    // }
    enableReinitialize:true,
})(AddItemForm);