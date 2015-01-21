require(['react', 'ui/hello_message'], function(React, HelloMessage) {
  window.console.log('Hello, from RequireJS. Look at this module:', React, HelloMessage);
  React.render(<HelloMessage name="John" />, document.body);
});
