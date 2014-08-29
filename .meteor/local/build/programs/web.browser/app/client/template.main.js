(function(){
Template.__body__.__contentParts.push(Blaze.View('body_content_'+Template.__body__.__contentParts.length, (function() {
  var view = this;
  return HTML.DIV({
    "class": "container"
  }, HTML.Raw('\n  <header class="jumbotron col-xs-11">\n    <h1>Rétro décalé</h1>\n    <p>Un micro-choix de petits livres rétro et décalés</p>\n  </header>\n  '), HTML.SECTION({
    "class": "solutions"
  }, "\n    ", HTML.ARTICLE({
    "class": "col-xs-3 panel panel-default"
  }, "\n      ", HTML.Raw("<h2>Découvre</h2>"), "\n      ", HTML.Raw('<a href="#" class="thumbnail" data-toggle="modal" data-target=".first-article">\n        <img src="/images/decouvre.png" alt="Yop">\n      </a>'), "\n      ", HTML.Raw("<p>2 livres, rétro et décalés, chaque jour!</p>"), "\n      ", Spacebars.include(view.lookupTemplate("modal_first_article")), "\n    "), "\n    ", HTML.ARTICLE({
    "class": "col-xs-3 col-xs-offset-1 panel panel-default"
  }, "\n      ", HTML.Raw("<h2>Déniche</h2>"), "\n      ", HTML.Raw('<a href="#" class="thumbnail" data-toggle="modal" data-target=".second-article">\n        <img src="/images/deniche.png" alt="Yop">\n      </a>'), "\n      ", HTML.Raw("<p>la perle rare, grâce à un classement peu ordinaire...</p>"), "\n      ", Spacebars.include(view.lookupTemplate("modal_second_article")), "\n    "), "\n        ", HTML.ARTICLE({
    "class": "col-xs-3 col-xs-offset-1 panel panel-default"
  }, "\n      ", HTML.Raw("<h2>Rencontre</h2>"), "\n      ", HTML.Raw('<a href="#" class="thumbnail" data-toggle="modal" data-target=".third-article">\n        <img src="/images/rencontre.png" alt="Yop">\n      </a>'), "\n      ", HTML.Raw("<p>d'autres amateurs autour d'un café.</p>"), "\n      ", Spacebars.include(view.lookupTemplate("modal_third_article")), "\n    "), "\n  "), "\n  ", Spacebars.include(view.lookupTemplate("subscribe")), HTML.Raw("\n  <br>\n "));
})));
Meteor.startup(Template.__body__.__instantiate);

})();
