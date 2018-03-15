import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts/ReactHighstock';

class Highcharts extends Component {
    constructor(props) {
        super(props);
        this.state = {config: {
            chart: {
                backgroundColor:'rgba(255, 255, 255, 0.0)',
                height: 300,
            },
            rangeSelector: {
              enabled: false
            },
            title: {
              text: false
            },
            yAxis: {
              opposite: false
            },
            navigator: {
                enabled: false
            },
            scrollbar: {
              enabled: false,
            },
            credits: {
              enabled: false
            },
            plotOptions: {
              series: {
                  lineWidth: 3,
                  states: {
                      hover: {
                          enabled: true,
                          lineWidth: 4
                      }
                  }
                }
            },
            series: [{
              name: 'AAPL',
              color: '#3d9842',
              data: props.data,
              threshold: 15,
              negativeColor: 'red',
              tooltip: {
                valueDecimals: 2
              }
            }]
          }
        }
    }
  
    render() {
    return (
        <ReactHighcharts config = {this.state.config}></ReactHighcharts>
    );
  }
}

export default Highcharts;
