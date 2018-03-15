import React from 'react';
import './menu.css';
import Icon from 'react-icons-kit';
import { home } from 'react-icons-kit/fa/home';
import { ic_show_chart } from 'react-icons-kit/md/ic_show_chart';
import { eur } from 'react-icons-kit/fa/eur';
import { bitcoin } from 'react-icons-kit/fa/bitcoin';
import { tint } from 'react-icons-kit/fa/tint';
import { briefcase } from 'react-icons-kit/fa/briefcase';
import { percent } from 'react-icons-kit/fa/percent';
import { barChart } from 'react-icons-kit/fa/barChart';


class Menu extends React.Component {
  
  render() {
    return (
        <div className='m-content'>
            <div className="row">
            <div className="col-6">
                <div className="menu m-oversikt">
                    
                    <a href="#oversikt">
                    <Icon className='icon' size={30} icon={home} />
                    <div> oversikt</div>
                    
                    </a>
                </div>
            </div>
            <div className="col-6">
                <div className="menu m-aksjer">
                
                <a href="#aksjer">
                <Icon className='icon' size={30} icon={ic_show_chart} />
                <div> aksjer</div>
                </a>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-4">
            <div className="menu m-indekser">
            
            <a href="#indekser">
            <Icon className='icon' size={30} icon={barChart} />
            <div> indekser</div>
            </a>
            </div>
            </div>
            <div className="col-4">
            <div className="menu m-valuta">
            
            <a href="#valuta">
            <Icon className='icon' size={30} icon={eur} />
            <div> valuta</div>
            </a>
            </div>
            </div>
            <div className="col-4">
            <div className="menu m-kryptovaluta">
            
            <a href="#kryptovaluta">
            <Icon className='icon' size={30} icon={bitcoin} />
            <div> kryptovaluta</div>
            </a>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-4">
            <div className="menu m-ravarer">
            
            <a href="#ravarer">
            <Icon className='icon' size={30} icon={tint} />
            <div> ravarer</div>
            </a>
            </div>
            </div>
            <div className="col-4">
            <div className="menu m-fond">
            
            <a href="#fond">
            <Icon className='icon' size={30} icon={briefcase} />
            <div> fond</div>
            </a>
            </div>
            </div>
            <div className="col-4">
            <div className="menu m-renter">
            
            <a href="#renter">
            <Icon className='icon' size={30} icon={percent} />
            <div> renter</div>
            </a>
            </div>
            </div>
            </div>
        </div>
    );
  }
}

export default Menu