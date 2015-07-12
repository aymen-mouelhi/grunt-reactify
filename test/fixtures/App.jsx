/**
 * Created by Aymen Mouelhi (aymen.mouelhi@gmail.com) on 12/07/2015.
 */
var React =  require("react");

var HelloMessage = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

React.render(<HelloMessage name="John" />, document.getElementById("react"));