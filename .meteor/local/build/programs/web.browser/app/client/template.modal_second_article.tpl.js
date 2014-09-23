(function(){
Template.__checkName("modal_second_article");
Template["modal_second_article"] = new Template("Template.modal_second_article", (function() {
  var view = this;
  return HTML.DIV({
    "class": "modal fade second-article",
    role: "dialog"
  }, "\n    ", HTML.DIV({
    "class": "modal-header modal-dialog modal-lg modal-content"
  }, "\n      ", HTML.Raw('<button type="button" class="close" data-dismiss="modal">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n      </button>'), "\n      ", HTML.Raw('<h1 class="modal-title" id="myModalLabel">Un classement unique</h1>'), "\n    ", HTML.DIV({
    "class": "repertory modal-body"
  }, "\n      ", HTML.ARTICLE({
    "class": "col-xs-6"
  }, "\n       ", HTML.Raw("<p>Dénichez et découvrez la perle rare grâce à un archivage peu ordinaire!</p>"), "\n        ", HTML.DIV({
    "class": "panel-group",
    id: "accordion"
  }, "\n          ", HTML.DIV({
    "class": "panel panel-default"
  }, "\n            ", HTML.Raw('<div class="panel-heading">\n              <h4 class="panel-title">\n                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">\n                    Faits divers\n                </a>\n              </h4>\n            </div>'), "\n            ", HTML.DIV({
    id: "collapseOne",
    "class": "panel-collapse collapse"
  }, "\n              ", HTML.DIV({
    "class": "panel-body"
  }, "\n                ", Spacebars.include(view.lookupTemplate("booksList")), "\n              "), "\n            "), "\n          "), "\n          "), "\n          ", HTML.DIV({
    "class": "panel-group",
    id: "accordion"
  }, "\n          ", HTML.DIV({
    "class": "panel panel-default"
  }, "\n            ", HTML.Raw('<div class="panel-heading">\n              <h4 class="panel-title">\n                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">\n                    Happy end\n                </a>\n              </h4>\n            </div>'), "\n             ", HTML.DIV({
    id: "collapseTwo",
    "class": "panel-collapse collapse"
  }, "\n              ", HTML.DIV({
    "class": "panel-body"
  }, "\n                ", Spacebars.include(view.lookupTemplate("booksList1")), "\n              "), "\n            "), "\n          "), "\n          "), "\n          ", HTML.DIV({
    "class": "panel-group",
    id: "accordion"
  }, "\n          ", HTML.DIV({
    "class": "panel panel-default"
  }, "\n            ", HTML.Raw('<div class="panel-heading">\n              <h4 class="panel-title">\n                <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">\n                    Affaires de moeurs\n                </a>\n              </h4>\n            </div>'), "\n            ", HTML.DIV({
    id: "collapseThree",
    "class": "panel-collapse collapse"
  }, "\n              ", HTML.DIV({
    "class": "panel-body"
  }, "\n                ", Spacebars.include(view.lookupTemplate("booksList2")), "\n              "), "\n            "), "\n          "), "\n          "), "\n          ", HTML.DIV({
    "class": "panel-group",
    id: "accordion"
  }, "\n          ", HTML.DIV({
    "class": "panel panel-default"
  }, "\n            ", HTML.Raw('<div class="panel-heading">\n              <h4 class="panel-title">\n                <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">\n                    Fast book\n                </a>\n              </h4>\n            </div>'), "\n            ", HTML.DIV({
    id: "collapseFour",
    "class": "panel-collapse collapse"
  }, "\n              ", HTML.DIV({
    "class": "panel-body"
  }, "\n                ", Spacebars.include(view.lookupTemplate("booksList3")), "\n              "), "\n            "), "\n          "), "\n          "), "\n      "), "\n      ", HTML.Raw('<article class="col-xs-4">\n        <img src="/images/classement.png">\n      </article>'), "\n     "), "\n    "), "\n  ");
}));

})();
