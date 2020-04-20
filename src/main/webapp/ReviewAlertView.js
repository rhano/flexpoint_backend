function ReviewAlertSection(props) {
    return (
        <div className="card mt-4 p-2">
            <h3>Review Alert</h3>
            <div className="form">
                <div className="form-group">
                    <label>Groups to receive</label>
                    <input type="text" className="form-control" value="Potentially Infected, Tested Positive" disabled="disabled" />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" disabled="disabled">Hello! You have been added to our potentially infected list for Covid-19. This is a message recommending that you download FlexPoint, an app designed to help deal with the Covid-19 by giving helpful information about your potential exposure.</textarea>
                </div>
                <input type="submit" className="btn btn-success mr-2" value="Send alert" />
                <Link to="/medical/alertmanagement" className="btn btn-secondary" role="button">Cancel</Link>
            </div>
        </div>
    );
}

function ReviewAlertView(props) {
    return (
        <div className="container">
            <MedicalHeader userText="Williams, Joe" location="Davidson County, NC" />
            <ReviewAlertSection />
        </div>
    );
}
