const angularApp=angular.module('Piyush',['ngRoute','homeController','editController','ownController','singleController','signupController','loginController','articleController','postServices']);

angularApp.config(['$routeProvider',(a)=>{

a.when('/',{
    templateUrl:'./partials/home.html',
    controller:'homeController as hc',
    title:'BLOGGER'
}).
when('/about',{
    template:'<a href="#"></a><br><p>Here Is Some Info:- <br> <br> Name- Piyush Kumar Singh <br> ROll- 1828021 <br> Contact- 7717706314 <br> Whatsapp- 8873218700 <br> Email- Piyus3315@gmail.com</p>',
    title:'About Me'
}).
when('/admin',{
    templateUrl:'./partials/login.html',
    controller:'loginController as lc',
    title:'Blog Login'
}).
when('/signup',{
    templateUrl:'./partials/signup.html',
    controller:'signupController as sc',
     title:'Blog Registration'
}).
when('/new',{
    templateUrl:'./partials/newArticle.html',
    controller:'articleController as ac',
    title:'Publish New Article'

}).
when('/articles',{
    templateUrl:'./partials/articles.html',
    controller:'ownController as oc',
    title:'Articles'
}).
when('/:id/:title',{
    templateUrl:'./partials/singlePost.html',
    controller:'singleController as sc',
     title:'Article'
}).
when('/article/edit/:id',{
    templateUrl:'./partials/editArticle.html',
    controller:'editController as ec',
     title:'Edit page'
});

}]);

angularApp.controller('mainController',function($rootScope){
   var self=this;
    if(localStorage.getItem('isLogin')==1){
         $rootScope.login=true;
         $rootScope.data=JSON.parse(localStorage.getItem('userData'));
    }else{
        $rootScope.login=false;
    }

    this.logout=function(){
            localStorage.clear();
            location.reload();
    };
        
});

angularApp.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
}]);