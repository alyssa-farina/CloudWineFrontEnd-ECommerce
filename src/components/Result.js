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
      <div>
        You prefer <strong className="results">{props.quizResult}</strong>!
      <br/>
      <br/>
        <a href="/home">Enter Cloud Wine</a>
       
      </div>
     
  );
     
      }
    // </TransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
