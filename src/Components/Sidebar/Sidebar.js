import React, { Component } from 'react';
import Weather from './Weather';
import AddTask from './AddTask';
import FilterTasks from './FilterTasks';

class Sidebar extends Component {
    handleCallback = (childData) => {
        this.setState(childData)
    }

    passFilters() {
        this.props.getFilters(this.state)
        console.log("dupa");
    }

    render() {
        // console.log(this.state)
        return (
            <div className="col-12 col-md-3">
                <div className="row">
                    <div className="col-12 table-dark p-4">
                        <Weather />
                        <AddTask />
                        <FilterTasks filtersSelected={this.handleCallback} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;