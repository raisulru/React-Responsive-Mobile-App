import React, { Component } from 'react';
import './cryptocurrency.css';


function KryptoValutaTableData(props) {
    const values = props.values;
    const listItems = values.map((value) => 
        <div key={value.id} className="row">
            <div className="col-6 p-y">
                <div className='row'>
                    <div className='col-3'>
                      <div className='cryptocurrency-img'>
                        <img className='img-responsive' src={'./images/' + value.code + '.png'} alt={value.code} />
                      </div>
                    </div>
                    <div className='col-9'>
                        <div>{value.name}</div>
                        <div className='currency text-uppercase'>{value.code}/USD</div>
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

  class KryptoValuta extends Component {
    constructor () {
      super();
      this.state = {value: 
        [
          {'id': 0, 'name': 'Bitcoin', 'code': 'btc', 'siste': 243, 'value': -2, 'percent': 5},
          {'id': 1, 'name': 'Ripple', 'code': 'xpr', 'siste': 224, 'value': 12, 'percent': -0.3},
          {'id': 2, 'name': 'Ethereum',  'code': 'eth', 'siste': 2253, 'value': -1, 'percent': 3},
          {'id': 3, 'name': 'Litecoin',  'code': 'ltc', 'siste': 2443, 'value': -12, 'percent': -3},
          {'id': 4, 'name': 'Bitcoin Gold', 'code': 'btcg', 'siste': 2243, 'value': 2, 'percent': -0.5},
          {'id': 5, 'name': 'EOS', 'code': 'eos', 'siste': 2243, 'value': 2, 'percent': -0.5},
          {'id': 6, 'name': 'NEM', 'code': 'xem', 'siste': 2243, 'value': 2, 'percent': -0.5},
        ],
      };
    }
    
    render() {
      return (
        <div id="kryptovaluta" className="krypto-valuta m-t-lg">
          <div className="sub-header container-fluid clearfix">
            <h2>Kryptovaluta</h2>
            <button className="btn btn-default">See Alle</button>
          </div>
          <hr/>
          <div className='krypto-valuta-body container-fluid'>            
            <KryptoValutaTableData values={this.state.value} />
          </div>
          <hr/>
        </div>
      );
    }
  }
  
  export default KryptoValuta;
  