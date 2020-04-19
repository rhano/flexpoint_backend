const Link =  window.ReactRouterDOM.Link;

class AlertCreatorForm extends React.Component {
    render() {
        return (
            <div className="card p-2 mt-4">
                <h3>Create New Alert</h3>
                <div><small>This will not send the alert. For the alert to be sent, please click the send alerts button below.</small></div>
                <div className="form">
                    <div className="form-group">
                        <label>Alert Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Groups To Receive</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">General population</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Potentially Infected</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Tested Positive</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Need Urgent Help</label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">Recovered</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Alert Text</label>
                        <textarea type="text" className="form-control"></textarea>
                    </div>
                    <a href="#" className="btn btn-primary" role="button">Create Alert</a>
                </div>
            </div>
        );
    }
}

class AlertViewingRow extends React.Component {
    render() {
        const lastRun = this.props.data.lastRun;
        const lastRunString = lastRun == null ? "Never" : `${lastRun.getMonth() + 1}-${lastRun.getDate()}-${lastRun.getYear()+1900}`;
        return (
            <tr>
                <td>{this.props.data.name}</td>
                <td>{lastRunString}</td>
                <td>
                    <a href="#" className="mr-3">Edit</a>
                    <a href="#">Delete</a>
                </td>
                <td className="text-right">
                    <Link to="/medical/reviewalert" className="btn btn-success" role="button">Send alerts</Link>
                </td>
            </tr>
        );
    }
}

class AlertViewingTable extends React.Component {
    render() {
        const rows = this.props.notifications.map(notif => <AlertViewingRow data={notif} />);
        return (
            <div className="card p-2 mt-4">
                <h3>Alerts</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Run</th>
                            <th>Actions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

class AlertManagementView extends React.Component {
    state = {
        notifications: [
            {
                name: "Alert exposed",
                groups: [],
                text: "Yo!",
                lastRun: null
            },
            {
                name: "Alert infected about safety precautions",
                groups: [],
                text: "Yo!",
                lastRun: null
            }
        ]
    }

    render() {
        return (
            <div className="container">
                <MedicalHeader userText="Williams, Joe" location="Davidson County, NC" />
                <AlertCreatorForm />
                <AlertViewingTable notifications={this.state.notifications} />
            </div>
        );
    }
}
