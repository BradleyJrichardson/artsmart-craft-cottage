import React, { Component } from 'react'
import './ContactMeForm.css'

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = { fName: '', lName: '', company: '', email: '', phone: '', message: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (

       <form className='form' action='https://formspree.io/im.cooperviktor@gmail.com' method='POST' >
         <h1 className='brandTitle'>Contact Me</h1>

         <div className='namesContainer'>
           <input placeholder='First Name:' className='textField' type='text' value={this.state.fName} onChange={this.handleChange} name='fName' />
           <input placeholder='Last Name:' className='textField' type='text' value={this.state.lName} onChange={this.handleChange} name='lName' />
         </div>
         <div className='namesContainer'>
           <input placeholder='Email:' className='textField' type='text' value={this.state.email} onChange={this.handleChange} name='email' />
           <input placeholder='Phone:' className='textField' type='tel' value={this.state.phone} onChange={this.handleChange} name='phone' />
         </div>
         <textarea placeholder='Message:' className='messageField' type='text' value={this.state.message} onChange={this.handleChange} name='message' />
         <input type="submit" className='submitField' value="Send Message"  />
       </form>
    )
  }
}