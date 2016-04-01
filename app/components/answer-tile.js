import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editAnswer(params, answer) {
      this.sendAction('editAnswer', params, answer);
    },
    deleteAnswer(answer, question) {
      this.sendAction('deleteAnswer', answer, question);
    }
  }
});
