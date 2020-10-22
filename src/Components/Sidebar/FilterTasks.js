import React, { Component } from 'react';

class FilterTasks extends Component {
    state = {}
    render() {
        return (
            <div>
                <h5>Filters:</h5>
                <div className="d-flex mb-3">
                    <select className="custom-select">
                        <option value="td">TODO</option>
                        <option value="ip">In Progress</option>
                    </select>
                    <i className="text-nowrap btn btn-outline-danger ml-2">Add filter</i>
                </div>
                <div className="d-flex mb-3">
                    <input type="text" className="form-control" placeholder="Task Name" />
                    <i className="text-nowrap btn btn-outline-danger ml-2">Add filter</i>
                </div>
                <h5>Filters affecting table:</h5>
            </div>
        );
    }
}

export default FilterTasks;
