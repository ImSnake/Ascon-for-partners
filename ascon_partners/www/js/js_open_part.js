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
};


(function ($) {
    $(document).ready(
        function () {
//common_Управление header partners-nav
            $('#sub-menu').click(function () {
                $('#partners-nav').fadeIn(500).css('display', 'flex').toggleClass('hide-element');
            });

            $('#partners-nav').mouseleave(function () {
                $('#partners-nav').fadeOut(600, function () {
                    $(this).addClass('hide-element');})
            });

//common_Управление question-block div
            $('#question-icon, #question-nav').click(function () {
                $('.question-block').fadeIn(700).removeClass('hide-element');
            });

            $('#close-btn-2').click(function () {
                $('.question-block').fadeOut(700, function (){
                    $(this).addClass('hide-element');
                })
            });

//common_Управление login-block div
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

//single_Переключение sub-menu contacts-distributors.html
            $('#switch-nav li').click(function () {
                controlMethods.switchBtwSubNavContent($(this), $('#switch-nav li'), $('div .sub-nav'));
            });

//single_Переключение sub-menu-content terms-and-conditions.html
            $('#compass-link li').click(function () {
                controlMethods.switchBtwSubNavContent($(this), $('#compass-link li'), $('#compass-link section'));
            });

            $('#pilot-link li').click(function () {
                controlMethods.switchBtwSubNavContent($(this), $('#pilot-link li'), $('#pilot-link section'));
            });

//single_Переключение sub-menu-content terms-and-conditions.html
            $('.compass-variants .options-square').click(function () {
                $('.compass-variants .options-square div').slideToggle('hide-element');
                $('.details').toggle('display');
            });

//=============================================================================
//single_Переключение sub-menu-content new-partner-registration.html
            //вперед 1 шаг
            $('#continue-1').click(function () {
                $('#first-step i').removeClass('shake-horizontal').removeClass('fa-pencil-alt').addClass('fa-check');
                $('#second-step i').removeClass('fa-question').addClass('fa-pencil-alt').addClass('shake-horizontal');
                $('#company-data, #personal-data').toggleClass('hide-element');
            });

            //назад 1 шаг
            $('#step-back-1').click(function () {
                $('#first-step i').addClass('shake-horizontal').addClass('fa-pencil-alt').removeClass('fa-check');
                $('#second-step i').addClass('fa-question').removeClass('fa-pencil-alt').removeClass('shake-horizontal');
                $('#company-data, #personal-data').toggleClass('hide-element');
            });

            //вперед 1 шаг
            $('#continue-2').click(function () {
                $('#second-step i').removeClass('fas fa-pencil-alt shake-horizontal').addClass('fas fa-check');
                $('#last-step i').addClass('pulsate-fwd').css({'color': '#c64f15', 'animation-name': 'pulsate-fwd'});
                $('#personal-data, #send-form').toggleClass('hide-element');
            });

            //назад 2 шаг
            $('#step-back-2').click(function () {
                $('#second-step i').addClass('shake-horizontal').addClass('fa-pencil-alt').removeClass('fa-check');
                $('#last-step i').removeClass('pulsate-fwd').css({'color': 'inherit', 'animation-name': 'none'});
                $('#personal-data, #send-form').toggleClass('hide-element');
            });

//single_сворачивает-разворачивает ответы question-answer
            $('.answers h2').click(function () {
                $(this).toggleClass('bolded');
                $(this).children().toggleClass('hide-element');
                $(this).next('span').toggleClass('hide-element');
            })



        });
})(jQuery);


/*
window.onload = function() {

};

            $('#continue-1').click(function () {
                $('#first-step i').removeClass('shake-horizontal').removeClass('fas fa-pencil-alt').addClass('fas fa-check').css('color', '#6db61e');
                $('#company-data').addClass('hide-element');
                //$('#personal-data').removeClass('hide-element');
            });

*/