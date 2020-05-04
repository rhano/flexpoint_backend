class IndividualArticleEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    handleInputChange = (e) => {
        var name = e.target.name;
        var value = e.target.type == 'checkbox' ? e.target.checked : e.target.value; 
        // var value = e.target.value;
        var updatesPayload = {
            [name]: value
        };
        console.log(updatesPayload, " == updatesPayload");
        this.props.updateArticle(updatesPayload);
    }

    handleInputCheckboxChange = (e) => {
    	console.log("");
    	const allcheckboxes=e.target.checked;
    	var checkboxs1 = document.getElementsByName('diseaseGeneralPopulationFlag');
    	var checkboxs2 = document.getElementsByName('diseaseExposedFlag');
    	var checkboxs3 = document.getElementsByName('diseaseInfectedFlag');
    	var checkboxs4 = document.getElementsByName('diseaseNeedUrgentHelpFlag');
    	var checkboxs5 = document.getElementsByName('diseaseRecoveredFlag');
    	const { index } = this.props;
    	if(allcheckboxes)
    	{
    		this.props.article.diseaseGeneralPopulationFlag=true;
    		this.props.article.diseaseExposedFlag=true;
    		this.props.article.diseaseInfectedFlag=true;
    		this.props.article.diseaseNeedUrgentHelpFlag=true;
    		this.props.article.diseaseRecoveredFlag=true;
    		checkboxs1[index].checked=true;
    		checkboxs2[index].checked=true;	
    		checkboxs3[index].checked=true;	
    		checkboxs4[index].checked=true;	
    		checkboxs5[index].checked=true;
    	}
    	else
    	{
    		this.props.article.diseaseGeneralPopulationFlag=false;
    		this.props.article.diseaseExposedFlag=false;
    		this.props.article.diseaseInfectedFlag=false;
    		this.props.article.diseaseNeedUrgentHelpFlag=false;
    		this.props.article.diseaseRecoveredFlag=false;
    		checkboxs1[index].checked=false;
    		checkboxs2[index].checked=false;	
    		checkboxs3[index].checked=false;	
    		checkboxs4[index].checked=false;	
    		checkboxs5[index].checked=false;
    	}
    }
    
    deleteArticle = (e) => {
        e.preventDefault();
        this.props.deleteArticle(this.props.group, this.props.index);
    }

    render() {
    	const { index } = this.props;
    	console.log(this.props, " << this props");
        return (
            <form>
                <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="form-inline">
                    <h5>Tip #{this.props.index + 1}</h5> &nbsp;&nbsp;
	                    <label>Display Order on App:  </label>&nbsp;&nbsp;
	                    <input type="text" className="form-control" size="5" maxlength="3" name="displayOrderOnApp" value={this.props.article.displayOrderOnApp} onChange={this.handleInputChange} />
                    </div>
                    <a href="#" className="d-block" onClick={this.deleteArticle}>Delete</a>
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" className="form-control" name="name" value={this.props.article.name} onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Source</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" name="source" value="CDC" checked={this.props.article.source=="CDC"} onChange={this.handleInputChange} />
                                <label className="form-check-label">CDC</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" name="source" value="DMH" checked={this.props.article.source=="DMH"} onChange={this.handleInputChange} />
                                <label className="form-check-label">DMH</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" name="source" value="State Health Department" checked={this.props.article.source=="State Health Department"} onChange={this.handleInputChange} />
                                <label className="form-check-label">State Health Department</label>
                            </div>
                            <div className="form-check form-check-inline">
	                            <input type="radio" className="form-check-input" name="source" value="FPA Advisory Group" checked={this.props.article.source=="FPA Advisory Group"} onChange={this.handleInputChange} />
	                            <label className="form-check-label">FPA Advisory Group</label>
	                        </div>
	                        <div className="form-check form-check-inline">
	                            <input type="radio" className="form-check-input" name="source" value="Manual Value" checked={this.props.article.source=="Manual Value"} onChange={this.handleInputChange} />
	                            <input type="text" className="form-check-input" name="sourceInputTxt" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" name="description" value={this.props.article.description} onChange={this.handleInputChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Applicable States of Disease</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input type="checkbox" className="form-check-input"  value="All"  onChange={this.handleInputCheckboxChange} />
                        <label className="form-check-label">Select All</label>                        
                        <div>
                            <div className="form-check form-check-inline">
                                <input type="checkbox" 
                                	name="diseaseGeneralPopulationFlag" 
                                	className="form-check-input"
                                	checked={this.props.article.diseaseGeneralPopulationFlag} 
                                    onChange={this.handleInputChange}
                                />
                                <label className="form-check-label">General Population</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="checkbox" 
                                	name="diseaseExposedFlag" 
                                	className="form-check-input" 
                                	checked={this.props.article.diseaseExposedFlag} 
                                    onChange={this.handleInputChange} />
                                <label className="form-check-label">Exposed</label>
                            </div>
                            <div className="form-check form-check-inline">
                                	<input type="checkbox" 
                                    	name="diseaseInfectedFlag" 
                                    	className="form-check-input" 
                                    	checked={this.props.article.diseaseInfectedFlag} 
                                        onChange={this.handleInputChange} />
                                	<label className="form-check-label">Infected</label>
                            </div>
                            <div className="form-check form-check-inline">
                            	<input type="checkbox" 
                                	name="diseaseNeedUrgentHelpFlag" 
                                	className="form-check-input" 
                                	checked={this.props.article.diseaseNeedUrgentHelpFlag} 
                                    onChange={this.handleInputChange} />
                                	<label className="form-check-label">Need Urgent Help</label>
                            </div>
                            <div className="form-check form-check-inline">
                                	<input type="checkbox" 
                                    	name="diseaseRecoveredFlag" 
                                    	className="form-check-input" 
                                    	checked={this.props.article.diseaseRecoveredFlag} 
                                        onChange={this.handleInputChange} />
                                	<label className="form-check-label">Recovered</label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

class IndividualUpdateEntry extends React.Component {
    state = {

    }

    handleInputChange = (e) => {
        var name = e.target.name;
        var value = e.target.type == 'checkbox' ? e.target.checked : e.target.value; 
// value = e.target.value;
        var updatesPayload = {
            [name]: value
        };
       
        this.props.updateInput(updatesPayload);
    }
    
    handleInputCheckboxChangeNext = (e) => {
    	const allcheckboxes=e.target.checked;
    	var checkboxs1 = document.getElementsByName('diseaseGeneralPopulationFlag');
    	var checkboxs2 = document.getElementsByName('diseaseExposedFlag');
    	var checkboxs3 = document.getElementsByName('diseaseInfectedFlag');
    	var checkboxs4 = document.getElementsByName('diseaseNeedUrgentHelpFlag');
    	var checkboxs5 = document.getElementsByName('diseaseRecoveredFlag');
    	const { index } = this.props;
    	if(allcheckboxes)
    	{
    		this.props.input.diseaseGeneralPopulationFlag=true;
    		this.props.input.diseaseExposedFlag=true;
    		this.props.input.diseaseInfectedFlag=true;
    		this.props.input.diseaseNeedUrgentHelpFlag=true;
    		this.props.input.diseaseRecoveredFlag=true;
    		checkboxs1[index].checked=true;
    		checkboxs2[index].checked=true;	
    		checkboxs3[index].checked=true;	
    		checkboxs4[index].checked=true;	
    		checkboxs5[index].checked=true;
    	}
    	else
    	{
    		this.props.input.diseaseGeneralPopulationFlag=false;
    		this.props.input.diseaseExposedFlag=false;
    		this.props.input.diseaseInfectedFlag=false;
    		this.props.input.diseaseNeedUrgentHelpFlag=false;
    		this.props.input.diseaseRecoveredFlag=false;
    		checkboxs1[index].checked=false;
    		checkboxs2[index].checked=false;	
    		checkboxs3[index].checked=false;	
    		checkboxs4[index].checked=false;	
    		checkboxs5[index].checked=false;
    	}
    }
//    handleInputCheckboxChangeNext = (e) => {
//    	const { index } = this.props;
//    	const allcheckboxes1 = e.target.checked;
//    	var checkboxs1 = document.getElementsByName('disease1[' + index + '][]');
//    	if(allcheckboxes1)
//    	{
//    		for(var i in checkboxs1)
//    		{
//    			if(checkboxs1[i].checked==false)
//    			{
//    				checkboxs1[i].checked=true;
//    			}
//    		}
//    	}
//    	else
//    	{
//    		for(var i in checkboxs1)
//    		{
//    			if(checkboxs1[i].checked==true)
//    			{
//    				checkboxs1[i].checked=false;
//    			}
//    		}
//    	}
//    }
    
    deleteInput = (e) => {
        e.preventDefault();
        this.props.deleteInput(this.props.group, this.props.index);
    }

    checkBoxDelete = (e) => {
// e.preventDefault();
    	if(e.target.checked) {
    		
    		this.props.deleteMultipleArticle(this.props.group, this.props.index);
    	} else {
    		this.props.removeDeleteMultipleArticle(this.props.group, this.props.index);
    	}
    }

    render() {
    	const { index } = this.props;
        return (
            <form>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-inline">
                    <h5>Update #{this.props.index + 1}</h5> &nbsp;&nbsp;
	                    <label>Display Order on App:  </label>&nbsp;&nbsp;
	                    <input type="text" className="form-control" size="5" maxlength="3" name="displayOrderOnApp" value={this.props.input.displayOrderOnApp} onChange={this.handleInputChange} />
                    </div>
	                <div>
	                {/*
						 * <input type="checkbox" onChange={this.checkBoxDelete}
						 * name="selectDeleteCheckbox"
						 * className="form-check-input"
						 * value="DeleteCheckboxSelect" />
						 */}   
	                    <a href="#" onClick={this.deleteInput} className="d-block">Delete</a>
	                </div>
                </div>
                <div className="form-group">
                    <label>Short Description Title</label>
                    <input type="text" name="name" className="form-control" value={this.props.input.name} onChange={this.handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Source</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="source" value="CDC" checked={this.props.input.source=="CDC"} onChange={this.handleInputChange} />
                            <label className="form-check-label">CDC</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="source" value="DMH" checked={this.props.input.source=="DMH"} onChange={this.handleInputChange} />
                            <label className="form-check-label">DMH</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="source" value="State Health Department" checked={this.props.input.source=="State Health Department"} onChange={this.handleInputChange} />
                            <label className="form-check-label">State Health Department</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="source" value="FPA Advisory Group" checked={this.props.input.source=="FPA Advisory Group"} onChange={this.handleInputChange} />
                        <label className="form-check-label">FPA Advisory Group</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" className="form-check-input" name="source" value="Manual Value" checked={this.props.input.source=="Manual Value"} onChange={this.handleInputChange} />
                        <input type="text" className="form-check-input" name="sourceInputTxt" />
                    </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Full Question</label>
                    <textarea className="form-control" name="question" onChange={this.handleInputChange} value={this.props.input.question} />
                </div>
                <div className="form-group">
                    <label>Applicable States of Disease</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="checkbox" className="form-check-input"  value="All"  onChange={this.handleInputCheckboxChangeNext} />
                    <label className="form-check-label">Select All</label>
                    <div>
                        <div className="form-check form-check-inline">
                        	<input type="checkbox" 
	                        	name="diseaseGeneralPopulationFlag" 
	                        	className="form-check-input" 
	                        	checked={this.props.input.diseaseGeneralPopulationFlag} 
	                            onChange={this.handleInputChange} 
                        	/>
                            <label className="form-check-label">General Population</label>
                        </div>
                        <div className="form-check form-check-inline">
	                        <input type="checkbox" 
	                        	name="diseaseExposedFlag" 
	                        	className="form-check-input" 
	                        	checked={this.props.input.diseaseExposedFlag} 
	                            onChange={this.handleInputChange} />
                            <label className="form-check-label">Exposed</label>
                        </div>
                        <div className="form-check form-check-inline">
	                        <input type="checkbox" 
	                        	name="diseaseInfectedFlag" 
	                        	className="form-check-input" 
	                        	checked={this.props.input.diseaseInfectedFlag} 
	                            onChange={this.handleInputChange} />
                            <label className="form-check-label">Infected</label>
                        </div>
                        <div className="form-check form-check-inline">
                        <input type="checkbox" 
                        	name="diseaseNeedUrgentHelpFlag" 
                        	className="form-check-input" 
                        	checked={this.props.input.diseaseNeedUrgentHelpFlag} 
                            onChange={this.handleInputChange} />
                            <label className="form-check-label">Need Urgent Help</label>
                        </div>
                        <div className="form-check form-check-inline">
                            	<input type="checkbox" 
                                	name="diseaseRecoveredFlag" 
                                	className="form-check-input" 
                                	checked={this.props.input.diseaseRecoveredFlag} 
                                    onChange={this.handleInputChange} />
                            	<label className="form-check-label">Recovered</label> 
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Types of Input</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="inputType" value="yes-no" checked={this.props.input.inputType=="yes-no"} onChange={this.handleInputChange} />
                            <label className="form-check-label">Yes / No Radio Button</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="inputType" value="0-10" checked={this.props.input.inputType=="0-10"} onChange={this.handleInputChange} />
                            <label className="form-check-label">0 to 10 Slider</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="inputType" value="text" checked={this.props.input.inputType=="text"} onChange={this.handleInputChange} />
                            <label className="form-check-label">Text Box</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Alert threshold</label>
                    <div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" name="thresholdType" value="yes" checked={this.props.input.thresholdType=="yes"} onChange={this.handleInputChange} />
                            <label className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" name="thresholdType" value="no" checked={this.props.input.thresholdType=="no"} onChange={this.handleInputChange} />
                            <label className="form-check-label">No</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" name="thresholdType" value="0-10above" checked={this.props.input.thresholdType=="0-10above"} onChange={this.handleInputChange} />
                            <label className="form-check-label">0 to 10 above</label>
                            <input type="text" name="aboveValue" value={this.props.input.aboveValue} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" name="thresholdType" value="0-10below" checked={this.props.input.thresholdType=="0-10below"} onChange={this.handleInputChange} />
                            <label className="form-check-label">0 to 10 below</label>
                            <input type="text" name="belowValue" value={this.props.input.belowValue} onChange={this.handleInputChange} />
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" name="thresholdType" value="text" checked={this.props.input.thresholdType=="text"} onChange={this.handleInputChange} />
                            <label className="form-check-label">Text Box</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label>Alert to give</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input type="checkbox" className="form-check-input" name="alertCallHealthProvider" checked={this.props.input.alertCallHealthProvider} onChange={this.handleInputChange} />
                            <label className="form-check-label">Call Health Care Provider</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="checkbox" className="form-check-input" name="alertCallStateHelp" checked={this.props.input.alertCallStateHelp} onChange={this.handleInputChange} />
                            <label className="form-check-label">Call State Help Line</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="checkbox" className="form-check-input" name="alertCallSuicideHelp" checked={this.props.input.alertCallSuicideHelp} onChange={this.handleInputChange} />
                            <label className="form-check-label">Call Suicide Help Line</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="checkbox" className="form-check-input" name="alertCallEmergencyCare" checked={this.props.input.alertCallEmergencyCare} onChange={this.handleInputChange} />
                            <label className="form-check-label">Seek Emergency Care</label>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

class ArticleEditor extends React.Component {
    state = {
    }

    saveChanges = (e) => {
        e.preventDefault();
        this.props.saveChanges();
    }

    addArticle = (e) => {
        e.preventDefault();
        this.props.addArticle(this.props.group);
    }

    articleUpdater = (index) => {
        return (pairs) => {
          
            this.props.updateArticle(index, pairs, this.props.group);
        }
    }
    

    render() {
    	var articleFragments = this.props.articles.map((article, ind) => {
            return (
                <IndividualArticleEntry 
                	group={this.props.group} 
                	deleteArticle={this.props.deleteArticle} 
                	index={ind}
                	article={article} 
                	updateArticle={this.articleUpdater(ind)} 
                /> 
            );
        });
        return (
            <React.Fragment>
                {articleFragments}
                <div className="text-right">
                    <div onClick={this.saveChanges} className="btn btn-primary mr-2">Save changes</div>
                    <div onClick={this.addArticle} className="btn btn-secondary">Add more</div>
                    
                </div>
            </React.Fragment>
        );
    }
}

class InputEditor extends React.Component {

    inputUpdater = (index) => {
        return (pairs) => {
            this.props.updateInput(index, pairs, this.props.group);
        }
    }

    addInput = (e) => {
        e.preventDefault();
        this.props.addInput(this.props.group);
    }

    saveChanges = (e) => {
        e.preventDefault();
        this.props.saveChanges();
    }
    
    deleteAllMultipleArticle = (e) => {
    	e.preventDefault();
    	this.props.deleteCheckboxesMultipleArticle();
    }

    render() {
        var inputFragments = this.props.inputs.map((input, ind) => {
            return (
            		<IndividualUpdateEntry 
            		group={this.props.group} 
            		deleteInput={this.props.deleteInput}
            		deleteMultipleArticle={this.props.deleteMultipleArticle}
            		removeDeleteMultipleArticle={this.props.removeDeleteMultipleArticle}
            		index={ind} 
            		input={input} 
            		updateInput={this.inputUpdater(ind)} />);
        });
        return (
            <React.Fragment>
                {inputFragments}
                <div className="text-right">
                    <div onClick={this.saveChanges} className="btn btn-primary mr-2">Save changes</div>
                    <div onClick={this.addInput} className="btn btn-secondary  mr-2">Add more</div>
                    {/*
						 * <div onClick={this.deleteAllMultipleArticle}
						 * className="btn btn-danger">Deletes</div>
						 */}
                </div>
            </React.Fragment>
        );
    }
}

const DISEASE_MANAGEMENT_TIPS = 'Disease Management Tips';
const EMOTIONAL_MANAGEMENT_TIPS = 'Emotional Management Tips';
const DISEASE_MANAGEMENT_UPDATES = 'Disease Management Updates';
const EMOTIONAL_MANAGEMENT_UPDATES = 'Emotional Management Updates';

class ArticleView extends React.Component {
    constructor (props) {
    	super(props);
    	this.deleteInput = this.deleteInput.bind(this);
    }
    
	state = {
        page: 'Disease Management Tips',
        group: 'DM',
        articles: [],
        inputs: [],
        deleteArticleQueue: [],
        deleteInputQueue: [],
        deleteCheckboxesQueue: [],
        messageEnabled: false
    }

    componentDidMount() {
        this.reloadArticles();
        this.reloadInputs();
    }

    reloadArticles() {
        return new Promise((resolve, reject) => {
            fetch('api/articles', {
                method: 'POST'
            }).then(response => {
                response.json().then(responseJson => {
                    this.setState({
                        ...this.state,
                        articles: responseJson
                    });
                    resolve();
                });
            }).catch(() => {
                reject();
            });
        });
    }

    reloadInputs() {
        return new Promise((resolve, reject) => {
            fetch('api/inputs', {
                method: 'POST'
            }).then(response => {
                response.json().then(responseJson => {
                    this.setState({
                        ...this.state,
                        inputs: responseJson
                    });
                    resolve();
                });
            }).catch(() => {
                reject();
            });
        });
    }

    deleteArticle = (group, index) => {
    	let _this = this;
    	const { articles, deleteArticleQueue } = this.state;
        console.log('Deleting article');
        bootbox.confirm("Are you sure you want to delete ?", function (result) {
        	if(result) {
        		var idsToDelete = articles.filter(art => art.group == group).filter((_, ind) => ind == index).map(art => art.id);
                console.log(idsToDelete);
                _this.setState({
                    ..._this.state, 
                    articles: articles.filter(art => art.group == group).filter((_, ind) => ind != index).concat(articles.filter(art => art.group != group)),
                    deleteArticleQueue: Array.from(new Set(deleteArticleQueue.concat(idsToDelete)))
                });
        	}
        });
        return;
    }
    
    deleteMultipleArticle = (group, index) => {
    	this.setState({
			deleteCheckboxesQueue: [...this.state.deleteCheckboxesQueue, index ],
		});
    	console.log(this.state.deleteCheckboxesQueue, "<< AddDeleteMultipleArticle");
    }
    
    removeDeleteMultipleArticle = (group, index) => {
	    const arrayNew = this.state.deleteCheckboxesQueue;
	    const filteredItems = arrayNew.filter(item => item !== index);
	    this.setState({deleteCheckboxesQueue: filteredItems});
        console.log(this.state.deleteCheckboxesQueue, "<< removeDeleteMultipleArticle");
    }
    
    deleteCheckboxesMultipleArticle = (e) => {
    	const { deleteCheckboxesQueue } = this.state;
    	let _this = this;
    	console.log(deleteCheckboxesQueue, " == deleteCheckboxesQueue");
    	deleteCheckboxesQueue.forEach(function (index, group) {
    		_this.deleteInput("DM", index.index);
    	})
    }
    
    deleteInput = (group, index) => {
        console.log('Deleting input');
        let _this = this;
        console.log('Deleting article');
        bootbox.confirm("Are you sure you want to delete ?", function (result) {
        	if(result) {
        		var idsToDelete = _this.state.inputs.filter(inp => inp.group == group).filter((_, ind) => ind == index).map(inp => inp.id);
                console.log(idsToDelete);
                _this.setState({
                    ..._this.state, 
                    inputs: _this.state.inputs.filter(inp => inp.group == group).filter((_, ind) => ind != index).concat(_this.state.inputs.filter(inp => inp.group != group)),
                    deleteInputQueue: Array.from(new Set(_this.state.deleteInputQueue.concat(idsToDelete)))
                });
        	}
        });
        return;
        
        
    }

    inputUpdater = (updateIndex, pairs, group) => {
        console.log(`Updating ${updateIndex}`);
        console.log(this.state.inputs);
        this.setState({
            ...this.state,
            inputs: this.state.inputs.filter(inp => inp.group == group).map((input, inputIndex) => {
                if (inputIndex == updateIndex) {
                    for (var update of Object.entries(pairs)) {
                        input = {
                            ...input,
                            [update[0]]: update[1]
                        };
                    }
                    console.log(input);
                }
                return input;
            }).concat(this.state.inputs.filter(inp => inp.group != group))
        });
    }

    articleUpdater = (updateIndex, pairs, group) => {
        console.log(`Updating ${updateIndex}`);
        console.log(this.state.articles);
        this.setState({
            ...this.state,
            articles: this.state.articles.filter(art => art.group == group).map((article, articleIndex) => {
                if (articleIndex == updateIndex) {
                    for (var update of Object.entries(pairs)) {
                        article = {
                            ...article,
                            [update[0]]: update[1]
                        };
                    }
                    console.log(article);
                }
                return article;
            }).concat(this.state.articles.filter(art => art.group != group))
        });
    }

    saveInputChanges = () => {
        var creationPromises = this.state.inputs.map(input => {
            var isUpdate = input.id >= 0;
            var url = isUpdate ? 'api/updateinput' : 'api/createinput';
            return new Promise((resolve, reject) => {
                var body = new FormData();
                if (isUpdate)
                    body.append('i_id', input.id.toString());
                body.append('i_name', input.name);
                body.append('i_icon_url', input.iconUrl);
                body.append('i_mode_id', input.modeId.toString());
                body.append('i_group', input.group);
                body.append('i_source', input.source);
                body.append('i_input_type', input.inputType);
                body.append('i_question', input.question);
                body.append('i_below_value', input.belowValue);
                body.append('i_above_value', input.aboveValue);
                body.append('i_threshold_type', input.thresholdType);
                body.append('i_alert_call_health_provider', input.alertCallHealthProvider ? '1' : '0');
                body.append('i_alert_call_state_help', input.alertCallStateHelp ? '1' : '0');
                body.append('i_alert_call_suicide_help', input.alertCallSuicideHelp ? '1' : '0');
                body.append('i_alert_call_emergency_care', input.alertCallEmergencyCare ? '1' : '0');
               
                body.append('i_Disease_General_Population_FLAG', input.diseaseGeneralPopulationFlag ? '1' : '0');
                body.append('i_Disease_Exposed_FLAG', input.diseaseExposedFlag ? '1' : '0');
                body.append('i_Disease_Infected_FLAG', input.diseaseInfectedFlag ? '1' : '0');
                body.append('i_Disease_Need_Urgent_Help_FLAG', input.diseaseNeedUrgentHelpFlag ? '1' : '0');
                body.append('i_Disease_Recovered_FLAG', input.diseaseRecoveredFlag ? '1' : '0');
                fetch(url, {
                    method: 'POST',
                    body: new URLSearchParams(body)
                }).then(response => {
                    response.json().then(responseJson => {
                        resolve(responseJson);
                    }).catch(err => {
                        reject(err);
                    });
                }).catch(err => {
                    reject(err);
                });
            });
        });
        var deletionPromises = this.state.deleteInputQueue.filter(id => id >= 0).map(id => {
            return new Promise((resolve, reject) => {
                var body = new FormData();
                body.append('i_id', id);
                fetch('api/deleteinput', {
                    method: 'POST',
                    body: new URLSearchParams(body)
                }).then(response => {
                    response.json().then(responseJson => {
                        if (responseJson['success']) {
                            resolve();
                        } else {
                            reject();
                        }
                    }).catch(err => {
                        reject(err);
                    });
                }).catch(err => {
                    reject(err);
                });
            });
        });
        return Promise.all(creationPromises.concat(deletionPromises));
    }

    saveArticleChanges = () => {
    	console.log(this.state.articles, " == this.state.articles");
//    	debugger;
        var creationPromises = this.state.articles.map(article => {
            var isUpdate = article.id >= 0;
            var url = isUpdate ? 'api/updatearticle' : 'api/createarticle';
            return new Promise((resolve, reject) => {
                var body = new FormData();
                if (isUpdate)
                    body.append('a_id', article.id.toString());
                body.append('a_name', article.name);
                body.append('a_description', article.description);
                body.append('a_iconurl', article.iconUrl);
                body.append('a_mode', article.modeId.toString());
                body.append('a_group', article.group);
                body.append('a_source', article.source);
                
                body.append('a_Disease_General_Population_FLAG', article.diseaseGeneralPopulationFlag? '1' : '0');
                body.append('a_Disease_Exposed_FLAG', article.diseaseExposedFlag? '1' : '0');
                body.append('a_Disease_Infected_FLAG', article.diseaseInfectedFlag? '1' : '0');
                body.append('a_Disease_Need_Urgent_Help_FLAG', article.diseaseNeedUrgentHelpFlag? '1' : '0');
                body.append('a_Disease_Recovered_FLAG', article.diseaseRecoveredFlag? '1' : '0');
                fetch(url, {
                    method: 'POST',
                    body: new URLSearchParams(body)
                }).then(response => {
                    response.json().then(responseJson => {
                        resolve(responseJson);
                    }).catch(err => {
                        reject(err);
                    });
                }).catch(err => {
                    reject(err);
                });
            });
        });
        var deletionPromises = this.state.deleteArticleQueue.filter(id => id >= 0).map(id => {
            return new Promise((resolve, reject) => {
                var body = new FormData();
                body.append('a_id', id);
                fetch('api/deletearticle', {
                    method: 'POST',
                    body: new URLSearchParams(body)
                }).then(response => {
                    response.json().then(responseJson => {
                        if (responseJson['success']) {
                            resolve();
                        } else {
                            reject();
                        }
                    }).catch(err => {
                        reject(err);
                    });
                }).catch(err => {
                    reject(err);
                });
            });
        });
        return Promise.all(creationPromises.concat(deletionPromises));
    }

    saveChanges = () => {
        Promise.all([
            this.saveArticleChanges(),
            this.saveInputChanges()
        ]).then(() => {
            Promise.all([
                this.reloadArticles(),
                this.reloadInputs()
            ]).then(() => {
                this.showMessage('alert-success', 'Changes saved successfully!');
                window.scrollTo(0, 0);
            }).catch(() => {
                this.showMessage('alert-warning', 'Changes saved successfully, however reloading those changes failed. Please reload the page.');
                window.scrollTo(0, 0);
            })
        }).catch(() => {
            this.showMessage('alert-danger', 'Failed to save changes.');
            window.scrollTo(0, 0);
        });
    }

    showMessage = (className, message) => {
        this.setState({
            ...this.state,
            messageEnabled: true,
            messageClass: className,
            message: message
        });
    }

    addArticle = (group) => {
        var articles = this.state.articles;
        console.log(articles);
        this.setState({
            ...this.state,
            articles: articles.concat([
                {
                    id: -1,
                    name: '',
                    description: '', 
                    iconUrl: '',
                    modeId: 0,
                    source: '',
                    group: group,
                    diseaseGeneralPopulationFlag:false,
                    diseaseExposedFlag:false,
                    diseaseInfectedFlag:false,
                    diseaseNeedUrgentHelpFlag:false,
                    diseaseRecoveredFlag:false
                }
            ])
        });
    }

    addInput = (group) => {
        console.log('Adding input');
        console.log(this.state);
        var inputs = this.state.inputs;
        this.setState({
            ...this.state,
            inputs: inputs.concat(
                {
                    id: -1,
                    name: '',
                    source: '',
                    question: '',
                    modeId: 0,
                    inputType: '',
                    thresholdType: '',
                    alertCallHealthProvider: false,
                    alertCallStateHelp: false,
                    alertCallSuicideHelp: false,
                    alertCallEmergencyCare: false,
                    diseaseGeneralPopulationFlag:false,
                    diseaseExposedFlag:false,
                    diseaseInfectedFlag:false,
                    diseaseNeedUrgentHelpFlag:false,
                    diseaseRecoveredFlag:false,
                    iconUrl: '',
                    belowValue: 0,
                    aboveValue: 0,
                    group
                }
            )
        });
    }
    
    pageChanger = (page) => {
        return (e) => {
            var associatedGroups = {};
            associatedGroups[DISEASE_MANAGEMENT_TIPS] = 'DM';
            associatedGroups[EMOTIONAL_MANAGEMENT_TIPS] = 'EM';
            associatedGroups[DISEASE_MANAGEMENT_UPDATES] = 'DM';
            associatedGroups[EMOTIONAL_MANAGEMENT_UPDATES] = 'EM';
            e.preventDefault();
            this.setState({
                ...this.state,
                page,
                group: associatedGroups[page],
                messageEnabled: false
            });
        };
    }

    render() {
        const {page, group} = this.state;
        var alert = this.state.messageEnabled ? (<div className={'alert ' + this.state.messageClass}>{this.state.message}</div>) : null;
        if (page == 'Disease Management Tips' || page == 'Emotional Management Tips') {
            return (
                <div className="container">
                    <AdminHeader userText="Williams, Joe" />
                    <div className="card mt-4 p-2">
                        <div className="d-block">
                            <a href="#" className="mr-3" onClick={this.pageChanger(DISEASE_MANAGEMENT_TIPS)}>{DISEASE_MANAGEMENT_TIPS}</a>
                            <a href="#" className="mr-3" onClick={this.pageChanger(EMOTIONAL_MANAGEMENT_TIPS)}>{EMOTIONAL_MANAGEMENT_TIPS}</a>
                            <a href="#" className="mr-3" onClick={this.pageChanger(DISEASE_MANAGEMENT_UPDATES)}>{DISEASE_MANAGEMENT_UPDATES}</a>
                            <a href="#" className="mr-3" onClick={this.pageChanger(EMOTIONAL_MANAGEMENT_UPDATES)}>{EMOTIONAL_MANAGEMENT_UPDATES}</a>
                        </div>
                        {alert}
                        <h3>{this.state.page}</h3>
                        <ArticleEditor deleteArticle={this.deleteArticle} group={group} updateArticle={this.articleUpdater} articles={this.state.articles.filter(art => art.group == group)} addArticle={this.addArticle} saveChanges={this.saveChanges} />
                    </div>
                </div>
            );
        } else { // UpdatesPage
            return (
                <div className="container">
                    <AdminHeader userText="Williams, Joe" />
                    <div className="card mt-4 p-2">
                        <div className="d-block">
                            <a href="#" className="mr-3" onClick={this.pageChanger(DISEASE_MANAGEMENT_TIPS)}>{DISEASE_MANAGEMENT_TIPS}</a>
                            <a href="#" className="mr-3" onClick={this.pageChanger(EMOTIONAL_MANAGEMENT_TIPS)}>{EMOTIONAL_MANAGEMENT_TIPS}</a>
                            <a href="#" className="mr-3" onClick={this.pageChanger(DISEASE_MANAGEMENT_UPDATES)}>{DISEASE_MANAGEMENT_UPDATES}</a>
                            <a href="#" className="mr-3" onClick={this.pageChanger(EMOTIONAL_MANAGEMENT_UPDATES)}>{EMOTIONAL_MANAGEMENT_UPDATES}</a>
                        </div>
                        {alert}
                        <h3>{this.state.page}</h3>
                        <InputEditor 
                        	deleteMultipleArticle={this.deleteMultipleArticle}
                        	removeDeleteMultipleArticle={this.removeDeleteMultipleArticle}
                            deleteCheckboxesMultipleArticle={this.deleteCheckboxesMultipleArticle}
                        	deleteInput={this.deleteInput} 
                        	group={group} 
                        	updateInput={this.inputUpdater} 
                        	inputs={this.state.inputs.filter(inp => inp.group == group)} 
                        	addInput={this.addInput} 
                        	saveChanges={this.saveChanges} 
                        />
                    </div>
                </div>
            );
        }
    }
}
