import React from 'react';
import './footer.css';

const Finanskalender = function () {
    return (
        <div className="finanskalender m-t-lg">
            <div className="sub-header container-fluid clearfix">
            <h2>FinansKalender</h2>
            </div>
            <hr/>
            <div className='container-fluid'>
            <div className="row">
                <div className="col-3">
                    <div className="date">
                    12
                    </div>
                    <div className="day">
                    FRE
                    </div>
                </div>
                <div className="col-9">
                    <span>EMAS Offshore</span> gfeegfgewg - Q1
                </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-3">
                        <div className="date">
                            15
                        </div>
                        <div className="day">
                            MAN
                        </div>
                    </div>
                    <div className="col-9">
                        <span>EMAS Offshore</span> gfeegfgewg - Q1
                    </div>
                </div>
            </div>
        </div>
    )
}

const BorsMeldinger = function () {
    return (
        <div className="borsmeldinger m-t-lg">
            <div className="sub-header container-fluid clearfix">
            <h2>Siste borsmeldinger</h2>
            </div>
            <hr/>
            <div className="container-fluid">
                <div className="b-content">
                    <p>Bien Sparebank - Finansial Kalender 2018</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. simus placeat eveniet eum!</p>
                    <small>Lorem, ipsum dolor sit amet consectetur adipisicing elit</small>
                </div>
                <hr/>
                <div id="fond" className="bank">
                    <p><span>SpareBank 1 Nordvest</span>Finansiell kalender</p>
                    <p>Lorem ipsum dolor sit, nobis suscipit, deleniti nemo possimus ipsam veritatis nam magnam.</p>
                    <small>Lorem ipsum dolor sit are sint similique corrupti!</small>
                </div>
                <hr/>
                <div id="renter" className="rente">
                    <p>Ny rente</p>
                    <p>Se vedlegg pa www.ijffefw.no</p>
                    <small>renteregulering</small>
                </div>
            </div>
        </div>
    )
}

class Footer extends React.Component {
    render() {
        return (
          <div className="footer">
            <Finanskalender />
            <hr />
            <BorsMeldinger />
          </div>
        );
      }
}

export default Footer;