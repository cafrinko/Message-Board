import Ember from 'ember';

export default Ember.Component.extend({

  popularity: Ember.computed('question.answers.length', function() {
    // console.log('question.answers.length');
    return this.get('question.answers.length') + ' Answers';
  }),

  actions: {
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
