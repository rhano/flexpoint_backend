class CaseGraph extends React.Component {
    render() {
        var canvas = (
            <canvas id="chart" style={{width: '100%', height:'500px'}} />
        );

        setTimeout(() => {
            var ctx = document.getElementById('chart').getContext('2d');

            var dayLabels = Array.from(Array(28).keys()).map((day) => `Mar-${day+1}`);
            var exposedData = Array.from(Array(28).keys()).map((day) => {
                var random = Math.random()*.2 + 0.9;
                var value = Math.floor(25*Math.pow(1.2, day)*random);
                return {x: day+1, y: value}
            });
            var infectedData = Array.from(Array(28).keys()).map((day) => {
                var random = Math.random()*.2 + 0.9;
                var value = Math.floor(20*Math.pow(1.18, day)*random);
                return {x: day+1, y: value}
            });

            var myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dayLabels,
                    datasets: [
                        {
                            label: 'Exposed',
                            borderColor: 'rgb(255, 99, 99)',
                            data: exposedData
                        },
                        {
                            label: 'Infected',
                            borderColor: 'rgb(99, 99, 255)',
                            data: infectedData
                        }
                    ]
                }
            });
        }, 300);
        return (
            <div>
                <h3>Case Trend</h3>
                {canvas}
            </div>
        );
    }
}

function CaseCounter(props) {
    var days = Array.from(Array(20).keys()).map(day => `Mar-${day+1}`);
    var counts = Array.from(Array(20).keys()).map(day => Math.floor(209*Math.pow(1.2, day)));
    var rows = Array.from(Array(20).keys()).map((day, key) => {
        return <tr key={key}>
            <td>{days[day]}</td>
            <td>{counts[day]}</td>
            <td>{Math.floor(counts[day]*1.5)}</td>
            <td>{Math.floor(counts[day]*4.2)}</td>
        </tr>;
    }).reverse();
    return (
        <React.Fragment>
            <div className="w-100 mt-4">
                <h3>Active Cases</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>County</th>
                            <th>State</th>
                            <th>U.S.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

function Projections(props) {
    return (
        <React.Fragment>
            <div className="card p-2">
                <h3>Key Transmission Indicators</h3>
                <table className="table table-striped">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td><a href="#">Potentially Exposed Interactions</a></td>
                            <td>6 per day @ 23 min</td>
                        </tr>
                        <tr>
                            <td><a href="#">Potential Case Interactions</a></td>
                            <td>84 per day @ 3 min</td>
                        </tr>
                        <tr>
                            <td><a href="#">Transmission Projection Models</a></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="card p-2 mt-4">
                <h3>Projections</h3>
                <table className="table table-striped">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Newly Infected Today</td>
                            <td>213</td>
                        </tr>
                        <tr>
                            <td>Projected Tomorrow</td>
                            <td>277</td>
                        </tr>
                        <tr>
                            <td>Newly Infected This Week</td>
                            <td>5341</td>
                        </tr>
                        <tr>
                            <td>Projected Next Week</td>
                            <td>6889</td>
                        </tr>
                        <tr>
                            <td>Newly Infected This Month</td>
                            <td>7891</td>
                        </tr>
                        <tr>
                            <td>Projected Next Month</td>
                            <td>21001</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    );
}

function AnalyticsView(props) {
    return (
        <div className="container">
            <MedicalHeader userText="Williams, Joe" location="Davidson County, NC" />
            	<h2>Analytics: </h2>
            <div className="row mt-4">
                <div className="col">
                    <Projections /> 
                </div>
                <div className="col">
                    <CaseGraph />
                </div>
            </div>
            <div className="row">
                <CaseCounter />
            </div>
        </div>
    );
}
