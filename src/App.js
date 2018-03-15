import React, { Component } from 'react';
import { Modal } from 'reactstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './flatkitcss/app.min.css';
import './App.css';
import Icon from 'react-icons-kit';
import { search } from 'react-icons-kit/fa/search';
import { navicon } from 'react-icons-kit/fa/navicon';
import { remove } from 'react-icons-kit/fa/remove';
import Indekser from './indekser/indekser';
import Oversikt from './oversikt/oversikt';
import Valuta from './valuta/valuta';
import KryptoValuta from './cryptocurrency/cryptocurrency';
import Ravarer from './ravarer/ravarer';
import Footer from './footer/footer';
import Menu from './menu/menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      value: '',
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
      event.preventDefault();
  }

  openModal() {
    this.setState({
      modal: true
    });
  }

  closeModal() {
    this.setState({
      modal: false
    });
  }
  
  render() {
    return (
        <div className="content">
          {/* This is Header */}
            <div className="main-header container-fluid">
              <Icon onClick={this.openModal} style={{ color: '#c8453b' }} className='navicon' size={25} icon={(this.state.modal ? search : navicon)} />
              <Modal isOpen={this.state.modal} toggle={this.closeModal} className={this.props.className}>
                <Menu />
              </Modal>
              <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Search" value={this.state.value} onChange={this.handleSearch} />
                  <div className="input-group-btn">
                    <button className="btn  btn-default" type="submit">
                      <Icon onClick={this.closeModal} className='kit' style={{ color: '#000' }} size={20} icon={(this.state.modal ? remove : search)} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* Header end */}
            
            {/* all component */}
            <Indekser />
            <Oversikt />
            <Valuta />
            <KryptoValuta />
            <Ravarer />
            <Footer />
        </div>
    );
  }
}

export default App;
