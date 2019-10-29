/*!
 * Shop Nav v1.0.0 Lightweight plugin
 *
 * Copyright (c)
 *  Ahmad Hussnain

 * MIT License
 */


;(function ($, window, document, undefined) {
    'use strict';

    $.fn.shopNav = function (options) {

        var defaults = {
            mobileBreakpoint: 1024
        },
        // this is now jQuery Object
        settings = $.extend({}, defaults, options),
        bigScreenFlag = Number.MAX_VALUE,
        smallScreenFlag = 1,
        $element = this,
        mode,
        tabInit = false,
        $toggleBtn = $element.find('.toggle-button'),
        $closeSpan = $element.find('.ah-close'),
        $underneathSpanToggle = $element.find('.has-dropdown').children('.js-menu-toggle'),
        $megaBtn,$megaMenuItem,$megaMenuSpan,$megaMenuContent;


    return this.each(function() {

        /**
         * Returns Window Width
         */
        var windowWidth = function () {
            return window.innerWidth || document.documentElement.clientWidth
                || document.body.clientWidth;
        };
        /**
         * Check if the page has Mega menu
         */
        var checkTabs = function () {
            if ($element.find('.mega-menu').length > 0) {
                tabInit = true;
                // Get Mega button for click event
                $megaBtn = $('.mega-text');
                // Get all mega menu categories item for hover event
                $megaMenuItem = $element.find('.mega-menu-list').find('li');
               // Get all mega menu span for click event
                 $megaMenuSpan =  $element.find('.mega-menu-list').find('span');
                // Get all mega menu content
                 $megaMenuContent = $element.find('.mega-menu-content');
            }
        };
        /**
         * Global Event Handler for solving Mega Menu outside click problem
         */
        var globalBodyClick = function () {
            if ($megaBtn.hasClass('js-open')) {
              $megaBtn.removeClass('js-open');
            }
        };
        /**
         * Click functionality for Mega Menu Button
         */
        var clickMegaBtn = function (e) {
            // Don't bubble up to the DOM element
            e.stopPropagation();
            // Add class on button
            $megaBtn.toggleClass('js-open');
        };
        /**
         * Mega menu off hovering effect on categories item on portrait mode
         */
        var bindEventsMegaMenu = function () {
            if (tabInit) {
                if (mode === 'landscape') {
                    $megaBtn.on('click',clickMegaBtn);
                    $(document.body).on('click',globalBodyClick);
                    $megaMenuItem.on('mouseenter',mouseEnterMegaItem);
                } else {
                    $megaBtn.off('click');
                    $megaBtn.removeClass('js-open');
                    $(document.body).off('click',globalBodyClick);
                    $megaMenuSpan.on('click',clickMegaSpan);
                    $megaMenuItem.off('mouseenter').off('mouseleave')
                }
            }
        };
        /**
         * Mega menu on hovering function
         */
        var mouseEnterMegaItem = function () {
            // Remove all old classes from list items
            $megaMenuItem.removeClass('js-active');
            // Remove all old classes from span
            $megaMenuSpan.removeClass('js-toggle-mark');
            // add class to new list item
            $(this).addClass('js-active');
            // add class to span
            $(this).find('span').addClass('js-toggle-mark');
            // remove all js-active classes from content
            $megaMenuContent.removeClass('js-active');
            // add to new one index() function only works on list items , divs
            $($megaMenuContent[$(this).index()]).addClass('js-active');
        };
        /**
         * Mega menu on click function
         */
        var clickMegaSpan = function () {
            // Remove all old classes from span
            $megaMenuSpan.removeClass('js-toggle-mark');
            // Remove all old classes from list items
            $megaMenuItem.removeClass('js-active');
            // add class to new span
            $(this).addClass('js-toggle-mark');
            // add class to parent li
            $(this).parent().addClass('js-active');
            // remove all js-active classes from content
            $megaMenuContent.removeClass('js-active');
            // add to new one index() function only works on list items , divs
            $($megaMenuContent[$(this).parent().index()]).addClass('js-active');
        };
        /**
         * Attach click on toggle button
         */
        var attachClickOnToggleBtn = function () {
            $toggleBtn.on('click',function () {
                $element.addClass('js-open');
            });
        };
        /**
         * Attach click on close span
         */
        var attachClickOnCloseSpan = function () {
            // .menu-init
            // (child of menu-init) (toggle-button)
            // (child of menu-init) (ah-lg-mode)
            //      (child of ah-lg-mode) ah-close
            $closeSpan.on('click',function () {
                $element.removeClass('js-open');
            });
        };

        /**
         * Attach click on spans that are place underneath (.has-dropdown) list item
         */
        var attachClickOnUnderneathSpan = function () {
            $underneathSpanToggle.on('click',function () {
                $(this).toggleClass('js-toggle-mark');
                // Show delay duration = 0 , slide toggle duration = 300
                $(this).next().stop(true,true).slideToggle(300);
            });
        };

        /**
         * Flush plugin state from portrait mode
         */
          var flushPluginState = function () {
            // Remove .js-open class from the main element
            $element.removeClass('js-open');
            // Remove class from underneath spans
            $underneathSpanToggle.removeClass('js-toggle-mark');
            // Remove display property from spans that are place underneath (.has-dropdown) list item
            $underneathSpanToggle.next().css('display','');
        };



        /**
         * check browser width in real-time
         */
        var windowCheck = function() {
            // portrait mode
            if(windowWidth() <= settings.mobileBreakpoint && bigScreenFlag > settings.mobileBreakpoint){
                mode = 'portrait';
                bindEventsMegaMenu();

            }
            // landscape mode
            if(windowWidth() > settings.mobileBreakpoint && smallScreenFlag <= settings.mobileBreakpoint) {
                mode = 'landscape';
                bindEventsMegaMenu();
               // Flush plugin state from portrait mode
                flushPluginState();
            }
            bigScreenFlag = windowWidth();
            smallScreenFlag = windowWidth();
        };




        // Check if the page has Mega menu
        checkTabs();
        // Attach click on toggle button
        attachClickOnToggleBtn();
        // Attach click on close span
        attachClickOnCloseSpan();
        // Attach click on spans that are place underneath (.has-dropdown) list item
        attachClickOnUnderneathSpan();
        // check browser width in real-time
        windowCheck();

        $(window).on('resize', function() {
            windowCheck();
        });

    });
    };
})(jQuery, window, document);
