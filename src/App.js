import React, {Component} from 'react';
import './App.css';

class App extends React.Component {
 
render() {
  return(
    <div className="web-container">
      <div className="form-container">
        <h1>PET-A-FRIEND</h1>
        <form onSubmit={this.handleFormSubmission} noValidate>
          <div className='dogName'>
            <label htmlFor="dogName">Dog Name</label>
            <input type="text" 
            className= ""
            placeholder="Your Friend's Name"
            type="text"
            name="dogName"
            noValidate
            onChange={this.handleChange}
            />
          </div>
          <div className='dogBreed'>
            <label htmlFor="dogBreed">Friend's Breed</label>
            <input type="text" 
            className= ""
            placeholder="Your Friend's Breed"
            type="text"
            name="dogBreed"
            noValidate
            onChange={this.handleChange}
            />
          </div>
          <div className='dogBirthday'>
            <label htmlFor="dogBirthday">Friend's Birthday</label>
            <input type="text" 
            className= ""
            placeholder="Your Friend's Name"
            type="text"
            name="dogBirthday"
            noValidate
            onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
      </div>
);

}
}
export default App;