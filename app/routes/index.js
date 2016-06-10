import Ember from 'ember';

var questions = [{
  content: "What is going on?",
  author: "Paige Dickson",
  notes: "I am confused."
}, {
  content: "How are you?",
  author: "Laki Volarapavu",
  notes: "Just wondering..."
}, {
  content: "Why are my cells so turgid right now?",
  author: "Wrinkle Winkelstein",
  notes: "Maybe I should drink salt water to shrink em...?"
}];

export default Ember.Route.extend({
  model() {
    return questions;
  },
});
