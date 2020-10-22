import React, { Component } from 'react';

class FilterTasks extends Component {
    nameFilter() {
        const filter = document.getElementById('filterName').value;
        // this.setState({ nameFilter: filter });
        this.transferData({ nameFilter: filter });
        document.getElementById('filterName').value = null;
        // this.transferData();
    }

    statusFilter() {
        const filter = document.getElementById('filterStatus').value;
        // this.setState({ statusFilter: filter });
        this.transferData({ statusFilter: filter });
    }

    resetFilters = () => {
        // this.setState({

        // });
        this.transerData({
            nameFilter: null,
            statusFilter: null
        });
    }

    transferData(data) {
        this.props.callback(data);
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
                <h5>Filters affecting table: {(this.props.statusFilter || this.props.nameFilter) ? null : <i className="text-secondary">none</i>}</h5>
                {this.props.statusFilter ? <div>Status: "{this.props.statusFilter}"</div> : null}
                {this.props.nameFilter ? <div>Task name containing: "{this.props.nameFilter}"</div> : null}
                {(this.props.statusFilter || this.props.nameFilter) ? <div onClick={this.resetFilters} className="mt-2 btn btn-secondary w-100">Clear filters</div> : null}
            </div>
        );
    }
}

export default FilterTasks;
