import React, { Component } from 'react';
import Topbar from './Components/Topbar/Topbar'
import TaskTable from './Components/TaskTable'
import Sidebar from './Components/Sidebar/Sidebar'

class App extends Component {
  render() {
    return (
      <div>
        <Topbar />
        <div className="m-4">
          <div className="row">
            <Sidebar />
            <TaskTable />
          </div>
        </div>
      </div>
    )
  }
}

export default App;