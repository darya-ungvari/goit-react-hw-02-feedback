import React from 'react';

import './App.css';
import ControlFeedback from './Components/ControlFeedback/ControlFeedback';
import FeedbackCounter from './Components/FeedbackCounter/FeedbackCounter';
import Section from './Components/Section/Section'

class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };




  handleGoodIncrement = () => {
    console.log('positive')
    this.setState({
        good: this.state.good + 1,
    });
}




handleBadIncrement = () => {
  console.log('bad')
  this.setState({
      bad: this.state.bad + 1,
  });
}

handleNeutralIncrement = () => {
  console.log('neutral')
  this.setState({
      neutral: this.state.neutral + 1,
      
  });
}

 render(){
  return (
    <Section>
      <ul>
        <ControlFeedback name='Good' myClick={this.handleGoodIncrement}/>
        <ControlFeedback name='Neutral' myClick={this.handleNeutralIncrement}/>
        <ControlFeedback name='Bad' myClick={this.handleBadIncrement}/>
      </ul>
      <FeedbackCounter 
      good={this.state.good}
      bad={this.state.bad}
      neutral={this.state.neutral}
      >
      </FeedbackCounter>
    </Section>
  );
 }
  
}

export default App;
