import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', { path: '/' });

  this.route('family_search', function() {
    this.route('introduction');
  });

  this.route('puzzilla', function() {
    this.route('introduction');
  });
});

export default Router;
