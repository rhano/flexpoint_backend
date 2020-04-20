const Router = window.ReactRouterDOM.BrowserRouter;
const Route =  window.ReactRouterDOM.Route;
const Link =  window.ReactRouterDOM.Link;
const Prompt =  window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

const App = props => (
    <ReactRouterDOM.HashRouter>
        <Route path="/" exact component={LoginView} />
        <Route path="/nimda" component={LoginView} />
        <Route path="/medical/illnessmanagement" component={IllnessManagementView} />
        <Route path="/medical/alertmanagement" component={AlertManagementView} />
        <Route path="/medical/reviewalert" component={ReviewAlertView} />
        <Route path="/medical/analytics" component={AnalyticsView} />
        <Route path="/admin/pathogensettings" component={PathogenSettingsView} />
        <Route path="/admin/appheadings" component={AppHeadingsManagementView} />
        <Route path="/admin/articles" component={ArticleView} />
    </ReactRouterDOM.HashRouter>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
