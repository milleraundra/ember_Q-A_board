import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editAnswer(params, answer) {
      this.sendAction('editAnswer', params, answer)
    }
  }
});
