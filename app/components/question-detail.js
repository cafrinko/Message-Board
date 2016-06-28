import Ember from 'ember';

export default Ember.Component.extend({

  answerNumber: Ember.computed('question.answers.length', function() {
    return this.get('question.answers.length') + ' Answers';
  }),

  favoriteQuestions: Ember.inject.service(),

  actions: {
    addToFavQuestions(question) {
      this.get('favoriteQuestions').add(question);
    },

    update(question, params) {
      this.sendAction('update', question, params);
    },

    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
