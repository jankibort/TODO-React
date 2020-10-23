import React, { Component } from 'react';

class FilterTasks extends Component {
    state = {
        statusFilter: null,
        nameFilter: null
    }

    nameFilter() {
        const filter = document.getElementById('filterName').value;
        if (filter === "") { return alert("Do not use emtpy filter."); }
        this.transferData({ nameFilter: filter });
        document.getElementById('filterName').value = null;
    }

    statusFilter() {
        const filter = document.getElementById('filterStatus').value;
        // this.setState({ statusFilter: filter });
        this.transferData({ statusFilter: filter });
    }

    resetFilters = () => {
        this.transferData({
            nameFilter: null,
            statusFilter: null
        });
    }

    transferData(data) {
        this.props.filtersSelected(data);
        this.setState(data);
    }

    render() {
        return (
            <div>
                <h5>Filters:</h5>
                <div className="d-flex mb-3">
                    <select id="filterStatus" className="custom-select">
                        <option value="TODO">TODO</option>
                        <option value="In Progress">In Progress</option>
                    </select>
                    <i onClick={() => { this.statusFilter() }} className="text-nowrap btn btn-outline-danger ml-2">Add filter</i>
                </div>
                <div className="d-flex mb-3">
                    <input id="filterName" type="text" className="form-control" placeholder="Task Name" />
                    <i onClick={() => { this.nameFilter() }} className="text-nowrap btn btn-outline-danger ml-2">Add filter</i>
                </div>
                <h5>Active filters: {(this.state.statusFilter || this.state.nameFilter) ? null : <i className="text-secondary">none</i>}</h5>
                {this.state.statusFilter ? <div>Status: "{this.state.statusFilter}"</div> : null}
                {this.state.nameFilter ? <div>Task name: "{this.state.nameFilter}"</div> : null}
                {(this.state.statusFilter || this.state.nameFilter) ? <div onClick={() => { this.resetFilters() }} className="mt-2 btn btn-secondary w-100">Clear filters</div> : null}
            </div>
        );
    }
}

export default FilterTasks;
