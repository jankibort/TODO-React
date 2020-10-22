import React, { Component } from 'react';
// import Alert from './Alert';
// import $ from "jquery"

const firebase = require('firebase');


class AddTask extends Component {
    state = {
        success: null
    }

    submitCreation = () => {
        let nameHandler = document.getElementById('taskName').value;
        let descHandler = document.getElementById('description').value;
        let statusHandler = document.getElementById('status').value;

        if (nameHandler.length === 0 || descHandler.length === 0) {
            return alert("All fields are required!");
        }

        firebase.firestore().collection("tasks").add({
            name: nameHandler,
            status: statusHandler,
            description: descHandler
        })
        //////////////   autohide and enable modal 
        // $('#additionModal').hide()
        // $('.modal-backdrop').remove();
        // $('body').removeAttr('class style');
        this.clearData();

        let success = document.getElementById('successAlert');
        success.classList.add("show");
        setTimeout(() => { success.classList.remove("show") }, 2500);
    }

    // popAlert = () => {
    //     return (
    //         <div class="alert alert-success" role="alert">
    //             This is a success alert—check it out!
    //         </div>
    //     );
    // }

    clearData = () => {
        document.getElementById('taskName').value = null;
        document.getElementById('description').value = null;
    }

    state = {}
    render() {
        return (
            <div>
                <button type="button" className="btn text-light btn-danger font-weight-bold w-100 mb-3" data-toggle="modal" data-target="#additionModal">
                    Add New Task
                </button>
                <div className="modal fade" id="additionModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-secondary" id="exampleModalLabel">New task:</h5>
                                {/* <Alert status={this.state.success} /> */}
                                <button onClick={this.clearData} type="button" className="close" data-dismiss="modal">
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div id="successAlert" className="alert fade alert-success mb-0">
                                Your task has been successfully added!
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

export default AddTask;