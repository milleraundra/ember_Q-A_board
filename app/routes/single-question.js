import Ember from 'ember';

export default Ember.Route.extend({
  model(question) {
    //question is an object with a single property of question_id passed in from the URL
    return this.store.findRecord('question', question.question_id);
  },
  actions: {
    updateQuestion(params, question) {
      // console.log(params.body);
      // console.log(question);
      // debugger;
      Object.keys(params).forEach(function(key) {
        if(params[key]) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('single-question');
    }
  }
});
