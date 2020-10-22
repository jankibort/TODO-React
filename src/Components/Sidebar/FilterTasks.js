import React, { Component } from 'react';

class FilterTasks extends Component {
    state = {}
    render() {
        return (
            <div>
                <h6>Filter tasks:</h6>
                <select className="custom-select mb-3">
                    <option value="td">TODO</option>
                    <option value="ip">In Progress</option>
                </select>
                <input type="text" className="form-control" placeholder="Task Name" />
            </div>
        );
    }
}

export default FilterTasks;
