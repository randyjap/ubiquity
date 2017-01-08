import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        username: "",
        password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  redirect(route){
    this.props.router.push(route);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user}).then(() => this.redirect('/'));
  }

  updateProperty(property){
    return e => this.setState({ [property]: e.target.value });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    let header;
    let linkAddress;

    if (this.props.formType === '/login'){
      header = "Log in!!";
      linkAddress = 'login';
    } else if (this.props.formType === '/signup'){
      header = "Sign Up";
      linkAddress = 'signup';
    }

     return (
      <div>
        <Link to={linkAddress}>{header}</Link>
        <form onSubmit={this.handleSubmit}>
          Username:<input onChange={this.updateProperty('username')}/>
          Password:<input onChange={this.updateProperty('password')}/>
          <button>Submit!</button>
        </form>
        {this.renderErrors()}
      </div>
    );
  }
}

export default SessionForm;
