class LoginView extends React.Component {
    state = {
        showError: false,
        errorMessage: '',
        usernameText: '',
        passwordText: '',
        healthBtn: false,
        flexPointBtn: false
    }
    
    componentWillMount(){
    	if(this.props && this.props.history.location.pathname == '/'){
    		this.setState({
    			healthBtn: true,
    			flexPointBtn: false
    		})
    	}else{
    		this.setState({
    			healthBtn: false,
    			flexPointBtn: true
    		})
    	}
    }

    onUsernameChange = (e) => {
        console.log(this.state);
        var text = e.target.value;
        this.setState({
            ...this.state,
            usernameText: text
        });
    }

    onPasswordChange = (e) => {
        console.log(this.state);
        var text = e.target.value;
        this.setState({
            ...this.state,
            passwordText: text
        });
    }
    
    onLoginFlexClick = (e) => {
    	e.preventDefault();
    	var url = '/medical/illnessmanagement';
        var self = this;
        
        if(this.state.usernameText == '' || this.state.passwordText == ''){
        	self.setState({
                ...self.state,
                errorMessage: "Please enter username and password",
                showError: true
            });
        	return false;
        }
        
        if(this.state.usernameText.toUpperCase() != 'admin'.toUpperCase() || this.state.passwordText.toUpperCase() != 'testing1234'.toUpperCase()){
        	self.setState({
        		...self.state,
                usernameText: '',
                passwordText: '',
                errorMessage: "Invalid username or password",
                showError: true,
            });
        	return false;
        }
        this.props.history.push(url);
    }

    onLoginClick = (e) => {
        e.preventDefault();
        var url = '/admin/appheadings';
        var self = this;
        
        if(this.state.usernameText == '' || this.state.passwordText == ''){
        	self.setState({
                ...self.state,
                errorMessage: "Please enter username and password",
                showError: true
            });
        	return false;
        }
        
        if(this.state.usernameText.toUpperCase() != 'admin'.toUpperCase() || this.state.passwordText.toUpperCase() != 'testing1234'.toUpperCase()){
        	self.setState({
                usernameText: '',
                passwordText: '',
                errorMessage: "Invalid username or password",
                showError: true,
            });
        	return false;
        }
        this.props.history.push(url);
       {/*fetch('api/admin/login', {
            method: "POST",
            body: `username=${encodeURIComponent(this.state.usernameText)}&password=${encodeURIComponent(this.state.passwordText)}`,
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            response.json().then(responseJson => {
                if (responseJson["success"]) {
                    this.props.history.push(url);
                } else {
                    self.setState({
                        ...self.state,
                        errorMessage: "Invalid username or password",
                        showError: true
                    });
                }
            }).catch(failure => {
                console.log(failure);
                self.setState({
                    ...self.state,
                    errorMessage: "Server error",
                    showError: true
                });
            });
        });
        */}
    }

    render() {
        var errorMessage = this.state.showError ? (
            <div className="alert alert-danger">{this.state.errorMessage}</div>
        ) : null;
        return (
            <div className="d-flex h-100 w-100 justify-content-center align-items-center">
                <div className="rounded">
                    {errorMessage}
                    <form className="card p-4">
                        <h3 className="text-center">Login</h3>
                        <div className="row mt-3">
                            <label className="mr-3">Username</label>
                            <input type="text" name="username" className="form-group" value={this.state.usernameText} onChange={this.onUsernameChange} />
                        </div>
                        <div className="row mt-3">
                            <label className="mr-3">Password</label>
                            <input type="password" name="password" className="form-group"  value={this.state.passwordText}  onChange={this.onPasswordChange} />
                        </div>
                        <div className="mt-3 col-12">
                        	
                          {this.state.healthBtn &&
                        	 <a href="#" onClick={this.onLoginClick} className="btn btn-primary mr-3">Login as Health Department</a>
                          }
                          {this.state.flexPointBtn &&
                          <a href="#" onClick={this.onLoginClick} className="btn btn-secondary">Login as FlexPoint Administrator</a>
                          }
                            
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

console.log("LoginView loaded");
