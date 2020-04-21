const Link =  window.ReactRouterDOM.Link;

class AlertCreatorForm extends React.Component {
	state = {
		fruites: [
	        {id: 1, value: "General population", isChecked: false},
	        {id: 2, value: "Potentially Infected", isChecked: false},
	        {id: 3, value: "Tested Positive", isChecked: false},
	        {id: 4, value: "Need Urgent Help", isChecked: false},
	        {id: 5, value: "Recovered", isChecked: false}
	      ],
	      alertName: '',
	      alertText: '',
	      errorMessage: '',
	      showError: false
	}
	
	handleChange = (e) => {
		const {name, value} = e.target;
		this.setState({
			[name]:value
		});
	}
	
	submitAlert = (e) => {
		 e.preventDefault();
	    var self = this;
	    
	    if(this.state.alertName == '' || this.state.alertText == ''){
	    	self.setState({
	            ...self.state,
	            errorMessage: "Please enter alert name and text",
	            showError: true
	        });
	    	return false;
	    }
	    
	    self.setState({
            ...self.state,
            errorMessage: "",
            showError: false,
            alertName: '',
  	      	alertText: '',
        });
	    
	    this.props.data({
            name: this.state.alertName,
            groups: [],
            text: "Yo!",
            lastRun: new Date(),
            status: 0,
	    });
	}
	
	handleAllChecked = (event) => {
	    let fruites = this.state.fruites
	    fruites.forEach(fruite => fruite.isChecked = event.target.checked) 
	    this.setState({fruites: fruites})
	  }

	handleCheckChieldElement = (event) => {
	    let fruites = this.state.fruites
	    fruites.forEach(fruite => {
	       if (fruite.value === event.target.value)
	          fruite.isChecked =  event.target.checked
	    })
	    this.setState({fruites: fruites})
	}
	  
    render() {
    	 var errorMessage = this.state.showError ? (
            <div className="alert alert-danger">{this.state.errorMessage}</div>
        ) : null;
        return (
            <div className="card p-2 mt-4">
            {errorMessage}
                <h3>Create New Alert</h3>
                <div><small>This will not send the alert. For the alert to be sent, please click the send alerts button below.</small></div>
                <div className="form">
                    <div className="form-group">
                        <label>Alert Name</label>
                        <input type="text" className="form-control" name="alertName" value={this.state.alertName} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Groups To Receive</label>
                        <div className="form-check">
	                        <input className="form-check-input" type="checkbox" onClick={this.handleAllChecked}  value="checkedall"  />
	                        <label className="form-check-label">Select All</label>
                        </div>
                        
                        {
                            this.state.fruites.map((fruite, key) => {
                              return (
                            		  <div key={key} className="form-check">
	                            		  <input className="form-check-input" key={fruite.id} onClick={this.handleCheckChieldElement} type="checkbox" checked={fruite.isChecked} value={fruite.value} readOnly/> 
	                            		  <label className="form-check-label">{fruite.value}</label>
                            		  </div>
                            	    )
                            })
                          }
                        
                        
                    </div>
                    
                    <div className="form-group">
                    <label>Publish Repeat</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"   name="publish"/>
                        <label className="form-check-label">No Repeat</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"  name="publish"/>
                        <label className="form-check-label">One Time</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"  name="publish"/>
                        <label className="form-check-label">Weekly</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"  name="publish"/>
                        <label className="form-check-label">Daily</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio"  name="publish"/>
                        <label className="form-check-label">Monthly</label>
                    </div>
                    <div className="form-check">
	                    <input className="form-check-input" type="radio"  name="publish"/>
	                    <label className="form-check-label">Number Of Times</label>
	                </div>
		             <div className="form-check">
		                <input className="form-check-input" type="radio"  name="publish"/>
		                <label className="form-check-label">Start Date</label>
		            </div>
		            <div className="form-check">
			            <input className="form-check-input" type="radio"  name="publish"/>
			            <label className="form-check-label">End Date</label>
		            </div>
                </div>
                    <div className="form-group">
                        <label>Alert Text</label>
                        <textarea type="text" className="form-control" name="alertText" value={this.state.alertText} onChange={this.handleChange} ></textarea>
                    </div>
                    <a href="#" className="btn btn-primary" role="button" onClick={this.submitAlert}>Create Alert</a>
                    
                    <a href="#" className="btn btn-success ml-3" role="button">Publish Alert</a>
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
                <td>{lastRunString}</td>
                <td>
                    <a href="#" className="mr-3">Edit</a>
                    <a href="#">Delete</a>
                </td>
                
                <td>
                    {this.props.data.status == 0 &&
                    	<Link to="/medical/reviewalert" className="btn btn-success" role="button">Publish Alert</Link>
                    }
                    {this.props.data.status == 1 &&
                    	<Link to="#" className="btn btn-success" role="button">Published</Link>
                    }
                    {this.props.data.status == 2 &&
                    	<Link to="#" className="btn text-success" role="button">Archived</Link>
                    }	
                </td>
            </tr>
        );
    }
}

class AlertViewingTable extends React.Component {
    render() {
        const rows = this.props.notifications.map((notif, key) => <AlertViewingRow key={key} data={notif} />);
        return (
            <div className="card p-2 mt-4">
                <h3>Alerts Mgmt:</h3>
                	<table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Actions</th>
                            <th>Status</th>
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
                lastRun: null,
                status: 0,
            },
            {
                name: "Alert infected about safety precautions",
                groups: [],
                text: "Yo!",
                lastRun: null,
                status: 1,
            },
        ]
    }
    
    setAlertData = (val) => {
    	this.setState({
    		notifications: this.state.notifications.concat([val])
    	});
    }
    
    render() {
        return (
            <div className="container">
                <MedicalHeader userText="Williams, Joe" location="Davidson County, NC" />
                <h2>Alert Notifications:</h2>
                <AlertCreatorForm  data={this.setAlertData}/>
                <AlertViewingTable notifications={this.state.notifications} />
            </div>
        );
    }
}
