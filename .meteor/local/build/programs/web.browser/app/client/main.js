(function(){Template.subscribe.events({
  'submit form': function (event) {
    event.preventDefault();
    var email = $('form input').val();
    Email.insert({email: email, created_at: new Date()});
    $('form input').val("");
  }
});

})();
