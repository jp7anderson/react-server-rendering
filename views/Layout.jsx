var React = require('react');
var connect = require('react-redux').connect;

var Layout =  React.createClass({
  _handleClick: function() {
    alert();
  },
  render: function() {
    var custom = this.props.custom;
    return (
      <html>
        <head>
          <title>{custom.title}</title>
          <link rel='stylesheet' href='/style.css' />
        </head>
        <body>
          <div>
            <h1>Hello world!</h1>
            <p>Inst server-side rendering remarkable?</p>
            <button onClick={this._handleClick}>Click me</button>
            {this.props.children}
            <script dangerouslySetInnerHTML={{
              __html: 'window.PROPS=' + JSON.stringify(custom)
            }} />
          </div>
          <script src='/bundle.js' />
        </body>
      </html>
    );
  }
});

var wrapper = connect(
  function(state) {
    return { custom: state };
  }
);

module.exports = wrapper(Layout);
