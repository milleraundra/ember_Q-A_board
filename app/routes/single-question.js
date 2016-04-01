import Ember from 'ember';

export default Ember.Route.extend({
  model(question) {
    //question is an object with a single property of question_id passed in from the URL
    return this.store.findRecord('question', question.question_id);
  },
  actions: {
    updateQuestion(params, question) {
      Object.keys(params).forEach(function(key) {
        if(params[key]) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('single-question');
    },
    addAnswer(params) {
      console.log(params);
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      debugger;
      this.transitionTo('single-question');

      // var question = params.question;
      // question.get('answers').addObject(newAnswer);
      // newAnswer.save().then(function() {
      //   question.save();
      // });
    }
  }
});
