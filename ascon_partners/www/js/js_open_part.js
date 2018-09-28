"use strict";
const controlMethods = {
    switchBtwSubNavContent(clicked, nav, content){
            $(nav).removeClass('active-link');
            $(content).addClass('hide-element');
            let adr = [$(content)];
            for (let i = 0, val=''; i < adr[0].length; i++) {
                val= $(adr[0][i]).attr('alt');
                if ($(clicked).attr('alt') === val){
                    $(adr[0][i]).removeClass('hide-element');
                }
            }
            $(clicked).addClass('active-link');
    },

    formCheck(step){
        $(step).removeClass('fas fa-pencil-alt').addClass('fas fa-check').css('color', '#6db61e');




    },

};


(function ($) {
    $(document).ready(
        function () {
//Управление header partners-nav
            $('#sub-menu').click(function () {
                $('#partners-nav').fadeIn(500).css('display', 'flex').toggleClass('hide-element');
            });

            $('#partners-nav').mouseleave(function () {
                $('#partners-nav').fadeOut(600, function () {
                    $(this).addClass('hide-element');})
            });

//Управление question-block div
            $('#question-icon, #question-nav').click(function () {
                $('.question-block').fadeIn(700).removeClass('hide-element');
            });

            $('#close-btn-2').click(function () {
                $('.question-block').fadeOut(700, function (){
                    $(this).addClass('hide-element');
                })
            });

//Управление login-block div
            $('#login-icon').click(function () {
                $('.login-block').fadeIn(700).removeClass('hide-element')
            },);

            $('#close-btn-1, #close-btn-3').click(function () {
                $('.login-block').fadeOut(700, function (){
                    $('.restore-password, .login-block').addClass('hide-element');
                    $('.login-style-1').removeClass('hide-element')
                })
            });

            $('#restore-password').click(function () {
                $('.login-style-1').addClass('hide-element');
                $('.restore-password').removeClass('hide-element');
            });

//Переключение sub-menu contacts-distributors.html, terms-and-conditions.html
            $('#switch-nav li').click(function () {
                controlMethods.switchBtwSubNavContent($(this), $('#switch-nav li'), $('div .sub-nav'));
            });

//Переключение sub-menu-content terms-and-conditions.html
            $('#compass-link li').click(function () {
                controlMethods.switchBtwSubNavContent($(this), $('#compass-link li'), $('#compass-link section'));
            });

            $('#pilot-link li').click(function () {
                controlMethods.switchBtwSubNavContent($(this), $('#pilot-link li'), $('#pilot-link section'));
            });

//Переключение sub-menu-content new-partner-registration.html
            $('#continue-1').click(function () {
                $('#first-step i').removeClass('fas fa-pencil-alt').addClass('fas fa-check').css('color', '#6db61e');
                $('#company-data').addClass('hide-element');
                $('#personal-data, #second-step').removeClass('hide-element');
            });

            $('#continue-2').click(function () {
                $('#second-step i').removeClass('fas fa-pencil-alt').addClass('fas fa-check').css('color', '#6db61e');
                $('#personal-data').addClass('hide-element');
                $('#send-form').removeClass('hide-element');
            });


//Переключение sub-menu-content terms-and-conditions.html
            $('.details').click(function () {
                $('.compass-variants .options-square div').slideDown(700).removeClass('hide-element');
                $('.details').css('display', 'none');
            });

            $('.no-details').click(function () {
                $('.compass-variants .options-square div').slideUp(700, function () {
                    $(this).css('display', 'none');
                    $('.details').fadeIn(300).css('display', 'block');
                });

            });

        });
})(jQuery);


/*
window.onload = function() {

};

            $('#compass-link li').click(function () {
                $('#compass-link li').removeClass('active-link');
                $('#compass-link div').addClass('hide-element');
                let adr = [$('#compass-link div')];
                for (let i = 0, val=''; i < adr[0].length; i++) {
                    val= $(adr[0][i]).attr('alt');
                    if ($(this).attr('alt') === val){
                    $(adr[0][i]).removeClass('hide-element');
                    }
                }
                $(this).addClass('active-link');
            });


*/