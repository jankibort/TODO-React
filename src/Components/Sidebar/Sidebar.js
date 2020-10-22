import React, { Component } from 'react';
import Weather from './Weather';
import AddTask from './AddTask';
import FilterTasks from './FilterTasks';

class Sidebar extends Component {
    state = {}
    render() {
        return (
            <div className="col-12 col-md-3">
                <div className="row">
                    <div className="col-12 table-dark p-4">
                        <Weather />
                        <AddTask />
                        <FilterTasks />
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;