import React, { Component } from 'react';
import '../styles/AddProperty.css';

class AddProperty extends Component {
 state = {
   fields: {
     title: '',
   },
 };

    handleAddProperty = (event) => {
      event.preventDefault();
    };

    handleFieldChange = event => {
      this.setState({
        fields: {
          ...this.state.fields,
          [event.target.name]: event.target.value,
        },
      });
    };

    render() {
      return (
        <div className="AddProperty">
          <form onSubmit={this.handleAddProperty}>
            <input name="title" value={this.state.fields.title} onChange={this.handleFieldChange} />
          </form>
        </div>
      );
    }
}

export default AddProperty;
