Books.remove({})
if (Books.find().count() === 0) {
  Books.insert({
    title: 'Kidnapping',
    author: 'Paul Dargens',
    img: '/images/kidnapping.jpg',
    category: 'Faits divers'
  });
  
  Books.insert({
    title: 'Le crime de mademoiselle Pouque',
    author: 'Rodolphe Bringer',
    img: '/images/leCrime.jpg',
    category: 'Happy end'
  });
  
  Books.insert({
    title: 'Le rhum bleu',
    author: 'Ernest Souza',
    img: '/images/leRhum.jpg',
    category: 'Affaires de moeurs'
  });
  
  Books.insert({
    title: 'Le crime de mademoiselle Pouque',
    author: 'Rodolphe Bringer',
    img: '/images/leCrime.jpg',
    category: 'Fast books'
  });
  
  Books.insert({
    title: 'Le rhum bleu',
    author: 'Ernest Souza',
    img: '/images/leRhum.jpg',
    category: 'Fast books'
  });
}
