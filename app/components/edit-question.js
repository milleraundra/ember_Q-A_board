import Ember from 'ember';

export default Ember.Component.extend({
  isEditFormShowing: false,
  actions: {
    showEditForm() {
      this.set('isEditFormShowing', true);
    },
    updateQuestion(question) {
      var params = {
        question: this.get('question.question') ? this.get('question.question') : "",
        body: this.get('question.body') ? this.get('question.body') : "",
      };
      this.sendAction('updateQuestion', params, question);
      this.set('isEditFormShowing', false);
    }
  }
});
