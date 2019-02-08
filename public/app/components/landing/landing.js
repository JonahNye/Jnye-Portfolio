"use strict";

const landing = {
    templateUrl: "app/components/landing/landing.html",
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;

        // $('#to-gallery').hover(
        //     function(){$(this).toggleClass('.bulge');}
        //     ); To add class with font-size increase, not working


        vm.goGallery = () => {
            $location.path('/gallery');
        };

    }]
}

angular
    .module("Portfolio")
    .component("landing", landing);