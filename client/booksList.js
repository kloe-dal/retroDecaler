Meteor.subscribe('books');

Template.booksList.helpers({
  books: function () {
    return Books.find({category: 'Faits divers'});
  }
});

Template.booksList1.helpers({
  books: function () {
    return Books.find({category: 'Happy end'});
  }
});

Template.booksList2.helpers({
  books: function () {
    return Books.find({category: 'Affaires de moeurs'});
  }
});

Template.booksList3.helpers({
  books: function () {
    return Books.find({category: 'Fast books'});
  }
});


