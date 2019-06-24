import React, { Component } from 'react';
import People from './People';

// This function is important because it allows us to render out filer and map all of the returned values from render to Filter
// In order
// Wrapper is invoked by App
// Wrapper returns People so that is then invoked.
// People renders
export default function Wrapper() {
  return (
    <People
      render={obj => {
        return <Filter {...obj} />;
      }}
    />
  );
}

// Filter is almost the exact same code as what is in the hoc-demo. It keeps track of some state and has a handle change method that updates it. The callback will interact with the people passed through on props and the setPeople method.
// The important distinction is that we have access to people, setPeople and originalPeople because of the function Wrapper which invokes People and passes the render function that People will invoke. When that function gets invoked, it will return filter, mapping through all of the values that are passed in the invocation of this.props.render in People
class Filter extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      let filtered;
      if (this.state.search)
        filtered = this.props.originalPeople.filter(
          p =>
            p.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        );
      else filtered = this.props.originalPeople;
      this.props.setPeople(filtered);
    });
  };

  render() {
    return (
      <div>
        <div>
          <p>
            Filter:
            <input
              value={this.state.search}
              onChange={this.handleChange}
              name="search"
              style={{ border: '1px solid black' }}
            />
          </p>
          {this.props.people.map(p => {
            return <p key={p.id}>{p.name}</p>;
          })}
        </div>
      </div>
    );
  }
}
