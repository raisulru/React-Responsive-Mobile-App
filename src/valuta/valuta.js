import React, { Component } from 'react';
import ReactCountryFlag from 'react-country-flag';
import './valuta.css';

function ValutaTableData(props) {
    const values = props.values;
    const listItems = values.map((value) => 
        <div key={value.id} className="row">
            <div className="col-6 p-y">
                <div className='row'>
                    <div className='col-3'>
                      <div className='flag text-center'>
                          <ReactCountryFlag code={value.code} />
                      </div>
                    </div>
                    <div className='col-9'>
                        <div>{value.name}</div>
                        <div className='currency'>{value.currency}/NOK</div>
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

  class Valuta extends Component {
    constructor () {
      super();
      this.state = {value: 
        [
          {'id': 0, 'name': 'Amerikanske dollar', 'currency': 'USD', 'code': 'US', 'siste': 243, 'value': -2, 'percent': 5},
          {'id': 1, 'name': 'Euro', 'currency': 'EUR', 'code': 'EU', 'siste': 224, 'value': 12, 'percent': -0.3},
          {'id': 2, 'name': 'Britiske pund',  'currency': 'GBP', 'code': 'GB', 'siste': 2253, 'value': -1, 'percent': 3},
          {'id': 3, 'name': 'Svenske kroner',  'currency': 'SEK', 'code': 'SE', 'siste': 2443, 'value': -12, 'percent': -3},
          {'id': 4, 'name': 'India Rupee',  'currency': 'INR', 'code': 'IN', 'siste': 2243, 'value': 2, 'percent': -0.5},
        ],
      };
    }
    
    render() {
      return (
        <div id="valuta" className="valuta m-t-lg">
          <div className="sub-header container-fluid clearfix">
            <h2>Valuta</h2>
            <button className="btn btn-default">See Alle</button>
          </div>
          <hr/>
          <div className='valuta-body container-fluid'>            
            <ValutaTableData values={this.state.value} />
          </div>
          <hr />
        </div>
      );
    }
  }
  
  export default Valuta;
