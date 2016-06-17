import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

//sorts questions by number of answers in descending order
  //defines the parameter of number of answers in a question
  // questionPopularity: Ember.computed('question', 'question.answers.length', function() {
  //   //loops through each question and pulls out the
  //   return this.get('question.');
  // }),

  actions: {
    save3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }
  }
});
