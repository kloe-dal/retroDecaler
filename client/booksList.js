Meteor.subscribe('books');

Template.booksList.helpers({
  books: function () {
    return Books.find({category: this.category});
  }
});

