import React from 'react';

class EmployeesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: ""
    };
  }

  render() {
    const { employees } = this.props;
    return (
      <React.Fragment>
        <div className="controls">
          <input type="text" className="filter-input" data-testid="filter-input" onChange={(e) => this.setState({employees: e.target.value})} />
        </div>
        <ul className="employees-list">
          { employees.filter(employee => employee.name.toLowerCase().includes(this.state.employees.toLowerCase())).map(employee => (
            <li key={employee.name} data-testid="employee">{employee.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default EmployeesList;
