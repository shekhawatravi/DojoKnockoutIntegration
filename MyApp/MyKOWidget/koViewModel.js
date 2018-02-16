// Main viewmodel class

/*define([], function() {
    return function appViewModel() {
        this.country= ko.observable("Bharat");
        state= ko.observable("Rajasthan");
    };
});
*/





define( function(){
    var privateValue = 0;
    return{
        AssetVM: function(){
            //var AssetDashboardVM = function(){
               // var self = this;
                firstName = ko.observable("Ravindra");
                self.lastName = ko.observable("Singh");
                country= ko.observable("Bharat");
                state= ko.observable("Rajasthan");
            //}
        }
    }
});
