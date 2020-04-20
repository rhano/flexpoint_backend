const Link =  window.ReactRouterDOM.Link;

class InfectionModeDropDown extends React.Component {
    render() {
        const initialStatus = this.props.status == null ? Groups.EXPOSED : this.props.status;
        var optionGeneralPop = initialStatus == Groups.GENERAL_POPULATION ? <option value="o1">General Population</option> : <option value="o1">General Population</option>;
        var optionExposed = initialStatus == Groups.EXPOSED ? <option value="o2">Potentially Exposed</option> : <option value="o2">Potentially Exposed</option>;
        var optionInfected = initialStatus == Groups.INFECTED ? <option value="o3">Test Positive</option> : <option value="o3">Test Positive</option>;
        var optionNeedUrgentHelp = initialStatus == Groups.NEED_URGENT_HELP ? <option value="o4">Need Urgent Help</option> : <option value="o4">Need Urgent Help</option>;
        var optionRecovered = initialStatus == Groups.RECOVERED ? <option value="o5">Recovered</option> : <option value="o5">Recovered</option>;
        if (this.props.form) {
            return (
                <select className="form-control" >
                    {optionGeneralPop}
                    {optionExposed}
                    {optionInfected}
                    {optionNeedUrgentHelp}
                    {optionRecovered}
                </select>
            );
        } else {
            return (
                <select>
                    {optionGeneralPop}
                    {optionExposed}
                    {optionInfected}
                    {optionNeedUrgentHelp}
                    {optionRecovered}
                </select>
            );
        }
    }
}

class PhoneTrackerRow extends React.Component {
    render() {
        const notificationDate = this.props.data.notificationDate;
        const notificationDateString = `${notificationDate.getMonth() + 1}-${notificationDate.getDate()}-${notificationDate.getYear()+1900}`;
        const testDate = this.props.data.testDate;
        const testDateString = testDate != null ? `${testDate.getMonth() + 1}-${testDate.getDate()}-${testDate.getYear()+1900}` : 'N / A';
        const estExposureDate = this.props.data.estimatedExposureDate;
        const estExposureDateString = `${estExposureDate.getMonth() + 1}-${estExposureDate.getDate()}-${estExposureDate.getYear()+1900}`;
        return (
            <tr>
                <td>{this.props.data.residentId}</td>
                <td>{estExposureDateString}</td>
                <td>{this.props.data.phoneNumber}</td>
                <td>{testDateString}</td>
                <td><InfectionModeDropDown status={this.props.data.status} /></td>
                <td>{notificationDateString}</td> 
                <td>{this.props.data.notificationAttemptCount}</td> 
            </tr>
        );
    }
}

class ReportNewCaseForm extends React.Component {
    render() {
        return (
            <div className="card p-2 mt-4">
                <h3>Report New Case</h3>
                <div className="form">
                    <div className="form-group">
                        <label>Resident ID</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Test Date</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Estimated exposure date</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Status</label>
                        <div>
                            <InfectionModeDropDown status={Groups.EXPOSED} form={true} />
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary" role="button">Create Report</a>
                </div>
            </div>
        );
    }
}

class PhoneTracker extends React.Component {
    render() {
        // TODO: Decide if this filter is to be used or not.
        const filteredPhones = this.props.data.filter(phone => phone.status != Groups.GENERAL_POPULATION && phone.status != Groups.RECOVERED);
        const trackerRows =  filteredPhones.map((phone, key) => <PhoneTrackerRow key={key} data={phone} />);
        return (
            <div className="card mt-4 p-2">
                <h3>App Download Pending</h3>
                <table className="table table-striped w-100">
                    <thead>
                        <tr>
                            <th>Resident ID</th>
                            <th>Est. Exposure Date</th>
                            <th>Phone</th>
                            <th>Test Date</th>
                            <th>Status</th>
                            <th>Notification Date</th>
                            <th>Notification Attempt</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trackerRows}
                    </tbody>
                </table>
            </div>
        );
    }
}

class IllnessManagementView extends React.Component {
    state = {
        phones: [
            {
                residentId: "Joe",
                estimatedExposureDate: new Date(),
                phoneNumber: "(555) 555 5555",
                status: Groups.EXPOSED,
                testDate: null,
                notificationDate: new Date(),
                notificationAttemptCount: 1
            },
            {
                residentId: "Elizabeth",
                estimatedExposureDate: new Date(),
                phoneNumber: "(555) 555 5555",
                status: Groups.INFECTED,
                testDate: new Date("03/15/2020 4:45 PM"),
                notificationDate: new Date(),
                notificationAttemptCount: 1
            },
            {
                residentId: "Alice",
                estimatedExposureDate: new Date(),
                phoneNumber: "(555) 555 5555",
                status: Groups.NEED_URGENT_HELP,
                testDate: null,
                notificationDate: new Date(),
                notificationAttemptCount: 1
            }
        ]
    }

    render() {
        return (
            <div className="container">
                <MedicalHeader userText="Williams, Joe" location="Davidson County, NC" />
                <h2>Case Notifications:</h2>
                <ReportNewCaseForm />
                <PhoneTracker data={this.state.phones} />
            </div>
        );
    }
}
