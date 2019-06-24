import React, { Component } from 'react';

export default class StateTracker extends Component {
  // When we render out StateTracker in MyComponent, the constructor is invoked, all methods are instantiated and then the render is invoked.
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // Lets look at what render returns. Remember that we passed one prop to this component from MyComponent; render, whose value is a function that will return some jsx.
  // in the render method of StateTracker, we will invoke that prop, passing through an object. The value and handleChange properties values are both bound to each new instance of this StateTracker component so MyComponent will only be able to manipulate the state of the instance of StateTracker it created in it's render.
  // The StateTracker component is not concerned with what is rendered out on the ui. It is simply concerned with defining the state and methods and passing those on to the child
  // The child component may do any number of things with that state
  render() {
    return this.props.render({
      handleChange: this.handleChange,
      value: this.state.name
    });
  }
}
