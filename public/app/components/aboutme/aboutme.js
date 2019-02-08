"use strict";

const aboutMe = {
    templateUrl: "app/components/aboutme/aboutme.html",
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;

        //load @top of page
        $(window).on('beforeunload', function(){
            $(window).scrollTop(0);
          });

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
    .component("aboutMe", aboutMe);