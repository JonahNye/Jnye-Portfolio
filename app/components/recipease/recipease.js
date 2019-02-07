"use strict";

const recipease = {
    templateUrl: "app/components/recipease/recipease.html",
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
    .component("recipease", recipease);