import React, { Component } from 'react';
import EditTask from './EditTask';
const firebase = require('firebase');

class TaskTable extends Component {
    state = {
        taskId: null,
        task: {
            description: null,
            name: null,
            status: null,
        }
    }

    deleteTask = (taskId) => {
        let acceptance = window.confirm("Press OK if you want to proceed removing chosen task");
        if (acceptance) {
            try {
                firebase.firestore().collection('tasks').doc(taskId).delete();
            } catch {
                alert("some error happened upon deleting task :/ ");
            }
        }
    }

    fetchData = (taskId) => {
        const task = firebase.firestore().collection('tasks').doc(taskId);

        task.get().then((doc) => {
            if (doc.exists) {
                this.setState({
                    task: doc.data()
                });
            } else {
                console.log("err");
            }
        });
    }

    renderTableBody = () => {
        const nameFilter = this.props.nameFilter;
        const statusFilter = this.props.statusFilter;
        return this.props.tasks.map((task) => {
            const { id, name, status, description } = task;
            if ((nameFilter === null || nameFilter === task.name) && (statusFilter == null || statusFilter === task.status)) {
                return (
                    <tr key={id}>
                        <td className="text-nowrap">{status}</td>
                        <td>{name}</td>
                        <td>{description}</td>
                        <td className="text-nowrap">
                            <i onClick={() => { this.setState({ taskId: id }); this.fetchData(id) }} className="btn btn-sm btn-outline-light fas fa-edit mr-2" title="Edit" data-toggle="modal" data-target="#editModal"></i>
                            <i onClick={() => { this.deleteTask(id) }} title="Delete" className="btn btn-sm btn-outline-light fas fa-trash-alt"></i>
                        </td>
                    </tr>
                )
            }
            return null;
        });
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
                <EditTask id={this.state.taskId} task={this.state.task} />
            </div>
        );
    }
}

export default TaskTable;

