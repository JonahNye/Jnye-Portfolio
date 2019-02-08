"use strict";

const budgetBuddy = {
    templateUrl: "app/components/budgetbuddy/budgetbuddy.html",
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;

        vm.goLanding = () => {
            $location.path('/landing');
        }

        vm.goGallery = () => {
            $location.path('/gallery');
        };

        vm.goAbout = () => {
            $location.path('/aboutme');
        }

    }]
}


angular
    .module("Portfolio")
    .component("budgetBuddy", budgetBuddy);