"use strict";

const gallery = {
    templateUrl: "app/components/gallery/gallery.html",
    controller: ["Service", "$location", function (Service, $location) {
        const vm = this;

        // $(window).scroll(function() {

        //     if ($(this).scrollTop() > 50){  
        //         $('#slide-in-hook').addClass("slide-in-dynamic");
        //     }
        //     else{
        //         $('#slide-in-hook').removeClass("slide-in-dynamic");
        //     }
        // });


        //re-load gallery @top of page
        $(window).on('beforeunload', function(){
            $(window).scrollTop(0);
          });
          

        //All routes
        vm.goLanding = () => {
            $location.path('/landing');
        }

        vm.goGallery = () => {
            $location.path('/gallery');
        }

        vm.goAbout = () => {
            $location.path('/aboutme');
        }

        vm.goHops = () => {
            $location.path('/hopsAcademy');
        }

        vm.goRecipease = () => {
            $location.path('/recipease');
        }

        vm.goBudget = () => {
            $location.path('/budgetBuddy');
        }


        //assign overlay class on preview image container
        $( ".preview-image" ).mouseover(function() {
            $( ".preview-image-overlay" ).addClass( "overlay-active" );
          });

          $( ".preview-image-overlay" ).mouseout(function() {
            $( ".preview-image-overlay" ).removeClass( "overlay-active" );
          });


    }]
}




angular
    .module("Portfolio")
    .component("gallery", gallery);