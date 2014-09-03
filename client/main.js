Template.subscribe.events({
  
  'submit form': function (event) {
    var email = $('form input').val();

    event.preventDefault();
    Email.insert({email: email, created_at: new Date()});
    $('form input').val("");
  }
  
});

    