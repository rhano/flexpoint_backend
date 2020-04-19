class IndividualArticleEntry extends React.Component {
    constructor(props) {
        super(props);
    }

    handleInputChange = (e) => {
        var name = e.target.name;
        var value = e.target.type == 'checkbox' ? e.target.checked : e.target.value; 
        var updatesPayload = {
            [name]: value
        };
        this.props.updateArticle(updatesPayload);
    }

    deleteArticle = (e) => {
        e.preventDefault();
        this.props.deleteArticle(this.props.group, this.props.index);
    }

    render() {
        return (
            <form>
                <div className="mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                    <h5>Tip #{this.props.index + 1}</h5>
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
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" name="description" value={this.props.article.description} onChange={this.handleInputChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label>Applicable States of Disease</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" name="modeId" value="1" checked={this.props.article.modeId=="1"} onChange={this.handleInputChange} />
                                <label className="form-check-label">General Population</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" name="modeId" value="2" checked={this.props.article.modeId=="2"} onChange={this.handleInputChange}  />
                                <label className="form-check-label">Exposed</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" name="modeId" value="3" checked={this.props.article.modeId=="3"} onChange={this.handleInputChange}  />
                                <label className="form-check-label">Infected</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input" name="modeId" value="4" checked={this.props.article.modeId=="4"} onChange={this.handleInputChange}  />
                                <label className="form-check-label">Need Urgent Help</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input type="radio" className="form-check-input"  name="modeId" value="5" checked={this.props.article.modeId=="5"} onChange={this.handleInputChange}  />
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
        var updatesPayload = {
            [name]: value
        };
        this.props.updateInput(updatesPayload);
    }

    deleteInput = (e) => {
        e.preventDefault();
        this.props.deleteInput(this.props.group, this.props.index);
    }

    render() {
        return (
            <form>
                <div className="d-flex justify-content-between align-items-center">
                    <h5>Update #{this.props.index + 1}</h5>
                    <a href="#" onClick={this.deleteInput} className="d-block">Delete</a>
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
                    </div>
                </div>
                <div className="form-group">
                    <label>Full Question</label>
                    <textarea className="form-control" name="question" onChange={this.handleInputChange} value={this.props.input.question} />
                </div>
                <div className="form-group">
                    <label>Applicable States of Disease</label>
                    <div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="modeId" value="1" checked={this.props.input.modeId=="1"} onChange={this.handleInputChange} />
                            <label className="form-check-label">General Population</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="modeId" value="2" checked={this.props.input.modeId=="2"} onChange={this.handleInputChange}  />
                            <label className="form-check-label">Exposed</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="modeId" value="3" checked={this.props.input.modeId=="3"} onChange={this.handleInputChange}  />
                            <label className="form-check-label">Infected</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="modeId" value="4" checked={this.props.input.modeId=="4"} onChange={this.handleInputChange}  />
                            <label className="form-check-label">Need Urgent Help</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input type="radio" className="form-check-input" name="modeId" value="5" checked={this.props.input.modeId=="5"} onChange={this.handleInputChange}  />
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
            console.log(`Updating ${index}`);
            this.props.updateArticle(index, pairs, this.props.group);
        }
    }

    render() {
        var articleFragments = this.props.articles.map((article, ind) => {
            return (
                <IndividualArticleEntry group={this.props.group} deleteArticle={this.props.deleteArticle} index={ind} article={article} updateArticle={this.articleUpdater(ind)} /> 
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

    render() {
        var inputFragments = this.props.inputs.map((input, ind) => {
            return (<IndividualUpdateEntry group={this.props.group} deleteInput={this.props.deleteInput} index={ind} input={input} updateInput={this.inputUpdater(ind)} />);
        });
        return (
            <React.Fragment>
                {inputFragments}
                <div className="text-right">
                    <div onClick={this.saveChanges} className="btn btn-primary mr-2">Save changes</div>
                    <div onClick={this.addInput} className="btn btn-secondary">Add more</div>
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
    state = {
        page: 'Disease Management Tips',
        group: 'DM',
        articles: [],
        inputs: [],
        deleteArticleQueue: [],
        deleteInputQueue: [],
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
        console.log('Deleting article');
        console.log(index);
        console.log(group);
        var idsToDelete = this.state.articles.filter(art => art.group == group).filter((_, ind) => ind == index).map(art => art.id);
        console.log(idsToDelete);
        this.setState({
            ...this.state, 
            articles: this.state.articles.filter(art => art.group == group).filter((_, ind) => ind != index).concat(this.state.articles.filter(art => art.group != group)),
            deleteArticleQueue: Array.from(new Set(this.state.deleteArticleQueue.concat(idsToDelete)))
        });
    }

    deleteInput = (group, index) => {
        console.log('Deleting input');
        console.log(index);
        console.log(group);
        var idsToDelete = this.state.inputs.filter(inp => inp.group == group).filter((_, ind) => ind == index).map(inp => inp.id);
        console.log(idsToDelete);
        this.setState({
            ...this.state, 
            inputs: this.state.inputs.filter(inp => inp.group == group).filter((_, ind) => ind != index).concat(this.state.inputs.filter(inp => inp.group != group)),
            deleteInputQueue: Array.from(new Set(this.state.deleteInputQueue.concat(idsToDelete)))
        });
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
                    group: group
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
                        <InputEditor deleteInput={this.deleteInput} group={group} updateInput={this.inputUpdater} inputs={this.state.inputs.filter(inp => inp.group == group)} addInput={this.addInput} saveChanges={this.saveChanges} />
                    </div>
                </div>
            );
        }
    }
}
