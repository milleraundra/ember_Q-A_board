import Ember from 'ember';

export default Ember.Component.extend({
  isQuestionFormShowing: false,
  actions: {
    showQuestionForm() {
      this.set('isQuestionFormShowing', true);
    },
    hideQuestionForm() {
      this.set('isQuestionFormShowing', false);
    },
    addQuestion() {
      //var moment = require('moment');
      var params = {
        question: this.get('question') ? this.get('question') : "",
        body: this.get('body') ? this.get('body') : "",
        author: this.get('author') ? this.get('author') : "",
        date: new Date()
      };
      this.sendAction('createQuestion', params);
      this.set('isQuestionFormShowing', false);
      this.set('question', "");
      this.set('body', "");
      this.set('author', "");
    }
  }
});
