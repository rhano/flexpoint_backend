function MedicalHeader(props) {
    return (
        <div className="d-flex justify-content-between">
            <div>
                <Link to="/medical/notifications" className="mr-3">New Illness Notifications</Link>
                <Link to="/medical/illnessmanagement" className="mr-3">Illness Population Management</Link>
                <Link to="/medical/alertmanagement" className="mr-3">Alert Notification Management</Link>
                <Link to="/medical/analytics" className="mr-3">County Analytics</Link>
            </div>
            <div>
                <span>Co. Exposed: 3632</span><br />
                <span>Co. Cases: 1243</span><br />
                <span>State Cases: 23123</span>
            </div>
            <div>
                <span>User: {props.userText}</span><br />
                <span>{props.location}</span>
            </div>
        </div>
    );
}
