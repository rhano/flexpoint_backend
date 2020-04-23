function MedicalHeader(props) {
    return (
        <div className="d-flex justify-content-between">
            <div>
                <Link to="/medical/illnessmanagement" className="mr-3">Case Notifications</Link>
                <Link to="/medical/illnessmanagement" className="mr-3">Illness Population Management</Link>
                <Link to="/medical/alertmanagement" className="mr-3">Alert Notifications</Link>
                <Link to="/medical/analytics" className="mr-2">Analytics</Link>
            </div>
            <ul style={{listStyleType: 'none'}}>
                <li><b>Co. Exposed:</b> 3632</li>
                <li><b>Co. Cases:</b> 1243</li>
                <li><b>State Cases:</b> 23123</li>
                <li><b>User:</b> {props.userText} {props.location}</li>                
            </ul>
            <Link to="/nimda" className="mr-3">logout</Link>
        </div>
    );
}
