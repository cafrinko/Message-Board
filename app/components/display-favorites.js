import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  actions: {
    add() {
      this.get('favoriteQuestions').add(this.get('model'));
    }
  }
});
