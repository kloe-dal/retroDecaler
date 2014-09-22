Template.booksList.helpers({
  books: function () {
    return Books.find({author: 'Paul Dargens'});
  }
});


Meteor.subscribe('books', 'Paul Dargens');