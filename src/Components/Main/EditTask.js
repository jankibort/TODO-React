import React, { Component } from 'react';

class EditTask extends Component {
    state = {
        id: this.props.taskId
    }


    render() {
        console.log(this.state.id);
        return (
            <div>
                <div className="modal fade" id={"editModal" + this.state.id} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-secondary" id="exampleModalLabel">Edit task:</h5>
                                <button type="button" className="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div id="successAlert" className="alert fade alert-success mb-0">
                                Successfully updated!
                            </div>
                            <div className="modal-body pt-0">
                                <label className="text-secondary font-weight-bold mb-0">Task name:</label>
                                <div className="input-group mb-3">
                                    <input id="taskName" type="text" className="form-control" />
                                </div>
                                <label className="text-secondary font-weight-bold mb-0">Status:</label>
                                <select id="status" className="custom-select mb-3">
                                    <option value="TODO">TODO</option>
                                    <option value="In Progress">In Progress</option>
                                </select>
                                <label className="text-secondary font-weight-bold mb-0">Description:</label>
                                <textarea id="description" className="w-100 form-control" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={this.submitCreation} className="btn btn-warning">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditTask;
