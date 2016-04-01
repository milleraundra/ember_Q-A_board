import Ember from 'ember';

export default Ember.Component.extend({
  isAddAnswerShowing: false,
  actions: {
    showAddAnswer() {
      this.set('isAddAnswerShowing', true);
    },
    hideAddAnswer() {
      this.set('isAddAnswerShowing', false);
    },
    addAnswer() {
      var params = {
        body: this.get('body') ? this.get('body') : "",
        author: this.get('author') ? this.get('author') : "",
        date: new Date(),
        question: this.get('question')
      }
      this.sendAction('addAnswer', params);
      this.set('isAddAnswerShowing', false);
      this.set('body', "");
      this.set('author', "");
    }
  }
});
