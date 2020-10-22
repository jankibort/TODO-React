import React, { Component } from 'react';
import EditTask from './EditTask';
const firebase = require('firebase');

class TaskTable extends Component {
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

    editTask = (taskId) => {
        console.log('sth')
        return (<EditTask taskId={taskId} />);
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
                            <i onClick={() => { this.editTask(id) }} className="btn btn-sm btn-outline-light fas fa-edit mr-2" title="Edit" data-toggle="modal" data-target={"#editModal" + id}></i>
                            <i onClick={() => { this.deleteTask(id) }} title="Delete" className="btn btn-sm btn-outline-light fas fa-trash-alt"></i>
                        </td>
                    </tr>
                )
            }
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
            </div>
        );
    }
}

export default TaskTable;

