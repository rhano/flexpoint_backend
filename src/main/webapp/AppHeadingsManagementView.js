const Link =  window.ReactRouterDOM.Link;

class AppHeadingsForm extends React.Component {
    state = {
        messageEnabled: false,
        messageClass: 'alert-success',
        messageText: '',
        data: []
    }

    componentDidMount() {
        fetch('api/allappheadings').then(response => {
            response.json().then(responseJson => {
                this.setState({
                    ...this.state,
                    data: responseJson
                });
            });
        });
    }

    getHeadingData(headingCode) {
        return this.state.data.filter(heading => heading.type == headingCode)[0];
    }

    getHeadingTextOrEmpty(headingCode) {
        var heading = this.getHeadingData(headingCode);
        return heading == null ? "" : heading.headingText;
    }

    showMessage(messageClass, messageText) {
        this.setState({
            ...this.state,
            messageEnabled: true,
            messageClass: messageClass,
            messageText: messageText
        });
    }

    formInput = new FormInputGrabber()

    updateAppHeading(modeId, type, value) {
        return new Promise((resolve, reject) => {
            console.log('Prepare request');
            fetch('api/admin/update-app-heading', {
                method: 'POST',
                body: `mode=${modeId}&type=${type}&heading_text=${encodeURIComponent(value)}`,
                headers: {
                    "Content-type": "application/x-www-form-urlencoded"
                }
            }).then(response => {
                response.json().then(responseJson => {
                    if (responseJson['success']) {
                        resolve();
                    } else {
                        console.log('success=false');
                        reject();
                    }
                }).catch(err => {
                    console.log('Failure');
                    console.log(err);
                    reject();
                })
            }).catch(err => {
                console.log('Failure');
                console.log(err);
                reject();
            });
            console.log('Sent req');
        });
    }

    updateIfValueNotNull = (modeId, prefix, value) => {
        var ending = this.props.suffix;
        var type = prefix + ending;
        if (value != null) {
            console.log('Has value, sending req');
            return this.updateAppHeading(modeId, type, value);
        } else {
            console.log('Is null, skipping');
            return Promise.resolve();
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        var generalPop = this.formInput.get('generalPop');
        var potentiallyExposed = this.formInput.get('potentiallyExposed');
        var potentiallyInfectious = this.formInput.get('potentiallyInfectious');
        var advancedCare = this.formInput.get('advancedCare');
        var roadToRecovery = this.formInput.get('roadToRecovery');
        var requests = [
            this.updateIfValueNotNull(1, 'GP', generalPop),
            this.updateIfValueNotNull(2, 'PE', potentiallyExposed),
            this.updateIfValueNotNull(3, 'PI', potentiallyInfectious),
            this.updateIfValueNotNull(4, 'AC', advancedCare),
            this.updateIfValueNotNull(5, 'RR', roadToRecovery)
        ];
        console.log(requests);
        console.log(Promise.all(requests).then(() => {
            this.showMessage('alert-success', 'Successfully updated app headings');
        }).catch(err => {
            this.showMessage('alert-danger', 'Failed to update app headings');
        }));
    }

    render() {
        var alert = null;
        if (this.state.messageEnabled) {
            alert = <div className={"alert " + this.state.messageClass}>{this.state.messageText}</div>
        }
        var generalPopValue = this.getHeadingTextOrEmpty('GP' + this.props.suffix);
        var potentiallyExposedValue = this.getHeadingTextOrEmpty('PE' + this.props.suffix);
        var potentiallyInfectedValue = this.getHeadingTextOrEmpty('PI' + this.props.suffix);
        var advancedCareValue = this.getHeadingTextOrEmpty('AC' + this.props.suffix);
        var roadToRecoveryValue = this.getHeadingTextOrEmpty('RR' + this.props.suffix);
        return (
            <React.Fragment>
                {alert}
                <form onSubmit={this.onSubmit}>
                    <h4>{this.props.title}</h4>
                    <div className="form-group">
                        <label>General Population</label>
                        <input type="text" className="form-control" onChange={this.formInput.textComponentUpdater("generalPop")} defaultValue={generalPopValue} />
                    </div>
                    <div className="form-group">
                        <label>Potentially Exposed</label>
                        <input type="text" className="form-control" onChange={this.formInput.textComponentUpdater("potentiallyExposed")} defaultValue={potentiallyExposedValue} />
                    </div>
                    <div className="form-group">
                        <label>Potentially Infectious</label>
                        <input type="text" className="form-control" onChange={this.formInput.textComponentUpdater("potentiallyInfectious")} defaultValue={potentiallyInfectedValue} />
                    </div>
                    <div className="form-group">
                        <label>Advanced Care</label>
                        <input type="text" className="form-control" onChange={this.formInput.textComponentUpdater("advancedCare")} defaultValue={advancedCareValue} />
                    </div>
                    <div className="form-group">
                        <label>Road to Recovery</label>
                        <input type="text" className="form-control" onChange={this.formInput.textComponentUpdater("roadToRecovery")} defaultValue={roadToRecoveryValue} />
                    </div>
                    <div className="text-right">
                        <input type="submit" value="Save changes" className="btn btn-primary" />
                    </div>
                </form>
            </React.Fragment>
        );
    }
}

class AppHeadingsManagementView extends React.Component {
    state = {
    }

    render() {
        return (
            <div className="container">
                <AdminHeader userText="Williams, Joe" />
                <div className="mt-4 p-2">
                    <h3>App Headings Management</h3>
                    <div className="row">
                        <div className="col">
                            <div className="card p-2">
                                <AppHeadingsForm title="Disease Info Management Headings" suffix="DIF" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-2">
                                <AppHeadingsForm title="Emotional and Mental Health Management" suffix="EMF" />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <div className="card p-2">
                                <AppHeadingsForm title="Disease Info Management Headings Updates" suffix="DIT" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="card p-2">
                                <AppHeadingsForm title="Emotional and Mental Health Management Updates" suffix="EMT" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
