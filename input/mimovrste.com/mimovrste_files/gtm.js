
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"442",
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"shopId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";a||(a=document.location.hostname);a=a.split(\".\");var b=a.pop();return b=a.pop()+\".\"+b})();"]
    },{
      "function":"__cid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return parseFloat(google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").purchase.actionField.revenue)}catch(a){return 0}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"documentTitle\");return a?a:document.title})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"traffic.channelFlag"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";if(\"detail\"==a||\"checkout\"==a||\"purchase\"==a)var b=a;if(b){a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\")[b].products;for(var c=b=0;c\u003Ca.length;c++)b+=a[c].price*(a[c].quantity||1);return b}return 0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"traffic.channelCategory1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"traffic.channelCategory2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"traffic.channelCategory3"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"traffic.channelCategory4"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"traffic.channelCategory5"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"\";",["escape",["macro",7],8,16],"\u0026\u0026(a=",["escape",["macro",7],8,16],"+\"\/\");",["escape",["macro",8],8,16],"\u0026\u0026(a+=",["escape",["macro",8],8,16],"+\"\/\");",["escape",["macro",9],8,16],"\u0026\u0026(a+=",["escape",["macro",9],8,16],"+\"\/\");",["escape",["macro",10],8,16],"\u0026\u0026(a+=",["escape",["macro",10],8,16],"+\"\/\");",["escape",["macro",11],8,16],"\u0026\u0026(a+=",["escape",["macro",11],8,16],"+\"\/\");return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";if(\"detail\"==a||\"checkout\"==a||\"purchase\"==a)var b=a;if(b){a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\")[b].products;b=[];for(var c=0;c\u003Ca.length;c++)b.push(a[c].id);return b}return\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return parseInt(document.getElementsByClassName(\"cart-icon-badge\")[0].textContent)}catch(a){return 0}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"detail\"==",["escape",["macro",5],8,16],"){var a=document.querySelector('[data-sel\\x3d\"catalog-number\"]');return a=a.textContent||a.innerHTML}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").impressions,c=[];if(a){for(var b=0;b\u003Ca.length;b++)c.push(a[b].variant);return c}return\"\"}catch(d){return\"\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.dataLayer[0][\"package\"].bbPrice,b=window.dataLayer[0][\"package\"].sbPrice;b=a+b;return a=5E3\u003Eb\u0026\u00260\u003Ca?\"Paid Bigbox shipping\":5E3\u003Cb\u0026\u00260\u003Ca?\"Unpaid Bigbox shipping\":void 0})();"]
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=void 0;if(\"gtm.js\"==",["escape",["macro",18],8,16],"||\"virtualPageview\"==",["escape",["macro",18],8,16],")a=function(a){var b=window.location.href;a=a.replace(\/[\\[\\]]\/g,\"\\\\$\\x26\");a=new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");if((b=a.exec(b))\u0026\u0026b[2])return decodeURIComponent(b[2].replace(\/\\+\/g,\" \"))},a=a(\"gclsrc\")+\":\"+a(\"gclid\"),-1\u003Ca.indexOf(\"undefined\")\u0026\u0026(a=void 0);return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"gtm.js\"==",["escape",["macro",18],8,16],"||\"virtualPageview\"==",["escape",["macro",18],8,16],"){var a=document.createElement(\"ins\");a.className=\"AdSense\";a.style.display=\"block\";a.style.position=\"absolute\";a.style.top=\"-1px\";a.style.height=\"1px\";document.body.appendChild(a);var b=!a.clientHeight;document.body.removeChild(a);return b}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=function(a){return 0==a||1==a?a+\"\":1\u003Ca\u0026\u002650\u003E=a?\"1-50\":50\u003Ca\u0026\u0026500\u003E=a?\"50-500\":500\u003Ca\u0026\u00261E3\u003E=a?\"500-1000\":1E3\u003Ca\u0026\u00261500\u003E=a?\"1000-1500\":1500\u003Ca\u0026\u00262E3\u003E=a?\"1500-2000\":2E3\u003Ca\u0026\u00262500\u003E=a?\"2000-2500\":2500\u003Ca\u0026\u00263E3\u003E=a?\"2500-3000\":3E3\u003Ca\u0026\u00263500\u003E=a?\"3000-3500\":3500\u003Ca\u0026\u00264E3\u003E=a?\"3500-4000\":4E3\u003Ca\u0026\u00264999\u003E=a?\"4000-4999\":5E3\u003C=a?\"5000+\":\"error\"};if(\"searchresults\"==",["escape",["macro",5],8,16],")try{var b=document.getElementsByClassName(\"main-container\")[0].getElementsByTagName(\"strong\")[0],d=b.textContent||b.innerHTML||b.innerText;\nreturn c(parseInt(d.match(\/\\d+\/g)[0]))}catch(a){return c(0)}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(c,d,e){if(c\u0026\u0026d\u0026\u0026e){var b=new Date,a=location.hostname.split(\".\").reverse();a=\".\"+a[1]+\".\"+a[0];b.setTime(b.getTime()+e);document.cookie=c+\"\\x3d\"+d+\"; path\\x3d\/; Domain\\x3d\"+a+\"; expires\\x3d\"+b.toGMTString()}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){if(a\u0026\u00260\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start))return c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(a){if(a){var b=window.location.href;a=a.replace(\/[\\[\\]]\/g,\"\\\\$\\x26\");a=new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");if((b=a.exec(b))\u0026\u0026b[2])return decodeURIComponent(b[2].replace(\/\\+\/g,\" \"))}}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"ech_grp"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],",b=",["escape",["macro",25],8,16],";return\"www.mall.cz\"==a||\"www.mall.sk\"==a?\/home|detail|category|checkout|purchase\/.test(",["escape",["macro",5],8,16],")?\"19012017-2-rmk_on\"==b||\"18052017-rmk_on\"==b?!0:!1:!1:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],",b=(",["escape",["macro",25],8,16],"||\"\").toLowerCase(),c=function(){switch(a){case \"www.mall.cz\":return\"19012017-2-rmk_on|19012017-rmk_adfb\";case \"www.mall.sk\":return\"18052017-rmk_on|18052017-rmk_ad\";case \"www.mall.hu\":return\"rmk_adw|rmk_on\";case \"www.mall.pl\":return\"\";case \"www.mall.hr\":return\"rmk_on|rmk_adw\";case \"www.mimovrste.com\":return\"rmk_on|rmk_adw\"}};return(new RegExp(c())).test(b)?!0:\"www.mall.cz\"!=a?!1:\"rmkAdwExternalTrigger\"==",["escape",["macro",18],8,16],"?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],",b=(",["escape",["macro",25],8,16],"||\"\").toLowerCase(),c=function(){switch(a){case \"www.mall.cz\":return\"19012017-2-rmk_on\";case \"www.mall.sk\":return\"18052017-rmk_on|18052017-rmk_fb\";case \"www.mall.hu\":return\"rmk_on\";case \"www.mall.pl\":return\"\";case \"www.mall.hr\":return\"19012017-rmk_on\";case \"www.mimovrste.com\":return\"rmk_on\"}};return(new RegExp(c())).test(b)?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],",b=(",["escape",["macro",25],8,16],"||\"\").toLowerCase(),c=function(){switch(a){case \"www.mall.cz\":return\"19012017-2-rmk_on|19012017-rmk_criteo\";case \"www.mall.sk\":return\"18052017-rmk_on|18052017-rmk_criteo\";case \"www.mall.hu\":return\"rmk_criteo|rmk_on\";case \"www.mall.pl\":return\"\";case \"www.mall.hr\":return\"rmk_on|rmk_criteo\";case \"www.mimovrste.com\":return\"rmk_on|rmk_criteo\"}};return(new RegExp(c())).test(b)?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],",b=(",["escape",["macro",25],8,16],"||\"\").toLowerCase(),c=function(){switch(a){case \"www.mall.cz\":return\"19012017-2-rmk_on\";case \"www.mall.sk\":return\"18052017-rmk_on\";case \"www.mall.hu\":return\"rmk_rtbh|rmk_on\";case \"www.mall.pl\":return\"\";case \"www.mall.hr\":return\"rmk_on|rmk_rtbh\";case \"www.mimovrste.com\":return\"rmk_on|rmk_rtbh\"}};return(new RegExp(c())).test(b)?!0:!1})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"_mgPrivacy"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",31],8,16],";return a?(a=a.toString(),3==a.length\u0026\u0026\"1\"==a.substr(a.length-1)?!0:!1):!1}catch(b){return!1}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"package\").msbPrice||google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"package\").mbbPrice?\"true\":\"false\"}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"package\").bbPrice?\"true\":\"false\"}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"package\").sbPrice?\"true\":\"false\"}catch(a){}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",31],8,16],";return a?(a=a.toString(),3==a.length\u0026\u0026\"1\"==a.substr(0,1)?!0:!1):!1}catch(b){return!1}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",31],8,16],";return a?(a=a.toString(),3==a.length\u0026\u0026\"1\"==a.substr(1,1)?!0:!1):!1}catch(b){return!1}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"package\");if(a)return a=a.bbPrice+a.mbbPrice+a.msbPrice+a.sbPrice,2500\u003E=a?500*Math.ceil(a\/500):5E3\u003E=a?\"2500-5000\":1E4\u003E=a?\"5000-10000\":\"10000+\"})();"]
    },{
      "function":"__dbg"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=-1\u003Cdocument.location.hostname.indexOf(\"test\")?!0:!1,b=",["escape",["macro",39],8,16],";return b?!0:a?!1:!0}catch(c){return!0}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(c,d){for(var a=[],b=0;b\u003Cc.length;b++){var e=c[b];d in e\u0026\u0026(a[a.length]=e[d])}return a}})();"]
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"documentLocation\");return a?a:",["escape",["macro",42],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",5],8,16],"?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",45],8,16],";if(b){for(var a=\"\",c=0;c\u003Cb.length;c++)a+=b[c].dimension54||\"\",a+=b[c].dimension55||\"\";return\"www.mall.cz\"==",["escape",["macro",0],8,16],"?-1\u003Ca.indexOf(\"lozenka\")||-1\u003Ca.indexOf(\"lo\\u017eenka\")||-1\u003Ca.indexOf(\"allbox\")?!0:!1:\"www.mall.sk\"==",["escape",["macro",0],8,16],"?-1\u003Ca.indexOf(\"lozenka\")||-1\u003Ca.indexOf(\"lo\\u017eenka\")?!0:!1:!1}return!1})();"]
    },{
      "function":"__e"
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__c",
      "vtp_value":"_ga"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"customerId"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"tr.affil",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"cg.main",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"tr.layout",
      "vtp_dataLayerVersion":2
    },{
      "function":"__c",
      "vtp_value":"71"
    },{
      "function":"__c",
      "vtp_value":"GTM"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":["macro",49]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return ga.getAll()[0].get(\"clientId\")}catch(b){var a=",["escape",["macro",56],8,16],".split(\".\");return a[2]+\".\"+a[3]}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtmAbGroup2"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"ech_vrkBann"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"_mgTest1"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"_mgTest2"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"www.mall.cz\"==",["escape",["macro",0],8,16],"||\"www.mall.cz.test\"==",["escape",["macro",0],8,16],"?",["escape",["macro",23],8,16],"(\"_mgBucket\"):",["escape",["macro",23],8,16],"(\"_mgTemp\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"payGateReturnStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"comType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"loggedIn"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"packetCount"
    },{
      "function":"__c",
      "vtp_value":"UA-637405-35"
    },{
      "function":"__c",
      "vtp_value":"UA-637405-58"
    },{
      "function":"__c",
      "vtp_value":"UA-870138-1"
    },{
      "function":"__c",
      "vtp_value":"UA-868589-7"
    },{
      "function":"__c",
      "vtp_value":"UA-868515-4"
    },{
      "function":"__c",
      "vtp_value":"UA-67743544-2"
    },{
      "function":"__c",
      "vtp_value":"UA-1027003-1"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","www.mall.cz","value",["macro",67]],["map","key","www.mall.cz.test","value",["macro",68]],["map","key","www.mall.sk","value",["macro",69]],["map","key","www.mall.sk.test","value",["macro",68]],["map","key","www.mall.pl","value",["macro",70]],["map","key","www.mall.pl.test","value",["macro",68]],["map","key","www.mall.hu","value",["macro",71]],["map","key","www.mall.hu.test","value",["macro",68]],["map","key","www.mall.hr","value",["macro",72]],["map","key","www.mall.hr.test","value",["macro",68]],["map","key","www.mimovrste.com","value",["macro",73]],["map","key","www.mimovrste.com.test","value",["macro",68]],["map","key","www.mall.cz.preprod","value",["macro",68]]]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_name":"eventNonInteractionFlag",
      "vtp_defaultValue":"false",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"acquisition.landing-page"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"acquisition.term"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"acquisition.device"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"acquisition.pagetype"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"acquisition.source-medium"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",75],
      "vtp_defaultValue":"1",
      "vtp_map":["list",["map","key","impression","value","1"],["map","key","productDetail","value","1"],["map","key","checkout","value","1"],["map","key","checkoutOption","value","1"],["map","key","purchase","value","1"],["map","key","evImpress","value","1"],["map","key","productClick","value","1"],["map","key","intPromo","value","1"],["map","key","intPromoClick","value","0"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",75],
      "vtp_defaultValue":["macro",75],
      "vtp_map":["list",["map","key","purchase","value","Purchase"],["map","key","addToCart","value","Add To Cart"],["map","key","removeFromCart","value","Remove From Cart"],["map","key","productDetail","value","Product Detail"],["map","key","checkout","value","Checkout"],["map","key","checkoutOption","value","Checkout Option"],["map","key","evImpress","value","Product Impression"],["map","key","productClick","value","Product Click"],["map","key","intPromo","value","Internal Promo"],["map","key","intPromoClick","value","Internal Promo Click"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.checkout.actionField.step"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.metric7"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.metric8"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.metric9"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",5],
      "vtp_defaultValue":["macro",5],
      "vtp_map":["list",["map","key","purchase","value","order"],["map","key","checkout","value","cart"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.brand"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.name"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_map":["list",["map","key","mall.hr","value","941043805"],["map","key","mall.cz","value","853954180"],["map","key","mall.sk","value","853935888"],["map","key","mall.pl","value","1068666892"],["map","key","mall.hu","value","853945805"],["map","key","cz.test","value","1039066679"],["map","key","mimovrste.com","value","1060804031"]]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_map":["list",["map","key","mall.hr","value","853946039"],["map","key","mall.cz","value","853954180"],["map","key","mall.sk","value","853935888"],["map","key","mall.pl","value","853954927"],["map","key","mall.hu","value","853945805"],["map","key","mimovrste.com","value","853945535"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_map":["list",["map","key","mall.cz","value",""],["map","key","mall.sk","value","EUR"],["map","key","mall.pl","value","PLN"],["map","key","mimovrste.com","value","EUR"],["map","key","mall.hu","value","HUF"],["map","key","cz.test","value","USD"],["map","key","mall.hr","value","HRK"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_map":["list",["map","key","mall.hr","value","3OfvCPXTi3EQt92YlwM"],["map","key","mall.cz","value","wwwKCJLZi3EQhJ2ZlwM"],["map","key","mall.sk","value","C8_mCO7Mi3EQkI6YlwM"],["map","key","mall.pl","value","tFv6CPrPi3EQ76KZlwM"],["map","key","mall.hu","value","FIIVCLLSi3EQzduYlwM"],["map","key","mimovrste.com","value","jDUzCJLPpHEQv9mYlwM"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","www.mall.cz","value","UA-97720302-1"],["map","key","www.mall.sk","value","UA-97720302-3"],["map","key","www.mall.pl","value","UA-97720302-7"],["map","key","www.mall.hu","value","UA-97720302-5"],["map","key","www.mall.hr","value","UA-97720302-9"],["map","key","www.mimovrste.com","value","UA-97720302-11"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",0],
      "vtp_map":["list",["map","key","www.mall.cz","value","UA-97720302-2"],["map","key","www.mall.sk","value","UA-97720302-4"],["map","key","www.mall.pl","value","UA-97720302-8"],["map","key","www.mall.hu","value","UA-97720302-6"],["map","key","www.mall.hr","value","UA-97720302-10"],["map","key","www.mimovrste.com","value","UA-97720302-12"]]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",103],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","Doporučujeme|Nejnižší ceny|Nejvyšší ceny|Hodnocení","value","Sorting"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"not_set",
      "vtp_name":"gtm.element.value"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",106],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","1","value","Skladem"],["map","key","2","value","Akce"],["map","key","novinka","value","Novinka"],["map","key","bazar","value","Rozbaleno"],["map","key","vyprodej","value","Výprodej"],["map","key","nas-tip","value","Náš tip"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","mall.cz","value","true"],["map","key","mall.sk","value","true"],["map","key","mall.hu","value","true"],["map","key","mall.pl","value","true"],["map","key","mimovrste.com","value","true"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_map":["list",["map","key","mall.cz","value","CZK"],["map","key","mall.sk","value","EUR"],["map","key","mall.pl","value","PLN"],["map","key","mimovrste.com","value","EUR"],["map","key","mall.hu","value","HUF"],["map","key","cz.test","value","CZK"],["map","key","mall.hr","value","HRK"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"0",
      "vtp_map":["list",["map","key","mall.cz","value","113603"],["map","key","mall.sk","value","132510"],["map","key","mall.pl","value","132512"],["map","key","mimovrste.com","value","132513"],["map","key","mall.hu","value","132508"],["map","key","mall.hr","value","150439"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"_mgBucket"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"not set",
      "vtp_map":["list",["map","key","mall.hu","value","on8Ysgi3JfDYLq6p3PWC"],["map","key","mall.pl","value","me5CxI0gw1ss1w8Kzwq1"],["map","key","mall.sk","value","3Me6A3zKxLqLaCoRNDid"],["map","key","mall.hr","value","UfNfSmx3r9I2wMg070Dg"],["map","key","mimovrste.com","value","AU13lPEEulnN0ba8y5If"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"traffic.channelSubsection"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"not set",
      "vtp_map":["list",["map","key","mall.hu","value","1726711800877424,771547112893420"],["map","key","hu.test","value","1726711800877424,771547112893420"],["map","key","mall.pl","value","187359605024433,106101963078656,1585192905043731"],["map","key","pl.test","value","187359605024433,106101963078656,1585192905043731"],["map","key","mall.cz","value","1443504835891544"],["map","key","cz.test","value","1443504835891544"],["map","key","mall.sk","value","520398974793206"],["map","key","sk.test","value","520398974793206"],["map","key","mimovrste.com","value","1638231773117985,624169691059403"]]
    },{
      "function":"__f"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"traffic.channelSubsectionID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",13],8,16],".toString()})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_map":["list",["map","key","mall.cz","value","15522"],["map","key","mall.sk","value","20017"],["map","key","mall.pl","value","11464"],["map","key","mall.hu","value","26266"],["map","key","mall.hr","value","27569"],["map","key","cz.test","value","15522"],["map","key","mimovrste.com","value","20219"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"deviceCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"hashedEmail"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"newCustomer"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"crtg_dd"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_map":["list",["map","key","mall.cz","value","66362"],["map","key","cz.test","value","66362"],["map","key","mall.sk","value","89487"],["map","key","sk.test","value","89487"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",5],
      "vtp_map":["list",["map","key","home","value","Home%20page"],["map","key","category","value","Kategorie"],["map","key","detail","value","Produkt"],["map","key","checkout","value","Kosik"],["map","key","purchase","value","Odeslana%20objednavka"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_map":["list",["map","key","mall.cz","value","Kč"],["map","key","mall.sk","value","€"],["map","key","mall.pl","value","zł"],["map","key","mimovrste.com","value","€"],["map","key","mall.hu","value","Ft"],["map","key","cz.test","value","Kč"],["map","key","mall.hr","value","Kn"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",5],
      "vtp_defaultValue":"other",
      "vtp_map":["list",["map","key","home","value","home"],["map","key","detail","value","product"],["map","key","purchase","value","purchase"],["map","key","checkout","value","cart"],["map","key","category","value","category"],["map","key","searchresults","value","search"]]
    },{
      "function":"__t"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"TARGET"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__aev",
      "vtp_varType":"URL"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_URL_FRAGMENT"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_NEW_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_OLD_STATE"
    },{
      "function":"__aev",
      "vtp_varType":"HISTORY_CHANGE_SOURCE"
    },{
      "function":"__v",
      "vtp_name":"cg.section",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"cg.field",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"cat.xy",
      "vtp_dataLayerVersion":2
    },{
      "function":"__k",
      "vtp_name":"optim_dev",
      "vtp_decodeCookie":false
    },{
      "function":"__k",
      "vtp_name":"optimics_dev",
      "vtp_decodeCookie":false
    },{
      "function":"__v",
      "vtp_setDefaultValue":true,
      "vtp_name":"cj_extended",
      "vtp_defaultValue":"false",
      "vtp_dataLayerVersion":2
    },{
      "function":"__c",
      "vtp_value":"production"
    },{
      "function":"__c",
      "vtp_value":"false"
    },{
      "function":"__c",
      "vtp_value":"AC23DC4165457E"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"productHit.paymentMethod"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",1],
      "vtp_map":["list",["map","key","mall.cz","value","mall-cz"],["map","key","cz.test","value","mall-cz-test"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","mall.cz","value","true"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",1],
      "vtp_defaultValue":"not set",
      "vtp_map":["list",["map","key","mall.cz","value","5624812"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"ech_wea_tem"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"ech_wea_sky"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.coupon"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.detail.products.0.dimension49"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",56],8,16],";return parseInt(a.substr(a.length-1))})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__hid"
    }],
  "tags":[{
      "function":"__html",
      "priority":11,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{$(document).keyup(function(a){27==a.which\u0026\u0026$(\".video-container .close\").trigger(\"click\")})}catch(a){}})();\u003C\/script\u003E\n\u003Cstyle\u003E\n.video-container {\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    width: 842px;\n    height: 480px;\n\tmargin: -240px 0 0 -427px;\n    z-index: 9999;\n\tbackground-color: rgba(0,0,0,.75);\n\tborder: 7px solid transparent;\n}\n.video-container a.close {  \n    top: 0.57647em;\n    right: 0.57647em;\n}  \n@media (max-width: 890px) {\n  .video-container {\n\twidth: 642px;\n    height: 367px;\n    margin: -184px 0 0 -321px;\n  }\n}\n@media (max-width: 660px) {\n  .video-container {\n\twidth: 100%;\n    height: 368px;\n    margin: -184px 0 0 0;\n    left: 0px;\n  }\n  .video-container a.close {\n    top: 0.17647em;\n    right: .17647em;\n  }\n}\n@media (max-width: 460px) {\n  .video-container {\n    height: 266px;\n    margin: -150px 0 0 0;\n  }\n}\n@media (max-width: 375px) {\n  .video-container {\n    height: 217px;\n  }\n}   \n@media (max-width: 320px) {\n  .video-container {\n    height: 186px;\n  }\n}  \n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":76
    },{
      "function":"__html",
      "priority":10,
      "teardown_tags":["list",["tag",2,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var f=function(a){if(\"\"==a)return!0;var b=Math.round(+new Date\/1E3);a=a.split(\".\").pop();return 3\u003Eb-a?!0:!1},g=function(a){return 0\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start)?(c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))):\"\"},b=function(a){return decodeURIComponent(((new RegExp(\"[?|\\x26]\"+a+\"\\x3d([^\\x26;]+?)(\\x26|#|;|$)\")).exec(location.search)||\n[null,\"\"])[1].replace(\/\\+\/g,\"%20\"))||null},c=function(a){a=a.replace(\"https:\/\/\",\"\").replace(\"http:\/\/\",\"\").replace(\"www.\",\"\").split(\"\/\")[0].split(\".\");return a[a.length-2]+\".\"+a[a.length-1]},e=function(){return document.referrer.replace(\"https:\/\/\",\"\").replace(\"http:\/\/\",\"\").split(\"\/\")[0]},h=function(){var a=void 0;try{var b=new MobileDetect(window.navigator.userAgent);return a=null!=b.phone()?\"mobile\":null!=b.tablet()?\"tablet\":\"desktop\"}catch(l){}},k=function(a){return-1\u003C",["escape",["macro",117],8,16],".indexOf(\"gclid\")?\n\"google \/ cpc\":b(\"utm_source\")||b(\"utm_medium\")?(b(\"utm_source\")||void 0)+\" \/ \"+(b(\"utm_medium\")||void 0):0==a.length?\"direct \/ none\":\/facebook.com|twitter.com|pinterest.com|plus.google|instagram.com|vk.com|flickr.com|stumbleupon.com|myspace.com|delicious.com|foursquare.com|linkedin.com|tumblr.com\/i.test(a.toLowerCase())?c(a)+\" \/ social\":\/google.|search.seznam.cz|search.yahoo.com|bing.com|baidu.com|yandex.com\/i.test(a.toLowerCase())?c(a)+\" \/ organic\":-1\u003Ce().indexOf(\"www.mall.\")||-1\u003Ce().indexOf(\"www.mimovrste.com\")?\n\"direct \/ none\":c(a)+\" \/ referral\"};if(f(g(\"_ga\"))){var d=document.createElement(\"script\");d.src=\"\/\/cdnjs.cloudflare.com\/ajax\/libs\/mobile-detect\/1.3.3\/mobile-detect.min.js\";d.onload=function(){dataLayer.push({event:\"eventFire\",eventCategory:\"Users\",eventAction:\"New acquisition\",eventLabel:\"-\",eventNonInteractionFlag:!0,acquisition:{\"landing-page\":",["escape",["macro",112],8,16],",pagetype:",["escape",["macro",5],8,16],",term:b(\"utm_term\")||void 0,device:h(),\"source-medium\":k(",["escape",["macro",118],8,16],")},eventCallback:function(){dataLayer.push({eventCategory:void 0,\neventAction:void 0,eventLabel:void 0,eventValue:void 0,eventNonInteractionFlag:!1})}})};document.body.appendChild(d)}}catch(a){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__ua",
      "priority":5,
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","false"],["map","fieldName","cookieDomain","value",["macro",48]],["map","fieldName","cookieName","value",["macro",49]],["map","fieldName","userId","value",["macro",50]],["map","fieldName","siteSpeedSampleRate","value","100"],["map","fieldName","location","value",["macro",43]],["map","fieldName","title","value",["macro",4]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",5]],["map","index","2","group",["macro",7]],["map","index","3","group",["macro",8]],["map","index","4","group",["macro",9]],["map","index","5","group",["macro",10]],["map","index","6","group",["macro",11]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","7","dimension",["macro",51]],["map","index","2","dimension",["macro",50]],["map","index","1","dimension",["macro",52]],["map","index","8","dimension",["macro",53]],["map","index",["macro",54],"dimension",["macro",55]],["map","index","10","dimension",["macro",57]],["map","index","18","dimension",["macro",15]],["map","index","20","dimension",["macro",58]],["map","index","30","dimension",["macro",17]],["map","index","73","dimension",["macro",59]],["map","index","74","dimension",["macro",60]],["map","index","75","dimension",["macro",61]],["map","index","45","dimension",["macro",19]],["map","index","70","dimension",["macro",20]],["map","index","82","dimension",["macro",21]],["map","index","3","dimension",["macro",62]],["map","index","88","dimension",["macro",63]],["map","index","89","dimension",["macro",64]],["map","index","90","dimension",["macro",31]],["map","index","91","dimension",["macro",65]],["map","index","95","dimension",["macro",66]],["map","index","19","dimension",["macro",25]],["map","index","111","dimension",["macro",38]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",74],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",76],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",77],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_contentGroup":["list",["map","index","1","group",["macro",5]],["map","index","2","group",["macro",7]],["map","index","3","group",["macro",8]],["map","index","4","group",["macro",9]],["map","index","5","group",["macro",10]],["map","index","6","group",["macro",11]]],
      "vtp_eventAction":["macro",78],
      "vtp_eventLabel":["macro",79],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_eventValue":["macro",80],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",48]],["map","fieldName","cookieName","value",["macro",49]],["map","fieldName","location","value",["macro",43]],["map","fieldName","title","value",["macro",4]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",54],"dimension",["macro",55]],["map","index","25","dimension",["macro",81]],["map","index","26","dimension",["macro",82]],["map","index","27","dimension",["macro",83]],["map","index","28","dimension",["macro",84]],["map","index","29","dimension",["macro",85]],["map","index","19","dimension",["macro",25]],["map","index","92","dimension",["macro",33]],["map","index","93","dimension",["macro",34]],["map","index","94","dimension",["macro",35]],["map","index","111","dimension",["macro",38]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",74],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":2
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",86],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",87],
      "vtp_eventLabel":["macro",88],
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",48]],["map","fieldName","cookieName","value",["macro",49]],["map","fieldName","location","value",["macro",43]],["map","fieldName","title","value",["macro",4]]],
      "vtp_metric":["list",["map","index","7","metric",["macro",89]],["map","index","8","metric",["macro",90]],["map","index","9","metric",["macro",91]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index",["macro",54],"dimension",["macro",55]],["map","index","83","dimension",["macro",92]],["map","index","91","dimension",["macro",65]],["map","index","111","dimension",["macro",38]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",74],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":9
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_prodid","value",["macro",13]],["map","key","ecomm_pagetype","value",["macro",93]],["map","key","ecomm_totalvalue","value",["macro",6]],["map","key","ecomm_category","value",["macro",12]],["map","key","loggedIn","value",["macro",65]],["map","key","pagetype","value",["macro",93]],["map","key","cat","value",["macro",12]],["map","key","bValue","value",["macro",6]],["map","key","productID","value",["macro",13]],["map","key","pValue","value",["macro",6]],["map","key","pBrand","value",["macro",94]],["map","key","pNname","value",["macro",95]],["map","key","itemsInCart","value",["macro",14]],["map","key","dynx_itemid","value",["macro",13]],["map","key","dynx_pagetype","value",["macro",93]],["map","key","dynx_totalvalue","value",["macro",6]]],
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":["macro",96],
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_url":["macro",97],
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":["macro",3],
      "vtp_orderId":["macro",92],
      "vtp_conversionId":["macro",98],
      "vtp_currencyCode":["macro",99],
      "vtp_conversionLabel":["macro",100],
      "vtp_url":["macro",97],
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":54
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",48]],["map","fieldName","cookieName","value",["macro",49]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",101],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":56
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",48]],["map","fieldName","cookieName","value",["macro",49]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",102],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",86],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Ecommerce",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",87],
      "vtp_useEcommerceDataLayer":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",48]],["map","fieldName","cookieName","value",["macro",49]]],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",102],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":59
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":71
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Horizontal sort and filter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",105],
      "vtp_eventLabel":["macro",103],
      "vtp_trackingId":["macro",74],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":81
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Horizontal sort and filter",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Promo filters",
      "vtp_eventLabel":["macro",107],
      "vtp_trackingId":["macro",74],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":82
    },{
      "function":"__cl",
      "tag_id":103
    },{
      "function":"__cl",
      "tag_id":104
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var m=",["escape",["macro",75],8,16],",h=",["escape",["macro",5],8,16],",f=function(){switch(",["escape",["macro",0],8,16],"){case \"www.mall.cz\":return 0;case \"www.mall.sk\":return 1;case \"www.mall.hu\":return 2;case \"www.mall.pl\":return 3;case \"www.mimovrste.com\":return 4}},n=function(){switch(h){case \"detail\":return 1;case \"checkout\":return 2;case \"purchase\":return 3;default:return 0}},p=function(){switch(h){case \"detail\":return\"Mall_product\";case \"checkout\":return\"Mall_cart\";case \"purchase\":return\"Mall_itemsale\";\ndefault:return\"Mall_visit\"}},q=function(){switch(",["escape",["macro",0],8,16],"){case \"www.mall.cz\":return 21;case \"www.mall.sk\":return 20;case \"www.mall.hu\":return 27;case \"www.mall.pl\":return 23;case \"www.mimovrste.com\":return 22}},l=function(){var a=[[1536201,382667],[1536526,383467],[1536525,383466],[1540401,391152],[1549095,404845]];return a[f()]},t=function(){var a={},c=[],d=[];switch(h){case \"detail\":return a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").detail.products[0],\"\\x26SKU\\x3d\"+\na.id+\"\\x26PRICE\\x3d\"+a.dimension51+\"\\x26CATEGORY\\x3d\"+a.category.split(\"\/\").pop()+\"\\x26CATID\\x3d\"+a.dimension49+\"\\x26BRAND\\x3d\"+a.brand;case \"checkout\":try{a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").checkout.products}catch(r){return!1}for(var b in a)a.hasOwnProperty(b)\u0026\u0026(c.push(a[b].id),d.push(a[b].quantity));c=c.join(\"%2C\");d=d.join(\"%2C\");return\"\\x26SKU\\x3d\"+c+\"\\x26PRQTY\\x3d\"+d;case \"purchase\":var g=1,e=\"\",f=\"\",k=0;try{a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").purchase,\nf=a.actionField.id,a=a.products}catch(r){return!1}for(b in a)a.hasOwnProperty(b)\u0026\u0026(eePrice=a[b].dimension51||(parseFloat(a[b].price)\/(100+q())*100).toFixed(2),e+=\"\\x26ITEM\"+g+\"\\x3d\"+a[b].id,e+=\"\\x26AMT\"+g+\"\\x3d\"+eePrice,e+=\"\\x26QTY\"+g+\"\\x3d\"+a[b].quantity,(eeCoupon=a[b].coupon||!1)\u0026\u0026(e+=\"\\x26COUPON\"+g+\"\\x3d\"+eeCoupon),c.push(a[b].id),d.push(a[b].quantity),k+=eePrice*a[b].quantity,g++);e+=\"\\x26CURRENCY\\x3d\"+",["escape",["macro",109],8,16],";e+=\"\\x26SKU\\x3d\"+c.join(\"%2C\");e+=\"\\x26PRQTY\\x3d\"+d.join(\"%2C\");",["escape",["macro",91],8,16],"\u0026\u0026\n(k-=parseFloat(",["escape",["macro",91],8,16],"));e+=\"\\x26OAMT\\x3d\"+k;return\"\\x26CID\\x3d\"+l()[0]+\"\\x26TYPE\\x3d\"+l()[1]+\"\\x26OID\\x3d\"+f+e+\"\\x26CJEVENT\\x3d\"+(",["escape",["macro",23],8,16],"(\"cjEvent\")||\"\");default:return\"\"}},u=function(){if(\"purchase\"==m){var a=t();if(\"string\"===typeof a){var c=document.createElement(\"iframe\");c.width=\"1\";c.height=\"1\";c.frameBorder=\"0\";c.scrolling=\"no\";c.style=\"display:none\";c.name=p();a:switch(h){case \"purchase\":var d=\"https:\/\/www.kdukvh.com\/tags\/c\";break a;default:d=\"https:\/\/www.awltovhc.com\/tags\/r\"}d+=\n\"?containerTagId\\x3d\";var b=[[12528,12526,12527,12413],[23013,23012,23014,12846],[23008,23007,23006,12845],[23010,23011,23009,17319],[0,0,0,26686]];b=b[f()][n()];c.src=d+b+a;document.body.appendChild(c)}}(a=",["escape",["macro",24],8,16],"(\"cjevent\"))\u0026\u0026",["escape",["macro",22],8,16],"(\"cjEvent\",a,2592E6)};u()}catch(a){console.warn(\"CJ error: \"+a)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":5
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,e,f,d,b){if(0==",["escape",["macro",110],8,16],")return!1;a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:",["escape",["macro",110],8,16],",hjsv:5};d=c.getElementsByTagName(\"head\")[0];b=c.createElement(\"script\");b.async=1;b.src=e+a._hjSettings.hjid+f+a._hjSettings.hjsv;d.appendChild(b)})(window,document,\"\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{\"mall.cz\"==",["escape",["macro",1],8,16],"\u0026\u0026\"checkout\"==",["escape",["macro",5],8,16],"\u0026\u0026($(document).on(\"click\",'[data-billing-method-id\\x3d\"CZW\"] [ng-value*\\x3d\"deferred_payment_continue\"]',function(){hj(\"trigger\",\"lymetPostponed\")}),$(document).on(\"click\",'[data-billing-method-id\\x3d\"CZG\"] [type\\x3d\"submit\"]',function(){hj(\"trigger\",\"lymetLoan\")}))}catch(a){}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{if(\"mall.cz\"==",["escape",["macro",1],8,16],"){var a=",["escape",["macro",5],8,16],";\"home\"==a\u0026\u0026\"feb2019hpc-ef\"==",["escape",["macro",111],8,16],"\u0026\u0026hj(\"trigger\",\"newHomepageTest\")}}catch(b){}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{\"www.mall.cz\"==",["escape",["macro",0],8,16],"\u0026\u0026\"\/kosik\/1\"==",["escape",["macro",112],8,16],"\u0026\u0026\"mar2019mergeNoRecap-mergeNoRecap\"==",["escape",["macro",111],8,16],"\u0026\u0026($(\"button[data-v-1c0c41af]\").eq(0).hasClass(\"mallTabEarActive\")\u0026\u0026hj(\"trigger\",\"registerScreen\"),$(\"button[data-v-1c0c41af]\").eq(1).hasClass(\"mallTabEarActive\")\u0026\u0026hj(\"trigger\",\"loginScreen\"))}catch(a){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EdataLayer.push({event:\"eventFire\",eventCategory:\"UX Fail\",eventAction:\"404 Not Found\",eventLabel:document.location.pathname+document.location.search+document.location.hash,eventNonInteractionFlag:1});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":20
    },{
      "function":"__html",
      "unlimited":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=function(d){var b=document.createElement(\"iframe\");b.width=\"1\";b.height=\"1\";b.frameBorder=\"0\";b.scrolling=\"no\";b.style=\"display:none\";b.src=\"\/\/creativecdn.com\/tags?id\\x3dpr_\"+",["escape",["macro",113],8,16],"+d;document.body.appendChild(b)},f=function(d){for(var b=[],a=0;a\u003Cd.length;a++)b.push(d[a].id);return b.toString()},k=function(){var a=0,b=window.dataLayer||[],c;for(c in b)try{b[c].ecommerce.impressions\u0026\u0026a++}catch(l){}return a},c=",["escape",["macro",5],8,16],",h=",["escape",["macro",114],8,16],",e=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\"),\ng=",["escape",["macro",18],8,16],";if(\"afterLoad\"==g)if(\"home\"==c)a(\"_home\");else if(\"detail\"==c)a(\"_offer_\"+e.detail.products[0].id);else if(\"cart\"==h)try{a(\"_basketstatus_\"+f(e.checkout.products))}catch(d){a(\"\")}else\"checkout\"==c\u0026\u0026\"login\"==h?a(\"_startorder\"):\"purchase\"!=c\u0026\u0026\"category\"!=c\u0026\u0026\"searchresults\"!=c\u0026\u0026a(\"\");else\"evImpress\"==g?1==k()\u0026\u0026(\"category\"==c?a(\"_category2_\"+e.impressions[0].dimension49):\"searchresults\"==c\u0026\u0026a(\"_listing_\"+f(e.impressions))):\"purchase\"==g\u0026\u0026(e=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\"),\na(\"_orderstatus2_\"+",["escape",["macro",3],8,16],"+\"_\"+",["escape",["macro",92],8,16],"+\"_\"+f(e.purchase.products)+\"\\x26amp;cd\\x3ddefault\"))}catch(d){console.warn(\"RTB House error: \"+d)}})();\u003C\/script\u003E      "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":21
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var t=",["escape",["macro",115],8,16],".split(\",\"),c=[],g=[],e=[],f=[],h=[],p=function(a,b){for(var c=0,k=0;k\u003Ca.length;k++)c+=parseFloat(a[k]*b[k]);return c},q=function(a){c=[];g=[];e=[];f=[];h=[];for(var b=0;b\u003Ca.length;b++)c.push(a[b].id),g.push(a[b].price||",["escape",["macro",6],8,16],"),e.push(a[b].name),f.push(a[b].category),h.push(a[b].quantity||1)},l=",["escape",["macro",2],8,16],",m=google_tag_manager[l].dataLayer.get(\"event\"),n=",["escape",["macro",5],8,16],";try{fbq||window.fbq}catch(a){!function(b,a,c,g,d,e,f){b.fbq||\n(d=b.fbq=function(){d.callMethod?d.callMethod.apply(d,arguments):d.queue.push(arguments)},b._fbq||(b._fbq=d),d.push=d,d.loaded=!0,d.version=\"2.0\",d.queue=[],e=a.createElement(c),e.async=!0,e.src=g,f=a.getElementsByTagName(c)[0],f.parentNode.insertBefore(e,f))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");for(var r=0;r\u003Ct.length;r++)fbq(\"init\",t[r].trim())}if(\"afterLoad\"==m){if(fbq(\"track\",\"PageView\"),\"detail\"==n){var v=google_tag_manager[l].dataLayer.get(\"ecommerce\").detail;\nq(v.products);fbq(\"track\",\"ViewContent\",{content_type:\"product\",content_ids:c,content_name:e,content_category:f,value:p(g,h),currency:\"",["escape",["macro",109],7],"\"})}}else if(\"addToCart\"==m){var u=google_tag_manager[l].dataLayer.get(\"ecommerce\").add;u\u0026\u0026\"detail\"==n\u0026\u0026(q(u.products),fbq(\"track\",\"AddToCart\",{content_type:\"product\",content_ids:c,content_name:e,content_category:f,value:p(g,h),currency:\"",["escape",["macro",109],7],"\"}))}else if(\"evImpress\"==m)\"category\"==n?fbq(\"trackCustom\",\"CategoryView\",{content_type:\"product\",\ncontent_category:\"",["escape",["macro",12],7],"\",content_ids:",["escape",["macro",16],8,16],"}):\"searchresults\"==n\u0026\u0026fbq(\"track\",\"Search\",{content_type:\"product\",search_string:",["escape",["macro",24],8,16],"(\"s\"),content_ids:",["escape",["macro",16],8,16],"});else if(\"purchase\"==m){var w=google_tag_manager[l].dataLayer.get(\"ecommerce\").purchase;q(w.products);fbq(\"track\",\"Purchase\",{content_type:\"product\",content_ids:c,content_name:e,content_category:f,value:p(g,h),currency:\"",["escape",["macro",109],7],"\"})}}catch(a){}})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",115],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":30
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var g=function(a,c,d,b){dataLayer.push({event:\"intPromoClick\",ecommerce:{promoClick:{promotions:[{id:a,name:c+\"-\"+",["escape",["macro",5],8,16],",creative:d,position:b}]}}})};if(\"\/\"==document.location.pathname)if(\"feb2019hpc-ef\"!=",["escape",["macro",111],8,16],"){var e=$(\"[data-name*\\x3dintPromo]\").not(\":first\"),f=$(\".bnr-leader--thumb-box-inner .bnr-leader--thumb-item\"),b=\"\",c=99;setInterval(function(){f.each(function(){if($(this).hasClass(\"is-active\")\u0026\u0026$(this).index()!=c){c=$(this).index();try{b=e.eq(c).attr(\"data-name\").split(\";\");\nvar a=\"ID\"+e.eq(c).css(\"background-image\").split('\"')[1].split(\"\/\").pop();dataLayer.push({event:\"intPromo\",ecommerce:{promoView:{promotions:[{id:a,name:b[1]+\"-\"+",["escape",["macro",5],8,16],",creative:b[2],position:c+1}]}}})}catch(m){}}})},1E3);e.on(\"click\",function(){b=$(this).attr(\"data-name\").split(\";\");g(\"ID\"+e.eq(c).css(\"background-image\").split('\"')[1].split(\"\/\").pop(),b[1],b[2],c+1)})}else $(\".bnr-leader-slider--image\").each(function(){var a=$(\".bnr-leader-slider--image\").index($(this));0\u003Ca\u0026\u0026$(this).attr(\"alt\",\n\"intPromo;Non-carousel new design (top center)-home;All banners\")}),$(\".campaign-slider[data-v-5a814564] .content-slider--box\").each(function(){$(this).attr(\"alt\",\"intPromo;Non-carousel new design - categories (top center)-home;All categories\")});try{window.setTimeout(function(){var a=[],c=1,d=\"\",b,e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,h=$(document).scrollTop()+e;$(\".flt-bnr:visible\").eq(0).attr(\"alt\",\"intPromo;Sticky fixed (bottom right);Currently unavailable\");\n\"\/\"==document.location.pathname\u0026\u0026$(\".container:visible, .foot-categories-box:visible\").each(function(){var a=$(this).parent(\"h2 .call-head\").eq(0).text().trim()||$(this).find(\"h2\").eq(0).text().trim();0\u003Ca.length\u0026\u0026$(this).attr(\"alt\",\"intPromo;Full width sliders and blocks (center);\"+a)});\"\/\"==document.location.pathname\u0026\u0026$(\"header .nav-tertiary:visible\").attr(\"alt\",\"intPromo;Top navigation (top center);All links\");var k=$(\".main-container .bnr-full img\").eq(0),f=k.attr(\"alt\");k.attr(\"alt\",\"intPromo;Wide and low (top center);\"+\nf);\"\/\"!=document.location.pathname\u0026\u0026$(\"[data-name*\\x3dintPromo]\").each(function(){$(this).attr(\"alt\",$(this).attr(\"data-name\"))});var l=function(){h=$(document).scrollTop()+e;$(\"*[alt*\\x3dintPromo]:visible:not([intPromoSent])\").each(function(){if(h\u003E$(this).offset().top+$(this).height()\/2){$(this).attr(\"intpromosent\",c);try{d=$(this).attr(\"alt\").split(\";\"),a.push({id:\"ID\"+d[1].replace(\/ \/g,\"\").replace(\/\\(\/g,\"\").replace(\/\\)\/g,\"\"),name:d[1]+\"-\"+",["escape",["macro",5],8,16],",creative:d[2],position:c}),c++}catch(n){}}});\n0\u003Ca.length\u0026\u0026(dataLayer.push({event:\"intPromo\",ecommerce:{promoView:{promotions:a}}}),a=[])};l();$(window).scroll(function(){b\u0026\u0026(clearTimeout(b),b=null);b=setTimeout(l,25)});$(\"*[alt*\\x3dintPromo]\").mousedown(function(){d=$(this).attr(\"alt\").split(\";\");g(\"ID\"+d[1].replace(\/ \/g,\"\").replace(\/\\(\/g,\"\").replace(\/\\)\/g,\"\"),d[1],d[2],parseInt($(this).attr(\"intpromosent\")))})},500)}catch(a){console.warn(\"Internal promotion bulk err: \"+a)}}catch(a){console.warn(\"Internal promotion general err: \"+a)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":31
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var c=function(){var a=\"unknown\";$(\".nav-step\").find(\"li\").each(function(){$(this).hasClass(\"nav-step-item--active\")\u0026\u0026(a=\"(\"+($(this).index()+1).toString()+\")\"+$(\".nav-step-item--active\").text().trim())});return a},b=function(a,b){dataLayer.push({event:\"eventFire\",eventCategory:\"Form errors in checkout process\",eventAction:c()+\" - \"+a,eventLabel:b,eventValue:1,eventNonInteractionFlag:!0,eventCallback:function(){dataLayer.push({eventCategory:void 0,eventAction:void 0,eventLabel:void 0,\neventValue:void 0,eventNonInteractionFlag:!1})}})};$(\"#flashmessages\").find(\".msg--danger\").each(function(){b(\"error box\",$(this).text().trim())});if(\"checkout\"==",["escape",["macro",5],8,16],"\u0026\u0026\"login\"==",["escape",["macro",114],8,16],")$(\".cart-step-1\").find(\"button\").on(\"click\",function(){$(\".cart-step-1\").find(\"input.ng-invalid.ng-not-empty\").each(function(){b($(this).attr(\"id\"),\"unknown\")})});if(\"checkout\"==",["escape",["macro",5],8,16],"\u0026\u0026\"address\"==",["escape",["macro",114],8,16],"\u0026\u0026($(\".cart-step-2\").find(\"button\").on(\"click\",function(){$(\".cart-step-2\").find('input[required\\x3d\"required\"],input[nrh-required\\x3d\"required\"]').each(function(){var a=\n!0;-1==$(this).attr(\"id\").search(\"shipping\")\u0026\u0026(a=$('input[name\\x3d\"shippingAddress\"]').prop(\"checked\")?!0:!1);if(a)if(0==$(this).val().length)b($(this).attr(\"id\"),\"unknown\");else if(\"email\"==$(this).attr(\"type\")){a=$(this).val();var c=\/^(([^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+(\\.[^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$\/;(a=c.test(a))||b($(this).attr(\"id\"),\"unknown\")}})}),0==$(\"#flashmessages\").find(\".msg--danger\").length)){var d=\"\",\ne=0;$(\".cart-step-2\").find(\"input\").keypress(function(){var a=$(this).attr(\"id\");-1==d.search(a)\u0026\u0026(e++,dataLayer.push({event:\"eventFire\",eventCategory:\"Form fields sequence in checkout process\",eventAction:c()+\" - \"+a,eventLabel:e,eventValue:1,eventNonInteractionFlag:!0,eventCallback:function(){dataLayer.push({eventCategory:void 0,eventAction:void 0,eventLabel:void 0,eventValue:void 0,eventNonInteractionFlag:!1})}}),d+=a)})}}catch(a){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function n(a){var b=document.createElement(\"iframe\");b.src=a;b.frameborder=\"0\";b.width=\"0px\";b.height=\"0px\";b.style=\"display: none;\";b.scrolling=\"no\";document.body.appendChild(b)}var k=function(){var a={EA:\"ba0a0501-b43ce598-c38ce25a1549\",EB:\"af340936-3d6b6a90-a7b92468dea8\",EC:\"701dee46-e104d230-5c276fc9bb06\",ED:\"40764c23-a24b45ef-720b7d88bfc5\",EE:\"d11b6136-687a156f-4cddfafc5b11\",EF:\"82102dba-9b426adf-86b25144d16e\",EG:\"ccefdf40-d3c9e8d9-344def39187b\",NA:\"7876ca9c-ade6d911-5ff0927735aa\",\nNB:\"9eeb3512-5e1c2ad1-038e72d80867\",ND:\"d2e75bd5-0033f487-cbc5e5c38969\",NE:\"66b57cef-925828f3-8adc2e5be608\",NJ:\"ac0ecfc2-b441d7a4-5f8834492287\",NK:\"3650951e-2a574274-df0b7ba20a95\",NF:\"60fbbacc-fe1d2e44-69b43a90024c\",NL:\"9ac970ae-a7d5a792-2d56d0e4389d\",NM:\"3f94f13d-0f8d41a5-d14c877a322b\",MP:\"a62cee40-a159e51c-33e4f57dd512\"};this.get=function(b){return\"undefined\"!=typeof a[b]?a[b]:\"f8811e9b-a7b7eede-e6e0cb9fa585\"}};k=new k;var c=",["escape",["macro",2],8,16],";c=google_tag_manager[c].dataLayer;var a=c.get(\"ecommerce\");\nc.get(\"event\");c=\"\/\/converti.se\/conversion\/?\";var d=a.purchase.actionField,e=a.purchase.products,p=e.length;a={};for(var f=0;f\u003Cp;f++){var g=e[f].dimension47||\"XX\",m=e[f].quantity||1,h=e[f].price||1;h=parseFloat(h);a[g]?a[g].price+=h*m:a[g]={price:h*m,id:d.id,cat:g}}d=\"tracking_id\\x3d\"+d.id;for(var l in a)a.hasOwnProperty(l)\u0026\u0026(e=k.get(a[l].cat),d=d+\"\\x26goal\\x3d\"+e+\":\"+a[l].price);n(c+d)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cs_sendGeneralEvent=function(a,d,b,e,c){dataLayer.push({event:\"eventFire\",eventCategory:a,eventAction:d,eventLabel:b,eventValue:e,eventNonInteractionFlag:c,eventCallback:function(){dataLayer.push({eventCategory:void 0,eventAction:void 0,eventLabel:void 0,eventValue:void 0})}})};\n(function(){try{if(\"gtm.load\"==",["escape",["macro",18],8,16],"){var a=function(b,a,c){b=b.trim();a=a.trim();c=c.trim();-1\u003Cc.indexOf(d)\u0026\u0026(c=c.split(\" \\x3e \"),c=c[1]+\" \\x3e -\");dataLayer.push({event:\"eventFire\",eventCategory:b,eventAction:a,eventLabel:c,eventValue:1,eventNonInteractionFlag:!1,eventCallback:function(){dataLayer.push({eventCategory:void 0,eventAction:void 0,eventLabel:void 0,eventValue:void 0})}})};if(\"mall.cz\"!=",["escape",["macro",1],8,16],"){var d=$(\".head-category-menu\").find(\".caret--down--after\").eq(0).text().trim();\n$(window).width();$(\".nav-secondary-categories-layer-item\").find(\"a\").on(\"click\",function(b){a(\"Navigation\",$(b.target).closest(\".nav-secondary-has-layer\").find(\".nav-url-content\").text(),$(this).closest(\"ul\").prev().text().trim()+\" \\x3e \"+$(this).text().trim())});$(\".nav-secondary-categories .link--secondary\").last().on(\"click\",function(b){a(\"Navigation\",$(this).text().trim(),\"-\")});$(\".nav-secondary-categories-layer-image\").on(\"click\",function(b){a(\"Navigation\",$(b.target).closest(\".nav-secondary-has-layer\").find(\".nav-url-content\").text().trim(),\n\"image\")});$(\".nav-secondary-categories .link--secondary:not(.nav-url-content)\").on(\"click\",function(){$(this).parent(\"strong\").length\u0026\u0026a(\"Navigation\",\"Text-promo\",$(this).text().trim())})}else if(\"aug2018menuredesign-menuredesign\"==",["escape",["macro",111],8,16],"||\"masterControl-masterControl\"==",["escape",["macro",111],8,16],")$(document).on(\"click\",\".nav-secondary-categories.nav-secondary--indent-vertical.nav-secondary--secondary a\",function(){a(\"Navigation\",\"Ab test - redesign\",\"-\")})}}catch(b){}})();\n(function(){try{if(\"mall.cz\"==",["escape",["macro",1],8,16],"\u0026\u0026\"gtm.load\"==",["escape",["macro",18],8,16],"){var a=\"lednice;televize;pleny;plenky;notebook;notebooky;notebok;digestor;digesto\\u0159;odsavac par;odsava\\u010d par;odsavac;odsava\\u010d\".split(\";\"),d=function(){var b=$(\".form-sitesearch-scope input\").val().trim().toLowerCase();-1!==jQuery.inArray(b,a)\u0026\u0026dataLayer.push({event:\"eventFire\",eventCategory:\"Site search redirect\",eventAction:b,eventLabel:\"-\",eventValue:1,eventNonInteractionFlag:!1,eventCallback:function(){dataLayer.push({eventCategory:void 0,\neventAction:void 0,eventLabel:void 0,eventValue:void 0})}})};$(\".form-sitesearch-scope button\").on(\"mousedown\",function(){d()});$(\".form-sitesearch-scope input\").on(\"keyup\",function(a){13==a.keyCode\u0026\u0026d()})}}catch(b){}})();\n(function(){try{if(\"mall.cz\"==",["escape",["macro",1],8,16],"\u0026\u0026\"gtm.load\"==",["escape",["macro",18],8,16],"\u0026\u0026(\"detail\"==",["escape",["macro",5],8,16],"\u0026\u0026($(\"article .pro-column\").eq(1).find(\".btn--element\").on(\"click\",function(){cs_sendGeneralEvent(\"Product\",\"Buttons\",$(this).text(),1,!1)}),$(\".product-detail-buttons .btn-inset\").on(\"click\",function(){cs_sendGeneralEvent(\"Product\",\"Buttons\",$(this).text(),1,!1)}),$(\"watchdog-im-interested-in\").on(\"click\",function(){cs_sendGeneralEvent(\"Product\",\"Buttons\",\"Zah\\u00e1jit hl\\u00edd\\u00e1n\\u00ed\",\n1,!1)})),\"category\"==",["escape",["macro",5],8,16],"))$(document).on(\"mousedown\",\".is-compare--active\",function(){$(this).find(\"input\").is(\":checked\")?cs_sendGeneralEvent(\"Product\",\"Buttons\",\"M\\u00e1te v porovn\\u00e1va\\u010di\",1,!1):cs_sendGeneralEvent(\"Product\",\"Buttons\",\"Porovnat\",1,!1)})}catch(a){}})();\n(function(){try{\"mall.cz\"==",["escape",["macro",1],8,16],"\u0026\u0026\"gtm.load\"==",["escape",["macro",18],8,16],"\u0026\u0026\"cart\"==",["escape",["macro",114],8,16],"\u0026\u0026($(\".grid-omega.cart-detail-item--column.con-right\").find('a[href*\\x3d\"wishlist\"]').on(\"click\",function(){cs_sendGeneralEvent(\"Checkout\",\"Add to wishlist\",\"-\",1,!1)}),$(\".btn-group.btn-group--cart\").find(\".shr-item.shr-item--icon.icon--mail--circled\").on(\"click\",function(){cs_sendGeneralEvent(\"Checkout\",\"Send cart content to friend\",\"Open\",1,!1)}),$('div[show\\x3d\"cartShare\"]').find('button[type\\x3d\"submit\"]').on(\"click\",\nfunction(){5\u003C$(\"#cart-share-email\").val().length\u0026\u00262\u003C$(\"#recovery-captcha\").val().length\u0026\u0026cs_sendGeneralEvent(\"Checkout\",\"Send cart content to friend\",\"Sent\",1,!1)}))}catch(a){}})();(function(){try{if((\"mall.cz\"==",["escape",["macro",1],8,16],"||\"mall.sk\"==",["escape",["macro",1],8,16],")\u0026\u0026\"gtm.load\"==",["escape",["macro",18],8,16],"\u0026\u0026\"\/mallkarta\"==",["escape",["macro",119],8,16],")$('.main-wrapper button[type\\x3d\"submit\"]').on(\"click\",function(){cs_sendGeneralEvent(\"Mall Card\",\"Request Mall Card\",\"-\",1,!1)})}catch(a){}})();\n(function(){try{\"mall.cz\"==",["escape",["macro",1],8,16],"\u0026\u0026\"gtm.load\"==",["escape",["macro",18],8,16],"\u0026\u0026($(document).on(\"click\",'.nav-customer [data-sel\\x3d\"orderTracking\"]',function(){cs_sendGeneralEvent(\"Delivery tracking\",\"Click\",\"Header\",1,!1)}),$(document).on(\"click\",'.foot-links [href*\\x3d\"sledovani-objednavky\"]',function(){cs_sendGeneralEvent(\"Delivery tracking\",\"Click\",\"Footer\",1,!1)}),$(document).on(\"click\",'.client-menu [href*\\x3d\"sledovani-objednavky\"]',function(){cs_sendGeneralEvent(\"Delivery tracking\",\n\"Click\",\"Client center navigation\",1,!1)}),$(document).on(\"click\",'.lst-order-detail-delivery [href*\\x3d\"sledovani-objednavky\"]',function(){cs_sendGeneralEvent(\"Delivery tracking\",\"Click\",\"My order link\",1,!1)}))}catch(a){}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var b=function(c,b){var a=new Date,d=document.location.hostname.replace(\"www.\",\"\");a.setHours(a.getHours()+b);document.cookie=c+\"\\x3dtrue; path\\x3d\/; Domain\\x3d\"+d+\"; expires\\x3d\"+a.toGMTString()},a=function(a){if(0\u003Cdocument.cookie.length\u0026\u0026(c_start=document.cookie.indexOf(a+\"\\x3d\"),-1!=c_start))return c_start=c_start+a.length+1,c_end=document.cookie.indexOf(\";\",c_start),-1==c_end\u0026\u0026(c_end=document.cookie.length),unescape(document.cookie.substring(c_start,c_end))};if(\"mall.cz\"==",["escape",["macro",1],8,16],"\u0026\u0026\n\"gtm.load\"==",["escape",["macro",18],8,16],"){-1\u003Cdocument.location.pathname.indexOf(\"user\/register\")\u0026\u0026($('form[name\\x3d\"registration_form\"]').find('button[type\\x3d\"submit\"]').click(function(){$('label:contains(\"K\\u00e1vov\\u00fd\") input').is(\":checked\")\u0026\u0026b(\"cofReg\",1)}),a(\"cofReg\")\u0026\u00260\u003C$(\"#flashmessages\").find(\".msg--success\").length\u0026\u0026(dataLayer.push({event:\"eventFire\",eventCategory:\"Coffee club\",eventAction:\"Registration\",eventLabel:\"-\",eventValue:1,eventNonInteractionFlag:!1,eventCallback:function(){dataLayer.push({eventCategory:void 0,\neventAction:void 0,eventLabel:void 0,eventValue:void 0})}}),b(\"cofReg\",-1)));-1\u003Cdocument.location.pathname.indexOf(\"login\")\u0026\u0026$(\"form\").find('button[type\\x3d\"submit\"].login-btn').click(function(){$('label:contains(\"K\\u00e1vov\\u00fd\") input').is(\":checked\")\u0026\u0026b(\"cofLog\",1)});if(a(\"cofLog\")\u0026\u0026\"\/espressa-kavovary\"==document.location.pathname||a(\"cofLog\")\u0026\u0026\"\/klient\/muj-ucet\"==document.location.pathname)dataLayer.push({event:\"eventFire\",eventCategory:\"Coffee club\",eventAction:\"Login\",eventLabel:\"-\",eventValue:1,\neventNonInteractionFlag:!1,eventCallback:function(){dataLayer.push({eventCategory:void 0,eventAction:void 0,eventLabel:void 0,eventValue:void 0})}}),b(\"cofLog\",-1);\"\/klient\/muj-ucet\"==document.location.pathname\u0026\u0026$('button[data-sel\\x3d\"loyalty-program-save\"]').click(function(){$('input[name\\x3d\"programs[1]\"]').is(\":checked\")?dataLayer.push({event:\"eventFire\",eventCategory:\"Coffee club\",eventAction:\"Login\",eventLabel:\"-\",eventValue:1,eventNonInteractionFlag:!1,eventCallback:function(){dataLayer.push({eventCategory:void 0,\neventAction:void 0,eventLabel:void 0,eventValue:void 0})}}):dataLayer.push({event:\"eventFire\",eventCategory:\"Coffee club\",eventAction:\"Logout\",eventLabel:\"-\",eventValue:1,eventNonInteractionFlag:!1,eventCallback:function(){dataLayer.push({eventCategory:void 0,eventAction:void 0,eventLabel:void 0,eventValue:void 0})}})})}}catch(c){console.warn(\"Kafe club tracking err: \"+c)}})();\u003C\/script\u003E  \n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{if(\"mall.cz\"==",["escape",["macro",1],8,16],"\u0026\u0026\"gtm.load\"==",["escape",["macro",18],8,16],"){String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1)};var c=function(b){var a=b.closest(\"*[mall-drawer]\").find(\"h4\").text().trim().capitalize();a||(a=b.closest(\"[class^\\x3dfacetbar]\").find(\"h4\").text().trim().capitalize());return a},a=!0;$('[class^\\x3dfacetbar] input[type\\x3d\"checkbox\"], [class^\\x3dfacetbar] a[href], div[mall-input-slider]').click(function(){a\u0026\u0026(dataLayer.push({event:\"eventFire\",\neventCategory:\"Category\",eventAction:\"Filters\",eventLabel:c($(this)),eventValue:1,eventNonInteractionFlag:!1,eventCallback:function(){dataLayer.push({eventCategory:void 0,eventAction:void 0,eventLabel:void 0,eventValue:void 0})}}),a=!1,setTimeout(function(){a=!0},1E3))})}}catch(b){console.warn(\"Filter err: \"+b)}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var b=",["escape",["macro",5],8,16],";\"mall.cz\"==",["escape",["macro",1],8,16],"\u0026\u0026\"gtm.load\"==",["escape",["macro",18],8,16],"\u0026\u0026(\"detail\"==b\u0026\u0026($(\".main-wrapper .pro-column .postpay-link\").on(\"click\",function(){cs_sendGeneralEvent(\"Modal pop-up\",\"Lymet\",\"Postponed view\",1,!1)}),$('[data-name\\x3d\"postpayModal\"] button[type\\x3d\"submit\"].btn--large').on(\"click\",function(){cs_sendGeneralEvent(\"Modal pop-up\",\"Lymet\",\"Postponed click\",1,!1)}),$('a[ng-click*\\x3d\"revolvingPaymentModal\"]').on(\"click\",function(){cs_sendGeneralEvent(\"Modal pop-up\",\n\"Lymet\",\"Loan view\",1,!1)}),$(document).on(\"click\",'[data-name\\x3d\"revolvingPaymentModal\"] .revpay-offers .revpay-item',function(a){$(a.target).hasClass(\"btn-inset\")\u0026\u0026cs_sendGeneralEvent(\"Modal pop-up\",\"Lymet\",\"Loan click - \"+($(this).index()+1),1,!1)})),\"checkout\"==b\u0026\u0026(setTimeout(function(){$('[data-billing-method-id\\x3d\"CZW\"]').length\u0026\u0026($('[data-billing-method-id\\x3d\"CZW\"]').find('[disabled\\x3d\"disabled\"]').length?cs_sendGeneralEvent(\"Modal pop-up\",\"Lymet\",\"Postponed disabled\",1,!1):cs_sendGeneralEvent(\"Modal pop-up\",\n\"Lymet\",\"Postponed available\",1,!1));$('[data-billing-method-id\\x3d\"CZG\"]').length\u0026\u0026($('[data-billing-method-id\\x3d\"CZG\"]').find('[disabled\\x3d\"disabled\"]').length?cs_sendGeneralEvent(\"Modal pop-up\",\"Lymet\",\"Loan disabled\",1,!1):cs_sendGeneralEvent(\"Modal pop-up\",\"Lymet\",\"Loan available\",1,!1))},2E3),$(document).on(\"click\",'[data-billing-method-id\\x3d\"CZW\"] [ng-value*\\x3d\"deferred_payment_continue\"]',function(){cs_sendGeneralEvent(\"Modal pop-up\",\"Lymet\",\"Postponed view\",1,!1)}),$(document).on(\"click\",\n'[data-billing-method-id\\x3d\"CZG\"] [type\\x3d\"submit\"]',function(){cs_sendGeneralEvent(\"Modal pop-up\",\"Lymet\",\"Loan view\",1,!1)}),$(document).on(\"click\",'[data-billing-method-id\\x3d\"CZW\"] [ng-value*\\x3d\"deferred_payment_sms\"]',function(){cs_sendGeneralEvent(\"Modal pop-up\",\"Lymet\",\"Postponed click - sent me sms\",1,!1)}),$(document).on(\"click\",'[data-billing-method-id\\x3d\"CZW\"] [name\\x3d\"verifySmsCode\"]',function(){cs_sendGeneralEvent(\"Modal pop-up\",\"Lymet\",\"Postponed click - code from sms entered\",\n1,!1)}),$(document).on(\"click\",'[data-name\\x3d\"revolvingCalc\"] .revpay-offers .revpay-item',function(a){$(a.target).hasClass(\"btn-inset\")\u0026\u0026cs_sendGeneralEvent(\"Modal pop-up\",\"Lymet\",\"Loan click - \"+($(this).index()+1),1,!1)})))}catch(a){}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{if(\"virtualPageview\"==",["escape",["macro",18],8,16],"){var h=",["escape",["macro",5],8,16],",k=",["escape",["macro",120],8,16],";if(\"checkout\"==h\u0026\u00264==k){var b=1,g=$(\"h4.con-h1\").length;1\u003Cg\u0026\u0026(b=g);var e,f;$(document).on(\"mousedown\",\"div.cart-payment-methods\",function(a){e=this.getElementsByClassName(\"cart-billing-method acc-item-head\");for(var d=0;d\u003Ce.length;d++){var c;a:{for(c=a.target.parentNode;null!=c;){if(c==e[d]){c=!0;break a}c=c.parentNode}c=!1}c\u0026\u0026(f=e[d].getElementsByClassName(\"con-h3\")[0].textContent.trim(),\ncs_sendGeneralEvent(\"Checkout\",\"3rd-\"+b+\"-Delivery-\"+f,\"Open\",1,!1))}});$(document).on(\"mousedown\",'.address-delivery-modal [type\\x3d\"button\"].btn--primary, section[name\\x3d\"pupDeliveryModal\"] [type\\x3d\"button\"].btn--primary',function(){cs_sendGeneralEvent(\"Checkout\",\"3rd-\"+b+\"-Delivery-\"+f,\"Click\",1,!1)});$(document).on(\"mousedown\",\"section.cart-payment-methods .acc-item\",function(a){if(a.target.classList.contains(\"cart-payment-methods-item-change-label\")||a.target.classList.contains(\"form-radio\")\u0026\u0026\n!a.target.classList.contains(\"form-radio-input\"))try{cs_sendGeneralEvent(\"Checkout\",\"3rd-\"+b+\"-Payment-Options\",\"Bank: \"+a.target.getElementsByClassName(\"cart-payment-methods-item-change-title\")[0].textContent.trim(),1,!1)}catch(d){cs_sendGeneralEvent(\"Checkout\",\"3rd-\"+b+\"-Payment-Options\",\"Bank: \"+a.target.parentNode.getElementsByClassName(\"cart-payment-methods-item-change-title\")[0].textContent.trim(),1,!1)}else cs_sendGeneralEvent(\"Checkout\",\"3rd-\"+b+\"-Payment-\"+this.getElementsByClassName(\"con-h3\")[0].textContent.trim(),\n\"Click\",1,!1)});$(document).on(\"click\",\"card-select input\",function(a){$(this).prop(\"checked\")?cs_sendGeneralEvent(\"Checkout\",\"3rd-\"+b+\"-Payment-Options\",\"Card remember: true\",1,!1):cs_sendGeneralEvent(\"Checkout\",\"3rd-\"+b+\"-Payment-Options\",\"Card remember: false\",1,!1)});$(document).on(\"click\",\"#payment-coupon\",function(a){cs_sendGeneralEvent(\"Checkout\",\"3rd-\"+b+\"-Payment-Options\",\"Promo code: input click\",1,!1)});$(document).on(\"click\",\".cart-step-3-recapitulation--cell .form-group-addon\",function(a){$(\"#payment-coupon\").val().length\u0026\u0026\ncs_sendGeneralEvent(\"Checkout\",\"3rd-\"+b+\"-Payment-Options\",\"Promo code: send button\",1,!1)})}}}catch(a){}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{\"www.mall.cz\"==",["escape",["macro",0],8,16],"\u0026\u0026\"gtm.load\"==",["escape",["macro",18],8,16],"\u0026\u0026($(document).on(\"click\",'modal[data-name\\x3d\"CROSS_SELL_MODAL\"] .close-btn',function(a){cs_sendGeneralEvent(\"AB testing\",\"X-sell popop\",\"Close button\",1,!1)}),$(document).on(\"click\",'modal[data-name\\x3d\"CROSS_SELL_MODAL\"] .btn-group--modal-footer button',function(a){0==$(this).index()?cs_sendGeneralEvent(\"AB testing\",\"X-sell popop\",\"Back to store\",1,!1):cs_sendGeneralEvent(\"AB testing\",\"X-sell popop\",\"Go to basket\",\n1,!1)}),$(document).on(\"click\",'modal[data-name\\x3d\"CROSS_SELL_MODAL\"] .con-pointer',function(a){cs_sendGeneralEvent(\"AB testing\",\"X-sell popop\",\"More info link\",1,!1)}))}catch(a){}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{\"www.mall.cz\"==",["escape",["macro",0],8,16],"\u0026\u0026\"gtm.load\"==",["escape",["macro",18],8,16],"\u0026\u0026($(document).on(\"click\",\".mg-partners a\",function(a){cs_sendGeneralEvent(\"MG partner bar\",\"Click\",$(this).attr(\"href\"),1,!1)}),$(document).on(\"click\",\".foot-interests a\",function(a){cs_sendGeneralEvent(\"Footer interests bar\",\"Click\",$(this).attr(\"href\"),1,!1)}),$(document).on(\"click\",\".acc--primary.acc--indent-small.foot-links a\",function(a){cs_sendGeneralEvent(\"Footer links\",\"Click\",$(this).text(),1,!1)}))}catch(a){}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{if(\"www.mall.cz\"==",["escape",["macro",0],8,16],"\u0026\u0026\"\/kosik\/2\"==document.location.pathname){$(document).on(\"click\",'a[data-sel\\x3d\"load-delivery-addresses\"]',function(a){cs_sendGeneralEvent(\"AB testing\",\"2nd step\",\"Load delivery addresses\",1,!1)});$(document).on(\"click\",'a[data-sel\\x3d\"load-billing-addresses\"]',function(a){cs_sendGeneralEvent(\"AB testing\",\"2nd step\",\"Load billing addresses\",1,!1)});$(document).on(\"click\",'a[data-sel\\x3d\"add-new-delivery-address\"]',function(a){cs_sendGeneralEvent(\"AB testing\",\n\"2nd step\",\"Add delivery address\",1,!1)});$(document).on(\"click\",'a[data-sel\\x3d\"add-new-billing-address\"]',function(a){cs_sendGeneralEvent(\"AB testing\",\"2nd step\",\"Add billing address\",1,!1)});var b=!0;$(document).on(\"keypress\",\"#payment-note\",function(a){b\u0026\u0026(cs_sendGeneralEvent(\"AB testing\",\"2nd step\",\"Add payment note\",1,!1),b=!1)})}}catch(a){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{window.setTimeout(function(){dataLayer.push({event:\"afterLoad\"})},1500)}catch(a){}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").purchase\u0026\u0026dataLayer.push({event:\"notTestPur\"})}catch(a){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(\"purchase\"==",["escape",["macro",18],8,16],")try{var b=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").purchase;if(b){var a=document.createElement(\"iframe\");a.setAttribute(\"width\",\"1\");a.setAttribute(\"height\",\"1\");a.setAttribute(\"frameborder\",\"0\");a.setAttribute(\"scrolling\",\"no\");a.style.display=\"none\";a.src=\"\/\/c.imedia.cz\/checkConversion?c\\x3d99992084\\x26color\\x3dffffff\\x26v\\x3d\"+parseInt(b.actionField.revenue);document.body.appendChild(a)}}catch(c){}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Eif(",["escape",["macro",32],8,16],"\u0026\u0026\"purchase\"!=",["escape",["macro",18],8,16],"\u0026\u0026(\"19012017-2-rmk_on\"==",["escape",["macro",25],8,16],"||\"rmkExternalTrigger\"==",["escape",["macro",18],8,16],"\u0026\u0026\"19012017-rmk_external\"==",["escape",["macro",25],8,16],"))try{var seznam_retargeting_id=10014;if(\"detail\"==",["escape",["macro",5],8,16],")var seznam_itemId=",["escape",["macro",121],8,16],",seznam_pagetype=\"offerdetail\";else seznam_pagetype=",["escape",["macro",5],8,16],";var seznam_category=",["escape",["macro",12],8,16],".replace(\/\\\/\/g,\" | \").slice(0,-3);(function(){var a=\"\",c=\"\",d=\"\",b=\"\";window.seznam_retargeting_id\u0026\u0026\n(a=window.seznam_retargeting_id);window.seznam_retargetingId\u0026\u0026(a=window.seznam_retargetingId);window.seznam_category\u0026\u0026(c=window.seznam_category);window.seznam_itemId\u0026\u0026(d=window.seznam_itemId);window.seznam_pagetype\u0026\u0026(b=window.seznam_pagetype);a\u0026\u0026(a=\"\/\/c.imedia.cz\/retargeting?id\\x3d\"+a+\"\\x26category\\x3d\"+encodeURIComponent(c)+\"\\x26itemId\\x3d\"+encodeURIComponent(d)+\"\\x26url\\x3d\"+encodeURIComponent(",["escape",["macro",43],8,16],"),b\u0026\u0026(a+=\"\\x26pageType\\x3d\"+encodeURIComponent(b)),document.createElement(\"img\").src=\na)})()}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/static.criteo.net\/js\/ld\/ld.js\" async=\"true\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{var existsTracking=function(key,value){var query=window.location.search.substring(1);var vars=query.split(\"\\x26\");var hasCookie=false;for(var i=0;i\u003Cvars.length;i++){var pair=vars[i].split(\"\\x3d\");if(pair[0]==key)if(pair[1]==value){hasCookie=true;break}}return hasCookie};var existsCookie=function(key){var query=window.location.search.substring(1);var vars=query.split(\"\\x26\");var exist=false;for(var i=0,len=vars.length;i\u003Clen;i++){var pair=vars[i].split(\"\\x3d\");if(pair[0]==key){exist=true;break}}return exist};\nvar criteoAttributon=function(){var trackingKey=\"utm_source\";var cookie=\"crtg_dd\";var ms=2592E6;if(existsTracking(trackingKey,\"criteo-remarketing\")||existsTracking(trackingKey,\"criteo\"))",["escape",["macro",22],8,16],"(cookie,\"1\",ms);if(existsCookie(trackingKey)\u0026\u0026!existsTracking(trackingKey,\"criteo\")\u0026\u0026!existsTracking(trackingKey,\"criteo-remarketing\")||document.location.search.indexOf(\"gclid\")\u003E-1)",["escape",["macro",22],8,16],"(cookie,\"0\",ms)};if(document.referrer.indexOf(document.location.hostname)==-1)criteoAttributon();\nvar getItems=function(pt){var eeProducts;try{eeProducts=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\")[pt].products}catch(eeProductsErrs){}var ids=[];switch(pt){case \"detail\":return eeProducts[0].id.toString();break;case \"category\":eeProducts=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").impressions;for(var i=0;i\u003CeeProducts.length;i++)if(i\u003C3)ids.push(eeProducts[i].id);return ids;break;case \"checkout\":for(var i=0;i\u003CeeProducts.length;i++)ids.push({id:eeProducts[i].id,\nprice:eeProducts[i].price,quantity:eeProducts[i].quantity||1});return ids;break;case \"purchase\":for(var i=0;i\u003CeeProducts.length;i++)ids.push({id:eeProducts[i].id,price:eeProducts[i].price,quantity:eeProducts[i].quantity||1});return ids;break;default:return\"\"}};var cpt=",["escape",["macro",5],8,16],";window.criteo_q=window.criteo_q||[];var criteo_buffer=[];var criteo_load=function(){criteo_buffer.push({event:\"setAccount\",account:",["escape",["macro",122],8,16],"},{event:\"setSiteType\",type:\"",["escape",["macro",123],7],"\"});if(false)criteo_buffer.push({event:\"setHashedEmail\",\nemail:\"",["escape",["macro",124],7],"\"});else criteo_buffer.push({event:\"setHashedEmail\",email:\"\"})};if((new RegExp(\"home|category|detail|checkout\")).test(cpt)){criteo_load();switch(cpt){case \"detail\":if(",["escape",["macro",1],8,16],"==\"mall.cz\"\u0026\u0026",["escape",["macro",118],8,16],".indexOf(\"https:\/\/www.mall.cz\/\")==-1)criteo_buffer.push({event:\"viewItem\",item:getItems(cpt),time:Date.now().toString().substring(0,10)});else criteo_buffer.push({event:\"viewItem\",item:getItems(cpt)});break;case \"category\":if(",["escape",["macro",1],8,16],"==\"mall.cz\"\u0026\u0026\n",["escape",["macro",118],8,16],".indexOf(\"https:\/\/www.mall.cz\/\")==-1)criteo_buffer.push({event:\"viewList\",item:getItems(cpt),time:Date.now().toString().substring(0,10)});else criteo_buffer.push({event:\"viewList\",item:getItems(cpt)});break;case \"home\":if(",["escape",["macro",1],8,16],"==\"mall.cz\"\u0026\u0026",["escape",["macro",118],8,16],".indexOf(\"https:\/\/www.mall.cz\/\")==-1)criteo_buffer.push({event:\"viewHome\",time:Date.now().toString().substring(0,10)});else criteo_buffer.push({event:\"viewHome\"});break;case \"checkout\":criteo_buffer.push({event:\"viewBasket\",\nitem:getItems(cpt)});break;case \"purchase\":break}window.setTimeout(function(){window.criteo_q.push(criteo_buffer)},500)}if(",["escape",["macro",75],8,16],"==\"purchase\"){criteo_load();criteo_buffer.push({event:\"trackTransaction\",id:\"",["escape",["macro",92],7],"\",new_customer:\"",["escape",["macro",125],7],"\",deduplication:",["escape",["macro",126],8,16],"||0,item:getItems(cpt)});window.setTimeout(function(){window.criteo_q.push(criteo_buffer)},500)}}catch(CriteorErr){console.log(\"Criteo errs: \"+CriteorErr)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=",["escape",["macro",5],8,16],",c=function(b,a){for(var e=[],c=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\")[b].products,d=0;d\u003Cc.length;d++)e.push({productid:c[d].id,step:a});return e};\"purchase\"!=",["escape",["macro",75],8,16],"?\"home\"==a?window._adftrack={pm:",["escape",["macro",127],8,16],",divider:encodeURIComponent(\"|\"),pagename:encodeURIComponent(\"Homepage\")}:\"category\"==a?window._adftrack={pm:",["escape",["macro",127],8,16],",divider:encodeURIComponent(\"|\"),pagename:encodeURIComponent(\"Category\"),\norder:{itms:[{categoryname:\"",["escape",["macro",12],7],"\"}]}}:\"detail\"==a?window._adftrack={pm:",["escape",["macro",127],8,16],",pagename:encodeURIComponent(\"Product\"),divider:encodeURIComponent(\"|\"),products:[{productid:google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").detail.products[0].id,step:1}]}:\"checkout\"==a\u0026\u0026(window._adftrack={pm:",["escape",["macro",127],8,16],",pagename:encodeURIComponent(\"Basket\"),divider:encodeURIComponent(\"|\"),order:{itms:c(\"checkout\",2)}}):window._adftrack={pm:",["escape",["macro",127],8,16],",\npagename:encodeURIComponent(\"Purchase\"),divider:encodeURIComponent(\"|\"),order:{sales:",["escape",["macro",3],8,16],",itms:c(\"purchase\",3)}};(function(){var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=\"https:\/\/track.adform.net\/serving\/scripts\/trackpoint\/async\/\";var a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})()}catch(b){console.log(\"Adform error: \"+b)}})();\u003C\/script\u003E\n\u003Cnoscript\u003E\n    \u003Cp style=\"margin:0;padding:0;border:0;\"\u003E\n        \u003Cimg src=\"https:\/\/track.adform.net\/Serving\/TrackPoint\/?pm=",["escape",["macro",127],12],"\u0026amp;ADFPageName=",["escape",["macro",128],12],"\u0026amp;ADFdivider=|\" width=\"1\" height=\"1\" alt=\"\"\u003E\n    \u003C\/p\u003E\n\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{\"mall.cz\"==",["escape",["macro",1],8,16],"\u0026\u0026(function(a,b,f,g,c,h,d,e){a.ZboziConversionObject=c;a[c]=a[c]||function(){(a[c].q=a[c].q||[]).push(arguments)};a[c].key=h;d=b.createElement(f);e=b.getElementsByTagName(f)[0];d.async=1;d.src=g;e.parentNode.insertBefore(d,e)}(window,document,\"script\",\"https:\/\/www.zbozi.cz\/conversion\/js\/conv.js\",\"zbozi\",\"580\"),zbozi(\"setOrder\",{orderId:",["escape",["macro",92],8,16],",totalPrice:\"",["escape",["macro",3],7],"\"}),zbozi(\"send\"))}catch(a){}\ntry{var _hrq=_hrq||[],heuPro=",["escape",["macro",45],8,16],";if(\"mall.cz\"==",["escape",["macro",1],8,16],"){_hrq.push([\"setKey\",\"1D2BB65D6EC55135542C13142F0F2829\"]);_hrq.push([\"setOrderId\",\"",["escape",["macro",92],7],"\"]);for(var i=0;i\u003CheuPro.length;i++)_hrq.push([\"addProduct\",heuPro[i].name,heuPro[i].price,heuPro[i].quantity]);_hrq.push([\"trackOrder\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/ssl\":\"http:\/\/www\")+\".heureka.cz\/direct\/js\/ext\/1-roi-async.js\";\nvar b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})()}if(\"mall.sk\"==",["escape",["macro",1],8,16],"){_hrq.push([\"setKey\",\"841A39E7AD14FB58E0974323EF8AE453\"]);_hrq.push([\"setOrderId\",\"",["escape",["macro",92],7],"\"]);for(i=0;i\u003CheuPro.length;i++)_hrq.push([\"addProduct\",heuPro[i].name,heuPro[i].price,heuPro[i].quantity]);_hrq.push([\"trackOrder\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/ssl\":\n\"http:\/\/www\")+\".heureka.sk\/direct\/js\/ext\/2-roi-async.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})()}}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var defaultDiacriticsRemovalMap=[{\"base\":\"A\",\"letters\":\"A\\u24b6\\uff21\\u00c0\\u00c1\\u00c2\\u1ea6\\u1ea4\\u1eaa\\u1ea8\\u00c3\\u0100\\u0102\\u1eb0\\u1eae\\u1eb4\\u1eb2\\u0226\\u01e0\\u00c4\\u01de\\u1ea2\\u00c5\\u01fa\\u01cd\\u0200\\u0202\\u1ea0\\u1eac\\u1eb6\\u1e00\\u0104\\u023a\\u2c6f\"},{\"base\":\"AA\",\"letters\":\"\\ua732\"},{\"base\":\"AE\",\"letters\":\"\\u00c6\\u01fc\\u01e2\"},{\"base\":\"AO\",\"letters\":\"\\ua734\"},{\"base\":\"AU\",\"letters\":\"\\ua736\"},{\"base\":\"AV\",\"letters\":\"\\ua738\\ua73a\"},{\"base\":\"AY\",\"letters\":\"\\ua73c\"},{\"base\":\"B\",\n\"letters\":\"B\\u24b7\\uff22\\u1e02\\u1e04\\u1e06\\u0243\\u0182\\u0181\"},{\"base\":\"C\",\"letters\":\"C\\u24b8\\uff23\\u0106\\u0108\\u010a\\u010c\\u00c7\\u1e08\\u0187\\u023b\\ua73e\"},{\"base\":\"D\",\"letters\":\"D\\u24b9\\uff24\\u1e0a\\u010e\\u1e0c\\u1e10\\u1e12\\u1e0e\\u0110\\u018b\\u018a\\u0189\\ua779\\u00d0\"},{\"base\":\"DZ\",\"letters\":\"\\u01f1\\u01c4\"},{\"base\":\"Dz\",\"letters\":\"\\u01f2\\u01c5\"},{\"base\":\"E\",\"letters\":\"E\\u24ba\\uff25\\u00c8\\u00c9\\u00ca\\u1ec0\\u1ebe\\u1ec4\\u1ec2\\u1ebc\\u0112\\u1e14\\u1e16\\u0114\\u0116\\u00cb\\u1eba\\u011a\\u0204\\u0206\\u1eb8\\u1ec6\\u0228\\u1e1c\\u0118\\u1e18\\u1e1a\\u0190\\u018e\"},\n{\"base\":\"F\",\"letters\":\"F\\u24bb\\uff26\\u1e1e\\u0191\\ua77b\"},{\"base\":\"G\",\"letters\":\"G\\u24bc\\uff27\\u01f4\\u011c\\u1e20\\u011e\\u0120\\u01e6\\u0122\\u01e4\\u0193\\ua7a0\\ua77d\\ua77e\"},{\"base\":\"H\",\"letters\":\"H\\u24bd\\uff28\\u0124\\u1e22\\u1e26\\u021e\\u1e24\\u1e28\\u1e2a\\u0126\\u2c67\\u2c75\\ua78d\"},{\"base\":\"I\",\"letters\":\"I\\u24be\\uff29\\u00cc\\u00cd\\u00ce\\u0128\\u012a\\u012c\\u0130\\u00cf\\u1e2e\\u1ec8\\u01cf\\u0208\\u020a\\u1eca\\u012e\\u1e2c\\u0197\"},{\"base\":\"J\",\"letters\":\"J\\u24bf\\uff2a\\u0134\\u0248\"},{\"base\":\"K\",\"letters\":\"K\\u24c0\\uff2b\\u1e30\\u01e8\\u1e32\\u0136\\u1e34\\u0198\\u2c69\\ua740\\ua742\\ua744\\ua7a2\"},\n{\"base\":\"L\",\"letters\":\"L\\u24c1\\uff2c\\u013f\\u0139\\u013d\\u1e36\\u1e38\\u013b\\u1e3c\\u1e3a\\u0141\\u023d\\u2c62\\u2c60\\ua748\\ua746\\ua780\"},{\"base\":\"LJ\",\"letters\":\"\\u01c7\"},{\"base\":\"Lj\",\"letters\":\"\\u01c8\"},{\"base\":\"M\",\"letters\":\"M\\u24c2\\uff2d\\u1e3e\\u1e40\\u1e42\\u2c6e\\u019c\"},{\"base\":\"N\",\"letters\":\"N\\u24c3\\uff2e\\u01f8\\u0143\\u00d1\\u1e44\\u0147\\u1e46\\u0145\\u1e4a\\u1e48\\u0220\\u019d\\ua790\\ua7a4\"},{\"base\":\"NJ\",\"letters\":\"\\u01ca\"},{\"base\":\"Nj\",\"letters\":\"\\u01cb\"},{\"base\":\"O\",\"letters\":\"O\\u24c4\\uff2f\\u00d2\\u00d3\\u00d4\\u1ed2\\u1ed0\\u1ed6\\u1ed4\\u00d5\\u1e4c\\u022c\\u1e4e\\u014c\\u1e50\\u1e52\\u014e\\u022e\\u0230\\u00d6\\u022a\\u1ece\\u0150\\u01d1\\u020c\\u020e\\u01a0\\u1edc\\u1eda\\u1ee0\\u1ede\\u1ee2\\u1ecc\\u1ed8\\u01ea\\u01ec\\u00d8\\u01fe\\u0186\\u019f\\ua74a\\ua74c\"},\n{\"base\":\"OI\",\"letters\":\"\\u01a2\"},{\"base\":\"OO\",\"letters\":\"\\ua74e\"},{\"base\":\"OU\",\"letters\":\"\\u0222\"},{\"base\":\"OE\",\"letters\":\"\\u008c\\u0152\"},{\"base\":\"oe\",\"letters\":\"\\u009c\\u0153\"},{\"base\":\"P\",\"letters\":\"P\\u24c5\\uff30\\u1e54\\u1e56\\u01a4\\u2c63\\ua750\\ua752\\ua754\"},{\"base\":\"Q\",\"letters\":\"Q\\u24c6\\uff31\\ua756\\ua758\\u024a\"},{\"base\":\"R\",\"letters\":\"R\\u24c7\\uff32\\u0154\\u1e58\\u0158\\u0210\\u0212\\u1e5a\\u1e5c\\u0156\\u1e5e\\u024c\\u2c64\\ua75a\\ua7a6\\ua782\"},{\"base\":\"S\",\"letters\":\"S\\u24c8\\uff33\\u1e9e\\u015a\\u1e64\\u015c\\u1e60\\u0160\\u1e66\\u1e62\\u1e68\\u0218\\u015e\\u2c7e\\ua7a8\\ua784\"},\n{\"base\":\"T\",\"letters\":\"T\\u24c9\\uff34\\u1e6a\\u0164\\u1e6c\\u021a\\u0162\\u1e70\\u1e6e\\u0166\\u01ac\\u01ae\\u023e\\ua786\"},{\"base\":\"TZ\",\"letters\":\"\\ua728\"},{\"base\":\"U\",\"letters\":\"U\\u24ca\\uff35\\u00d9\\u00da\\u00db\\u0168\\u1e78\\u016a\\u1e7a\\u016c\\u00dc\\u01db\\u01d7\\u01d5\\u01d9\\u1ee6\\u016e\\u0170\\u01d3\\u0214\\u0216\\u01af\\u1eea\\u1ee8\\u1eee\\u1eec\\u1ef0\\u1ee4\\u1e72\\u0172\\u1e76\\u1e74\\u0244\"},{\"base\":\"V\",\"letters\":\"V\\u24cb\\uff36\\u1e7c\\u1e7e\\u01b2\\ua75e\\u0245\"},{\"base\":\"VY\",\"letters\":\"\\ua760\"},{\"base\":\"W\",\"letters\":\"W\\u24cc\\uff37\\u1e80\\u1e82\\u0174\\u1e86\\u1e84\\u1e88\\u2c72\"},\n{\"base\":\"X\",\"letters\":\"X\\u24cd\\uff38\\u1e8a\\u1e8c\"},{\"base\":\"Y\",\"letters\":\"Y\\u24ce\\uff39\\u1ef2\\u00dd\\u0176\\u1ef8\\u0232\\u1e8e\\u0178\\u1ef6\\u1ef4\\u01b3\\u024e\\u1efe\"},{\"base\":\"Z\",\"letters\":\"Z\\u24cf\\uff3a\\u0179\\u1e90\\u017b\\u017d\\u1e92\\u1e94\\u01b5\\u0224\\u2c7f\\u2c6b\\ua762\"},{\"base\":\"a\",\"letters\":\"a\\u24d0\\uff41\\u1e9a\\u00e0\\u00e1\\u00e2\\u1ea7\\u1ea5\\u1eab\\u1ea9\\u00e3\\u0101\\u0103\\u1eb1\\u1eaf\\u1eb5\\u1eb3\\u0227\\u01e1\\u00e4\\u01df\\u1ea3\\u00e5\\u01fb\\u01ce\\u0201\\u0203\\u1ea1\\u1ead\\u1eb7\\u1e01\\u0105\\u2c65\\u0250\"},{\"base\":\"aa\",\n\"letters\":\"\\ua733\"},{\"base\":\"ae\",\"letters\":\"\\u00e6\\u01fd\\u01e3\"},{\"base\":\"ao\",\"letters\":\"\\ua735\"},{\"base\":\"au\",\"letters\":\"\\ua737\"},{\"base\":\"av\",\"letters\":\"\\ua739\\ua73b\"},{\"base\":\"ay\",\"letters\":\"\\ua73d\"},{\"base\":\"b\",\"letters\":\"b\\u24d1\\uff42\\u1e03\\u1e05\\u1e07\\u0180\\u0183\\u0253\"},{\"base\":\"c\",\"letters\":\"c\\u24d2\\uff43\\u0107\\u0109\\u010b\\u010d\\u00e7\\u1e09\\u0188\\u023c\\ua73f\\u2184\"},{\"base\":\"d\",\"letters\":\"d\\u24d3\\uff44\\u1e0b\\u010f\\u1e0d\\u1e11\\u1e13\\u1e0f\\u0111\\u018c\\u0256\\u0257\\ua77a\"},{\"base\":\"dz\",\"letters\":\"\\u01f3\\u01c6\"},\n{\"base\":\"e\",\"letters\":\"e\\u24d4\\uff45\\u00e8\\u00e9\\u00ea\\u1ec1\\u1ebf\\u1ec5\\u1ec3\\u1ebd\\u0113\\u1e15\\u1e17\\u0115\\u0117\\u00eb\\u1ebb\\u011b\\u0205\\u0207\\u1eb9\\u1ec7\\u0229\\u1e1d\\u0119\\u1e19\\u1e1b\\u0247\\u025b\\u01dd\"},{\"base\":\"f\",\"letters\":\"f\\u24d5\\uff46\\u1e1f\\u0192\\ua77c\"},{\"base\":\"g\",\"letters\":\"g\\u24d6\\uff47\\u01f5\\u011d\\u1e21\\u011f\\u0121\\u01e7\\u0123\\u01e5\\u0260\\ua7a1\\u1d79\\ua77f\"},{\"base\":\"h\",\"letters\":\"h\\u24d7\\uff48\\u0125\\u1e23\\u1e27\\u021f\\u1e25\\u1e29\\u1e2b\\u1e96\\u0127\\u2c68\\u2c76\\u0265\"},{\"base\":\"hv\",\"letters\":\"\\u0195\"},\n{\"base\":\"i\",\"letters\":\"i\\u24d8\\uff49\\u00ec\\u00ed\\u00ee\\u0129\\u012b\\u012d\\u00ef\\u1e2f\\u1ec9\\u01d0\\u0209\\u020b\\u1ecb\\u012f\\u1e2d\\u0268\\u0131\"},{\"base\":\"j\",\"letters\":\"j\\u24d9\\uff4a\\u0135\\u01f0\\u0249\"},{\"base\":\"k\",\"letters\":\"k\\u24da\\uff4b\\u1e31\\u01e9\\u1e33\\u0137\\u1e35\\u0199\\u2c6a\\ua741\\ua743\\ua745\\ua7a3\"},{\"base\":\"l\",\"letters\":\"l\\u24db\\uff4c\\u0140\\u013a\\u013e\\u1e37\\u1e39\\u013c\\u1e3d\\u1e3b\\u017f\\u0142\\u019a\\u026b\\u2c61\\ua749\\ua781\\ua747\"},{\"base\":\"lj\",\"letters\":\"\\u01c9\"},{\"base\":\"m\",\"letters\":\"m\\u24dc\\uff4d\\u1e3f\\u1e41\\u1e43\\u0271\\u026f\"},\n{\"base\":\"n\",\"letters\":\"n\\u24dd\\uff4e\\u01f9\\u0144\\u00f1\\u1e45\\u0148\\u1e47\\u0146\\u1e4b\\u1e49\\u019e\\u0272\\u0149\\ua791\\ua7a5\"},{\"base\":\"nj\",\"letters\":\"\\u01cc\"},{\"base\":\"o\",\"letters\":\"o\\u24de\\uff4f\\u00f2\\u00f3\\u00f4\\u1ed3\\u1ed1\\u1ed7\\u1ed5\\u00f5\\u1e4d\\u022d\\u1e4f\\u014d\\u1e51\\u1e53\\u014f\\u022f\\u0231\\u00f6\\u022b\\u1ecf\\u0151\\u01d2\\u020d\\u020f\\u01a1\\u1edd\\u1edb\\u1ee1\\u1edf\\u1ee3\\u1ecd\\u1ed9\\u01eb\\u01ed\\u00f8\\u01ff\\u0254\\ua74b\\ua74d\\u0275\"},{\"base\":\"oi\",\"letters\":\"\\u01a3\"},{\"base\":\"ou\",\"letters\":\"\\u0223\"},\n{\"base\":\"oo\",\"letters\":\"\\ua74f\"},{\"base\":\"p\",\"letters\":\"p\\u24df\\uff50\\u1e55\\u1e57\\u01a5\\u1d7d\\ua751\\ua753\\ua755\"},{\"base\":\"q\",\"letters\":\"q\\u24e0\\uff51\\u024b\\ua757\\ua759\"},{\"base\":\"r\",\"letters\":\"r\\u24e1\\uff52\\u0155\\u1e59\\u0159\\u0211\\u0213\\u1e5b\\u1e5d\\u0157\\u1e5f\\u024d\\u027d\\ua75b\\ua7a7\\ua783\"},{\"base\":\"s\",\"letters\":\"s\\u24e2\\uff53\\u00df\\u015b\\u1e65\\u015d\\u1e61\\u0161\\u1e67\\u1e63\\u1e69\\u0219\\u015f\\u023f\\ua7a9\\ua785\\u1e9b\"},{\"base\":\"t\",\"letters\":\"t\\u24e3\\uff54\\u1e6b\\u1e97\\u0165\\u1e6d\\u021b\\u0163\\u1e71\\u1e6f\\u0167\\u01ad\\u0288\\u2c66\\ua787\"},\n{\"base\":\"tz\",\"letters\":\"\\ua729\"},{\"base\":\"u\",\"letters\":\"u\\u24e4\\uff55\\u00f9\\u00fa\\u00fb\\u0169\\u1e79\\u016b\\u1e7b\\u016d\\u00fc\\u01dc\\u01d8\\u01d6\\u01da\\u1ee7\\u016f\\u0171\\u01d4\\u0215\\u0217\\u01b0\\u1eeb\\u1ee9\\u1eef\\u1eed\\u1ef1\\u1ee5\\u1e73\\u0173\\u1e77\\u1e75\\u0289\"},{\"base\":\"v\",\"letters\":\"v\\u24e5\\uff56\\u1e7d\\u1e7f\\u028b\\ua75f\\u028c\"},{\"base\":\"vy\",\"letters\":\"\\ua761\"},{\"base\":\"w\",\"letters\":\"w\\u24e6\\uff57\\u1e81\\u1e83\\u0175\\u1e87\\u1e85\\u1e98\\u1e89\\u2c73\"},{\"base\":\"x\",\"letters\":\"x\\u24e7\\uff58\\u1e8b\\u1e8d\"},{\"base\":\"y\",\n\"letters\":\"y\\u24e8\\uff59\\u1ef3\\u00fd\\u0177\\u1ef9\\u0233\\u1e8f\\u00ff\\u1ef7\\u1e99\\u1ef5\\u01b4\\u024f\\u1eff\"},{\"base\":\"z\",\"letters\":\"z\\u24e9\\uff5a\\u017a\\u1e91\\u017c\\u017e\\u1e93\\u1e95\\u01b6\\u0225\\u0240\\u2c6c\\ua763\"}];var diacriticsMap={};for(var i=0;i\u003CdefaultDiacriticsRemovalMap.length;i++){var letters=defaultDiacriticsRemovalMap[i].letters;for(var j=0;j\u003Cletters.length;j++)diacriticsMap[letters[j]]=defaultDiacriticsRemovalMap[i].base}var removeDiacritics=function(str){return str.replace(\/[^\\u0000-\\u007E]\/g,\nfunction(a){return diacriticsMap[a]||a})};var setzCookie=function(zName,zValue,minutes){",["escape",["macro",22],8,16],"(zName,zValue,minutes*6E4)};var zanpid=",["escape",["macro",24],8,16],"(\"zanpid\");var crSearch=document.location.search;if(zanpid){setzCookie(\"zanpid\",zanpid,30);setzCookie(\"zansou\",\"z\",43200)}else if(crSearch.indexOf(\"utm_source\\x3d\")\u003E-1||crSearch.indexOf(\"gclid\")\u003E-1){setzCookie(\"zanpid\",zanpid,0);setzCookie(\"zansou\",\"z\",0)}var znapidCookie=",["escape",["macro",23],8,16],"(\"zanpid\");if(znapidCookie)setzCookie(\"zanpid\",\nznapidCookie,30);else znapidCookie=\"\";if(",["escape",["macro",75],8,16],"==\"purchase\"){var zanoxPurchase=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").purchase;if(zanoxPurchase\u0026\u0026",["escape",["macro",23],8,16],"(\"zansou\")){var zanoxProducts=zanoxPurchase.products;var zanoxXml=\"\\x3cz\\x3e\\x3co\\x3e\";var zanoxProduct=\"\";for(var i=0;i\u003CzanoxProducts.length;i++){zanoxProduct=\"\\x3cso \";zanoxProduct+='qty\\x3d\"'+zanoxProducts[i].quantity+'\" ';zanoxProduct+='pnr\\x3d\"'+zanoxProducts[i].id+'\" ';zanoxProduct+=\n'pn\\x3d\"'+removeDiacritics(zanoxProducts[i].name)+'\" ';zanoxProduct+='up\\x3d\"'+zanoxProducts[i].price+'\" ';zanoxProduct+='cid\\x3d\"'+zanoxProducts[i].dimension47+'\" ';zanoxProduct+=\"\/\\x3e\";zanoxXml+=zanoxProduct}zanoxXml+=\"\\x3c\/o\\x3e\\x3c\/z\\x3e\";zanoxXml=escape(zanoxXml);var zanoxCon=document.createElement(\"script\");zanoxCon.setAttribute(\"type\",\"text\/javascript\");zanoxCon.src=\"https:\/\/ad.zanox.com\/pps\/?18707C1520260907\\x26mode\\x3d[[1]]\\x26CID\\x3d[[basket]]\\x26CustomerID\\x3d[[",["escape",["macro",50],7],"]]\\x26OrderID\\x3d[[",["escape",["macro",92],7],"]]\\x26CurrencySymbol\\x3d[[",["escape",["macro",109],7],"]]\\x26TotalPrice\\x3d[[",["escape",["macro",3],7],"]]\\x26PartnerID\\x3d[[\"+\nznapidCookie+\"]]\\x26XML\\x3d[[\"+zanoxXml+\"]]\";document.body.appendChild(zanoxCon)}}}catch(zanoxErr){}})();\u003C\/script\u003E  \n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var getZanoxMasterTagProducts=function(type){var zanoxEcommProducts=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\")[type].products;var zanoxMasterTagProducts=[];for(var i=0;i\u003CzanoxEcommProducts.length;i++)zanoxMasterTagProducts.push({\"identifier\":zanoxEcommProducts[i].id,\"amount\":zanoxEcommProducts[i].price,\"currency\":",["escape",["macro",109],8,16],",\"quantity\":zanoxEcommProducts[i].quantity});return JSON.stringify(zanoxMasterTagProducts)};var zpt=",["escape",["macro",5],8,16],";\nvar toPush=\"\";var event=",["escape",["macro",75],8,16],";switch(zpt){case \"searchresults\":toPush='\\x3cdiv class\\x3d\"zx_277EDBC5132553DFAA90 zx_mediaslot\"\\x3e\\x3cscript type\\x3d\"text\/javascript\"\\x3ewindow._zx \\x3d window._zx || [];window._zx.push({\"id\":\"277EDBC5132553DFAA90\"});(function(d) {var s \\x3d d.createElement(\"script\"); s.async \\x3d true;s.src \\x3d (d.location.protocol \\x3d\\x3d \"https:\" ? \"https:\" : \"http:\") + \"\/\/static.zanox.com\/scripts\/zanox.js\";var a \\x3d d.getElementsByTagName(\"script\")[0]; a.parentNode.insertBefore(s, a);}(document));\\x3c\/script\\x3e\\x3c\/div\\x3e';\nbreak;case \"detail\":toPush='\\x3cscript type\\x3d\"text\/javascript\"\\x3evar zx_identifier \\x3d \"",["escape",["macro",15],7],"\";var zx_fn \\x3d \"",["escape",["macro",95],7],"\";var zx_price \\x3d \"",["escape",["macro",6],7]," ",["escape",["macro",129],7],"\";var zx_amount \\x3d \"",["escape",["macro",6],7],"\";var zx_currency \\x3d \"",["escape",["macro",109],7],"\";var zx_url \\x3d \"'+document.URL+'\";\\x3c\/script\\x3e';toPush+='\\x3cdiv class\\x3d\"zx_30E2B31120FBFB3B31DF zx_mediaslot\"\\x3e\\x3cscript type\\x3d\"text\/javascript\"\\x3ewindow._zx \\x3d window._zx || [];window._zx.push({\"id\":\"30E2B31120FBFB3B31DF\"});(function(d) {var s \\x3d d.createElement(\"script\"); s.async \\x3d true;s.src \\x3d (d.location.protocol \\x3d\\x3d \"https:\" ? \"https:\" : \"http:\") + \"\/\/static.zanox.com\/scripts\/zanox.js\";var a \\x3d d.getElementsByTagName(\"script\")[0]; a.parentNode.insertBefore(s, a);}(document));\\x3c\/script\\x3e\\x3c\/div\\x3e';\nbreak;case \"category\":toPush='\\x3cdiv class\\x3d\"zx_3306FCA64610472501A1 zx_mediaslot\"\\x3e\\x3cscript type\\x3d\"text\/javascript\"\\x3ewindow._zx \\x3d window._zx || [];window._zx.push({\"id\":\"3306FCA64610472501A1\"});(function(d) {var s \\x3d d.createElement(\"script\"); s.async \\x3d true;s.src \\x3d (d.location.protocol \\x3d\\x3d \"https:\" ? \"https:\" : \"http:\") + \"\/\/static.zanox.com\/scripts\/zanox.js\";var a \\x3d d.getElementsByTagName(\"script\")[0]; a.parentNode.insertBefore(s, a);}(document));\\x3c\/script\\x3e\\x3c\/div\\x3e';\nbreak;case \"home\":toPush='\\x3cdiv class\\x3d\"zx_25934A051966EC80DA3C zx_mediaslot\"\\x3e\\x3cscript type\\x3d\"text\/javascript\"\\x3ewindow._zx \\x3d window._zx || [];window._zx.push({\"id\":\"25934A051966EC80DA3C\"});(function(d) {var s \\x3d d.createElement(\"script\"); s.async \\x3d true;s.src \\x3d (d.location.protocol \\x3d\\x3d \"https:\" ? \"https:\" : \"http:\") + \"\/\/static.zanox.com\/scripts\/zanox.js\";var a \\x3d d.getElementsByTagName(\"script\")[0]; a.parentNode.insertBefore(s, a);}(document));\\x3c\/script\\x3e\\x3c\/div\\x3e';\nbreak;case \"checkout\":if(",["escape",["macro",114],8,16],"==\"cart\"\u0026\u0026",["escape",["macro",120],8,16],"==1){toPush='\\x3cscript type\\x3d\"text\/javascript\"\\x3evar zx_products \\x3d '+getZanoxMasterTagProducts(\"checkout\")+\";\\x3c\/script\\x3e\";toPush+='\\x3cdiv class\\x3d\"zx_44971CCD1CEA37FF4A38 zx_mediaslot\"\\x3e\\x3cscript type\\x3d\"text\/javascript\"\\x3ewindow._zx \\x3d window._zx || [];window._zx.push({\"id\":\"44971CCD1CEA37FF4A38\"});(function(d) {var s \\x3d d.createElement(\"script\"); s.async \\x3d true;s.src \\x3d (d.location.protocol \\x3d\\x3d \"https:\" ? \"https:\" : \"http:\") + \"\/\/static.zanox.com\/scripts\/zanox.js\";var a \\x3d d.getElementsByTagName(\"script\")[0]; a.parentNode.insertBefore(s, a);}(document));\\x3c\/script\\x3e\\x3c\/div\\x3e'}else toPush=\n'\\x3cdiv class\\x3d\"zx_62E608105B2A76698D78 zx_mediaslot\"\\x3e\\x3cscript type\\x3d\"text\/javascript\"\\x3ewindow._zx \\x3d window._zx || [];window._zx.push({\"id\":\"62E608105B2A76698D78\"});(function(d) {var s \\x3d d.createElement(\"script\"); s.async \\x3d true;s.src \\x3d (d.location.protocol \\x3d\\x3d \"https:\" ? \"https:\" : \"http:\") + \"\/\/static.zanox.com\/scripts\/zanox.js\";var a \\x3d d.getElementsByTagName(\"script\")[0]; a.parentNode.insertBefore(s, a);}(document));\\x3c\/script\\x3e\\x3c\/div\\x3e';break;case \"purchase\":break;\ncase \"other\":toPush='\\x3cdiv class\\x3d\"zx_62E608105B2A76698D78 zx_mediaslot\"\\x3e\\x3cscript type\\x3d\"text\/javascript\"\\x3ewindow._zx \\x3d window._zx || [];window._zx.push({\"id\":\"62E608105B2A76698D78\"});(function(d) {var s \\x3d d.createElement(\"script\"); s.async \\x3d true;s.src \\x3d (d.location.protocol \\x3d\\x3d \"https:\" ? \"https:\" : \"http:\") + \"\/\/static.zanox.com\/scripts\/zanox.js\";var a \\x3d d.getElementsByTagName(\"script\")[0]; a.parentNode.insertBefore(s, a);}(document));\\x3c\/script\\x3e\\x3c\/div\\x3e';\nbreak}if(toPush.length\u003E0)$(\"body\").append(toPush);if(",["escape",["macro",75],8,16],"==\"purchase\")$(\"body\").append('\\x3cscript type\\x3d\"text\/javascript\"\\x3evar zx_products \\x3d '+getZanoxMasterTagProducts(\"purchase\")+'; var zx_transaction \\x3d \"",["escape",["macro",92],7],"\";var zx_total_amount \\x3d \"",["escape",["macro",3],7],"\";var zx_total_currency \\x3d \"",["escape",["macro",109],7],"\";\\x3c\/script\\x3e\\x3cdiv class\\x3d\"zx_3206C7B03FA22E01A2CE zx_mediaslot\"\\x3e\\x3cscript type\\x3d\"text\/javascript\"\\x3ewindow._zx \\x3d window._zx || [];window._zx.push({\"id\":\"3206C7B03FA22E01A2CE\"});(function(d) {var s \\x3d d.createElement(\"script\"); s.async \\x3d true;s.src \\x3d (d.location.protocol \\x3d\\x3d \"https:\" ? \"https:\" : \"http:\") + \"\/\/static.zanox.com\/scripts\/zanox.js\";var a \\x3d d.getElementsByTagName(\"script\")[0]; a.parentNode.insertBefore(s, a);}(document));\\x3c\/script\\x3e\\x3c\/div\\x3e')}catch(zanoxErr2){}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{if(",["escape",["macro",75],8,16],"==\"afterLoad\"){if(",["escape",["macro",5],8,16],"==\"purchase\"){var awinPurProd=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").purchase.products;var awinParts=[];var awinFormProducts=\"\";for(var i=0;i\u003CawinPurProd.length;i++){awinParts.push(awinPurProd[i].dimension47+\":\"+parseFloat(awinPurProd[i].price)*parseFloat(awinPurProd[i].quantity));awinFormProducts+=\"\\r\\nAW:P|10182|",["escape",["macro",92],7],"|\"+(awinPurProd[i].variant||awinPurProd[i].id)+\"|\"+\nawinPurProd[i].name+\"|\"+awinPurProd[i].price+\"|\"+(awinPurProd[i].quantity||1)+\"|\"+(awinPurProd[i].variant||awinPurProd[i].id)+\"|\"+awinPurProd[i].dimension47+\"|\"+awinPurProd[i].dimension48}var AWIN={};AWIN.Tracking={};AWIN.Tracking.Sale={};AWIN.Tracking.Sale.amount=\"",["escape",["macro",3],7],"\";AWIN.Tracking.Sale.channel=\"aw\";AWIN.Tracking.Sale.currency=\"",["escape",["macro",109],7],"\";AWIN.Tracking.Sale.orderRef=\"",["escape",["macro",92],7],"\";AWIN.Tracking.Sale.parts=awinParts.join(\"|\");AWIN.Tracking.Sale.voucher=\"\";\nAWIN.Tracking.Sale.custom=\"\";var awinImg=document.createElement(\"img\");awinImg.border=\"0\";awinImg.height=\"0\";awinImg.width=\"0\";awinImg.style=\"display: none\";awinImg.src=\"https:\/\/www.awin1.com\/sread.img?tt\\x3dns\\x26tv\\x3d2\\x26merchant\\x3d10182\\x26amount\\x3d",["escape",["macro",3],7],"\\x26ch\\x3daw\\x26cr\\x3d",["escape",["macro",109],7],"\\x26parts\\x3d\"+awinParts.join(\"|\")+\"\\x26ref\\x3d",["escape",["macro",92],7],"\";document.body.appendChild(awinImg);$(\"body\").append('\\x3cform style\\x3d\"display: none;\" name\\x3d\"aw_basket_form\"\\x3e\\x3ctextarea wrap\\x3d\"physical\" id\\x3d\"aw_basket\"\\x3e'+\nawinFormProducts+\"\\x3c\/textarea\\x3e\\x3c\/form\\x3e\")}var awinMain=document.createElement(\"script\");awinMain.src=\"https:\/\/www.dwin1.com\/10182.js\";awinMain.defer=\"defer\";awinMain.type=\"text\/javascript\";document.body.appendChild(awinMain)}}catch(awinErr){}})();\u003C\/script\u003E  "],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003Etry{var event=",["escape",["macro",75],8,16],",runSnipped=function(){ChannelSight_Log=!1;var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=\"https:\/\/tracking.channelsight.com\/api\/tracking\/v2\/Init\";document.body.appendChild(a)};if(\"purchase\"==event){ChannelSight_Type=\"OrderTracking\";ChannelSight_Separator=\".\";CS_Products=[];for(var eeProducts=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").purchase.products,i=0;i\u003CeeProducts.length;i++)\"Siemens\"!=eeProducts[i].brand\u0026\u0026\"Bosch\"!=\neeProducts[i].brand||CS_Products.push({Name:eeProducts[i].name,ProductCode:eeProducts[i].id,Category:eeProducts[i].category,Price:parseFloat(eeProducts[i].price),Quantity:parseInt(eeProducts[i].quantity)||1});var CS_Order={Currency:\"",["escape",["macro",109],7],"\"};runSnipped()}else\"detail\"==",["escape",["macro",5],8,16],"\u0026\u0026runSnipped()}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{if(\"mall.cz\"==",["escape",["macro",1],8,16],"){var b=\"19012017-rmk_off 19012017-rmk_criteo 19012017-rmk_external 19012017-rmk_external 19012017-rmk_external 19012017-rmk_external 19012017-rmk_adw_external 19012017-rmk_adw_external 19012017-rmk_adw_external 19012017-rmk_adw_external 19012017-rmk_adw_external 19012017-rmk_adw_external 19012017-2-rmk_on 19012017-2-rmk_on 19012017-2-rmk_on 19012017-2-rmk_on 19012017-2-rmk_on 19012017-2-rmk_on 19012017-2-rmk_on 19012017-2-rmk_on\".split(\" \"),a=",["escape",["macro",23],8,16],"(\"ech_grp\");\na?\"19012017-rmk_adfb\"==a?a=\"19012017-rmk_external\":\"19012017-rmk_on\"==a\u0026\u0026(a=2\u003EMath.floor(5*Math.random())?\"19012017-rmk_adw_external\":\"19012017-2-rmk_on\"):a=b[Math.floor(20*Math.random())];",["escape",["macro",22],8,16],"(\"ech_grp\",a,7776E6)}else\"mall.sk\"==",["escape",["macro",1],8,16],"?(b=\"18052017-rmk_off 18052017-rmk_criteo 18052017-rmk_fb 18052017-rmk_adw 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on 18052017-rmk_on\".split(\" \"),\n(a=",["escape",["macro",23],8,16],"(\"ech_grp\"))||(a=b[Math.floor(20*Math.random())]),",["escape",["macro",22],8,16],"(\"ech_grp\",a,7776E6)):\"mall.hu\"==",["escape",["macro",1],8,16],"?(b=\"26032019-rmk_off 26032019-rmk_off 26032019-rmk_criteo 26032019-rmk_adw 26032019-rmk_on 26032019-rmk_on 26032019-rmk_on 26032019-rmk_on 26032019-rmk_on 26032019-rmk_on 26032019-rmk_on 26032019-rmk_on 26032019-rmk_rtbh 26032019-rmk_rtbh 26032019-rmk_rtbh 26032019-rmk_rtbh 26032019-rmk_rtbh 26032019-rmk_rtbh 26032019-rmk_rtbh 26032019-rmk_rtbh\".split(\" \"),\n(a=",["escape",["macro",23],8,16],"(\"ech_grp\"))||(a=b[Math.floor(20*Math.random())]),",["escape",["macro",22],8,16],"(\"ech_grp\",a,7776E6)):\"mall.hr\"==",["escape",["macro",1],8,16],"?(b=\"13022017-rmk_off 13022017-rmk_criteo 13022017-rmk_rtbh 13022017-rmk_adw 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on\".split(\" \"),(a=",["escape",["macro",23],8,16],"(\"ech_grp\"))||\n(a=b[Math.floor(20*Math.random())]),",["escape",["macro",22],8,16],"(\"ech_grp\",a,7776E6)):\"mimovrste.com\"==",["escape",["macro",1],8,16],"\u0026\u0026(b=\"13022017-rmk_off 13022017-rmk_criteo 13022017-rmk_rtbh 13022017-rmk_adw 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on 13022017-rmk_on\".split(\" \"),(a=",["escape",["macro",23],8,16],"(\"ech_grp\"))||\n(a=b[Math.floor(20*Math.random())]),",["escape",["macro",22],8,16],"(\"ech_grp\",a,7776E6))}catch(c){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var g=",["escape",["macro",75],8,16],",h=",["escape",["macro",24],8,16],"(\"_ref\"),e=",["escape",["macro",24],8,16],"(\"_refv\");e\u0026\u0026\"ca-wtb\"==h\u0026\u0026",["escape",["macro",22],8,16],"(\"chaAdvisor\",e,2592E6);var f=",["escape",["macro",23],8,16],"(\"chaAdvisor\"),k=",["escape",["macro",23],8,16],"(\"chaAdvisorDed\")||\"noTrans\";if(\"purchase\"==g\u0026\u0026f){var d=document.createElement(\"script\");d.type=\"text\/javascript\";d.src=\"https:\/\/where-to-buy.co\/libraries\/ca\/tracking\/strack-1.0.3.3.min.js\";d.onload=function(){var a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").purchase.products;\nif(\"mall.cz\"==",["escape",["macro",1],8,16],")var c=sTrack.create(\"kn7z2AqcQZAzrwnEE\/Ujr3F2\/xh+GHSRvg5la3OK1nsbXcIquVr1Ey2DDwyXQskJfwV4makGDPMmNj2UDggOOjYRx3JQk7O7Xk4GVMpexBE\\x3d\");else\"mall.sk\"==",["escape",["macro",1],8,16],"?c=sTrack.create(\"z5e3jKxrx8BmrC4lV4O7KsT4gwYFQrLkuCN893dySXQKAIqBuifcA3R8ALdDfABBAG7iGtQCfM8kOzBTgCoHeW2\/peY5EJqKnDLq2nNKLO4\\x3d\"):\"mimovrste.com\"==",["escape",["macro",1],8,16],"\u0026\u0026(c=sTrack.create(\"4I72NlgmG5cA0OckjA\/H3m2Loj9m8ONe605v2mAa+55nWgfNxnAPL+dxI9V426e8xCeZPJx6XtkEmPOYtBmRcIVshzbxv5NVsq1iLSUQDyM\\x3d\"));\nfor(var b=0;b\u003Ca.length;b++)\"Philips\"!=a[b].brand\u0026\u0026\"Saeco\"!=a[b].brand\u0026\u0026\"Philips Avent\"!=a[b].brand||c.push({product:{name:a[b].variant,price:parseFloat(a[b].price),quantity:parseInt(a[b].quantity)||1}});c.push({tax:!0});c.push({trackingCode:f});a=",["escape",["macro",92],8,16],";-1==k.indexOf(a)\u0026\u0026(c.submit(),",["escape",["macro",22],8,16],"(\"chaAdvisorDed\",a,6048E5))};document.body.appendChild(d)}}catch(a){console.warn(\"ChannelAdvisor error: \"+a)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{\"mall.cz\"!=",["escape",["macro",1],8,16],"\u0026\u0026\"mall.sk\"!=",["escape",["macro",1],8,16],"||",["escape",["macro",22],8,16],"(\"opt_ver6\",\"D\",2592E6)}catch(a){console.warn(\"Mall box cookie err: \"+a)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{\"undefined\"==typeof GlamiTrackerObject\u0026\u0026function(a,b,f,g,c,d,e){a.GlamiTrackerObject=c;a[c]=a[c]||function(){(a[c].q=a[c].q||[]).push(arguments)};d=b.createElement(f);e=b.getElementsByTagName(f)[0];d.async=1;d.src=g;e.parentNode.insertBefore(d,e)}(window,document,\"script\",\"\/\/www.glami.cz\/js\/compiled\/pt.js\",\"glami\");glami(\"create\",\"DF230004A246A3FF449AFFB3D973D1EC\",\"cz\");var glami_pt=",["escape",["macro",5],8,16],",glami_ev=",["escape",["macro",75],8,16],",glami_pr=\"\",glami_getNames=function(){var a=[];if(\"afterLoad\"==\nglami_ev)if(\"detail\"==glami_pt)a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\")[glami_pt].products[0].name;else{if(\"category\"==glami_pt){glami_pr=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").impressions;for(var b=0;b\u003Cglami_pr.length;b++)a.push(glami_pr[b].name)}}else if(\"addToCart\"==glami_ev)a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").add.products[0].name;else if(\"purchase\"==glami_ev)for(glami_pr=",["escape",["macro",45],8,16],",b=0;b\u003C\nglami_pr.length;b++)a.push(glami_pr[b].name);return a},glami_getIds=function(){var a=[];if(\"afterLoad\"==glami_ev)if(\"detail\"==glami_pt)a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\")[glami_pt].products[0].id;else{if(\"category\"==glami_pt){glami_pr=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").impressions;for(var b=0;b\u003Cglami_pr.length;b++)a.push(glami_pr[b].id)}}else if(\"addToCart\"==glami_ev)a=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").add.products[0].id;\nelse if(\"purchase\"==glami_ev)for(glami_pr=",["escape",["macro",45],8,16],",b=0;b\u003Cglami_pr.length;b++)a.push(glami_pr[b].id);return a};\"afterLoad\"==glami_ev?\"detail\"==glami_pt?glami(\"track\",\"ViewContent\",{content_type:\"product\",content_sku_ids:glami_getIds(),content_name:glami_getNames()}):\"category\"==glami_pt?glami(\"track\",\"ViewContent\",{content_type:\"category\",content_sku_ids:glami_getIds(),content_names:glami_getNames()}):\"purchase\"!=glami_pt\u0026\u0026glami(\"track\",\"PageView\"):\"addToCart\"==glami_ev?glami(\"track\",\n\"AddToCart\",{content_sku_ids:glami_getIds(),content_name:glami_getNames(),value:parseFloat(google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").add.products[0].price),currency:",["escape",["macro",109],8,16],"}):\"purchase\"==glami_ev\u0026\u0026glami(\"track\",\"Purchase\",{content_sku_ids:glami_getIds(),content_names:glami_getNames(),value:parseFloat(",["escape",["macro",3],8,16],"),currency:",["escape",["macro",109],8,16],",transaction_id:",["escape",["macro",92],8,16],"})}catch(a){};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(l,m){try{for(var b=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\").purchase.products,d=",["escape",["macro",23],8,16],"(\"_gcl_aw\"),c=",["escape",["macro",23],8,16],"(\"_ga\").split(\".\"),h=",["escape",["macro",0],8,16],".split(\".\").pop(),e=function(a,b,c,d,e,f,k){var g=\"https:\/\/mg-gtm.mallgroup.com\/v1\/marbid\";a=g+\"?tid\\x3d",["escape",["macro",92],7],"\\x26pid\\x3d\"+a+\"\\x26cid\\x3d\"+b+\"\\x26plat\\x3d\"+c+\"\\x26aid\\x3d\"+h+\"\\x26matcat\\x3d\"+d+\"\\x26brand\\x3d\"+e+\"\\x26revenue\\x3d\"+f+\"\\x26gaid\\x3d\"+k;jQuery.ajax({crossDomain:!0,\nurl:a,method:\"GET\",dataType:\"json\",success:function(a,b){},error:function(a,b,c){}})},a=0;a\u003Cb.length;a++)for(var f=0;f\u003Cb[a].quantity;f++)d\u0026\u0026e(b[a].variant||b[a].id,d.split(\".\").pop(),\"adw\",b[a].dimension49,b[a].brand,b[a].price,c[2]+\".\"+c[3]),c\u0026\u0026e(b[a].variant||b[a].id,c[2]+\".\"+c[3],\"ga\",b[a].dimension49,b[a].brand,b[a].price,c[2]+\".\"+c[3])}catch(g){console.warn(\"AdWords conversion error: \"+g)}})(window,document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(g,k){function b(a){return decodeURIComponent(((new RegExp(\"[?|\\x26]\"+a+\"\\x3d([^\\x26;]+?)(\\x26|#|;|$)\")).exec(location.search)||[\"\",\"\"])[1].replace(\/\\+\/g,\"%20\"))||\"\"}!function(a){var c=b(\"utm_source\"),e=b(\"utm_medium\"),f=b(\"utm_campaign\"),h=b(\"_\");if(c||e||f)a=new XMLHttpRequest,a.open(\"POST\",\"https:\/\/r6zuyswe2a.execute-api.eu-central-1.amazonaws.com\/v1\/send\"),a.setRequestHeader(\"Content-Type\",\"application\/json\"),c=JSON.stringify({d:function(a){var b,c,d=1,e=0;if(a)for(d=0,b=a.length-1;0\u003C=\nb;b--)d=0!=(e=266338304\u0026(d=(d\u003C\u003C6\u0026268435455)+(c=a.charCodeAt(b))+(c\u003C\u003C14)))?d^e\u003E\u003E21:d;return d}(g.location.hostname+c+e+f)+\".\"+h,t:Math.round((new Date).getTime()\/1E3)}),a.send(c)}()}(window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":75
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var e=",["escape",["macro",5],8,16],",f=",["escape",["macro",18],8,16],",a=function(){switch(",["escape",["macro",1],8,16],"){case \"mall.cz\":return 821509017;case \"mall.sk\":return 793143197;case \"mall.hu\":return 812512409;case \"mimovrste.com\":return 788512414;default:return 0}},b=function(){switch(",["escape",["macro",1],8,16],"){case \"mall.cz\":return[\"VSb6CLi6gIQBEJn33IcD\",\"B0cOCIzHgIQBEJn33IcD\",\"7HHICL_-joQBEJn33IcD\"];case \"mall.sk\":return[\"Glk5CN2g1IcBEJ3PmfoC\",\"om6qCJaq1IcBEJ3PmfoC\",\"rIVRCIzT1IcBEJ3PmfoC\"];case \"mall.hu\":return[\"bN0yCLep75UBEJnpt4MD\",\n\"dCdiCLbX55UBEJnpt4MD\",\"V2ZpCKDK55UBEJnpt4MD\"];case \"mimovrste.com\":return[\"eWuNCP2i0okBEJ79_vcC\",\"tHflCMvpvIkBEJ79_vcC\",\"pEEMCN-SyokBEJ79_vcC\"];default:return 0}},d=function(a,b,d){var c=document.createElement(\"img\");c.height=1;c.width=1;c.border=0;c.src=\"https:\/\/www.googleadservices.com\/pagead\/conversion\/\"+a+\"\/?value\\x3d\"+d+\"\\x26currency_code\\x3d",["escape",["macro",109],7],"\\x26label\\x3d\"+b+\"\\x26guid\\x3dON\\x26script\\x3d0\";document.body.appendChild(c)};\"purchase\"==f?d(a(),b()[0],",["escape",["macro",3],8,16],"):\"checkout\"==\ne?d(a(),b()[1],\"1\"):d(a(),b()[2],\"1\")}catch(g){console.warn(\"Adwords conversion for youtube: \"+g)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/analights.com\/analights.1.2.2.min.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{if(\"undefined\"!==typeof AnalightsTracker)var a=new AnalightsTracker(\"c819bf3b69576a519c05760ad123511c4392fdfa\",\"mall.cz\",\"https:\/\/backend2.analights.com\");\"purchase\"==",["escape",["macro",18],8,16],"\u0026\u0026a\u0026\u0026a.trackConversion({id:\"",["escape",["macro",92],7],"\",revenue:parseInt(",["escape",["macro",3],8,16],"),\"device-type\":",["escape",["macro",123],8,16],"})}catch(b){console.warn(\"Analights warning: \"+b)}})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":85
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/gjstatic.blob.core.windows.net\/fix\/mall-dmp.js\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var c=",["escape",["macro",18],8,16],",b=",["escape",["macro",5],8,16],",d=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"ecommerce\"),a={};if(\"afterLoad\"==c){var e=",["escape",["macro",12],8,16],".split(\"\/\").slice(0,-1);c=[];\"detail\"==b\u0026\u0026(c=[",["escape",["macro",94],8,16],",",["escape",["macro",95],8,16],",",["escape",["macro",6],8,16],"],gjdmp.pv(e,c),a=d.detail.products,gjdmp.tr(\"ViewContent\",{id:parseInt(",["escape",["macro",41],8,16],"(a,\"id\")),name:",["escape",["macro",41],8,16],"(a,\"name\").toString(),category:",["escape",["macro",41],8,16],"(a,\"category\").toString(),\nvalue:parseInt(",["escape",["macro",41],8,16],"(a,\"price\")),currency:\"",["escape",["macro",109],7],"\",type:\"product\"}));gjdmp.pv(e)}else if(\"addToCart\"==c)a=d.add.products,gjdmp.tr(\"AddToCart\",{id:parseInt(",["escape",["macro",41],8,16],"(a,\"id\")),name:",["escape",["macro",41],8,16],"(a,\"name\").toString(),category:",["escape",["macro",41],8,16],"(a,\"category\").toString(),value:parseInt(",["escape",["macro",41],8,16],"(a,\"price\")),currency:\"",["escape",["macro",109],7],"\",type:\"product\"});else if(\"purchase\"==c){a=d.purchase.products;pp=[];for(b=0;b\u003Ca.length;b++)pp.push({id:parseInt(a[b].id),\nname:a[b].name,category:a[b].category,value:parseInt(a[b].price),currency:\"",["escape",["macro",109],7],"\",type:\"product\",order_id:parseInt(",["escape",["macro",92],8,16],")});gjdmp.tr(\"Purchase\",pp)}}catch(f){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":87
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(l,m){try{for(var e=google_tag_manager[",["escape",["macro",2],8,16],"].dataLayer.get(\"packets\"),c=0;c\u003Ce.length;c++){var a=e[c],g=ga;a:{for(var h=",["escape",["macro",74],8,16],",d=ga.getAll(),b=0;b\u003Cd.length;b++)if(h==d[b].get(\"trackingId\")){var f=d[b].get(\"name\");break a}f=0}g(f+\".send\",\"event\",\"Packet info\",a.transactionId,a.packetType,{dimension96:a.packetOrder,dimension97:a.transactionId,dimension98:a.packetType,dimension99:a.productsInPacket,dimension100:a.packetsInTransaction,dimension101:a.deliveryMethod,\ndimension102:a.deliveryDetail,dimension103:a.paymentMethod,dimension104:a.paymentDetail,metric10:a.productRevenue,metric11:a.deliveryRevenue,metric12:a.paymentRevenue})}}catch(k){console.warn(\"Packet info error: \"+k)}})(window,document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript data-gtmsrc=\"https:\/\/boostify.io\/scripts\/7e5c768f16b25541db71cdfed5ac44824e9f1797\/tracker.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{var bEvent=",["escape",["macro",75],8,16],";if(\"undefined\"!==typeof BoostifyTracker)var boostifyTracker=new BoostifyTracker(\"7e5c768f16b25541db71cdfed5ac44824e9f1797\",\"mall.cz\",\"https:\/\/backend.boostify.io\",{retargetingCallback:function(){\"19012017-rmk_external\"==",["escape",["macro",25],8,16],"?dataLayer.push({event:\"rmkExternalTrigger\"}):\"19012017-rmk_adw_external\"==",["escape",["macro",25],8,16],"\u0026\u0026dataLayer.push({event:\"rmkAdwExternalTrigger\"})}});var getVirtualCount=function(){var a=0,b=window.dataLayer||[],c;for(c in b)try{b[c].documentLocation\u0026\u0026\na++}catch(d){}return a};\"gtm.load\"==bEvent\u0026\u0026",["escape",["macro",44],8,16],"?(boostifyTracker.setPageType(",["escape",["macro",131],8,16],"),\"product\"==",["escape",["macro",131],8,16],"\u0026\u0026boostifyTracker.setProductPrice(parseFloat(",["escape",["macro",6],8,16],")),boostifyTracker.send()):\"virtualPageview\"==bEvent?(1\u003CgetVirtualCount()\u0026\u0026boostifyTracker.currentVisit.newPageView(),boostifyTracker.setPageType(",["escape",["macro",131],8,16],"),boostifyTracker.send()):\"addToCart\"==bEvent?(boostifyTracker.addToCartEvent(),boostifyTracker.send()):\"purchase\"==bEvent\u0026\u0026\n(boostifyTracker.addConversion({revenue:parseFloat(",["escape",["macro",3],8,16],")}),boostifyTracker.send())}catch(a){console.warn(\"b: \"+a)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":98
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=1,b=",["escape",["macro",23],8,16],"(\"_optVerZeroStep\");b||",["escape",["macro",22],8,16],"(\"_optVerZeroStep\",a.toString(),36E5)}catch(c){console.warn(\"TS err:\"+c)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":99
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=function(b,a,c,d,e){dataLayer.push({event:\"eventFire\",eventCategory:b,eventAction:a,eventLabel:c,eventValue:d,eventNonInteractionFlag:e,eventCallback:function(){dataLayer.push({eventCategory:void 0,eventAction:void 0,eventLabel:void 0,eventValue:void 0})}})};-1\u003C",["escape",["macro",112],8,16],".indexOf(\"kosik\/3\")\u0026\u0026(",["escape",["macro",44],8,16],"||a(\"Debug\",\"PT is not defined\",\"-\",1,!0))}catch(b){}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=1,b=",["escape",["macro",23],8,16],"(\"_optVerZeroStep\");b||",["escape",["macro",22],8,16],"(\"_optVerZeroStep\",a.toString(),864E5)}catch(c){console.warn(\"Step zero err:\"+c)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":101
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var a=1,b=",["escape",["macro",23],8,16],"(\"feature_mapyCzForSk\");b||",["escape",["macro",22],8,16],"(\"feature_mapyCzForSk\",a.toString(),36E5)}catch(c){console.warn(\"FF err:\"+c)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",44],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"gtm\\.js|virtualPageview"
    },{
      "function":"_cn",
      "arg0":["macro",75],
      "arg1":"eventFire"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":".*"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"(intPromo|intPromoClick|productClick|evImpress|productDetail|addToCart|removeFromCart|checkout.*|purchase|impression)"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"afterLoad|virtualPageview"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"19012017-rmk_adw_external"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"rmkAdwExternalTrigger"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"notTestPur"
    },{
      "function":"_re",
      "arg0":["macro",103],
      "arg1":"Doporučujeme|Nejnižší|Nejvyšší|Hodnocení"
    },{
      "function":"_re",
      "arg0":["macro",104],
      "arg1":"sort-item"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"run"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",104],
      "arg1":"facet-checkbox"
    },{
      "function":"_re",
      "arg0":["macro",106],
      "arg1":"2|1|novinka|bazar|vyprodej|nas"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",108],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"purchase|gtm\\.load"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"afterLoad"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(Przepraszamy|Stran ni bila|Az oldal nem|Ospravedlňujeme|Omlouváme|HTTP 404|(Przepraszamy|Stran ni bila|Az oldal nem|Ospravedlňujeme|Omlouváme|omlouváme|HTTP 404|Stranica više ne postoji))"
    },{
      "function":"_eq",
      "arg0":["macro",113],
      "arg1":"not set"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"afterLoad|evImpress|purchase"
    },{
      "function":"_eq",
      "arg0":["macro",115],
      "arg1":"not set"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"(afterLoad|addToCart|evImpress|purchase)"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"checkout"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"mall.cz"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"mall.pl"
    },{
      "function":"_re",
      "arg0":["macro",116],
      "arg1":"www\\.mall\\.|www\\.mimovrste\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"gtm\\.load|virtualPageview"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"virtualPageview|afterLoad|purchase|rmkExternalTrigger"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"afterLoad|purchase"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"cz|sk"
    },{
      "function":"_cn",
      "arg0":["macro",46],
      "arg1":"false"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"mall.pl"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"\\.cz|\\.sk"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"mall\\.cz|mall\\.sk|mimovrste\\.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"mall.cz"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"afterLoad|addToCart|purchase"
    },{
      "function":"_re",
      "arg0":["macro",130],
      "arg1":"smsmanager|viber"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"cz|sk"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"cz|sk|com|hu",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"cz"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"gtm\\.dom|purchase"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"packetInfo"
    },{
      "function":"_re",
      "arg0":["macro",25],
      "arg1":"19012017\\-rmk\\_external|19012017\\-rmk\\_adw\\_external"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",47],
      "arg1":"gtm\\.load|purchase|virtualPageview|addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",47],
      "arg1":"virtualPageview"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"sk|hu|com|hr|pl"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"sk"
    }],
  "rules":[
    [["if",0,1],["add",2]],
    [["if",2,3,4],["add",3]],
    [["if",3,5],["add",4]],
    [["if",3,6,7,8],["add",5]],
    [["if",3,7,9,10],["add",5]],
    [["if",3,11],["add",6,35]],
    [["if",3,12],["add",7,8,10]],
    [["if",3,13],["add",9]],
    [["if",14,15,16,17],["add",11]],
    [["if",3,17,18,19],["add",12]],
    [["if",20],["add",13,14,31,33]],
    [["if",3,21,22],["add",15]],
    [["if",24],["unless",23],["add",16]],
    [["if",12,25],["add",17]],
    [["if",3,7,27,28],["unless",26],["add",18]],
    [["if",3,7,30,31],["unless",29],["add",19]],
    [["if",32],["add",20,24]],
    [["if",12,33,34],["add",21]],
    [["if",3,11,35],["add",22]],
    [["if",20],["unless",36],["add",1]],
    [["if",37],["add",23]],
    [["if",3,34,38],["add",25]],
    [["if",3,7,39,40],["add",26]],
    [["if",3,7,40,41],["add",27]],
    [["if",3,11,42,43],["add",28]],
    [["if",3,40,44],["add",29]],
    [["if",3,40,45],["add",30]],
    [["if",3,40,46],["add",32]],
    [["if",3,47,48],["add",34]],
    [["if",3,24,34,49],["add",36]],
    [["if",20,50],["add",0]],
    [["if",3,40,51],["add",37]],
    [["if",3,52,53],["add",38]],
    [["if",3,34,48],["add",39]],
    [["if",34,54],["add",40]],
    [["if",52,55,56,57],["add",41]],
    [["if",20,34],["add",42]],
    [["if",58],["add",43]],
    [["if",20,59],["add",44]],
    [["if",20,60],["add",45]]]
},
"runtime":[
[],[]
]


};
var aa,ca=this,da=/^[\w+/_-]+[=]{0,2}$/,ea=null;var fa=function(){},ha=function(a){return"function"==typeof a},ia=function(a){return"string"==typeof a},ja=function(a){return"number"==typeof a&&!isNaN(a)},ka=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},la=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},ma=function(a,b){if(a&&ka(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},oa=function(a,b){if(!ja(a)||
!ja(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},pa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},qa=function(a){return Math.round(Number(a))||0},ra=function(a){return"false"==String(a).toLowerCase()?!1:!!a},sa=function(a){var b=[];if(ka(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},ta=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},ua=function(){return(new Date).getTime()},va=function(){this.prefix="gtm.";this.values=
{}};va.prototype.set=function(a,b){this.values[this.prefix+a]=b};va.prototype.get=function(a){return this.values[this.prefix+a]};va.prototype.contains=function(a){return void 0!==this.get(a)};
var wa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},xa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},ya=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},za=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Aa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ba=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ca=function(a){if(null==a)return String(a);var b=Ba.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Da=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ea=function(a){if(!a||"object"!=Ca(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Da(a,"constructor")&&!Da(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Da(a,b)},Fa=function(a,b){var c=b||("array"==Ca(a)?[]:{}),d;for(d in a)if(Da(a,d)){var e=a[d];"array"==Ca(e)?("array"!=Ca(c[d])&&(c[d]=[]),c[d]=Fa(e,c[d])):Ea(e)?(Ea(c[d])||(c[d]={}),c[d]=Fa(e,c[d])):c[d]=e}return c};var f=window,u=document,Ga=navigator,Ha=u.currentScript&&u.currentScript.src,Ia=function(a,b){var c=f[a];f[a]=void 0===c?b:c;return f[a]},Ja=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Ka=function(a,b,c){var d=u.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Ja(d,b);c&&(d.onerror=c);var e;if(null===ea)b:{var g=ca.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&da.test(k)){ea=k;break b}}ea=""}e=ea;e&&d.setAttribute("nonce",e);var l=u.getElementsByTagName("script")[0]||u.body||u.head;l.parentNode.insertBefore(d,l);return d},La=function(){if(Ha){var a=Ha.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Ma=function(a,b){var c=u.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=u.body&&u.body.lastChild||
u.body||u.head;d.parentNode.insertBefore(c,d);Ja(c,b);void 0!==a&&(c.src=a);return c},Na=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Oa=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Pa=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},z=function(a){f.setTimeout(a,0)},Ra=function(a){var b=
u.getElementById(a);if(b&&Qa(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(Qa(document.all[a][c],"id")==a)return document.all[a][c];return b},Qa=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Sa=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ta=function(a){var b=u.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=
[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Ua=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;g=g.parentElement}return null};var Va=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Xa=/:[0-9]+$/,Ya=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ab=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Za(a.protocol)||Za(f.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:f.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||f.location.hostname).replace(Xa,"").toLowerCase());var g=b,h,k=Za(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=$a(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Xa,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":h="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=h.split("/");0<=
la(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Ya(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Za=function(a){return a?a.replace(":","").toLowerCase():""},$a=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},bb=function(a){var b=u.createElement("a");
a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(Xa,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var cb=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},fb=function(a,b,c,d){var e=db(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=eb(e,function(g){return g.yb},b);if(1===e.length)return e[0].id;e=eb(e,function(g){return g.Sa},c);return e[0]?e[0].id:void 0}};
function hb(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=cb(b,e).indexOf(c)}
var kb=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var p=void 0,t=void 0,q;for(q in h)if(h.hasOwnProperty(q)){var r=h[q];if(null!=r)switch(q){case "secure":r&&(m+="; secure");break;case "domain":p=r;break;default:"path"==q&&(t=r),"expires"==q&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+q+"="+r}}if("auto"===p){for(var v=ib(),x=0;x<v.length;++x){var y="none"!=v[x]?v[x]:void 0;if(!jb(y,t)&&hb(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else p&&"none"!=p&&(m+="; domain="+p),k=!jb(p,t)&&hb(m,a,l)}return k};function eb(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function db(a,b){for(var c=[],d=cb(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),yb:1*k[0]||1,Sa:1*k[1]||1}))}}return c}
var lb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,mb=/(^|\.)doubleclick\.net$/i,jb=function(a,b){return mb.test(document.location.hostname)||"/"===b&&lb.test(a)},ib=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));a.push("none");return a};
var nb=[],ob={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},pb=function(a){return ob[a]},rb=/[\x00\x22\x26\x27\x3c\x3e]/g;var vb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,wb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},xb=function(a){return wb[a]};nb[7]=function(a){return String(a).replace(vb,xb)};
nb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(vb,xb)+"'"}};var Eb=/['()]/g,Fb=function(a){return"%"+a.charCodeAt(0).toString(16)};nb[12]=function(a){var b=
encodeURIComponent(String(a));Eb.lastIndex=0;return Eb.test(b)?b.replace(Eb,Fb):b};var Gb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Hb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Ib=function(a){return Hb[a]};nb[16]=function(a){return a};var Kb=[],Lb=[],Mb=[],Nb=[],Ob=[],Pb={},Qb,Rb,Sb,Tb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ub=function(a){var b=a["function"];if(!b)throw Error("Error: No function name given for function call.");var c=!!Pb[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?Pb[b](d):(void 0)(b,d)},Wb=function(a,b,c,d){c=c||[];d=d||fa;var e={},g;for(g in a)a.hasOwnProperty(g)&&(e[g]=Vb(a[g],b,c,d));
return e},Xb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=Pb[b];return c?c.priorityOverride||0:0},Vb=function(a,b,c,d){if(ka(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var g=1;g<a.length;g++)e.push(Vb(a[g],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=Kb[h];if(!k||b(k))return;c[h]=!0;try{var l=Wb(k,b,c,d);e=Ub(l);Sb&&(e=Sb.ff(e,l))}catch(y){d(y,h),e=!1}c[h]=!1;return e;case "map":e={};for(var m=
1;m<a.length;m+=2)e[Vb(a[m],b,c,d)]=Vb(a[m+1],b,c,d);return e;case "template":e=[];for(var n=!1,p=1;p<a.length;p++){var t=Vb(a[p],b,c,d);Rb&&(n=n||t===Rb.ob);e.push(t)}return Rb&&n?Rb.kf(e):e.join("");case "escape":e=Vb(a[1],b,c,d);if(Rb&&ka(a[1])&&"macro"===a[1][0]&&Rb.Nf(a))return Rb.Xf(e);e=String(e);for(var q=2;q<a.length;q++)nb[a[q]]&&(e=nb[a[q]](e));return e;case "tag":var r=a[1];if(!Nb[r])throw Error("Unable to resolve tag reference "+r+".");return e={wd:a[2],index:r};case "zb":var v={arg0:a[2],
arg1:a[3],ignore_case:a[5]};v["function"]=a[1];var x=Yb(v,b,c,d);a[4]&&(x=!x);return x;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Yb=function(a,b,c,d){try{return Qb(Wb(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var Zb=function(){var a=function(b){return{toString:function(){return b}}};return{Uc:a("convert_case_to"),Vc:a("convert_false_to"),Wc:a("convert_null_to"),Xc:a("convert_true_to"),Yc:a("convert_undefined_to"),ra:a("function"),ye:a("instance_name"),ze:a("live_only"),Ae:a("malware_disabled"),Bg:a("original_vendor_template_id"),Be:a("once_per_event"),md:a("once_per_load"),nd:a("setup_tags"),Ce:a("tag_id"),od:a("teardown_tags")}}();var $b=null,cc=function(a,b){function c(t){for(var q=0;q<t.length;q++)e[t[q]]=!0}var d=[],e=[];$b=ac(a,b||function(){});for(var g=0;g<Lb.length;g++){var h=Lb[g],k=bc(h);if(k){for(var l=h.add||[],m=0;m<l.length;m++)d[l[m]]=!0;c(h.block||[])}else null===k&&c(h.block||[])}for(var n=[],p=0;p<Nb.length;p++)d[p]&&!e[p]&&(n[p]=!0);return n},bc=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=$b(b[c]);if(!d)return null===d?null:!1}for(var e=a.unless||[],g=0;g<e.length;g++){var h=$b(e[g]);if(null===
h)return null;if(h)return!1}return!0},ac=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Yb(Mb[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var dc,ec=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Se&&(l["fix_"+m]=!0),l.xd=l.xd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=p.startTag();
if(q){var r=k.slice(q.length);if(r.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(v)return{tagName:q.tagName,D:q.D,content:v[1],length:v[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var r={};q[2].replace(e,function(v,x,y,w,B){var A=y||w||B||g.test(x)&&x||null,C=document.createElement("div");C.innerHTML=A;r[x]=C.textContent||C.innerText||A});return{tagName:q[1],D:r,Ya:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var r=p[q]();return r?(r.type=r.type||q,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.xd&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.Id=function(){return this[this.length-1]};v.wc=function(C){var D=this.Id();return D&&D.tagName&&D.tagName.toUpperCase()===C.toUpperCase()};v.ef=
function(C){for(var D=0,H;H=this[D];D++)if(H.tagName===C)return!0;return!1};var x=function(C){C&&"startTag"===C.type&&(C.Ya=q.test(C.tagName)||C.Ya);return C},y=t,w=function(){k="</"+v.pop().tagName+">"+k},B={startTag:function(C){var D=C.tagName;"TR"===D.toUpperCase()&&v.wc("TABLE")?(k="<TBODY>"+k,A()):l.Jg&&r.test(D)&&v.ef(D)?v.wc(D)?w():(k="</"+C.tagName+">"+k,A()):C.Ya||v.push(C)},endTag:function(C){v.Id()?l.vf&&!v.wc(C.tagName)?w():v.pop():l.vf&&(y(),A())}},A=function(){var C=k,D=x(y());k=C;if(D&&
B[D.type])B[D.type](D)};t=function(){A();return x(y())}}();return{append:function(q){k+=q},dg:t,Pg:function(q){for(var r;(r=t())&&(!q[r.type]||!1!==q[r.type](r)););},clear:function(){var q=k;k="";return q},Qg:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Wg="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Sg=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Xg=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,p;for(p in m.D){var t=m.D[p];
n+=" "+p+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Ya?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.Ig=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.Xe=a.Xe||!b[h]&&h;dc=a})();(function(){function a(){}function b(p){return void 0!==p&&null!==p}function c(p,t,q){var r,v=p&&p.length||0;for(r=0;r<v;r++)t.call(q,p[r],r)}function d(p,t,q){for(var r in p)p.hasOwnProperty(r)&&t.call(q,r,p[r])}function e(p,
t){d(t,function(q,r){p[q]=r});return p}function g(p,t){p=p||{};d(t,function(q,r){b(p[q])||(p[q]=r)});return p}function h(p){try{return m.call(p)}catch(q){var t=[];c(p,function(r){t.push(r)});return t}}var k={Ie:a,Je:a,Ke:a,Le:a,Te:a,Ue:function(p){return p},done:a,error:function(p){throw p;},hg:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function p(q,r,v){var x="data-ps-"+r;if(2===arguments.length){var y=q.getAttribute(x);return b(y)?String(y):y}b(v)&&""!==v?q.setAttribute(x,
v):q.removeAttribute(x)}function t(q,r){var v=q.ownerDocument;e(this,{root:q,options:r,Za:v.defaultView||v.parentWindow,xa:v,Db:dc("",{Se:!0}),bc:[q],Ec:"",Fc:v.createElement(q.nodeName),Wa:[],la:[]});p(this.Fc,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.la,arguments);for(var q;!this.xb&&this.la.length;)q=this.la.shift(),"function"===typeof q?this.af(q):this.Qc(q)};t.prototype.af=function(q){var r={type:"function",value:q.name||q.toString()};this.Bc(r);q.call(this.Za,this.xa);this.Md(r)};
t.prototype.Qc=function(q){this.Db.append(q);for(var r,v=[],x,y;(r=this.Db.dg())&&!(x=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.yg(v);x&&this.Bf(r);y&&this.Cf(r)};t.prototype.yg=function(q){var r=this.Ye(q);r.qd&&(r.nc=this.Ec+r.qd,this.Ec+=r.bg,this.Fc.innerHTML=r.nc,this.vg())};t.prototype.Ye=function(q){var r=this.bc.length,v=[],x=[],y=[];c(q,function(w){v.push(w.text);if(w.D){if(!/^noscript$/i.test(w.tagName)){var B=
r++;x.push(w.text.replace(/(\/?>)/," data-ps-id="+B+" $1"));"ps-script"!==w.D.id&&"ps-style"!==w.D.id&&y.push("atomicTag"===w.type?"":"<"+w.tagName+" data-ps-proxyof="+B+(w.Ya?" />":">"))}}else x.push(w.text),y.push("endTag"===w.type?w.text:"")});return{Yg:q,raw:v.join(""),qd:x.join(""),bg:y.join("")}};t.prototype.vg=function(){for(var q,r=[this.Fc];b(q=r.shift());){var v=1===q.nodeType;if(!v||!p(q,"proxyof")){v&&(this.bc[p(q,"id")]=q,p(q,"id",null));var x=q.parentNode&&p(q.parentNode,"proxyof");
x&&this.bc[x].appendChild(q)}r.unshift.apply(r,h(q.childNodes))}};t.prototype.Bf=function(q){var r=this.Db.clear();r&&this.la.unshift(r);q.src=q.D.src||q.D.Cg;q.src&&this.Wa.length?this.xb=q:this.Bc(q);var v=this;this.xg(q,function(){v.Md(q)})};t.prototype.Cf=function(q){var r=this.Db.clear();r&&this.la.unshift(r);q.type=q.D.type||q.D.Dg||"text/css";this.zg(q);r&&this.write()};t.prototype.zg=function(q){var r=this.$e(q);this.Lf(r);q.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=q.content:
r.appendChild(this.xa.createTextNode(q.content)))};t.prototype.$e=function(q){var r=this.xa.createElement(q.tagName);r.setAttribute("type",q.type);d(q.D,function(v,x){r.setAttribute(v,x)});return r};t.prototype.Lf=function(q){this.Qc('<span id="ps-style"/>');var r=this.xa.getElementById("ps-style");r.parentNode.replaceChild(q,r)};t.prototype.Bc=function(q){q.Tf=this.la;this.la=[];this.Wa.unshift(q)};t.prototype.Md=function(q){q!==this.Wa[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Wa.shift(),this.write.apply(this,q.Tf),!this.Wa.length&&this.xb&&(this.Bc(this.xb),this.xb=null))};t.prototype.xg=function(q,r){var v=this.Ze(q),x=this.og(v),y=this.options.Ie;q.src&&(v.src=q.src,this.lg(v,x?y:function(){r();y()}));try{this.Kf(v),q.src&&!x||r()}catch(w){this.options.error(w),r()}};t.prototype.Ze=function(q){var r=this.xa.createElement(q.tagName);d(q.D,function(v,x){r.setAttribute(v,x)});q.content&&(r.text=q.content);return r};t.prototype.Kf=function(q){this.Qc('<span id="ps-script"/>');
var r=this.xa.getElementById("ps-script");r.parentNode.replaceChild(q,r)};t.prototype.lg=function(q,r){function v(){q=q.onload=q.onreadystatechange=q.onerror=null}var x=this.options.error;e(q,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+q.src};v();x(y);r()}})};t.prototype.og=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.hg&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function p(){var x=r.shift(),y;x&&(y=x[x.length-1],y.Je(),x.stream=t.apply(null,x),y.Ke())}function t(x,y,w){function B(H){H=w.Ue(H);v.write(H);w.Le(H)}v=new n(x,w);v.id=q++;v.name=w.name||v.id;var A=x.ownerDocument,C={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return B(h(arguments).join(""))},writeln:function(){return B(h(arguments).join("")+"\n")}});var D=v.Za.onerror||a;v.Za.onerror=function(H,N,R){w.error({Mg:H+
" - "+N+":"+R});D.apply(v.Za,arguments)};v.write(y,function(){e(A,C);v.Za.onerror=D;w.done();v=null;p()});return v}var q=0,r=[],v=null;return e(function(x,y,w){"function"===typeof w&&(w={done:w});w=g(w,k);x=/^#/.test(x)?l.document.getElementById(x.substr(1)):x.Kg?x[0]:x;var B=[x,y,w];x.Wf={cancel:function(){B.stream?B.stream.abort():B[1]=a}};w.Te(B);r.push(B);v||p();return x.Wf},{streams:{},Og:r,Eg:n})}();ec=l.postscribe}})();var rc={},sc=null,tc=Math.random();rc.m="GTM-PRTJL3";rc.sb="430";var uc="www.googletagmanager.com/gtm.js";var vc=uc,wc=null,xc=null,yc=null,zc="//www.googletagmanager.com/a?id="+rc.m+"&cv=442",Ac={},Bc={},Cc=function(){var a=sc.sequence||0;sc.sequence=a+1;return a};var E=function(a,b,c,d){return(2===Dc()||d||"http:"!=f.location.protocol?a:b)+c},Dc=function(){var a=La(),b;if(1===a)a:{var c=vc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=u.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var Ec=!1;var Ic={},Jc=function(a){Ic.GTM=Ic.GTM||[];Ic.GTM[a]=!0};
var Kc=function(){return"&tc="+Nb.filter(function(a){return a}).length},Tc=function(){Lc&&(f.clearTimeout(Lc),Lc=void 0);void 0===Mc||Nc[Mc]&&!Oc||(Pc[Mc]||Qc.Pf()||0>=Rc--?(Jc(1),Pc[Mc]=!0):(Qc.fg(),Na(Sc()),Nc[Mc]=!0,Oc=""))},Sc=function(){var a=Mc;if(void 0===a)return"";for(var b,c=[],d=Ic.GTM||[],e=0;e<d.length;e++)d[e]&&(c[Math.floor(e/6)]^=1<<e%6);for(var g=0;g<c.length;g++)c[g]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(c[g]||0);b=c.join("");return[Uc,Nc[a]?"":
"&es=1",Vc[a],b?"&u="+b:"",Kc(),Oc,"&z=0"].join("")},Wc=function(){return[zc,"&v=3&t=t","&pid="+oa(),"&rv="+rc.sb].join("")},Xc="0.005000">Math.random(),Uc=Wc(),Yc=function(){Uc=Wc()},Nc={},Oc="",Mc=void 0,Vc={},Pc={},Lc=void 0,Qc=function(a,b){var c=0,d=0;return{Pf:function(){if(c<a)return!1;ua()-d>=b&&(c=0);return c>=a},fg:function(){ua()-d>=b&&(c=0);c++;d=ua()}}}(2,1E3),Rc=1E3,Zc=function(a,b){if(Xc&&!Pc[a]&&Mc!==a){Tc();Mc=a;Oc="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):
"*";Vc[a]="&e="+c+"&eid="+a;Lc||(Lc=f.setTimeout(Tc,500))}},$c=function(a,b,c){if(Xc&&!Pc[a]&&b){a!==Mc&&(Tc(),Mc=a);var d=c+String(b[Zb.ra]||"").replace(/_/g,"");Oc=Oc?Oc+"."+d:"&tr="+d;Lc||(Lc=f.setTimeout(Tc,500));2022<=Sc().length&&Tc()}};var ad=new va,bd={},cd={},gd={name:"dataLayer",set:function(a,b){Fa(dd(a,b),bd);ed()},get:function(a){return fd(a,2)},reset:function(){ad=new va;bd={};ed()}},fd=function(a,b){if(2!=b){var c=ad.get(a);if(Xc){var d=hd(a);c!==d&&Jc(5)}return c}return hd(a)},hd=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:jd(d)},jd=function(a){for(var b=bd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var md=function(a,b){cd.hasOwnProperty(a)||(ad.set(a,b),Fa(dd(a,b),bd),ed())},dd=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c},ed=function(a){pa(cd,function(b,c){ad.set(b,c);Fa(dd(b,void 0),bd);Fa(dd(b,c),bd);a&&delete cd[b]})};var nd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),od={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},pd={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]};
var rd=function(a){var b=fd("gtm.whitelist");b&&Jc(9);var c=b&&Aa(sa(b),od),d=fd("gtm.blacklist");d||(d=fd("tagTypeBlacklist"))&&Jc(3);d?Jc(8):d=[];
qd()&&(d=sa(d),d.push("nonGooglePixels","nonGoogleScripts"));0<=la(sa(d),"google")&&Jc(2);var e=d&&Aa(sa(d),pd),g={};return function(h){var k=h&&h[Zb.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];var l=Bc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>la(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>la(c,l[p])){Jc(11);
n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=la(e,k);if(q)t=q;else{var r;b:{for(var v=l||[],x=new va,y=0;y<e.length;y++)x.set(e[y],!0);for(var w=0;w<v.length;w++)if(x.get(v[w])){r=!0;break b}r=!1}var B=r;B&&Jc(10);t=B}}return g[k]=!m||t}},qd=function(){return nd.test(f.location&&f.location.hostname)};var sd={ff:function(a,b){b[Zb.Uc]&&"string"===typeof a&&(a=1==b[Zb.Uc]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Zb.Wc)&&null===a&&(a=b[Zb.Wc]);b.hasOwnProperty(Zb.Yc)&&void 0===a&&(a=b[Zb.Yc]);b.hasOwnProperty(Zb.Xc)&&!0===a&&(a=b[Zb.Xc]);b.hasOwnProperty(Zb.Vc)&&!1===a&&(a=b[Zb.Vc]);return a}};var td={active:!0,isWhitelisted:function(){return!0}},ud=function(a){var b=sc.zones;!b&&a&&(b=sc.zones=a());return b};var vd=!1,wd=0,xd=[];function yd(a){if(!vd){var b=u.createEventObject,c="complete"==u.readyState,d="interactive"==u.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){vd=!0;for(var e=0;e<xd.length;e++)z(xd[e])}xd.push=function(){for(var g=0;g<arguments.length;g++)z(arguments[g]);return 0}}}function zd(){if(!vd&&140>wd){wd++;try{u.documentElement.doScroll("left"),yd()}catch(a){f.setTimeout(zd,50)}}}var Ad=function(a){vd?a():xd.push(a)};var Bd=function(){function a(d){return!ja(d)||0>d?0:d}if(!sc._li&&f.performance&&f.performance.timing){var b=f.performance.timing.navigationStart,c=ja(gd.get("gtm.start"))?gd.get("gtm.start"):0;sc._li={cst:a(c-b),cbt:a(xc-b)}}};var Fd=!1,Gd=function(){return f.GoogleAnalyticsObject&&f[f.GoogleAnalyticsObject]},Hd=!1;
var Id=function(a){f.GoogleAnalyticsObject||(f.GoogleAnalyticsObject=a||"ga");var b=f.GoogleAnalyticsObject;if(f[b])f.hasOwnProperty(b)||Jc(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);f[b]=c}Bd();return f[b]},Jd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Gd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Ld=function(){},Kd=function(){return f.GoogleAnalyticsObject||"ga"},Md=!1;var Td=function(a){};function Sd(a,b){a.containerId=rc.m;var c={type:"GENERIC",value:a};b.length&&(c.trace=b);return c};function Ud(a,b,c,d,e){var g=Nb[a],h=Vd(a,b,c,d,e);if(!h)return null;var k=Vb(g[Zb.nd],d.fa,[],fa);if(k&&k.length){var l=k[0];h=Ud(l.index,b,{I:h,O:1===l.wd?c.terminate:h,terminate:c.terminate},d,e)}return h}
function Vd(a,b,c,d,e){function g(){if(h[Zb.Ae])l();else{var y=Wb(h,d.fa,[],function(B){Jc(6);Td(B)}),w=!1;y.vtp_gtmOnSuccess=function(){if(!w){w=!0;$c(d.id,Nb[a],"5");k()}};y.vtp_gtmOnFailure=function(){if(!w){w=!0;$c(d.id,Nb[a],"6");l()}};y.vtp_gtmTagId=h.tag_id;$c(d.id,h,"1");try{Ub(y)}catch(B){Td(B);$c(d.id,h,"7");w||(w=!0,l())}}}var h=Nb[a],k=c.I,l=c.O,m=c.terminate;if(d.fa(h))return null;var n=Vb(h[Zb.od],d.fa,[],fa);if(n&&n.length){var p=n[0],t=Ud(p.index,b,{I:k,O:l,terminate:m},d,e);if(!t)return null;
k=t;l=2===p.wd?m:t}if(h[Zb.md]||h[Zb.Be]){var q=h[Zb.md]?Ob:b,r=k,v=l;if(!q[a]){g=xa(g);var x=Wd(a,q,g);k=x.I;l=x.O}return function(){q[a](r,v)}}return g}function Wd(a,b,c){var d=[],e=[];b[a]=Xd(d,e,c);return{I:function(){b[a]=Yd;for(var g=0;g<d.length;g++)d[g]()},O:function(){b[a]=Zd;for(var g=0;g<e.length;g++)e[g]()}}}function Xd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Yd(a){a()}function Zd(a,b){b()};function $d(a){var b=0,c=0,d=!1;return{add:function(){c++;return xa(function(){b++;d&&b>=c&&a()})},Qe:function(){d=!0;b>=c&&a()}}}var ce=function(a){for(var b=$d(a.callback),c=[],d=[],e=0;e<Nb.length;e++)if(a.Ua[e]){var g=Nb[e];var h=b.add();try{var k=Ud(e,c,{I:h,O:h,terminate:h},a,e);k?d.push({Wd:e,b:Xb(g),uf:k}):(ae(e,a),h())}catch(m){h()}}b.Qe();d.sort(be);for(var l=0;l<d.length;l++)d[l].uf();return 0<d.length};
function be(a,b){var c,d=b.b,e=a.b;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.Wd,k=b.Wd;g=h>k?1:h<k?-1:0}return g}function ae(a,b){if(!Xc)return;var c=function(d){var e=b.fa(Nb[d])?"3":"4",g=Vb(Nb[d][Zb.nd],b.fa,[],fa);g&&g.length&&c(g[0].index);$c(b.id,Nb[d],e);var h=Vb(Nb[d][Zb.od],b.fa,[],fa);h&&h.length&&c(h[0].index)};c(a);}
var de=!1,ee=function(a,b,c,d){if("gtm.js"==b){if(de)return!1;de=!0}Zc(a,b);var e=rd(c),g={id:a,name:b,callback:d||fa,fa:e,Ua:[]};g.Ua=cc(e,function(n){Td(n)});var h=ce(g);"gtm.js"!==b&&"gtm.sync"!==b||Ld();if(!h)return h;for(var k={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},l=0;l<
g.Ua.length;l++)if(g.Ua[l]){var m=Nb[l];if(m&&!k[m[Zb.ra]])return!0}return!1};var F={Ob:"event_callback",Qb:"event_timeout"};var ge={};var he=/[A-Z]+/,ie=/\s/,je=function(a){if(ia(a)&&(a=ta(a),!ie.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(he.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],da:d}}}}},le=function(a){for(var b={},c=0;c<a.length;++c){var d=je(a[c]);d&&(b[d.id]=d)}ke(b);var e=[];pa(b,function(g,h){e.push(h)});return e};
function ke(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.da[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var me=null,ne={},oe={},qe,re=function(a,b){var c={event:a};b&&(c.eventModel=Fa(b),b[F.Ob]&&(c.eventCallback=b[F.Ob]),b[F.Qb]&&(c.eventTimeout=b[F.Qb]));return c};
var we={config:function(a){},event:function(a){var b=a[1];if(ia(b)&&!(3<a.length)){var c;if(2<
a.length){if(!Ea(a[2]))return;c=a[2]}var d=re(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2];ge[b]||(ge[b]=[]);ge[b].push(c)}},set:function(a){var b;2==a.length&&Ea(a[1])?b=Fa(a[1]):3==a.length&&ia(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Fa(b),b.event="gtag.set",b._clear=!0,b}},xe={policy:!0};var ye=function(){return!1};var Ee=function(a){if(De(a))return a;this.ug=a};Ee.prototype.Af=function(){return this.ug};var De=function(a){return!a||"object"!==Ca(a)||Ea(a)?!1:"getUntrustedUpdateValue"in a};Ee.prototype.getUntrustedUpdateValue=Ee.prototype.Af;var Fe=!1,Ge=[];function He(){if(!Fe){Fe=!0;for(var a=0;a<Ge.length;a++)z(Ge[a])}}var Ie=function(a){Fe?z(a):Ge.push(a)};var Je=[],Ke=!1;function Le(a){var b=a.eventCallback,c=xa(function(){ha(b)&&z(function(){b(rc.m)})}),d=a.eventTimeout;d&&f.setTimeout(c,Number(d));return c}
var Me=function(a){return f["dataLayer"].push(a)},Oe=function(a){var b=a._clear;pa(a,function(g,h){"_clear"!==g&&(b&&md(g,void 0),md(g,h))});var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Cc(),a["gtm.uniqueEventId"]=d,md("gtm.uniqueEventId",d));yc=c;var e=Ne(a);yc=null;if(!wc){wc=a["gtm.start"];}return e};
function Ne(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=sc.zones;d=e?e.checkState(rc.m,c):td;if(!d.active)return!1;var g=Le(a);return ee(c,b,d.isWhitelisted,g)?!0:!1}
var Pe=function(){for(var a=!1;!Ke&&0<Je.length;){Ke=!0;delete bd.eventModel;ed();var b=Je.shift();if(null!=b){var c=De(b);if(c){var d=b;b=De(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=fd(h,1);if(ka(k)||Ea(k))k=Fa(k);cd[h]=k}}try{if(ha(b))try{b.call(gd)}catch(v){}else if(ka(b)){var l=b;if(ia(l[0])){var m=
l[0].split("."),n=m.pop(),p=l.slice(1),t=fd(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,p)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{if(b.length&&ia(b[0])){var r=we[b[0]];if(r&&(!c||!xe[b[0]])){b=r(b);break a}}b=void 0}if(!b){Ke=!1;continue}}a=Oe(b)||a}}finally{c&&ed(!0)}}Ke=!1}
return!a},Qe=function(){var a=Pe();try{var b=rc.m,c=f["dataLayer"].hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}}catch(g){}return a},Re=function(){var a=Ia("dataLayer",[]),b=Ia("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ad(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ie(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var d;
if(0<sc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Ee(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);Je.push.apply(Je,d);if(300<this.length)for(Jc(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Pe()&&h};Je.push.apply(Je,a.slice(0));z(Qe)};var Te=function(a){return Se?u.querySelectorAll(a):null},Ue=function(a,b){if(!Se)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!u.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Ve=!1;if(u.querySelectorAll)try{var We=u.querySelectorAll(":root");We&&1==We.length&&We[0]==u.documentElement&&(Ve=!0)}catch(a){}var Se=Ve;var Xe;var tf={};tf.ob=new String("undefined");
var uf=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===tf.ob?b:a[d]);return c.join("")}};uf.prototype.toString=function(){return this.resolve("undefined")};uf.prototype.valueOf=uf.prototype.toString;tf.De=uf;tf.$b={};tf.kf=function(a){return new uf(a)};var vf={};tf.gg=function(a,b){var c=Cc();vf[c]=[a,b];return c};tf.td=function(a){var b=a?0:1;return function(c){var d=vf[c];if(d&&"function"===typeof d[b])d[b]();vf[c]=void 0}};tf.Nf=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};tf.Xf=function(a){if(a===tf.ob)return a;var b=Cc();tf.$b[b]=a;return'google_tag_manager["'+rc.m+'"].macro('+b+")"};tf.Rf=function(a,b,c){a instanceof tf.De&&(a=a.resolve(tf.gg(b,c)),b=fa);return{nc:a,I:b}};var wf=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||Qa(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return d},xf=function(a){sc.hasOwnProperty("autoEventsSettings")||(sc.autoEventsSettings={});var b=sc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},
yf=function(a,b,c){xf(a)[b]=c},zf=function(a,b,c,d){var e=xf(a),g=wa(e,b,d);e[b]=c(g)},Af=function(a,b,c){var d=xf(a);return wa(d,b,c)};var Bf=function(){for(var a=Ga.userAgent+(u.cookie||"")+(u.referrer||""),b=a.length,c=f.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(ua()/1E3)].join(".")},Ef=function(a,b,c,d){var e=Cf(b);return fb(a,e,Df(c),d)},Cf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Df=function(a){if(!a||
"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Ff(a,b){var c=""+Cf(a),d=Df(b);1<d&&(c+="-"+d);return c};var Gf=["1"],Hf={},Lf=function(a,b,c,d){var e=If(a);Hf[e]||Jf(e,b,c)||(Kf(e,Bf(),b,c,d),Jf(e,b,c))};function Kf(a,b,c,d,e){var g;g=["1",Ff(d,c),b].join(".");kb(a,g,c,d,0==e?void 0:new Date(ua()+1E3*(void 0==e?7776E3:e)))}function Jf(a,b,c){var d=Ef(a,b,c,Gf);d&&(Hf[a]=d);return d}function If(a){return(a||"_gcl")+"_au"};var Mf=function(){for(var a=[],b=u.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({Mc:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].Mc]||(g[a[h].Mc]=[]),g[a[h].Mc].push({timestamp:k[1],xf:k[2]}))}return g};function Nf(){for(var a=Of,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Pf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Of,Qf,Rf=function(a){Of=Of||Pf();Qf=Qf||Nf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Of[l],Of[m],Of[n],Of[p])}return b.join("")},Sf=function(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Qf[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Of=Of||Pf();Qf=Qf||
Nf();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Tf;function Uf(a,b){if(!a||b===u.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Vf=function(){var a=Ia("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Wf=/(.*?)\*(.*?)\*(.*)/,Xf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Yf=/^(?:www\.|m\.|amp\.)+/,Zf=/([^?#]+)(\?[^#]*)?(#.*)?/,$f=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,bg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Rf(String(d))))}var e=b.join("*");return["1",ag(e),e].join("*")},ag=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Tf)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}Tf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Tf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},dg=function(){return function(a){var b=bb(f.location.href),c=b.search.replace("?",""),d=Ya(c,"_gl",!0)||"";a.query=cg(d)||{};var e=ab(b,"fragment").match($f);a.fragment=cg(e&&e[3]||
"")||{}}},cg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=Wf.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===ag(k,n)){l=!0;break a}l=!1}if(l){for(var p={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)p[t[q]]=Sf(t[q+1]);return p}}}}catch(r){}};
function eg(a,b,c){function d(m){var n=m,p=$f.exec(n),t=n;if(p){var q=p[2],r=p[4];t=p[1];r&&(t=t+q+r)}m=t;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Zf.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function fg(a,b,c){for(var d={},e={},g=Vf().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&Uf(k.domains,b)&&(k.fragment?ya(e,k.callback()):ya(d,k.callback()))}if(za(d)){var l=bg(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,t=0;t<n.length;t++){var q=n[t];if("_gl"===q.name){q.setAttribute("value",l);p=!0;break}}if(!p){var r=u.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=eg(l,a.action);Va.test(v)&&(a.action=v)}}}else gg(l,a,!1)}if(!c&&za(e)){var x=bg(e);gg(x,a,!0)}}function gg(a,b,c){if(b.href){var d=eg(a,b.href,void 0===c?!1:c);Va.test(d)&&(b.href=d)}}
var hg=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||fg(e,e.hostname,!1)}}catch(h){}},ig=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=ab(bb(b.action),"host");fg(b,c,!0)}}catch(d){}},jg=function(a,b,c,d){var e=Vf();e.init||(Oa(u,"mousedown",hg),Oa(u,"keyup",hg),Oa(u,"submit",ig),e.init=!0);var g={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};Vf().decorators.push(g)},kg=function(){var a=u.location.hostname,b=Xf.exec(u.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}return a.replace(Yf,"")===e.replace(Yf,"")},lg=function(a,b){return!1===a?!1:a||b||kg()};var mg=/^\w+$/,ng=/^[\w-]+$/,og=/^~?[\w-]+$/,pg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha"};function qg(a){return a&&"string"==typeof a&&a.match(mg)?a:"_gcl"}var sg=function(){var a=bb(f.location.href),b=ab(a,"query",!1,void 0,"gclid"),c=ab(a,"query",!1,void 0,"gclsrc"),d=ab(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ya(e,"gclid",void 0);c=c||Ya(e,"gclsrc",void 0)}return rg(b,c,d)};
function rg(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(ng))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha")}c&&e(c,"dc");return d}
function tg(a,b,c){function d(p,t){var q=ug(p,e);q&&kb(q,t,h,g,l,!0)}b=b||{};var e=qg(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Jd?7776E3:b.Jd;c=c||ua();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(p){return["GCL",m,p].join(".")};a.aw&&(!0===b.$g?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]))}
var ug=function(a,b){var c=pg[a];if(void 0!==c)return b+c},vg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||0)};function wg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var xg=function(a,b,c,d,e){if(ka(b)){var g=qg(e);jg(function(){for(var h={},k=0;k<a.length;++k){var l=ug(a[k],g);if(l){var m=cb(l,u.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},yg=function(a){return a.filter(function(b){return og.test(b)})},zg=function(a){for(var b=["aw","dc"],c=qg(a&&a.prefix),d={},e=0;e<b.length;e++)pg[b[e]]&&(d[b[e]]=pg[b[e]]);pa(d,function(g,h){var k=cb(c+h,u.cookie);if(k.length){var l=k[0],m=vg(l),n={};n[g]=[wg(l)];tg(n,a,m)}})};var Ag=/^\d+\.fls\.doubleclick\.net$/;function Bg(a){var b=bb(f.location.href),c=ab(b,"host",!1);if(c&&c.match(Ag)){var d=ab(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Cg(a,b){if("aw"==a||"dc"==a){var c=Bg("gcl"+a);if(c)return c.split(".")}var d=qg(b);if("_gcl"==d){var e;e=sg()[a]||[];if(0<e.length)return e}var g=ug(a,d),h;if(g){var k=[];if(u.cookie){var l=cb(g,u.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=wg(l[m]);n&&-1===la(k,n)&&k.push(n)}h=yg(k)}else h=k}else h=k}else h=[];return h}
var Dg=function(){var a=Bg("gac");if(a)return decodeURIComponent(a);var b=Mf(),c=[];pa(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].xf);g=yg(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Eg=function(a,b,c,d,e){Lf(b,c,d,e);var g=Hf[If(b)],h=sg().dc||[],k=!1;if(g&&0<h.length){var l=sc.joined_au=sc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var p="https://adservice.google.com/ddm/regclk",t=p=p+"?gclid="+h[n]+"&auiddc="+g;Ga.sendBeacon&&Ga.sendBeacon(t)||Na(t);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var q=If(b),r=Hf[q];r&&Kf(q,r,c,d,e)}};var Fg;if(3===rc.sb.length)Fg="g";else{var Gg="G";Fg=Gg}
var Hg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Fg},Ig=function(a){var b=rc.m.split("-"),c=b[0].toUpperCase(),d=Hg[c]||"i",e=a&&"GTM"===c?b[1]:"",g;if(3===rc.sb.length){var h=void 0;g="2"+(h||"w")}else g="";return g+d+rc.sb+e};var Pg=!!f.MutationObserver,Qg=void 0,Rg=function(a){if(!Qg){var b=function(){var c=u.body;if(c)if(Pg)(new MutationObserver(function(){for(var e=0;e<Qg.length;e++)z(Qg[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Oa(c,"DOMNodeInserted",function(){d||(d=!0,z(function(){d=!1;for(var e=0;e<Qg.length;e++)z(Qg[e])}))})}};Qg=[];u.body?b():z(b)}Qg.push(a)};var ih=f.clearTimeout,jh=f.setTimeout,G=function(a,b,c){if(ye()){b&&z(b)}else return Ka(a,b,c)},kh=function(){return new Date},lh=function(){return f.location.href},mh=function(a){return ab(bb(a),"fragment")},nh=function(a){return $a(bb(a))},oh=function(a,b){return fd(a,b||2)},ph=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return Me(a)},qh=function(a,b){f[a]=b},L=function(a,b,c){b&&(void 0===f[a]||
c&&!f[a])&&(f[a]=b);return f[a]},rh=function(a,b,c){return cb(a,b,void 0===c?!0:!!c)},sh=function(a,b,c,d){var e={prefix:a,path:b,domain:c,Jd:d},g=sg();tg(g,e);zg(e)},th=function(a,b,c,d,e){var g=dg(),h=Vf();h.data||(h.data={query:{},fragment:{}},g(h.data));var k={},l=h.data;l&&(ya(k,l.query),ya(k,l.fragment));for(var m=qg(b),n=0;n<a.length;++n){var p=a[n];if(void 0!==pg[p]){var t=ug(p,m),q=k[t];if(q){var r=Math.min(vg(q),ua()),v;b:{for(var x=r,y=cb(t,u.cookie),
w=0;w<y.length;++w)if(vg(y[w])>x){v=!0;break b}v=!1}v||kb(t,q,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var B={prefix:b,path:c,domain:d};tg(rg(k.gclid,k.gclsrc),B);},uh=function(a,b,c,d,e){xg(a,b,c,d,e);},vh=function(a,b){if(ye()){b&&z(b)}else Ma(a,b)},wh=function(a){return!!Af(a,
"init",!1)},xh=function(a){yf(a,"init",!0)},yh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":vc;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";b&&pa(b,function(e,g){g&&(d+="&"+e+"="+encodeURIComponent(g))});G(E("https://","http://",d))};
var Ah=tf.Rf;var Bh=new va;function Ch(a,b){function c(h){var k=bb(h),l=ab(k,"protocol"),m=ab(k,"host",!0),n=ab(k,"port"),p=ab(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,p]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function Dh(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ka(c)){for(var d=0;d<c.length;d++)if(Dh({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=la(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var p;var t=a.ignore_case?"i":void 0;try{var q=String(c)+t,r=Bh.get(q);r||(r=new RegExp(c,t),Bh.set(q,r));p=r.test(b)}catch(v){p=!1}return p;case "_sw":return 0==String(b).indexOf(String(c));
case "_um":return Ch(b,c)}return!1};var Fh=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Gh={},Hh=encodeURI,M=encodeURIComponent,Ih=Na;var Jh=function(a,b){if(!a)return!1;var c=ab(bb(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Kh=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};Gh.Of=function(){var a=!1;return a};var ti=function(a,b,c,d){this.n=a;this.t=b;this.p=c;this.d=d},ui=function(){this.c=1;this.e=[];this.p=null};function vi(a){var b=sc,c=b.gss=b.gss||{};return c[a]=c[a]||new ui}var wi=function(a,b){vi(a).p=b},xi=function(a){var b=vi(a),c=b.p;if(c){var d=b.e,e=[];b.e=[];var g=function(h){for(var k=0;k<h.length;k++)try{var l=h[k];l.d?(l.d=!1,e.push(l)):c(l.n,l.t,l.p)}catch(m){}};g(d);g(e)}};var zi=function(){var a=f.gaGlobal=f.gaGlobal||{};a.hid=a.hid||oa();return a.hid};var Oi=window,Pi=document,Qi=function(a){var b=Oi._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Oi["ga-disable-"+a])return!0;try{var c=Oi.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=cb("AMP_TOKEN",Pi.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Pi.getElementById("__gaOptOutExtension")?!0:!1};var Xi=function(a,b,c){Wi(a);var d=Math.floor(ua()/1E3);vi(a).e.push(new ti(b,d,c,void 0));xi(a)},Yi=function(a,b,c){Wi(a);var d=Math.floor(ua()/1E3);vi(a).e.push(new ti(b,d,c,!0))},Wi=function(a){if(1===vi(a).c){vi(a).c=2;var b=encodeURIComponent(a);Ka(("http:"!=f.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},$i=function(a,b){},Zi=function(a,b){};var W={a:{}};
W.a.jsm=["customScripts"],function(){(function(a){W.__jsm=a;W.__jsm.g="jsm";W.__jsm.h=!0;W.__jsm.b=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=L("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
W.a.sp=["google"],function(){(function(a){W.__sp=a;W.__sp.g="sp";W.__sp.h=!0;W.__sp.b=0})(function(a){var b=a.vtp_gtmOnFailure;Bd();G("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=L("google_trackConversion");if(ha(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Kh(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&
(e.value=a.vtp_eventValue),a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:Ig()})||b()}else b()},b)})}();W.a.c=["google"],function(){(function(a){W.__c=a;W.__c.g="c";W.__c.h=!0;W.__c.b=0})(function(a){return a.vtp_value})}();
W.a.e=["google"],function(){(function(a){W.__e=a;W.__e.g="e";W.__e.h=!0;W.__e.b=0})(function(){return yc})}();
W.a.f=["google"],function(){(function(a){W.__f=a;W.__f.g="f";W.__f.h=!0;W.__f.b=0})(function(a){var b=oh("gtm.referrer",1)||u.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ab(bb(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):nh(String(b)):String(b)})}();
W.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=wf(c,"gtm.click");ph(d)}}(function(b){W.__cl=b;W.__cl.g="cl";W.__cl.h=!0;W.__cl.b=0})(function(b){if(!wh("cl")){var c=L("document");Oa(c,"click",a,!0);xh("cl")}z(b.vtp_gtmOnSuccess)})}();W.a.k=["google"],function(){(function(a){W.__k=a;W.__k.g="k";W.__k.h=!0;W.__k.b=0})(function(a){return rh(a.vtp_name,oh("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();W.a.t=["google"],function(){(function(a){W.__t=a;W.__t.g="t";W.__t.h=!0;W.__t.b=0})(function(){return kh().getTime()})}();
W.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){W.__u=b;W.__u.g="u";W.__u.h=!0;W.__u.b=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:oh("gtm.url",1))||lh();var d=b[a("vtp_component")];if(!d||"URL"==d)return nh(String(c));var e=bb(String(c)),g;if("QUERY"==d&&b[a("vtp_multiQueryKeys")])a:{var h=b[a("vtp_queryKey")],k;k=ka(h)?h:String(h||"").replace(/\s+/g,"").split(",");for(var l=0;l<k.length;l++){var m=ab(e,"QUERY",void 0,void 0,
k[l]);if(null!=m){g=m;break a}}g=void 0}else g=ab(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0);return g})}();W.a.v=["google"],function(){(function(a){W.__v=a;W.__v.g="v";W.__v.h=!0;W.__v.b=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=oh(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();

W.a.ua=["google"],function(){var a,b=function(c){var d={},e={},g={},h={},k={};if(c.vtp_gaSettings){var l=c.vtp_gaSettings;Fa(Kh(l.vtp_fieldsToSet,"fieldName","value"),e);Fa(Kh(l.vtp_contentGroup,"index","group"),g);Fa(Kh(l.vtp_dimension,"index","dimension"),h);Fa(Kh(l.vtp_metric,"index","metric"),k);c.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=Fa(l);c=Fa(c,m)}Fa(Kh(c.vtp_fieldsToSet,"fieldName","value"),e);Fa(Kh(c.vtp_contentGroup,
"index","group"),g);Fa(Kh(c.vtp_dimension,"index","dimension"),h);Fa(Kh(c.vtp_metric,"index","metric"),k);var n=Id(c.vtp_functionName);if(ha(n)){var p="",t="";c.vtp_setTrackerName&&"string"==typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(t=c.vtp_trackerName,p=t+"."):(t="gtm"+Cc(),p=t+".");var q={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},r={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},v=function(K){var P=[].slice.call(arguments,0);P[0]=p+P[0];n.apply(window,P)},x=function(K,P){return void 0===P?P:K(P)},y=function(K,P){if(P)for(var ba in P)P.hasOwnProperty(ba)&&v("set",K+ba,P[ba])},w=function(){
var K=function(Wa,qb,Bb){if(!Ea(qb))return!1;for(var gb=wa(Object(qb),Bb,[]),pe=0;gb&&pe<gb.length;pe++)v(Wa,gb[pe]);return!!gb&&0<gb.length},P;c.vtp_useEcommerceDataLayer?P=oh("ecommerce",1):c.vtp_ecommerceMacroData&&(P=c.vtp_ecommerceMacroData.ecommerce);if(!Ea(P))return;P=Object(P);var ba=wa(e,"currencyCode",P.currencyCode);void 0!==ba&&v("set","&cu",ba);K("ec:addImpression",P,"impressions");if(K("ec:addPromo",P[P.promoClick?"promoClick":"promoView"],"promotions")&&P.promoClick){v("ec:setAction",
"promo_click",P.promoClick.actionField);return}for(var na="detail checkout checkout_option click add remove purchase refund".split(" "),X=0;X<na.length;X++){var Z=P[na[X]];if(Z){K("ec:addProduct",Z,"products");v("ec:setAction",na[X],Z.actionField);break}}},B=function(K,P,ba){var na=0;if(K)for(var X in K)if(K.hasOwnProperty(X)&&(ba&&q[X]||!ba&&void 0===q[X])){var Z=r[X]?ra(K[X]):K[X];"anonymizeIp"!=X||Z||(Z=void 0);P[X]=Z;na++}return na},
A={name:t};B(e,A,!0);n("create",c.vtp_trackingId||d.trackingId,A);v("set","&gtm",Ig(!0));c.vtp_enableRecaptcha&&v("require","recaptcha","recaptcha.js");(function(K,P){void 0!==c[P]&&v("set",K,c[P])})("nonInteraction","vtp_nonInteraction");y("contentGroup",g);y("dimension",h);y("metric",k);var C={};B(e,C,!1)&&v("set",C);var D;c.vtp_enableLinkId&&
v("require","linkid","linkid.js");v("set","hitCallback",function(){var K=e&&e.hitCallback;ha(K)&&K();c.vtp_gtmOnSuccess()});if("TRACK_EVENT"==c.vtp_trackType){c.vtp_enableEcommerce&&(v("require","ec","ec.js"),w());var H={hitType:"event",eventCategory:String(c.vtp_eventCategory||d.category),eventAction:String(c.vtp_eventAction||d.action),eventLabel:x(String,c.vtp_eventLabel||d.label),eventValue:x(qa,c.vtp_eventValue||d.value)};B(D,
H,!1);v("send",H);}else if("TRACK_SOCIAL"==c.vtp_trackType){}else if("TRACK_TRANSACTION"==c.vtp_trackType){}else if("TRACK_TIMING"==
c.vtp_trackType){}else if("DECORATE_LINK"==c.vtp_trackType){}else if("DECORATE_FORM"==c.vtp_trackType){}else if("TRACK_DATA"==c.vtp_trackType){}else{c.vtp_enableEcommerce&&(v("require","ec","ec.js"),w());if(c.vtp_doubleClick||"DISPLAY_FEATURES"==c.vtp_advertisingFeaturesType){var T=
"_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","displayfeatures",void 0,{cookieName:T})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==c.vtp_advertisingFeaturesType){var U="_dc_gtm_"+String(c.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");v("require","adfeatures",{cookieName:U})}D?v("send","pageview",D):v("send","pageview");}if(!a){var Y=c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";c.vtp_useInternalVersion&&!c.vtp_useDebugVersion&&(Y="internal/"+Y);a=!0;G(E("https:","http:","//www.google-analytics.com/"+Y,e&&e.forceSSL),function(){var K=Gd();K&&K.loaded||c.vtp_gtmOnFailure();},c.vtp_gtmOnFailure)}}else z(c.vtp_gtmOnFailure)};W.__ua=b;W.__ua.g="ua";W.__ua.h=!0;W.__ua.b=0}();


W.a.cid=["google"],function(){(function(a){W.__cid=a;W.__cid.g="cid";W.__cid.h=!0;W.__cid.b=0})(function(){return rc.m})}();
W.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha"];(function(b){W.__gclidw=b;W.__gclidw.g="gclidw";W.__gclidw.h=!0;W.__gclidw.b=100})(function(b){z(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=e,h=c,k=d;b.vtp_enableCrossDomainFeature&&(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||kg())&&th(a,g,h,k));sh(e,c,d);Eg(null,e,c,d);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&
b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");uh(a,m,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}})}();
W.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},g=function(m){var n=oh(e[m.vtp_varType],1);return void 0!==n?n:m.vtp_defaultValue},h=function(m,
n){if(!m)return!1;var p=l(lh()),t;t=ka(n.vtp_affiliatedDomains)?n.vtp_affiliatedDomains:String(n.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var q=[p],r=0;r<t.length;r++)if(t[r]instanceof RegExp){if(t[r].test(m))return!1}else{var v=t[r];if(0!=v.length){if(0<=l(m).indexOf(v))return!1;q.push(l(v))}}return!Jh(m,q)},k=/^https?:\/\//i,l=function(m){k.test(m)||(m="http://"+m);return ab(bb(m),"HOST",!0)};(function(m){W.__aev=m;W.__aev.g="aev";W.__aev.h=!0;W.__aev.b=0})(function(m){switch(m.vtp_varType){case "TAG_NAME":return oh("gtm.element",
1).tagName||m.vtp_defaultValue;case "TEXT":var n,p=oh("gtm.element",1),t=oh("event",1),q=Number(kh());a===p&&b===t&&c>q-250?n=d:(d=n=p?Sa(p):"",a=p,b=t);c=q;return n||m.vtp_defaultValue;case "URL":var r;a:{var v=String(oh("gtm.elementUrl",1)||m.vtp_defaultValue||""),x=bb(v);switch(m.vtp_component||"URL"){case "URL":r=v;break a;case "IS_OUTBOUND":r=h(v,m);break a;default:r=ab(x,m.vtp_component,m.vtp_stripWww,m.vtp_defaultPages,m.vtp_queryKey)}}return r;case "ATTRIBUTE":var y;if(void 0===m.vtp_attribute)y=
g(m);else{var w=oh("gtm.element",1);y=Qa(w,m.vtp_attribute)||m.vtp_defaultValue||""}return y;default:return g(m)}})}();

W.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=L("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){Bd();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Ig()},m=function(p){return function(t,q,r){var v="DATA_LAYER"==p?oh(r):k[q];v&&(l[t]=v)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country",
"vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(p){return{value:p.price,quantity:p.quantity,item_id:p.id}}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),
l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;b.push(l);a||(a=!0,G("//www.googleadservices.com/pagead/conversion_async.js",g(),e("//www.googleadservices.com/pagead/conversion_async.js")))};W.__awct=h;W.__awct.g="awct";W.__awct.h=!0;W.__awct.b=0}();

W.a.remm=["google"],function(){(function(a){W.__remm=a;W.__remm.g="remm";W.__remm.h=!0;W.__remm.b=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();W.a.smm=["google"],function(){(function(a){W.__smm=a;W.__smm.g="smm";W.__smm.h=!0;W.__smm.b=0})(function(a){var b=a.vtp_input,c=Kh(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();


W.a.hid=["google"],function(){(function(a){W.__hid=a;W.__hid.g="hid";W.__hid.h=!0;W.__hid.b=0})(function(){return tf.ob})}();

W.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=u.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Ja(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(t){z(h)}}}var b=function(d,e,g){Ad(function(){var h,k=sc;k.postscribe||(k.postscribe=ec);h=k.postscribe;var l={done:e},m=u.createElement("div");m.style.display="none";m.style.visibility="hidden";u.body.appendChild(m);try{h(m,d,l)}catch(n){z(g)}})};var c=function(d){if(u.body){var e=
d.vtp_gtmOnFailure,g=Ah(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.nc,k=g.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(u.body,Ta(h),k,e)()}else jh(function(){c(d)},
200)};W.__html=c;W.__html.g="html";W.__html.h=!0;W.__html.b=0}();W.a.dbg=["google"],function(){(function(a){W.__dbg=a;W.__dbg.g="dbg";W.__dbg.h=!0;W.__dbg.b=0})(function(){return!1})}();



var aj={};aj.macro=function(a){if(tf.$b.hasOwnProperty(a))return tf.$b[a]},aj.onHtmlSuccess=tf.td(!0),aj.onHtmlFailure=tf.td(!1);aj.dataLayer=gd;aj.callback=function(a){Ac.hasOwnProperty(a)&&ha(Ac[a])&&Ac[a]();delete Ac[a]};aj.Ve=function(){sc[rc.m]=aj;Bc=W.a;Rb=Rb||tf;Sb=sd};
aj.Jf=function(){sc=f.google_tag_manager=f.google_tag_manager||{};if(sc[rc.m]){var a=sc.zones;a&&a.unregisterChild(rc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)Kb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)Nb.push(e[g]);for(var h=b.predicates||[],k=0;k<h.length;k++)Mb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},t=0;t<
n.length;t++)p[n[t][0]]=Array.prototype.slice.call(n[t],1);Lb.push(p)}Pb=W;Qb=Dh;aj.Ve();Re();vd=!1;wd=0;if("interactive"==u.readyState&&!u.createEventObject||"complete"==u.readyState)yd();else{Oa(u,"DOMContentLoaded",yd);Oa(u,"readystatechange",yd);if(u.createEventObject&&u.documentElement.doScroll){var q=!0;try{q=!f.frameElement}catch(y){}q&&zd()}Oa(f,"load",yd)}Fe=!1;"complete"===u.readyState?He():Oa(f,"load",He);a:{if(!Xc)break a;f.setInterval(Yc,864E5);}xc=(new Date).getTime();}};(0,aj.Jf)();

})()