import React, { Component } from 'react';
import './ravarer.css';

function RavarerTableData(props) {
    const values = props.values;
    const listItems = values.map((value) => 
        <div key={value.id} className="row">
            <div className="col-6 p-y">
                <div className='row'>
                    <div className='col-3'>
                      <div className='flag text-center'>
                      <div className='ravarer-img'>
                        <img className='img-responsive' src={'./images/' + value.code + '.png'} alt={value.code} />
                      </div>
                      </div>
                    </div>
                    <div className='col-9'>
                        <div>{value.name}</div>
                        <div className='currency'>{value.type}</div>
                    </div>
                </div>
            </div>
            <div className="col-2 p-y">{value.siste}</div>
            <div className={"col-2 p-y " + (value.value > 0 ? 'text-black' : 'text-red')}>{value.value}</div>
            <div className={"col-2 p-y " + (value.percent > 0 ? 'text-black' : 'text-red')}>{value.percent}%</div>
        </div>
    );
    return (
      <div className='table-body text-right'>
          <div className='table-header text-right'>
            <div className="row">
              <div className="col-6"></div>
              <div className="col-2">siste</div>
              <div className="col-2">+/-</div>
              <div className="col-2">+/-%</div>
            </div>
          </div>
          {listItems}
      </div>
    );
  }

  class Ravarer extends Component {
    constructor () {
      super();
      this.state = {value: 
        [
          {'id': 0, 'name': 'Brent Spot', 'type': 'Fat', 'code': 'oil', 'siste': 243, 'value': -2, 'percent': 5},
          {'id': 1, 'name': 'Gull', 'type': 'Troy Ounce', 'code': 'ounce', 'siste': 224, 'value': 12, 'percent': -0.3},
          {'id': 2, 'name': 'Solv',  'type': 'Troy Ounce', 'code': 'ounce', 'siste': 2253, 'value': -1, 'percent': 3},
        ],
      };
    }
    
    render() {
      return (
        <div id="ravarer" className="ravarer m-t-lg">
          <div className="sub-header container-fluid clearfix">
            <h2>Råvarer</h2>
            <button className="btn btn-default">See Alle</button>
          </div>
          <hr/>
          <div className='ravarer-body container-fluid'>            
            <RavarerTableData values={this.state.value} />
          </div>
          <hr />
        </div>
      );
    }
  }
  
  export default Ravarer;
