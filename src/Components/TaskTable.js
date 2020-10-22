import React, { Component } from 'react';
// import EditTask from './EditTask'
const firebase = require('firebase');

class TaskTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    }

    componentDidMount() {
        firebase.firestore().collection('tasks').onSnapshot(dataUpdate => {
            const tasks = dataUpdate.docs.map(doc => {
                const data = doc.data();
                data['id'] = doc.id;
                return data;
            });
            this.setState({ tasks })
        });
    }

    deleteTask = (taskId) => {

        try {
            firebase.firestore().collection('tasks').doc(taskId).delete().then(() => {
                console.log("Task successfully deleted!");
            });
        } catch {
            alert("some error happened upon deleting task :/ ");
        }
    }

    renderTableBody = () => {
        return this.state.tasks.map((task) => {
            const { id, name, status, description } = task;
            return (
                <tr key={id}>
                    <td>{name}</td>
                    <td>{status}</td>
                    <td>{description}</td>
                    <td>
                        <i className="btn btn-sm btn-outline-light fas fa-edit mx-2"></i>
                        <i onClick={() => { this.deleteTask(id) }} title="Delete" className="btn btn-sm btn-outline-light fas fa-trash-alt mx-2"></i>
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
                            <th>Name</th>
                            <th>Status</th>
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

