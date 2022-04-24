import './plans.css';
import React from 'react';
import nonet from '../assets/no-net.png';
import Countdown from 'react-countdown';


class Plans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("http://demo3755793.mockable.io/plans")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render(){
    const { error, isLoaded, items } = this.state;
    const gap= new Date("May 30, 2022 00:00:00")-Date.now();
    if (error) {
      return <div className="no-net">
          <img src={nonet} alt="" />
      </div>;
    } else if (!isLoaded) {
      return <div className='loader-container'>
        <svg id="loader">
          <circle id="loader" stroke={"#1E4D8E"} cx="40" cy="40" r="20" fill="none" strokeDashoffset={450} />
        </svg>
      </div>;
    } else {
    return (
      <div className="plans">
        <h1 className="heading">Buy a plan and be Interview ready!</h1>
        <div className="plans-container">
        {items.reverse().map(item => (
            <div className="plan" style={{background:item.backgroundColor}}>

              <div className="top">

                <div>
                  <h2>FLAT {item.save} OFF</h2>
                  <div className="status">{item.session===100?"Offer Closed":"Offer Ends In"}</div>
                  <div>
                    {item.session===100?"Weekend Plan Booked 100% <br/> Within 20 minutes":
                    <div className="timer">
                      <div>
                        {<Countdown className='countdown' date={Date.now() + gap}>
                        </Countdown> }
                      </div>
                        <div>
                          <span>days</span>
                          <span>hrs</span>
                          <span>mins</span>
                          <span>sec</span>
                        </div>
                    </div>
                    }

                  </div>
                </div>

                <div className="progress-container">
                  <div className="progress-overlay">{item.session}&#37;<div>Booked</div></div>
                  <svg>
                    <circle stroke={item.session===100?"red":"#1E4D8E"} cx="50" cy="50" r="40" fill="none" strokeDashoffset={500-(250/100)* item.session} />
                  </svg>
                </div>

              </div>

              <div className="bottom">
                  <div className="saver" style={{background:item.offerColor}}>{item.saver}</div>
                  <div className="plan-name">{item.planId.split("_").join(" ")}</div>
                  <ul className="content">
                    {item.content.map(i =>(
                      <li>{i}</li>
                    ))}

                  </ul>
                  <div className="suit">{item.suit}</div>
                  <div className="referral">Flat 30% off for being reffred by Saurabh</div>
                  <div className="hr"></div>
                  <div className="pricing">
                    <div className="price">${item.price}</div>
                    <div className="save">Save&nbsp;{item.save}</div>     
                    <div className="original-price">${item.originalPrice}</div>
                  </div>
                  <div className="buy" style={{background:item.session===100?"#c5c5c5":"#1E4D8E"}}>
                    {item.session===100?"100% Booked":"Buy Now"}
                  </div>
              </div>
            </div>
        ))}
        </div>
      </div>
    )
  }
  }
}
  
  export default Plans;
  