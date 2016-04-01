import Ember from 'ember';

export default Ember.Component.extend({
  ratingSelected: false,
  actions: {
    editAnswer(params, answer) {
      this.sendAction('editAnswer', params, answer);
    },
    deleteAnswer(answer, question) {
      this.sendAction('deleteAnswer', answer, question);
    },
    plusRating(answer) {
      this.sendAction('plusRating', answer);
      this.set('ratingSelected', true);
    },
    decreaseRating(answer) {
      this.sendAction('decreaseRating', answer);
      this.set('ratingSelected', true);
    }
  }
});
