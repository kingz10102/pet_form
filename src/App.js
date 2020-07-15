import React, {Component} from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dogName: '',
      dogGender: '',
      dogBreed: '',
      dogBirthday: '',
      formCompleted: false
    }
  }
  onNameChange = (event) => {
    this.setState({
      dogName: event.target.value
    })
  }
  onBirthdayChange = (event) => {
    this.setState({
      dogBirthday: event.target.value
    })
  }
    onBreedChange = (event) => {
      this.setState({
        dogBreed: event.target.value
      })
    }
  handleFormSubmission = e => {
    e.preventDefault();
    this.setState({
      formCompleted: true
    })

  }
render() {
  return(
    <div className="web-container">
      <div className="form-container">
        <h1>PET-A-FRIEND</h1>
        <form onSubmit={this.handleFormSubmission} noValidate>
          <div className='dogName'>
            <label htmlFor="dogName">Dog's Name</label>
            <input type="text" 
            className= ""
            placeholder="Your Friend's Name"
            type="text"
            name="dogName"
            noValidate
            onChange={this.handleChange}
            />
          </div>
          <div className='dogGender'>
            <label htmlFor="dogGender">Male</label>
            <input type="radio" 
            className= ""
            placeholder="Your Friend's Gender"
            value="male"
            name="dogGender"
            noValidate
            onChange={this.handleChange}
            />
            </div>
            <div className='dogGender'>
            <label htmlFor="dogGender">Female</label>
            <input type="radio" 
            className= ""
            placeholder="Your Friend's Gender"
            value="female"
            name="dogGender"
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
          <div className="Register-div">
              <button type="submit">Register Pet</button>
          </div>
        </form>
      </div>
      </div>
);

}
}
export default App;