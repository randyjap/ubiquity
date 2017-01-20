import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';

class Footer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        howModalOpen: false,
        contactModalOpen: false,
        termsModalOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.redirect = this.redirect.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal(attr) {
    this.setState({ [attr]: false });
  }

  openModal(attr) {
    this.setState({ [attr]: true });
  }

  handleClick(city){
    if (city === "sf") {
      this.props.receiveCenter({lat: 37.75023068394664, lng: -122.44104483349611});
    } else if (city === "ny") {
      this.props.receiveCenter({lat: 40.7127837, lng: -74.00594130000002});
    }
    this.redirect("search");
  }

  redirect(route){
    this.props.router.replace(route);
  }

  renderModals(){
    return (
      <div>
        <Modal
          isOpen={this.state.howModalOpen}
          onRequestClose={() => this.closeModal("howModalOpen")}
          className="modal-how"
          overlayClassName="overlayModal"
          contentLabel="Modal"
          transitionName="modal-anim">
          <div className="how-container">
            <div className="square-logo-how"></div>
            <table className="contact">
              <tbody>
                <tr>
                  <td><h1 className="contact-header">Youbquity</h1></td>
                </tr>
                <tr>
                  <td>
                    <br/>
                    <p className="how">Make the most of your equipment and it rent it out to others!</p>
                    <p className="how">Ubiquity allows you to list your equipment to others.</p>
                    <p className="how">Save the environment and make extra money!</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal>
        <Modal
          isOpen={this.state.contactModalOpen}
          onRequestClose={() => this.closeModal("contactModalOpen")}
          className="modal-contact"
          overlayClassName="overlayModal"
          contentLabel="Modal"
          transitionName="modal-anim">
          <div className="contact-container">
            <table className="contact">
              <tbody>
                <tr>
                  <td><img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1484853581/Logo-2C-21px-R_rc35uu.png" /></td>
                  <td><a className="contact" target="_blank" href="http://www.linkedin.com/in/randyjap">www.linkedin.com/in/randyjap</a></td>
                </tr>
                <tr>
                  <td><img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1484853612/GitHub-Mark-64px_rfmfmn.png" /></td>
                  <td><a className="contact" target="_blank" href="http://www.github.com/randyjap">www.github.com/randyjap</a></td>
                </tr>
                <tr>
                  <td><img src="http://res.cloudinary.com/dkympkwdz/image/upload/v1484853612/GitHub-Mark-64px_rfmfmn.png" /></td>
                  <td><a className="contact" target="_blank" href="http://www.github.com/randyjap/ubiquity">www.github.com/randyjap/ubiquity</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal>
        <Modal
          isOpen={this.state.termsModalOpen}
          onRequestClose={() => this.closeModal("termsModalOpen")}
          className="modal-contact"
          overlayClassName="overlayModal"
          contentLabel="Modal"
          transitionName="modal-anim">
          <div className="contact-container">
            <table className="contact">
              <tbody>
                <tr>
                  <td><h1 className="contact-header">Terms</h1></td>
                </tr>
                <tr>
                  <td>
                    <br/>All listings are for demonstrational purposes only and are completely fictional.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal>
      </div>
    );
  }

  render(){
    return (
      <div className="footer">
        <div>
          <li className="footer-items" onClick={() => this.openModal("howModalOpen")}>HOW DOES IT WORK?</li>
        </div>
        <div>
          <li className="footer-items cities" onClick={() => this.handleClick("sf")}>SAN FRANCISCO</li>
          <li className="footer-items cities" onClick={() => this.handleClick("ny")}>NEW YORK</li>
        </div>
        <div>
          <li className="footer-items" onClick={() => this.openModal("contactModalOpen")}>CONTACT</li>
        </div>
        <div>
          <li className="footer-items" onClick={() => this.openModal("termsModalOpen")}>TERMS</li>
        </div>
        { this.renderModals() }
      </div>
    );
  }
}

export default withRouter(Footer);
