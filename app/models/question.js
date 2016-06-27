import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
// favoriteQuestions: Ember.inject.service(),
// onFavorites: Ember.computed('favoriteQuestions.questions.[]', function(){
//   return this.get('favoriteQuestions').includes(this);
