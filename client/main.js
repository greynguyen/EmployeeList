import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list'
const App = () => {
  return (
    <div><EmployeeList /></div>
  );
}

// After Meteor loads in browser, render app to DOM.
Meteor.startup(() => {
  // React renders
  ReactDOM.render(<App />, document.querySelector('.container'));
});
