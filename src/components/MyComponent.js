import React from 'react';
import StateTracker from './StateTracker';

export default function MyComponent(props) {
  console.log('props in MyComponent passed directly from App ', props);
  // This function is invoked first and is passed all props (refer to app.js)
  // We then return our StateTracker Component which is passed one prop, render whose value is a function. When that function is invoked by StateTracker it will be passed whatever setup data and methods StateTracker needs to pass through
  // We can then render out some jsx that will be placed on the dom that has access to the data and methods given to us by StateTracker
  return (
    // obj, the first parameter in the render function, will have on it whatever properties are placed on it by StateTracker.
    // In this case, value and handleChange.
    // This allows us to update state in the StateTracker component instance while leaving off class methods and state from the MyComponent component.
    <StateTracker
      render={obj => {
        return (
          <div>
            <p>{props.title}</p>
            <input
              value={obj.value}
              onChange={obj.handleChange}
              name="name"
              style={{ border: '1px solid black' }}
            />
            {obj.value}
          </div>
        );
      }}
    />
  );
}
