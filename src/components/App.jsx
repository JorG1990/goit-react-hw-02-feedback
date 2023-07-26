
import React, { Component } from "react";
import FeedBackOptions from "./FeedBackOptions/FeedBackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleFeedback = (feedback) => {
    this.setState ((prevState) => ({
      ...prevState,
      [feedback]: prevState [feedback] +1
    }));
  };
}

export default App;
