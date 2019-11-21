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
        
        The Type of Wine You Should Try Is: 
        <br/>
        <br/>
        <strong className="results">{props.quizResult}</strong>!
      <br/>
      <br/>
        <a className="entercloudwine"href="/signup">Enter Cloud Wine</a>
       
     
      </div>

<br/>
<br/>
<br/>
<br/>
      <div className="carddd">
        
         <img src="https://media.giphy.com/media/8cjhtzkIIwe6HNWLxw/giphy.gif" alt="Avatar"  height="400px" width="70%"/>
       </div>
     
  
     
      
     </TransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
