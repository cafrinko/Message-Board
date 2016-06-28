import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service()
  // actions: {
  //   addToFavoriteQuestions(question) {
  //     this.get('favoriteQuestions').add(question);
  //   }
  // }
});
// add() {
//   this.get('favoriteQuestions').add(this.get('model'));
// }
