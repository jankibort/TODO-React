import React, { Component } from 'react';
import Weather from './Weather';
import AddTask from './AddTask';
import FilterTasks from './FilterTasks';

class Sidebar extends Component {
    state = {}
    render() {
        return (
            <div className="table-dark p-3 col-12 col-md-3">
                <Weather />
                <AddTask />
                <FilterTasks />
            </div>
        );
    }
}

export default Sidebar;