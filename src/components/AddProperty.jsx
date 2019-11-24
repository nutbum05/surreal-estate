import React, { Component } from 'react';
import '../styles/AddProperty.css';
import axios from 'axios';
import Alert from './Alert';

class AddProperty extends Component {
  state = {
    fields: {
      title: '',
      type: '',
      bathrooms: '',
      bedrooms: '',
      city: '',
      email: '',
      price: '',
    },

    alertMessage: '',
    isSuccess: false,
    isError: false,
  };


  handleAddProperty = (event) => {
    event.preventDefault();
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isError: false,
    });
    axios.post('http://localhost:3000/api/v1/PropertyListing', {
      title: this.state.fields.title,
      type: this.state.fields.type,
      city: this.state.fields.city,
      bedrooms: this.state.fields.bedrooms,
      bathrooms: this.state.fields.bathrooms,
      price: this.state.fields.price,
      email: this.state.fields.email,
    })
      .then(() => this.setState({
        isSuccess: true,
        alertMessage: 'Property added.',
      }))
      .catch((err) => {
        this.setState({
          alertMessage: 'Server error. Please try again later.',
          isError: true,
        });
      });
  };

  handleFieldChange = (event) => {
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
        {this.state.isSuccess && <Alert message={this.state.alertMessage} success />}
        {this.state.isError && <Alert message={this.state.alertMessage} />}
        <form onSubmit={this.handleAddProperty}>
          <div>
            Property Description
            <input
              placeholder="Title"
              name="title"
              value={this.state.fields.title}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            Property Type
            <select
              placeholder="Property Type"
              name="type"
              value={this.state.fields.type}
              onChange={this.handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </div>
          <div>
            Bedrooms
            <input
              placeholder="Number of Bedrooms"
              name="bedrooms"
              value={this.state.fields.bedrooms}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            Bathrooms
            <input
              placeholder="Number of Bathrooms"
              name="bathrooms"
              value={this.state.fields.bathrooms}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            Price
            <input
              placeholder="Price"
              name="price"
              value={this.state.fields.price}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            City
            <select
              placeholder="location"
              name="city"
              value={this.state.fields.city}
              onChange={this.handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </div>
          <div>
            Email
            <input
              placeholder="Email"
              name="email"
              value={this.state.fields.email}
              onChange={this.handleFieldChange}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
export default AddProperty;
