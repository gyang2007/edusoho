webpackJsonp(["app/js/open-course-manage/recommend-course/index"],[function(e,t,o){"use strict";function c(e){return e&&e.__esModule?e:{default:e}}var n=o("8f840897d9471c8c1fbd"),a=c(n);$(".course-list-group").on("click",".close",function(){var e=($(this).data("recommendId"),$(this).data("id"));$.post($(this).data("cancelUrl")).done(function(){$(".item-"+e).remove()})}),(0,a.default)({element:".course-list-group",itemSelector:"li.course-item",ajax:!1})}]);