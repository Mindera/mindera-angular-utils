"use strict";angular.module("mindera.directives",[]).directive("fullHeight",["$window",function(a){return{restrict:"A",link:function(b,c,d){var e=JSON.parse(d.fullHeight);b.initializeWindowSize=function(){angular.element(c).css("min-height",a.innerHeight-e.offset+"px"),angular.element(c).css("height",a.innerHeight-e.offset+"px")},b.initializeWindowSize(),angular.element(a).bind("resize",function(){b.initializeWindowSize()})}}}]),angular.module("mindera.factories",[]).factory("httpInterceptor",["$q","$cookies",function(a,b){return{request:function(c){for(var d in b)c.headers[d]=b[d];return c||a.when(c)}}}]),angular.module("mindera.filters",[]).filter("trustedDependency",["$sce",function(a){return function(b){return a.trustAsResourceUrl(b)}}]);