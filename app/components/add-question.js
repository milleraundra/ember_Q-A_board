import Ember from 'ember';

export default Ember.Component.extend({
  isQuestionFormShowing: false,
  actions: {
    showQuestionForm() {
      this.set('isQuestionFormShowing', true);
    },
    addQuestion() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        question: this.get('question') ? this.get('question') : "",
        body: this.get('body') ? this.get('body') : "",
      };
      this.sendAction('createQuestion', params);
      this.set('isQuestionFormShowing', false);
    }
  }
});
