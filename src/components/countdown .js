import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

// Random component
// const Completionist = () => <span>You are good to go!</span>;

// ReactDOM.render(
//   (
//     <Countdown date={Date.now() + 5000}>
//       <Completionist />
//     </Countdown>
//   ),
//   document.getElementById('Countdn')
// );

class Count extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       error: null,
    //       isLoaded: false,
    //       items: []
    //     };
    //   }
    render(){
        return(
         <div id="Countdn"></div>
        )
    }
  }
  
  export default Count;
  