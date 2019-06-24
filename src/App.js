import React from 'react';
import MyComponent from './components/MyComponent';
import Filter from './components/Filter';

function App() {
  return (
    <div className="App">
      {/* We can use the same component multiple times, passing through different props that all have their own instance of the passed down object from the render props component. Refer to MyComponent and StateTracker if that's confusing */}
      <MyComponent title="First Component" />
      <MyComponent title="Second Component" />
      <Filter />
      <Filter />
    </div>
  );
}

export default App;

// Example of Render props in react-router docs
{
  /* <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      /> */
}
