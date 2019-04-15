/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["require","ojs/ojcore-base","ojL10n!ojtranslations/nls/ojtranslations"],function(e,n,o){var r={getDeviceType:function(){return n.AgentUtils.getAgentInfo().deviceType},getLocale:function(){if(n.__isAmdLoaderPresent()){n.Assert.assert(void 0!==o,"ojtranslations module must be defined");var e=o._ojLocale_;return"root"===e?"en":e}var t=r._locale;return null==t&&((t=document.documentElement.lang)||(t=void 0===navigator?"en":(navigator.language||navigator.userLanguage||"en").toLowerCase()),t=t.toLowerCase(),r._locale=t),t},setLocale:function(t,i){if(n.__isAmdLoaderPresent()){var a="ojL10n!ojtranslations/nls/",s=[a+t+"/ojtranslations"],u=0;if(n.LocaleData&&(s.push(a+t+"/localeElements"),n.TimezoneData)){var l=n.TimezoneData.__getBundleNames();u=l.length,l.forEach(function(e){s.push(a+t+e)})}e(s,function(e,r){o=e,r&&n.LocaleData.__updateBundle(r);for(var t=0;t<u;t++){var a=arguments[t+2];n.TimezoneData.__mergeIntoLocaleElements(a)}i&&i()})}else r._locale=t,i&&i()},getResourceUrl:function(e){if(null==e||/^\/|:/.test(e))return e;var n=r._resourceBaseUrl;null==n&&(n=r._getOjBaseUrl()||"");var o=n.length;return n+(0===o||"/"===n.charAt(o-1)?"":"/")+e},setResourceBaseUrl:function(e){r._resourceBaseUrl=e},setAutomationMode:function(e){r._automationMode=e},getAutomationMode:function(){return r._automationMode},getVersionInfo:function(){var e="Oracle JET Version: "+n.version+"\n";e+="Oracle JET Revision: "+n.revision+"\n";var o="undefined"!=typeof window;return o&&window.navigator&&(e+="Browser: "+window.navigator.userAgent+"\n",e+="Browser Platform: "+window.navigator.platform+"\n"),$&&($.fn&&(e+="jQuery Version: "+$.fn.jquery+"\n"),$.ui&&$.ui.version&&(e+="jQuery UI Version: "+$.ui.version+"\n")),n.ComponentBinding&&(e+="Knockout Version: "+n.ComponentBinding.__getKnockoutVersion()+"\n"),o&&window.require&&(e+="Require Version: "+window.require.version+"\n"),e},logVersionInfo:function(){console.log(r.getVersionInfo())},_getOjBaseUrl:function(){var o=null;n.__isAmdLoaderPresent()&&(o=e.toUrl("ojs/_foo_").replace(/[^/]*$/,"../"));return o},__getTemplateEngine:function(){if(!r._templateEnginePromise){if(!n.__isAmdLoaderPresent())throw new Error("JET Template engine cannot be loaded with an AMD loader");r._templateEnginePromise=new Promise(function(n,o){e(["./ojtemplateengine"],n,o)})}return r._templateEnginePromise},getConfigBundle:function(){return o}};return r});