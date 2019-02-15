angular
    .module("Portfolio", ['ngRoute', 'ngAnimate'])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            .when("/landing", {
                template: "<landing></landing>"
            })
            .when("/gallery", {
                template: "<gallery></gallery>"
            })
            .when("/aboutme", {
                template: "<about-me></about-me>"
            })
            .when("/hopsAcademy", {
                template: "<hops-academy></hops-academy>"
            })
            .when("/recipease", {
                template: "<recipease></recipease>"
            })
            .when("/budgetBuddy", {
                template: "<budget-buddy></budget-buddy>"
            })
            .when("/", {
                template: "<landing></landing>"
            })
    }]);