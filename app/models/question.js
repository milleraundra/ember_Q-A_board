import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  question: DS.attr(),
  body: DS.attr(),
  date: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
