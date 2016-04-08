import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedAnswers: Ember.computed.sort('model.answers', 'sortBy'),
  actions: {
    editAnswer(params, answer) {
      console.log(params);
      this.sendAction('editAnswer', params, answer);
    },
    deleteAnswer(params, answer) {
      this.sendAction('deleteAnswer', params, answer);
    },
    plusRating(answer) {
      this.sendAction('plusRating', answer);
    },
    decreaseRating(answer) {
      this.sendAction('decreaseRating', answer);
    }
  }
});
