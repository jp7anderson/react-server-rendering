var React = require('react');

module.exports = React.createClass({
  _handleClick: function() {
    alert();
  },
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel='stylesheet' href='/style.css' />
        </head>
        <body>
          <div>
            <h1>Hello world!</h1>
            <p>Inst server-side rendering remarkable?</p>
            <button onClick={this._handleClick}>Click me</button>
            {this.props.children}
            <script dangerouslySetInnerHTML={{
              __html: 'window.PROPS=' + JSON.stringify(this.props)
            }} />
          </div>
          <script src='/bundle.js' />
        </body>
      </html>
    );
  }
});
