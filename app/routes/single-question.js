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
    deleteQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        question.destroyRecord();
      });
      this.transitionTo('index');
    },
    addAnswer(params) {
      console.log(params);
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function() {
        question.save();
      });
      this.transitionTo('single-question');
    },
    editAnswer(params, answer) {
      Object.keys(params).forEach(function(key) {
        if(params[key]) {
          answer.set(key, params[key]);
        }
      });
      answer.save();
      this.transitionTo('single-question');
    },
    deleteAnswer(answer, question) {
      answer.destroyRecord().then(function(){
        question.save();
      });
      this.transitionTo('single-question');
    }
  }
});
