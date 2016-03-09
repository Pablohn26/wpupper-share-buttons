!function(a){"use strict";var b=function(c,d){var e=c.split("."),f=b.instantiate(),g=a,h=e.length,i=0;for(i;h>i;i++)g[e[i]]=h-1===i?f:g[e[i]]||{},g=g[e[i]];return"function"==typeof d&&d.call(null,g,jQuery),g};b.instantiate=function(){var a=function(){},b=function(){var b;return b=new a,b.start.apply(b,arguments),b};return a.prototype=b.prototype,b.prototype.start=function(){},b},a.WPUPPER=b}(window),function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(1)["default"],f=c(2)["default"];b.__esModule=!0;var g=c(3),h=e(g),i=c(17),j=f(i),k=c(5),l=f(k),m=c(4),n=e(m),o=c(18),p=e(o),q=c(19),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(2)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(4),g=c(5),h=e(g),i=c(6),j=c(14),k=c(16),l=e(k),m="4.0.5";b.VERSION=m;var n=7;b.COMPILER_REVISION=n;var o={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};b.REVISION_CHANGES=o;var p="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===p)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]}};var q=l["default"].log;b.log=q,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return a||0===a?!(!p(a)||0!==a.length):!0}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===n.call(a):!1};b.isArray=p},function(a,b){"use strict";function c(a,b){var e=b&&b.loc,f=void 0,g=void 0;e&&(f=e.start.line,g=e.start.column,a+=" - "+f+":"+g);for(var h=Error.prototype.constructor.call(this,a),i=0;i<d.length;i++)this[d[i]]=h[d[i]];Error.captureStackTrace&&Error.captureStackTrace(this,c),e&&(this.lineNumber=f,this.column=g)}b.__esModule=!0;var d=["description","fileName","lineNumber","message","name","number","stack"];c.prototype=new Error,b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a),i["default"](a),k["default"](a),m["default"](a),o["default"](a),q["default"](a),s["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultHelpers=d;var f=c(7),g=e(f),h=c(8),i=e(h),j=c(9),k=e(j),l=c(10),m=e(l),n=c(11),o=e(n),p=c(12),q=e(p),r=c(13),s=e(r)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(4),f=c(5),g=d(f);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,f){j&&(j.key=b,j.index=c,j.first=0===c,j.last=!!f,k&&(j.contextPath=k+b)),i+=d(a[b],{data:j,blockParams:e.blockParams([a[b],b],[k+b,null])})}if(!b)throw new g["default"]("Must pass iterator to #each");var d=b.fn,f=b.inverse,h=0,i="",j=void 0,k=void 0;if(b.data&&b.ids&&(k=e.appendContextPath(b.data.contextPath,b.ids[0])+"."),e.isFunction(a)&&(a=a.call(this)),b.data&&(j=e.createFrame(b.data)),a&&"object"==typeof a)if(e.isArray(a))for(var l=a.length;l>h;h++)h in a&&c(h,h,h===a.length-1);else{var m=void 0;for(var n in a)a.hasOwnProperty(n)&&(void 0!==m&&c(m,h-1),m=n,h++);void 0!==m&&c(m,h-1,!0)}return 0===h&&(i=f(this)),i})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(5),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("if",function(a,b){return d.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||d.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("lookup",function(a,b){return a&&a[b]})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("with",function(a,b){d.isFunction(a)&&(a=a.call(this));var c=b.fn;if(d.isEmpty(a))return b.inverse(this);var e=b.data;return b.data&&b.ids&&(e=d.createFrame(b.data),e.contextPath=d.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:e,blockParams:d.blockParams([a],[e&&e.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(15),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;c>f;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=r.COMPILER_REVISION;if(b!==c){if(c>b){var d=r.REVISION_CHANGES[c],e=r.REVISION_CHANGES[b];throw new q["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new q["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=o.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=b.VM.invokePartial.call(this,c,d,e);if(null==f&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),f=e.partials[e.name](d,e)),null!=f){if(e.indent){for(var g=f.split("\n"),h=0,i=g.length;i>h&&(g[h]||h+1!==i);h++)g[h]=e.indent+g[h];f=g.join("\n")}return f}throw new q["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(e,b,e.helpers,e.partials,g,i,h)}var f=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],g=f.data;d._setup(f),!f.partial&&a.useData&&(g=j(b,g));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=f.depths?b!==f.depths[0]?[b].concat(f.depths):f.depths:[b]),(c=k(a.main,c,e,f.depths||[],g,i))(b,f)}if(!b)throw new q["default"]("No environment passed to template");if(!a||!a.main)throw new q["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e={strict:function(a,b){if(!(b in a))throw new q["default"]('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;c>d;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:o.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=o.extend({},b,a)),c},noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){c.partial?(e.helpers=c.helpers,e.partials=c.partials,e.decorators=c.decorators):(e.helpers=e.merge(c.helpers,b.helpers),a.usePartial&&(e.partials=e.merge(c.partials,b.partials)),(a.usePartial||a.useDecorators)&&(e.decorators=e.merge(c.decorators,b.decorators)))},d._child=function(b,c,d,g){if(a.useBlockParams&&!d)throw new q["default"]("must pass block params");if(a.useDepths&&!g)throw new q["default"]("must pass parent depths");return f(e,b,a[b],c,0,d,g)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return g&&b!==g[0]&&(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function h(a,b,c){c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var d=void 0;if(c.fn&&c.fn!==i&&(c.data=r.createFrame(c.data),d=c.data["partial-block"]=c.fn,d.partials&&(c.partials=o.extend({},c.partials,d.partials))),void 0===a&&d&&(a=d),void 0===a)throw new q["default"]("The partial "+c.name+" could not be found");return a instanceof Function?a(b,c):void 0}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?r.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),o.extend(b,g)}return b}var l=c(1)["default"],m=c(2)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var n=c(4),o=l(n),p=c(5),q=m(p),r=c(3)},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())}])}),WPUPPER("SB.BuildComponents",function(a,b){a.create=function(a){a.findComponent("[data-component]",b.proxy(this,"_start"))},a._start=function(a){return"undefined"==typeof SB.Components?void console.warn("Component not defined in its structure."):void this._iterator(a)},a._iterator=function(a){var c;a.each(function(d,e){e=b(e),c=a.ucfirst(e.data("component")),this._callback(c,e)}.bind(this))},a._callback=function(a,b){var c=SB.Components[a];"function"==typeof c&&c.call(null,b)}},{}),function(a){a.prototype.byElement=function(a){return this.find('[data-element="'+a+'"]')},a.prototype.byAction=function(a){return this.find('[data-action="'+a+'"]')},a.prototype.byComponent=function(a){return this.find('[data-component="'+a+'"]')},a.prototype.getAjaxUrl=function(){return(window.WPUpperVars||{}).ajaxUrl},a.prototype.getLocale=function(){return(window.WPUpperVars||{}).WPLANG},a.prototype.findComponent=function(b,c){var d=a(this).find(b);return d.length&&"function"==typeof c&&c.call(null,d,a(this)),d.length},a.prototype.ucfirst=function(a){return a=a.replace(/(?:^|-)\w/g,function(a){return a.toUpperCase()}),a.replace(/-/g,"")},a.prototype.getTime=function(){return(new Date).getTime()},a.prototype.hashStr=function(a){var b,c=0,d=0;if(!a.length)return c;for(d;d<a.length;d++)b=a.charCodeAt(d),c=(c<<10)-c+b,c&=c;return Math.abs(c)}}(jQuery),function(){var a=Handlebars.template,b=WPUPPER.Templates=WPUPPER.Templates||{};b["fixed-left"]=a({1:function(a,b,c,d,e){var f,g,h=c.helperMissing,i="function",j=a.escapeExpression;return"\n"+(null!=(f=c["if"].call(b,null!=b?b.first:b,{name:"if",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:"")+'\n	<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-item "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.item_class||(null!=b?b.item_class:b))?g:h,typeof g===i?g.call(b,{name:"item_class",hash:{},data:e}):g))+'">\n		<a title="Tweet" rel="nofollow">\n		<i class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-icon-"+j((g=null!=(g=c.item_class||(null!=b?b.item_class:b))?g:h,typeof g===i?g.call(b,{name:"item_class",hash:{},data:e}):g))+'-buttons "></i>\n		</a>\n	</div>\n\n'},2:function(a,b,c,d,e){var f,g=c.helperMissing,h="function",i=a.escapeExpression;return'		<div class="'+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+" "+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+"-buttons "+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+'-fixed-left social-share">\n\n			<div class="'+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+"-item "+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+'-total-share wpusb-counter">\n				<div class="'+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+'-button">\n					<span>'+i((f=null!=(f=c.counter||(null!=b?b.counter:b))?f:g,typeof f===h?f.call(b,{name:"counter",hash:{},data:e}):f))+"</span>\n				</div>\n			</div>\n"},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f;return(null!=(f=c.each.call(b,b,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+'	<span class="wpusb-toggle"></span>\n</div>\n\n<button class="button" data-action="remove-counter"></button>'},useData:!0}),b["share-preview"]=a({1:function(a,b,c,d,e){var f,g,h=c.helperMissing,i="function",j=a.escapeExpression;return"\n"+(null!=(f=c["if"].call(b,null!=b?b.first:b,{name:"if",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:"")+'\n	<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-item "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.item_class||(null!=b?b.item_class:b))?g:h,typeof g===i?g.call(b,{name:"item_class",hash:{},data:e}):g))+'">\n		<a class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-button" title="'+j((g=null!=(g=c.item_title||(null!=b?b.item_title:b))?g:h,typeof g===i?g.call(b,{name:"item_title",hash:{},data:e}):g))+'">\n			<i class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-icon-"+j((g=null!=(g=c.item_class||(null!=b?b.item_class:b))?g:h,typeof g===i?g.call(b,{name:"item_class",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.layout||(null!=b?b.layout:b))?g:h,typeof g===i?g.call(b,{name:"layout",hash:{},data:e}):g))+'"></i>\n			<span class="wpusb-title">'+j((g=null!=(g=c.item_inside||(null!=b?b.item_inside:b))?g:h,typeof g===i?g.call(b,{name:"item_inside",hash:{},data:e}):g))+"</span>\n		</a>\n\n"+(null!=(f=c["if"].call(b,null!=b?b.has_counter:b,{name:"if",hash:{},fn:a.program(4,e,0),inverse:a.noop,data:e}))?f:"")+"	</div>\n\n"},2:function(a,b,c,d,e){var f,g=c.helperMissing,h="function",i=a.escapeExpression;return'		<div class="'+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+" "+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+"-"+i((f=null!=(f=c.layout||(null!=b?b.layout:b))?f:g,typeof f===h?f.call(b,{name:"layout",hash:{},data:e}):f))+" social-share "+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+'-preview">\n'},4:function(a,b,c,d,e){var f,g=c.helperMissing,h="function",i=a.escapeExpression;return'			<span class="'+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+'-count wpusb-counter">'+i((f=null!=(f=c.counter||(null!=b?b.counter:b))?f:g,typeof f===h?f.call(b,{name:"counter",hash:{},data:e}):f))+"</span>\n"},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f;return(null!=(f=c.each.call(b,b,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+'</div>\n<button class="button" data-action="remove-title"></button>\n<button class="button" data-action="remove-counter"></button>'},useData:!0}),b["square-plus"]=a({1:function(a,b,c,d,e){var f;return"\n"+(null!=(f=c["if"].call(b,null!=b?b.first:b,{name:"if",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:"")+"\n"+(null!=(f=c.unless.call(b,null!=b?b.first:b,{name:"unless",hash:{},fn:a.program(5,e,0),inverse:a.noop,data:e}))?f:"")},2:function(a,b,c,d,e){var f,g,h=c.helperMissing,i="function",j=a.escapeExpression;return'		<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+" "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.layout||(null!=b?b.layout:b))?g:h,typeof g===i?g.call(b,{name:"layout",hash:{},data:e}):g))+" social-share "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-preview">\n\n			<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-item "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-counter wpusb-counter">\n				<span class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-counter">'+j((g=null!=(g=c.counter||(null!=b?b.counter:b))?g:h,typeof g===i?g.call(b,{name:"counter",hash:{},data:e}):g))+'</span>\n				<span class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-text"></span>\n				<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-slash" data-slash="'+(null!=(g=null!=(g=c.slash||(null!=b?b.slash:b))?g:h,f=typeof g===i?g.call(b,{name:"slash",hash:{},data:e}):g)?f:"")+'"></div>\n			</div>\n\n			<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-item "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.item_class||(null!=b?b.item_class:b))?g:h,typeof g===i?g.call(b,{name:"item_class",hash:{},data:e}):g))+" "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-full "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-inside">\n				<a href="#" class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-link" title="'+j((g=null!=(g=c.item_title||(null!=b?b.item_title:b))?g:h,typeof g===i?g.call(b,{name:"item_title",hash:{},data:e}):g))+'">\n					<i class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-icon-"+j((g=null!=(g=c.item_class||(null!=b?b.item_class:b))?g:h,typeof g===i?g.call(b,{name:"item_class",hash:{},data:e}):g))+'-square-plus"></i>\n\n'+(null!=(f=c["if"].call(b,null!=b?b.inside:b,{name:"if",hash:{},fn:a.program(3,e,0),inverse:a.noop,data:e}))?f:"")+"				</a>\n			</div>\n\n"},3:function(a,b,c,d,e){var f;return'						<span class="wpusb-title" data-title="'+a.escapeExpression((f=null!=(f=c.item_name||(null!=b?b.item_name:b))?f:c.helperMissing,"function"==typeof f?f.call(b,{name:"item_name",hash:{},data:e}):f))+'"></span>\n'},5:function(a,b,c,d,e){var f,g=c.helperMissing,h="function",i=a.escapeExpression;return'\n			<div class="'+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+"-item "+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+"-"+i((f=null!=(f=c.item_class||(null!=b?b.item_class:b))?f:g,typeof f===h?f.call(b,{name:"item_class",hash:{},data:e}):f))+'">\n				<a href="#" class="'+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+'-link" title="'+i((f=null!=(f=c.item_title||(null!=b?b.item_title:b))?f:g,typeof f===h?f.call(b,{name:"item_title",hash:{},data:e}):f))+'">\n					<i class="'+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+"-icon-"+i((f=null!=(f=c.item_class||(null!=b?b.item_class:b))?f:g,typeof f===h?f.call(b,{name:"item_class",hash:{},data:e}):f))+'-square-plus"></i>\n				</a>\n			</div>\n\n'},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f;return(null!=(f=c.each.call(b,b,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+'</div>\n<button class="button" data-action="remove-title"></button>\n<button class="button" data-action="remove-counter"></button>'},useData:!0})}(),WPUPPER("SB.Application",function(a){a.init=function(a){SB.BuildComponents.create(a)}},{}),WPUPPER("SB.Components.SharePreview",function(a,b){a.prototype.start=function(a){this.preview=a,this.spinner=b(".ajax-spinner"),this.prefix=SB.vars.prefix,this.container=a.closest(".wpusb-wrap"),this.sort=this.container.byElement("sortable"),this.inputOrder=this.container.byElement("order"),this.layoutOptions=b(".layout-preview"),this.elements=b(".wpusb-select-item input"),this.contentBefore=b("#"+this.prefix+"-before:checked"),this.contentAfter=b("#"+this.prefix+"-after:checked"),this.init()},a.prototype.init=function(){this.addEventListener()},a.prototype.addEventListener=function(){this.layoutOptions.on("click",this._onClickLayout.bind(this)),this.elements.on("click",this._onClick.bind(this)),this.sort.sortable(this.sortOptions())},a.prototype._onClickLayout=function(a){"fixed-left"!==a.currentTarget.value&&(b(".layout-fixed, .wpusb-fixed").prop("checked",!1),this.contentAfter.length&&this.contentAfter.prop("checked",!0),this.contentBefore.length&&this.contentBefore.prop("checked",!0)),this._onClick()},a.prototype._onClick=function(a){this._update(),this._stop()},a.prototype.sortOptions=function(){return{opacity:.5,cursor:"move",axis:"x",tolerance:"pointer",items:"> td",placeholder:this.prefix+"-highlight",update:this._update.bind(this),stop:this._stop.bind(this)}},a.prototype._update=function(a,c){this.layoutPreview=b(".layout-preview:checked"),this.layout=this.layoutName(),this.itemsOrder=this.sort.sortable("toArray"),this.inputOrder.val(JSON.stringify(this.itemsOrder))},a.prototype._stop=function(a,c){this.itemsChecked=[],this.sort.find("input:checked").each(function(a,c){this.itemsChecked.push(b(c).val())}.bind(this)),this.request()},a.prototype.request=function(){this.spinner.css("visibility","visible");var a=b.proxy(this,"_done"),c=b.proxy(this,"_fail"),d={action:"share_preview",layout:this.layout,items:JSON.stringify(this.itemsOrder),checked:JSON.stringify(this.itemsChecked)},e=b.ajax({type:"POST",url:b.prototype.getAjaxUrl(),data:d,dataType:"json"});e.then(a,c)},a.prototype._done=function(a){this.spinner.css("visibility","hidden"),this.preview.html(this.render(a)),SB.Preview.create(this.preview)},a.prototype._fail=function(a,b){this.spinner.css("visibility","hidden"),console.warn(a)},a.prototype.render=function(a){return WPUPPER.Templates[this.templateName()].call(null,a)},a.prototype.layoutName=function(){var a=this.layoutPreview;return a[1]?b(a[1]).val():a.val()},a.prototype.templateName=function(){var a;switch(this.layout){case"square-plus":a="square-plus";break;case"fixed-left":a="fixed-left";break;default:a="share-preview"}return a}}),WPUPPER("SB.Components.ShareSettings",function(a,b){a.prototype.start=function(a){this.prefix=SB.vars.prefix,this.positionFixed=a.find("."+this.prefix+"-position-fixed"),this.positionCheck=this.positionFixed.find('input[type="checkbox"]'),this.layoutOptions=a.find("."+this.prefix+"-layout-options"),this.inputLayouts=a.find('input[type="radio"]'),this.layoutChecked=this.layoutOptions.find("input:checked"),this.layoutButtons=this.layoutOptions.find("#"+this.prefix+"-buttons"),this.contentBefore=a.find("#"+this.prefix+"-before:checked"),this.contentAfter=a.find("#"+this.prefix+"-after:checked"),this.contentFixed=a.find("#"+this.prefix+"-fixed"),this.before=a.find("#"+this.prefix+"-before"),this.after=a.find("#"+this.prefix+"-after"),this.init()},a.prototype.init=function(){this.addEventListener()},a.prototype.addEventListener=function(){this.before.on("change",this._beforeAfter.bind(this)),this.after.on("change",this._beforeAfter.bind(this)),this.positionCheck.on("change",this._onChangeFixed.bind(this)),this.inputLayouts.on("change",this._onChangeLayout.bind(this)),this.contentFixed.on("change",this._onChangeFixed.bind(this))},a.prototype._onChangeFixed=function(a){var b=this.layoutChecked.attr("id"),c=this.layoutOptions.find("#"+b);return a.currentTarget.checked?(this.placesAvaiable(!1,!0),this.layoutButtons.prop("checked",!0),void this.positionCheck.prop("checked",!0)):(this.placesAvaiable(!0,!1),c.prop("checked",!0),void this.positionCheck.prop("checked",!1))},a.prototype._onChangeLayout=function(a){a.currentTarget.value;this.positionCheck.is(":checked")&&(this.content(!0),this.contentFixed.prop("checked",!1),this.positionCheck.prop("checked",!1))},a.prototype._beforeAfter=function(a){this.positionCheck.prop("checked",!1),this.contentFixed.prop("checked",!1)},a.prototype.placesAvaiable=function(a,b){this.content(a),this.contentFixed.prop("checked",b)},a.prototype.content=function(a){(this.before.is(":checked")||this.after.is(":checked"))&&(this.after.prop("checked",a),this.before.prop("checked",a)),this.contentAfter.prop("checked",a),this.contentBefore.prop("checked",a)}}),WPUPPER("SB.Preview",function(a,b){a.create=function(a){this.locale=b.prototype.getLocale(),this.title=b('[data-action="remove-title"]'),this.counter=b('[data-action="remove-counter"]'),this.init()},a.init=function(){this.defineTextByLocale(),this.addEventListener()},a.addEventListener=function(){this.title.text(this.titleRemove),this.counter.text(this.counterRemove),this.title.on("click",this._onClickTitle.bind(this)),this.counter.on("click",this._onClickCounter.bind(this))},a._onClickTitle=function(a){a.preventDefault();var c=this.titleChangeText(this.title.text());this.title.text(c),b(".wpusb-title").toggle("fast")},a._onClickCounter=function(a){a.preventDefault();var c=this.counterChangeText(this.counter.text());this.counter.text(c),b(".wpusb-counter").toggle("fast")},a.counterChangeText=function(a){return a==this.counterRemove?this.counterInsert:this.counterRemove},a.titleChangeText=function(a){return a==this.titleRemove?this.titleInsert:this.titleRemove},a.defineTextByLocale=function(){switch(this.locale){case"pt_BR":this.titleRemove="Remover titúlo",this.counterRemove="Remover contador",this.titleInsert="Adicionar titúlo",this.counterInsert="Adicionar contador";break;case"es_ES":this.titleRemove="Retire del título",this.counterRemove="Retire contador",this.titleInsert="Añadir del título",this.counterInsert="Añadir contador";break;default:this.titleRemove="Remove title",this.counterRemove="Remove counter",this.titleInsert="Add title",this.counterInsert="Add counter"}}},{}),jQuery(function(a){var b=a("body");SB.vars={body:b,prefix:"wpusb"},SB.Application.init.apply(null,[b])});