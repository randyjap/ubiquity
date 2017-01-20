import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        modalOpen: true,
        username: "",
        password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateProperty = this.updateProperty.bind(this);
    this.redirect = this.redirect.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  redirect(route){
    this.props.router.replace(route);
    this.props.clearSessionErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user})
      .then(() => this.redirect('search')
    );
  }

  updateProperty(property){
    return e => this.setState({ [property]: e.target.value });
  }

  renderErrors(){
    if (this.props.errors.length > 0) {
    return(
      <div className="errors">
        <ul className="errors">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
    } else {
      return null;
    }
  }

  closeModal() {
    this.props.clearSessionErrors();
    this.setState({ modalOpen: false });
    this.redirect('/');
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  demoLogin() {
    const username = "Guest";
    const password = "password";
    let counter = 0;
    const typer = () => {
      counter++;
      this.setState({ username: username.slice(0, counter) });
      if (counter === username.length) {
        this.setState({ password });
        clearInterval(animation);
        this.props.login({user: {username, password} }).then(() => this.redirect('search'));
      }
    };
    const animation = setInterval(typer, 70);
  }

  render(){
    const buttonText = this.props.formType === "login" ? "Login" : "Sign Up";
    return(
      <div className="main">
        <div id='greeting'>
          <Link className='welcome' to='login' onClick={this.openModal}>ENTER SITE</Link>
          {this.renderErrors()}
          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            className="modal-session"
            overlayClassName="overlayModal"
            contentLabel="Modal"
            transitionName="modal-anim">
            <div>
              <h1 className="entrance"><div className="square-logo"></div></h1>
              <form onSubmit={this.handleSubmit}>
                <hr/>
                <div className='entrance flex'>
                  <div><Link to='login' className='login' onClick={this.props.clearSessionErrors} activeClassName="activeEntranceLink">Login</Link></div>
                  <div><Link to='signup' className='signup' onClick={this.props.clearSessionErrors} activeClassName="activeEntranceLink">Sign Up</Link></div>
                </div>
                <hr/>
                <input className="session" autoFocus type="text" placeholder="Username" value={this.state.username} onChange={this.updateProperty('username')} required/>
                <input className="session" type="password" placeholder="Password" value={this.state.password} onChange={this.updateProperty('password')} required/>
                <div className="entrance flex">
                  <div><button className='entrance' value="Sign In" onClick={this.handleSubmit}>{buttonText}</button></div>
                  <div><button className='demo' value="DEMO" onClick={this.demoLogin}>DEMO</button></div>
                </div>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default SessionForm;
