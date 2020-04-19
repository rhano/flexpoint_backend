const Link =  window.ReactRouterDOM.Link;

class PaulQuantumCheckbox extends React.Component {
    state = {
        checked: this.props.checked,
        lastCheckedProp: this.props.checked
    }

    clickListener = (val) => {
        return (e) => {
            this.setState({
                ...this.state,
                checked: val
            });
            console.log(this.state);
            if (this.props.onChange != null) {
                this.props.onChange(val);
            }
        };
    }

    render() {
        if (this.props.checked != this.state.lastCheckedProp) {
            this.setState({
                ...this.state,
                lastCheckedProp: this.props.checked,
                checked: this.props.checked
            });
        }
        var chkYes = <input onClick={this.clickListener(1)} name={this.props.name} type="radio" className="form-check-input" checked={this.state.checked === 1} />
        var chkMaybe = <input onClick={this.clickListener(0)} name={this.props.name} type="radio" className="form-check-input" checked={this.state.checked === 0} />
        var chkNo = <input onClick={this.clickListener(-1)} name={this.props.name} type="radio" className="form-check-input" checked={this.state.checked === -1} />
        return (
            <div className="form-group">
                <label>{this.props.text}</label>
                <div>
                    <div className="form-check form-check-inline">
                        {chkYes}
                        <label className="form-check-label">Yes</label>
                    </div>
                    <div className="form-check form-check-inline">
                        {chkMaybe}
                        <label className="form-check-label">Maybe</label>
                    </div>
                    <div className="form-check form-check-inline">
                        {chkNo}
                        <label className="form-check-label">No</label>
                    </div>
                </div>
            </div>
        );
    }
}

class PathogenSettingsForm extends React.Component {
    state = {
        messageEnabled: false,
        messageClass: '',
        messageText: ''
    }

    formInput = new FormInputGrabber()

    onSubmit = (e) => {
        e.preventDefault();
        var body = new UrlRequestBuilder()
            .add('source', this.formInput.get('source'))
            .add('name', this.formInput.get('name'))
            .addInt('contagiousRanking', this.formInput.get('contagiousRanking'))
            .add('atRisk1', this.formInput.get('atRisk1'))
            .add('atRisk2', this.formInput.get('atRisk2'))
            .add('atRisk3', this.formInput.get('atRisk3'))
            .add('atRisk4', this.formInput.get('atRisk4'))
            .add('atRisk5', this.formInput.get('atRisk5'))
            .addInt('touchFaceHands', this.formInput.get('touchFaceHands'))
            .addInt('respiratorDroplets', this.formInput.get('respiratorDroplets'))
            .addInt('proximityContact', this.formInput.get('proximityContact'))
            .addInt('touchingHardSurface', this.formInput.get('touchingHardSurface'))
            .addInt('airborne', this.formInput.get('airborne'))
            .addInt('sexualContact', this.formInput.get('sexualContact'))
            .addInt('kissing', this.formInput.get('kissing'))
            .addInt('pets', this.formInput.get('pets'))
            .addInt('wildAnimals', this.formInput.get('wildAnimals'))
            .addInt('gym', this.formInput.get('gym'))
            .addBoolean('vaccineYes', this.formInput.get('vaccineYes'))
            .addBoolean('vaccineNo', this.formInput.get('vaccineNo'))
            .addBoolean('inTesting', this.formInput.get('inTesting'))
            .addBoolean('inTrials', this.formInput.get('inTrials')).build();
        console.log(`body: ${body}`);
        fetch('api/setpathogensettings', {
            method: 'POST',
            body: body,
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        }).then(response => {
            response.json().then(responseJson => {
                this.setState({
                    ...this.state,
                    messageEnabled: true,
                    messageClass: 'alert-success',
                    messageText: 'Successfully updated pathogen settings'
                });
                try {
                    window.scrollTo(0, 0);
                } catch (ex) {}
            });
        });
    }

