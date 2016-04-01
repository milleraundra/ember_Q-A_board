import Ember from 'ember';

export default Ember.Component.extend({
  isEditFormShowing: false,
  actions: {
    showEditForm() {
      this.set('isEditFormShowing', true);
    },
    hideEditForm() {
      this.set('isEditFormShowing', false);
    },
    updateAnswer(answer) {
      var params = {
        body: this.get('answer.body') ? this.get('answer.body') : ""
      };
      console.log(params);
      this.sendAction('editAnswer', params, answer);
      this.set('isEditFormShowing', false);
    }
  }
});
