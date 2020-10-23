import React, { Component } from 'react';
const firebase = require('firebase');

class EditTask extends Component {
    submitEdit = () => {
        let descHandler = document.getElementById('edtdescription').value;
        let statusHandler = document.getElementById('edtstatus').value;

        if (descHandler.length === 0) {
            return alert("All fields are required!");
        }

        firebase.firestore().collection("tasks").doc(this.props.id).set({
            name: this.props.task.name,
            status: statusHandler,
            description: descHandler
        });

        this.clearData();

        let success = document.getElementById('editSuccessAlert');
        success.classList.add("show");
        setTimeout(() => { success.classList.remove("show") }, 2500);
    }

    clearData = () => {
        document.getElementById('description').value = null;
    }

    render() {
        return (
            <div>
                <div className="modal fade show" id="editModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-secondary" id="exampleModalLabel">Edit task:</h5>
                                <button type="button" className="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div id="editSuccessAlert" className="alert fade alert-success mb-0">
                                Successfully updated!
                            </div>
                            <div className="modal-body pt-0">
                                <label className="text-secondary font-weight-bold mb-0">Task name:</label>
                                <div className="input-group mb-3">
                                    <input className="form-control" type="text" placeholder={this.props.task.name} readOnly />
                                </div>
                                <label className="text-secondary font-weight-bold mb-0">Status:</label>
                                <select id="edtstatus" className="custom-select mb-3" defaultValue={this.props.task.status}>
                                    <option value="TODO">TODO</option>
                                    <option value="In Progress">In Progress</option>
                                </select>
                                <label className="text-secondary font-weight-bold mb-0">Description:</label>
                                <textarea id="edtdescription" className="w-100 form-control" defaultValue={this.props.task.description}></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="button" onClick={this.submitEdit} className="btn btn-warning">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditTask;
