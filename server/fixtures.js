if (Books.find().count() === 0) {
  Books.insert({
    title: 'Kidnapping',
    author: 'Paul Dargens',
    img: '/images/kidnapping.jpg'
  });
}

Meteor.publish('books', function (author) {
  return Books.find({flagged: false, author: author});
});
