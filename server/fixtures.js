if (Books.find().count() === 0) {
Books.insert({
    title: 'Kidnapping',
    author: 'Paul Dargens',
    img: '/images/kidnapping.jpg'
  });
}