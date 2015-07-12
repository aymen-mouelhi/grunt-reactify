/**
 * Created by Aymen Mouelhi (aymen.mouelhi@gmail.com) on 12/07/2015.
 */
var React =  require("react");

var Timer = React.createClass({
    getInitialState: function() {
        return {secondsElapsed: 0};
    },
    tick: function() {
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    },
    componentDidMount: function() {
        this.interval = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function() {
        clearInterval(this.interval);
    },
    render: function() {
        return (
            <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
    }
});

React.render(<Timer />, document.getElementById("react"));