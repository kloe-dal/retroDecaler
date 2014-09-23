Meteor.subscribe('books');

Template.booksList.helpers({
  books: function (category) {
    return Books.find({category: this.category});
  }
});

