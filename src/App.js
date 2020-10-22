import React, { Component } from 'react';
import Topbar from './Components/Topbar/Topbar'
import TaskTable from './Components/Main/TaskTable'
import Sidebar from './Components/Sidebar/Sidebar'
const firebase = require('firebase');

class App extends Component {
  state = {
    tasks: [],
    filters: []
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
            <Sidebar filters={this.state.filters} />
            <TaskTable filters={this.state.filters} tasks={this.state.tasks} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;