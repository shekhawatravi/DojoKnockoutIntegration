require([
    "dojo/_base/declare", 
    "dojo/parser", 
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text! MyApp/MyKOWidget/koWidgetTemplate.html",
    "knockout",
    "dojo/domReady",
], function(declare, parser, _WidgetBase, _TemplatedMixin, thisWidgetTemplate, ko, eady){

    declare("koWidget", [_WidgetBase, _TemplatedMixin], {
        // put methods, attributes, etc. here

        templateString: thisWidgetTemplate,

        postCreate: function(){
            // System Function
        },
    });
    ready(function(){
        // Call the parser manually so it runs after our widget is defined, and page has finished loading
        parser.parse();
    });
});