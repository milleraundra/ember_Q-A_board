import Ember from 'ember';

export default Ember.Component.extend({
  topQuestions: Ember.computed('questions.@each.answers', function() {
    return this.get('questions').filter(function(question) {
      return question.get('answers.length') > 1;
    });
  }),
  actions: {
    checkTopQuestion() {
      console.log(topQuestions);
    }
  }
});
