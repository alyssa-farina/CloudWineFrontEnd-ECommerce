import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';



function Result(props) {
  return (
    <TransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className = "resultsdiv">
        You prefer <strong className="results">{props.quizResult}</strong>!
      <br/>
      <br/>
        <a className="entercloudwine"href="/signup">Enter Cloud Wine</a>
       
     
      </div>

<br/>
<br/>
<br/>
<br/>
      <div className="card">
        
         <img src="https://www.nuggetmarket.com/media/images/14/01/march-wines-of-the-month.gif" alt="Avatar" width="100%"/>
       </div>
     
  
     
      
     </TransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
