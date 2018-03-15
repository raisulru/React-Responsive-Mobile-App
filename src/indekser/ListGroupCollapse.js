import React from 'react';
import { Collapse } from 'reactstrap';
import Icon from 'react-icons-kit';
import { angleRight } from 'react-icons-kit/fa/angleRight';
import { angleDown } from 'react-icons-kit/fa/angleDown';
import Highcharts from './graph';


class ListGroupCollapse extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {collapse: false};
  }
  
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  
  render() {
    const value = this.props.values;
    return (
        <div className='table-item'>
            <div className="row" onClick={this.toggle}>
                <div className="col-6 p-y">
                <Icon icon={(this.state.collapse ? angleDown : angleRight)} size={18} />{value.name}
                </div>
                <div className="col-2 p-y">{value.siste}</div>
                <div className={"col-2 p-y " + (value.value > 0 ? 'text-black' : 'text-red')}>{value.value}</div>
                <div className={"col-2 p-y " + (value.percent > 0 ? 'text-black' : 'text-red')}>{value.percent}%</div>
            </div>
            <Collapse isOpen={this.state.collapse}>
                <Highcharts data={value.graphData} />
            </Collapse>
        </div>
    );
  }
}

export default ListGroupCollapse