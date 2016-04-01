import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    createQuestion(params) {
      var newRecord = this.store.createRecord('question', params);
      newRecord.save();
      this.transitionTo('index');
    }
  }
});
