import React, { Component } from 'react';
import Topbar from './Components/Topbar/Topbar';
import TaskTable from './Components/Main/TaskTable';
import Weather from './Components/Sidebar/Weather';
import AddTask from './Components/Sidebar/AddTask';
import FilterTasks from './Components/Sidebar/FilterTasks';
const firebase = require('firebase');

class App extends Component {
  state = {
    tasks: [],
    nameFilter: null,
    statusFilter: null
  }

  handleCallback = (childData) => {
    this.setState(childData)
  }

  componentDidMount() {
    firebase.firestore().collection('tasks').onSnapshot(dataUpdate => {
      const tasks = dataUpdate.docs.map(doc => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      this.setState({ tasks })
    });
  }

  render() {
    return (
      <div>
        <Topbar />
        <div className="m-4">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="row">
                <div className="col-12 table-dark p-4">
                  <Weather />
                  <AddTask />
                  <FilterTasks filtersSelected={this.handleCallback} />
                </div>
              </div>
            </div>
            <TaskTable
              nameFilter={this.state.nameFilter}
              statusFilter={this.state.statusFilter}
              tasks={this.state.tasks}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;