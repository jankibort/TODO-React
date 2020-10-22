import React, { Component } from 'react';
// import EditTask from './EditTask'
// import $ from "jquery";
const firebase = require('firebase');

class TaskTable extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tasks: []
    //     };
    // }

    // componentDidMount() {
    //     firebase.firestore().collection('tasks').onSnapshot(dataUpdate => {
    //         const tasks = dataUpdate.docs.map(doc => {
    //             const data = doc.data();
    //             data['id'] = doc.id;
    //             return data;
    //         });
    //         this.setState({ tasks })
    //     });
    // }

    deleteTask = (taskId) => {
        let acceptance = window.confirm("Press OK if you want to proceed removing chosen task");
        if (acceptance) {
            try {
                firebase.firestore().collection('tasks').doc(taskId).delete().then(() => {
                    console.log("Task successfully deleted!");
                });
            } catch {
                alert("some error happened upon deleting task :/ ");
            }
        }
        // document.getElementById('root').createElement(<div class="modal-backdrop fade show"></div>)

    }

    renderTableBody = () => {
        return this.props.tasks.map((task) => {
            const { id, name, status, description } = task;
            return (
                <tr key={id}>
                    <td className="text-nowrap">{status}</td>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td className="text-nowrap">
                        <i className="btn btn-sm btn-outline-light fas fa-edit mr-2" title="Edit"></i>
                        <i onClick={() => { this.deleteTask(id) }} title="Delete" className="btn btn-sm btn-outline-light fas fa-trash-alt"></i>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="col-12 col-md-9">
                <table className="task-table table table-dark mb-0">
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableBody()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TaskTable;

