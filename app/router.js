var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  // We'll catch / and redirect user to current day
  this.route("index", { path: "/"} );

  // Catch /#2014-03-03
  this.resource("day", { path: "/:formatted" });

  this.route('component-test');
  this.route('helper-test');
  // this.resource('posts', function() {
  //   this.route('new');
  // });
});

export default Router;
