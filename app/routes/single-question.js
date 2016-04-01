import Ember from 'ember';

export default Ember.Route.extend({
  model(question) {
    //question is an object with a single property of question_id passed in from the URL
    return this.store.findRecord('question', question.question_id);
  }
});
