"use strict";

const hopsAcademy = {
    templateUrl: "app/components/hopsAcademy/hopsAcademy.html",
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
    .component("hopsAcademy", hopsAcademy);