angular.module('signupController',['postServices']).
controller('signupController',function(postFactory){
    this.name="Piyush";
    this.form={};
    this.message=false;
    var self=this;
    this.registration=function(data){
       
        postFactory.post(data).then(function(response){
                if(response.data.message=="success"){
                    self.form={};
                    self.message=true;
                    localStorage.setItem('isLogin', 1);
					localStorage.setItem('userData', JSON.stringify(response.data));
                    $rootScope.login=true;
                    location.href="#";
                }
        });
    };
});