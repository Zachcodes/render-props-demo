import React, { Component } from 'react';

let people = [
  {
    name: 'John',
    id: 1
  },
  {
    name: 'Ariel',
    id: 2
  }
];
// Same deal here as the hoc-demo as far as this component getting data, setting it in the cache e.t.c.
// The two main differences here are
// 1. The export default in this file is not a function that return another function. It's a component
// 2. The render returns this.props.render invoked and the argument is an object with exposed state values and methods.
export default class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people,
      originalPeople: people
    };
  }

  setPeople = people => {
    this.setState({ people });
  };

  // If you wnat to to see the function that this.props.render is referring to, go into whatever file (Filter.js) is rendering out People and look at the render prop.
  render() {
    return this.props.render({
      people: this.state.people,
      setPeople: this.setPeople,
      originalPeople: this.state.originalPeople
    });
  }
}
