import React, { Component } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import './oversikt.css';

function OversiktTableData(props) {
    const values = props.values;
    const listItems = values.map((value) => 
        <div key={value.id} className="row table-content">
            <div className="col-8 p-y">{value.name}</div>
            <div className="col-2 p-y">{value.siste}</div>
            <div className={"col-2 p-y " + (value.percent > 0 ? 'text-black' : 'text-red')}>{value.percent}%</div>
        </div>
    );
    return (
      <div className='table-body text-right'>
          <div className='table-header text-right'>
            <div className="row">
              <div className="col-8">NAVN</div>
              <div className="col-2">siste</div>
              <div className="col-2">+/-%</div>
            </div>
          </div>
          {listItems}
      </div>
    );
  }

class Oversikt extends Component {
    constructor () {
      super();
      this.state = {value: 
        [
          {'id': 0, 'name': 'Petrolia', 'siste': 243, 'percent': 5},
          {'id': 1, 'name': 'Panoro Energy', 'siste': 224, 'percent': -0.3},
          {'id': 2, 'name': 'Norwegian Air Shuttle', 'siste': 2253, 'percent': 3},
          {'id': 3, 'name': 'REC Silicon', 'siste': 2443, 'percent': -3},
          {'id': 4, 'name': 'Polaris Media', 'siste': 2243, 'percent': -0.5},
        ],
        activeTab: '1'
      };
      this.toggle = this.toggle.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
            activeTab: tab
            });
        }
    }
    
    render() {
      return (
        <div id="oversikt" className="oversikt m-t-lg">
          <div className="sub-header container-fluid m-b-md clearfix">
            <h4>Oversikt</h4>
            <h2>Oslo Børs</h2>
            <button className="btn btn-default">Endre Marked</button>
          </div>
        <div className='oversikt-body'>
            <div className='tab-button container-fluid p-b-md'>
                <nav className='text-center'>
                    <a
                    className={ "btn " + classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                    >
                    Vinere
                    </a>

                    <a
                    className={ "btn " + classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                    >
                    Tapere
                    </a>

                    <a
                    className={ "btn " + classnames({ active: this.state.activeTab === '3' })}
                    onClick={() => { this.toggle('3'); }}
                    >
                    Mest omsatt
                    </a>

                    <a
                    className={ "btn " + classnames({ active: this.state.activeTab === '4' })}
                    onClick={() => { this.toggle('4'); }}
                    >
                    Største handler
                    </a>
                </nav>
            </div>
            <hr/>
            <div className='tab-details container-fluid'>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                    <OversiktTableData values={this.state.value} />
                    </TabPane>

                    <TabPane tabId="2">
                        <OversiktTableData values={this.state.value} />
                    </TabPane>

                    <TabPane tabId="3">
                        <OversiktTableData values={this.state.value} />
                    </TabPane>

                    <TabPane tabId="4">
                        <OversiktTableData values={this.state.value} />
                    </TabPane>
                </TabContent>
            </div>
        </div>
        <hr/>
        </div>
      );
    }
  }
  
  export default Oversikt;