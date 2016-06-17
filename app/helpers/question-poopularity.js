import Ember from 'ember';

export function questionPoopularity(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') >= 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  } else {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star-empty"></span');
  }
}

export default Ember.Helper.helper(questionPoopularity);
