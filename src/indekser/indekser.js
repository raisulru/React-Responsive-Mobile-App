import React, { Component } from 'react';
import './indekser.css';
import ListGroupCollapse from './ListGroupCollapse';
import data from '../demo-data';


function IndekserTableData(props) {
  const values = props.values;
  const listItems = values.map((value) =>
    <ListGroupCollapse key={value.id} values={value} data={data} />
  );
  return (
    <div className='table-body text-right'>
        {listItems}
    </div>
  );
}

class Indekser extends Component {
  constructor () {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {value: 
      [
        {'id': 0, 'name': 'Hovedindeksen', 'siste': 243, 'value': -2, 'percent': 5, 'graphData': data.graphdata1},
        {'id': 1, 'name': 'FTSE 100', 'siste': 224, 'value': 12, 'percent': -0.3, 'graphData': data.graphdata2},
        {'id': 2, 'name': 'DAX', 'siste': 2253, 'value': -1, 'percent': 3, 'graphData': data.graphdata3},
        {'id': 3, 'name': 'CAC 40', 'siste': 2443, 'value': -12, 'percent': -3, 'graphData': data.graphdata4},
        {'id': 4, 'name': 'OMX Stockholm 3', 'siste': 2243, 'value': 2, 'percent': -0.5, 'graphData': data.graphdata5},
      ],
      collapse: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  render() {
    return (
      <div id="indekser" className="indekser m-t-lg">
        <div className="sub-header container-fluid clearfix">
          <h2>Indekser</h2>
          <button className="btn btn-default">Se alle</button>
        </div>
        <hr/>
        <div className="indekser-body container-fluid">
          <div className='table-header text-right'>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-2">siste</div>
              <div className="col-2">+/-</div>
              <div className="col-2">+/-%</div>
            </div>
          </div>
         <IndekserTableData values={this.state.value} collapse={this.state.collapse} toggle={this.toggle}/>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Indekser;