    render() {
        var alert = null;
        if (this.state.messageEnabled) {
            alert = (
                <div className={`alert ${this.state.messageClass}`}>{this.state.messageText}</div>
            );
        }
        var transmissionTouchingFace = <PaulQuantumCheckbox onChange={this.formInput.quantumComponentUpdater('touchFaceHands', this.props.pathogen.touchFaceHands)} name="touchfacehands" text="Touching Face With Contaminated Hands" checked={this.props.pathogen.touchFaceHands} />
        var transmissionCoughedOn = <PaulQuantumCheckbox onChange={this.formInput.quantumComponentUpdater('respiratorDroplets', this.props.pathogen.respiratorDroplets)} name="respir" text="Respiratory Droplets Being Coughed On" checked={this.props.pathogen.respiratorDroplets} />
        var transmissionProximityContact = <PaulQuantumCheckbox onChange={this.formInput.quantumComponentUpdater('proximityContact', this.props.pathogen.proximityContact)} name="proximityContact" text="Proximity Contact with An Infected Person" checked={this.props.pathogen.proximityContact} />
        var transmissionHardSurfaces = <PaulQuantumCheckbox onChange={this.formInput.quantumComponentUpdater('touchingHardSurface', this.props.pathogen.touchingHardSurface)} name="touchHardSurf" text="Touching Contaminated Hard Surfaces, such as: Cardbox Boxes, Credit Card Keypads, Shopping Cards, etc." checked={this.props.pathogen.touchingHardSurface} />
        var transmissionAirborne = <PaulQuantumCheckbox onChange={this.formInput.quantumComponentUpdater('airborne', this.props.pathogen.airborne)} name="airborne" text="Airborne, Breathing Same Air as Infected Person" checked={this.props.pathogen.airborne} />
        var transmissionSexualContact = <PaulQuantumCheckbox onChange={this.formInput.quantumComponentUpdater('sexualContact', this.props.pathogen.sexualContact)} name="sexcontact" text="Sexual Contact" checked={this.props.pathogen.sexualContact} />
        var transmissionKissing = <PaulQuantumCheckbox onChange={this.formInput.quantumComponentUpdater('kissing', this.props.pathogen.kissing)} name="kiss" text="Kissing" checked={this.props.pathogen.kissing} />
        var transmissionPets = <PaulQuantumCheckbox onChange={this.formInput.quantumComponentUpdater('pets', this.props.pathogen.pets)} name="pets" text="Pets" checked={this.props.pathogen.pets} />
        var transmissionWildAnimals = <PaulQuantumCheckbox onChange={this.formInput.quantumComponentUpdater('wildAnimals', this.props.pathogen.wildAnimals)} name="wildanim" text="Wild Animals" checked={this.props.pathogen.wildAnimals} />
        var transmissionGyms = <PaulQuantumCheckbox onChange={this.formInput.quantumComponentUpdater('gym', this.props.pathogen.gym)} name="gym" text="Working Out in Gym" checked={this.props.pathogen.gym} />
        return (
            <div className="card mt-4 p-2">
                {alert}
                <h3>Pathogen Information Management</h3>
                <form className="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Source</label>
                        <input type="text" className="form-control" onChange={this.formInput.textComponentUpdater('source', this.props.pathogen.source)} defaultValue={this.props.pathogen.source} />
                    </div>
                    <div className="form-group">
                        <label>Pathogen Name</label>
                        <input type="text" className="form-control" onChange={this.formInput.textComponentUpdater('name', this.props.pathogen.name)} defaultValue={this.props.pathogen.name} />
                    </div>
                    <div className="form-group">
                        <label>Contagious Ranking</label>
                        <input type="text" className="form-control" onChange={this.formInput.textComponentUpdater('contagiousRanking', this.props.pathogen.contagiousRanking)} defaultValue={this.props.pathogen.contagiousRanking} />
                    </div>
                    <div className="form-group">
                        <label>At risk</label>
                        <input type="text" className="form-control" onChange={this.formInput.textComponentUpdater('atRisk1', this.props.pathogen.atRisk1)} defaultValue={this.props.pathogen.atRisk1} />
                        <input type="text" className="form-control" onChange={this.formInput.textComponentUpdater('atRisk2', this.props.pathogen.atRisk2)} defaultValue={this.props.pathogen.atRisk2} />
                        <input type="text" className="form-control" onChange={this.formInput.textComponentUpdater('atRisk3', this.props.pathogen.atRisk3)} defaultValue={this.props.pathogen.atRisk3} />
                        <input type="text" className="form-control" onChange={this.formInput.textComponentUpdater('atRisk4', this.props.pathogen.atRisk4)} defaultValue={this.props.pathogen.atRisk4} />
                        <input type="text" className="form-control" onChange={this.formInput.textComponentUpdater('atRisk5', this.props.pathogen.atRisk5)} defaultValue={this.props.pathogen.atRisk5} />
                    </div>
                    {transmissionTouchingFace}
                    {transmissionCoughedOn}
                    {transmissionProximityContact}
                    {transmissionHardSurfaces}
                    {transmissionAirborne}
                    {transmissionSexualContact}
                    {transmissionKissing}
                    {transmissionPets}
                    {transmissionWildAnimals}
                    {transmissionGyms}
                    <div className="form-group">
                        <label>Vaccine Availability</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" onClick={this.formInput.checkComponentUpdater('vaccineYes', this.props.pathogen.vaccineYes)} defaultChecked={this.props.pathogen.vaccineYes} />
                                <label className="form-check-label">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" onClick={this.formInput.checkComponentUpdater('vaccineNo', this.props.pathogen.vaccineNo)} defaultChecked={this.props.pathogen.vaccineNo} />
                                <label className="form-check-label">No</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" onClick={this.formInput.checkComponentUpdater('inTesting', this.props.pathogen.inTesting)} defaultChecked={this.props.pathogen.inTesting} />
                                <label className="form-check-label">In Testing</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" onClick={this.formInput.checkComponentUpdater('inTrials', this.props.pathogen.inTrials)} defaultChecked={this.props.pathogen.inTrials} />
                                <label className="form-check-label">In Trials</label>
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Set" className="btn btn-primary" role="button" />
                </form>
            </div>
        );
    }
}

class PathogenSettingsView extends React.Component {
    state = {
        pathogen: {
            id: 1,
            source: '',
            name: '',
            contagiousRanking: '',
            atRisk1: '',
            atRisk2: '',
            atRisk3: '',
            atRisk4: '',
            atRisk5: '',
            touchFaceHands: null,
            respiratorDroplets: null,
            proximityContact: null,
            touchingHardSurface: null,
            airborne: null,
            sexualContact: null,
            kissing: null,
            pets: null,
            wildAnimals: null,
            gym: null,
            vaccineYes: null,
            vaccineNo: null,
            inTesting: null,
            inTrials: null
        }
    }

    componentDidMount() {
        fetch('api/getpathogensettings', {
            method: 'POST'
        }).then(response => {
            response.json().then(responseJson => {
                this.setState({
                    ...this.state,
                    pathogen: responseJson
                });
            });
        });
    }

    render() {
        return (
            <div className="container">
                <AdminHeader userText="Williams, Joe" />
                <PathogenSettingsForm pathogen={this.state.pathogen} />
            </div>
        );
    }
}
