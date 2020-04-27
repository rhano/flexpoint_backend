function AdminHeader(props) {
    return (
        <div className="d-flex justify-content-between">
            <div>
                <Link to="/admin/pathogensettings" className="mr-3">Pathogen Settings</Link>
                <Link to="/admin/appheadings" className="mr-3">App Heading Management</Link>
                <Link to="/admin/articles" className="mr-3">Information Management</Link>
            </div>
            <div>
                <span>User: {props.userText}</span><br />
                <Link to="/nimda" className="mr-3">logout</Link>
                
            </div>
        </div>
    );
}
