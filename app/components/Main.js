// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="container">

        <div className="row">

          <div className="jumbotron">
            <h1>React Router</h1>
            <p><em>Log into an existing account or sign up to create a new one</em></p>
            <Link to="/SignUp"><button className="btn btn-default">Sign up</button></Link>
            <Link to="/Login"><button className="btn btn-default">Log in</button></Link>
          </div>

            {this.props.children}
          
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;