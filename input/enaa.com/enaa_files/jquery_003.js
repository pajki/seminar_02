(function($){$.cookieCuttr=function(options){var defaults={cookieCutter:false,cookieCutterDeclineOnly:false,cookieAnalytics:true,cookieDeclineButton:false,cookieAcceptButton:true,cookieResetButton:false,cookieOverlayEnabled:false,cookiePolicyLink:'/CMSLayout1.asp?CMSID=102',cookieMessage:'We use cookies on this website, you can <a href="{{cookiePolicyLink}}" title="read about our cookies">read about them here</a>. To use the website as intended please...',cookieAnalyticsMessage:'<div class="cc-text">Na�i pi�koti ne �kodijo, o �emer se lahko prepri�ate na strani: <a href="/CMSLayout1.asp?CMSID=102">nastavitve</a>, a brez njih vam ne moremo omogo�iti obi�ajnih funkcionalnosti za sodobnega kupca. Prosimo, da s klikom na DA potrdite soglasje za uporabo pi�kotkov na na�ih straneh. <br/></div>',cookieErrorMessage:"We\'re sorry, this feature places cookies in your browser and has been disabled. <br>To continue using this functionality, please",cookieWhatAreTheyLink:"/CMSLayout1.asp?CMSID=102",cookieDisable:'',cookieExpires:365,cookieAcceptButtonText:"DA",cookieDeclineButtonText:"DECLINE COOKIES",cookieResetButtonText:"RESET COOKIES FOR THIS WEBSITE",cookieWhatAreLinkText:"",cookieNotificationLocationBottom:false,cookiePolicyPage:false,cookiePolicyPageMessage:'Please read the information below and then choose from the following options',cookieDiscreetLink:false,cookieDiscreetReset:false,cookieDiscreetLinkText:"Cookies?",cookieDiscreetPosition:"topleft",cookieNoMessage:false,cookieDomain:""};var options=$.extend(defaults,options);var message=defaults.cookieMessage.replace('{{cookiePolicyLink}}',defaults.cookiePolicyLink);defaults.cookieMessage='We use cookies on this website, you can <a href="'+defaults.cookiePolicyLink+'" title="read about our cookies">read about them here</a>. To use the website as intended please...';var cookiePolicyLinkIn=options.cookiePolicyLink;var cookieCutter=options.cookieCutter;var cookieCutterDeclineOnly=options.cookieCutterDeclineOnly;var cookieAnalytics=options.cookieAnalytics;var cookieDeclineButton=options.cookieDeclineButton;var cookieAcceptButton=options.cookieAcceptButton;var cookieResetButton=options.cookieResetButton;var cookieOverlayEnabled=options.cookieOverlayEnabled;var cookiePolicyLink=options.cookiePolicyLink;var cookieMessage=message;var cookieAnalyticsMessage=options.cookieAnalyticsMessage;var cookieErrorMessage=options.cookieErrorMessage;var cookieDisable=options.cookieDisable;var cookieWhatAreTheyLink=options.cookieWhatAreTheyLink;var cookieExpires=options.cookieExpires;var cookieAcceptButtonText=options.cookieAcceptButtonText;var cookieDeclineButtonText=options.cookieDeclineButtonText;var cookieResetButtonText=options.cookieResetButtonText;var cookieWhatAreLinkText=options.cookieWhatAreLinkText;var cookieNotificationLocationBottom=options.cookieNotificationLocationBottom;var cookiePolicyPage=options.cookiePolicyPage;var cookiePolicyPageMessage=options.cookiePolicyPageMessage;var cookieDiscreetLink=options.cookieDiscreetLink;var cookieDiscreetReset=options.cookieDiscreetReset;var cookieDiscreetLinkText=options.cookieDiscreetLinkText;var cookieDiscreetPosition=options.cookieDiscreetPosition;var cookieNoMessage=options.cookieNoMessage;var $cookieAccepted=$.cookie('cc_cookie_accept')=="cc_cookie_accept";$.cookieAccepted=function(){return $cookieAccepted;};var $cookieDeclined=$.cookie('cc_cookie_decline')=="cc_cookie_decline";$.cookieDeclined=function(){return $cookieDeclined;};if(cookieAcceptButton){var cookieAccept=' <a href="#accept" class="cc-cookie-accept">'+cookieAcceptButtonText+'</a> ';}else{var cookieAccept="";}
if(cookieDeclineButton){var cookieDecline=' <a href="#decline" class="cc-cookie-decline">'+cookieDeclineButtonText+'</a> ';}else{var cookieDecline="";}
if(cookieOverlayEnabled){var cookieOverlay='cc-overlay';}else{var cookieOverlay="";}
if((cookieNotificationLocationBottom)||(cookieDiscreetPosition=="bottomright")||(cookieDiscreetPosition=="bottomleft")){var appOrPre=true;}else{var appOrPre=false;}
if(($cookieAccepted)){if((cookieResetButton)&&(cookieDiscreetReset)){if(appOrPre){$('body').append('<div class="cc-cookies cc-discreet"><a class="cc-cookie-reset" href="#" title="'+cookieResetButtonText+'">'+cookieResetButtonText+'</a></div>');}else{$('body').prepend('<div class="cc-cookies cc-discreet "><a class="cc-cookie-reset" href="#" title="'+cookieResetButtonText+'">'+cookieResetButtonText+'</a></div>');}
if(cookieDiscreetPosition=="topleft"){$('div.cc-cookies').css("top","0");$('div.cc-cookies').css("left","0");}
if(cookieDiscreetPosition=="topright"){$('div.cc-cookies').css("top","0");$('div.cc-cookies').css("right","0");}
if(cookieDiscreetPosition=="bottomleft"){$('div.cc-cookies').css("bottom","0");$('div.cc-cookies').css("left","0");}
if(cookieDiscreetPosition=="bottomright"){$('div.cc-cookies').css("bottom","0");$('div.cc-cookies').css("right","0");}}else if(cookieResetButton){if(appOrPre){$('body').append('<div class="cc-cookies"><a href="#" class="cc-cookie-reset">'+cookieResetButtonText+'</a></div>');}else{$('body').prepend('<div class="cc-cookies"><a href="#" class="cc-cookie-reset">'+cookieResetButtonText+'</a></div>');}}else{var cookieResetButton="";}}else{if((cookieNoMessage)&&(!cookiePolicyPage)){}else if((cookieDiscreetLink)&&(!cookiePolicyPage)){if(appOrPre){$('body').append('<div class="cc-cookies cc-discreet"><a href="'+cookiePolicyLinkIn+'" title="'+cookieDiscreetLinkText+'">'+cookieDiscreetLinkText+'</a></div>');}else{$('body').prepend('<div class="cc-cookies cc-discreet"><a href="'+cookiePolicyLinkIn+'" title="'+cookieDiscreetLinkText+'">'+cookieDiscreetLinkText+'</a></div>');}
if(cookieDiscreetPosition=="topleft"){$('div.cc-cookies').css("top","0");$('div.cc-cookies').css("left","0");}
if(cookieDiscreetPosition=="topright"){$('div.cc-cookies').css("top","0");$('div.cc-cookies').css("right","0");}
if(cookieDiscreetPosition=="bottomleft"){$('div.cc-cookies').css("bottom","0");$('div.cc-cookies').css("left","0");}
if(cookieDiscreetPosition=="bottomright"){$('div.cc-cookies').css("bottom","0");$('div.cc-cookies').css("right","0");}}else if(cookieAnalytics){if(appOrPre){$('body').append('<div class="cc-cookies '+cookieOverlay+'">'+cookieAnalyticsMessage+cookieAccept+cookieDecline+'<a href="'+cookieWhatAreTheyLink+'" title="Visit All about cookies (External link)">'+cookieWhatAreLinkText+'</a></div>');}else{$('body').prepend('<div class="cc-cookies '+cookieOverlay+'">'+cookieAnalyticsMessage+cookieAccept+cookieDecline+'<a href="'+cookieWhatAreTheyLink+'" title="Visit All about cookies (External link)">'+cookieWhatAreLinkText+'</a><div class="cc-cookiesBg"></div></div>');}}
if(cookiePolicyPage){if(appOrPre){$('body').append('<div class="cc-cookies '+cookieOverlay+'">'+cookiePolicyPageMessage+" "+' <a href="#accept" class="cc-cookie-accept">'+cookieAcceptButtonText+'</a> '+' <a href="#decline" class="cc-cookie-decline">'+cookieDeclineButtonText+'</a> '+'</div>');}else{$('body').prepend('<div class="cc-cookies '+cookieOverlay+'">'+cookiePolicyPageMessage+" "+' <a href="#accept" class="cc-cookie-accept">'+cookieAcceptButtonText+'</a> '+' <a href="#decline" class="cc-cookie-decline">'+cookieDeclineButtonText+'</a> '+'</div>');}}else if((!cookieAnalytics)&&(!cookieDiscreetLink)){if(appOrPre){$('body').append('<div class="cc-cookies '+cookieOverlay+'">'+cookieMessage+cookieAccept+cookieDecline+'</div>');}else{$('body').prepend('<div class="cc-cookies '+cookieOverlay+'">'+cookieMessage+cookieAccept+cookieDecline+'</div>');}}}
if((cookieCutter)&&(!cookieCutterDeclineOnly)&&(($cookieDeclined)||(!$cookieAccepted))){$(cookieDisable).html('<div class="cc-cookies-error">'+cookieErrorMessage+' <a href="#accept" class="cc-cookie-accept">'+cookieAcceptButtonText+'</a> '+'</div>');}
if((cookieCutter)&&(cookieCutterDeclineOnly)&&($cookieDeclined)){$(cookieDisable).html('<div class="cc-cookies-error">'+cookieErrorMessage+' <a href="#accept" class="cc-cookie-accept">'+cookieAcceptButtonText+'</a> '+'</div>');}
if((cookieNotificationLocationBottom)&&(!cookieDiscreetLink)){$('div.cc-cookies').css("top","auto");$('div.cc-cookies').css("bottom","0");}
if((cookieNotificationLocationBottom)&&(cookieDiscreetLink)&&(cookiePolicyPage)){$('div.cc-cookies').css("top","auto");$('div.cc-cookies').css("bottom","0");}
$('.cc-cookie-accept, .cc-cookie-decline').click(function(e){e.preventDefault();if($(this).is('[href$=#decline]')){$.cookie("cc_cookie_accept",null,{path:'/'});$.cookie("cc_cookie_decline","cc_cookie_decline",{expires:cookieExpires,path:'/'});if(options.cookieDomain){$.cookie("__utma",null,{domain:'.'+options.cookieDomain,path:'/'});$.cookie("__utmb",null,{domain:'.'+options.cookieDomain,path:'/'});$.cookie("__utmc",null,{domain:'.'+options.cookieDomain,path:'/'});$.cookie("__utmz",null,{domain:'.'+options.cookieDomain,path:'/'});}}else{$.cookie("cc_cookie_decline",null,{path:'/'});$.cookie("cc_cookie_accept","cc_cookie_accept",{expires:cookieExpires,path:'/'});}
$(".cc-cookies").fadeOut(function(){location.reload();});});$('a.cc-cookie-reset').click(function(f){f.preventDefault();$.cookie("cc_cookie_accept",null,{path:'/'});$.cookie("cc_cookie_decline",null,{path:'/'});$(".cc-cookies").fadeOut(function(){location.reload();});});$('.cc-cookies-error a.cc-cookie-accept').click(function(g){g.preventDefault();$.cookie("cc_cookie_accept","cc_cookie_accept",{expires:cookieExpires,path:'/'});$.cookie("cc_cookie_decline",null,{path:'/'});location.reload();})};})(jQuery);