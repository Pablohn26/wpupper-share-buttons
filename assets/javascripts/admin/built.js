!function(a,b){"use strict";var c=function(d,e){var f=d.split("."),g=c.instantiate(),h=a,i=f.length,j=0;for(j;j<i;j++)h[f[j]]=i-1===j?g:h[f[j]]||{},h=h[f[j]];return"function"==typeof e&&e.call(null,h,b,c.utils),h};c.instantiate=function(){var a=function(){},d=function(d){var e,f;return e=new a,e.$el=d,e.data=d.data(),e.elements={},f=d.find("[data-element]"),f.each(function(a,d){e.elements[c.utils.ucfirst(d.dataset.element)]=b(d)}),e.start.apply(e,arguments),e};return d.fn=d.prototype,a.prototype=d.fn,d.fn.start=function(){},d},c.utils={prefix:"wpusb",ucfirst:function(a){return a=a.replace(/(?:-)\w/g,function(a){return a.toUpperCase()}),a.replace(/-/g,"")},getAjaxUrl:function(){return(window.WPUSBVars||{}).ajaxUrl},getContext:function(){return(window.WPUSBVars||{}).context},getLocale:function(){return(window.WPUSBVars||{}).WPLANG},getPreviewTitles:function(){return(window.WPUSBVars||{}).previewTitles},getPathUrl:function(a){var b=decodeURIComponent(a);return b.split(/[?#]/)[0]},getTime:function(){return(new Date).getTime()},hashStr:function(a){var b,c=0,d=0;if(!a.length)return c;for(d;d<a.length;d++)b=a.charCodeAt(d),c=(c<<10)-c+b,c&=c;return Math.abs(c)},decodeUrl:function(a){return decodeURIComponent(a)}},a.WPUSB=c}(window,jQuery),function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Handlebars=b():a.Handlebars=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){"use strict";function d(){var a=new h.HandlebarsEnvironment;return n.extend(a,h),a.SafeString=j["default"],a.Exception=l["default"],a.Utils=n,a.escapeExpression=n.escapeExpression,a.VM=p,a.template=function(b){return p.template(b,a)},a}var e=c(1)["default"],f=c(2)["default"];b.__esModule=!0;var g=c(3),h=e(g),i=c(17),j=f(i),k=c(5),l=f(k),m=c(4),n=e(m),o=c(18),p=e(o),q=c(19),r=f(q),s=d();s.create=d,r["default"](s),s["default"]=s,b["default"]=s,a.exports=b["default"]},function(a,b){"use strict";b["default"]=function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=a[c]);return b["default"]=a,b},b.__esModule=!0},function(a,b){"use strict";b["default"]=function(a){return a&&a.__esModule?a:{"default":a}},b.__esModule=!0},function(a,b,c){"use strict";function d(a,b,c){this.helpers=a||{},this.partials=b||{},this.decorators=c||{},i.registerDefaultHelpers(this),j.registerDefaultDecorators(this)}var e=c(2)["default"];b.__esModule=!0,b.HandlebarsEnvironment=d;var f=c(4),g=c(5),h=e(g),i=c(6),j=c(14),k=c(16),l=e(k),m="4.0.5";b.VERSION=m;var n=7;b.COMPILER_REVISION=n;var o={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};b.REVISION_CHANGES=o;var p="[object Object]";d.prototype={constructor:d,logger:l["default"],log:l["default"].log,registerHelper:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple helpers");f.extend(this.helpers,a)}else this.helpers[a]=b},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,b){if(f.toString.call(a)===p)f.extend(this.partials,a);else{if("undefined"==typeof b)throw new h["default"]('Attempting to register a partial called "'+a+'" as undefined');this.partials[a]=b}},unregisterPartial:function(a){delete this.partials[a]},registerDecorator:function(a,b){if(f.toString.call(a)===p){if(b)throw new h["default"]("Arg not supported with multiple decorators");f.extend(this.decorators,a)}else this.decorators[a]=b},unregisterDecorator:function(a){delete this.decorators[a]}};var q=l["default"].log;b.log=q,b.createFrame=f.createFrame,b.logger=l["default"]},function(a,b){"use strict";function c(a){return k[a]}function d(a){for(var b=1;b<arguments.length;b++)for(var c in arguments[b])Object.prototype.hasOwnProperty.call(arguments[b],c)&&(a[c]=arguments[b][c]);return a}function e(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1}function f(a){if("string"!=typeof a){if(a&&a.toHTML)return a.toHTML();if(null==a)return"";if(!a)return a+"";a=""+a}return m.test(a)?a.replace(l,c):a}function g(a){return!a&&0!==a||!(!p(a)||0!==a.length)}function h(a){var b=d({},a);return b._parent=a,b}function i(a,b){return a.path=b,a}function j(a,b){return(a?a+".":"")+b}b.__esModule=!0,b.extend=d,b.indexOf=e,b.escapeExpression=f,b.isEmpty=g,b.createFrame=h,b.blockParams=i,b.appendContextPath=j;var k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},l=/[&<>"'`=]/g,m=/[&<>"'`=]/,n=Object.prototype.toString;b.toString=n;var o=function(a){return"function"==typeof a};o(/x/)&&(b.isFunction=o=function(a){return"function"==typeof a&&"[object Function]"===n.call(a)}),b.isFunction=o;var p=Array.isArray||function(a){return!(!a||"object"!=typeof a)&&"[object Array]"===n.call(a)};b.isArray=p},function(a,b){"use strict";function c(a,b){var e=b&&b.loc,f=void 0,g=void 0;e&&(f=e.start.line,g=e.start.column,a+=" - "+f+":"+g);for(var h=Error.prototype.constructor.call(this,a),i=0;i<d.length;i++)this[d[i]]=h[d[i]];Error.captureStackTrace&&Error.captureStackTrace(this,c),e&&(this.lineNumber=f,this.column=g)}b.__esModule=!0;var d=["description","fileName","lineNumber","message","name","number","stack"];c.prototype=new Error,b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a),i["default"](a),k["default"](a),m["default"](a),o["default"](a),q["default"](a),s["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultHelpers=d;var f=c(7),g=e(f),h=c(8),i=e(h),j=c(9),k=e(j),l=c(10),m=e(l),n=c(11),o=e(n),p=c(12),q=e(p),r=c(13),s=e(r)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("blockHelperMissing",function(b,c){var e=c.inverse,f=c.fn;if(b===!0)return f(this);if(b===!1||null==b)return e(this);if(d.isArray(b))return b.length>0?(c.ids&&(c.ids=[c.name]),a.helpers.each(b,c)):e(this);if(c.data&&c.ids){var g=d.createFrame(c.data);g.contextPath=d.appendContextPath(c.data.contextPath,c.name),c={data:g}}return f(b,c)})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(4),f=c(5),g=d(f);b["default"]=function(a){a.registerHelper("each",function(a,b){function c(b,c,f){j&&(j.key=b,j.index=c,j.first=0===c,j.last=!!f,k&&(j.contextPath=k+b)),i+=d(a[b],{data:j,blockParams:e.blockParams([a[b],b],[k+b,null])})}if(!b)throw new g["default"]("Must pass iterator to #each");var d=b.fn,f=b.inverse,h=0,i="",j=void 0,k=void 0;if(b.data&&b.ids&&(k=e.appendContextPath(b.data.contextPath,b.ids[0])+"."),e.isFunction(a)&&(a=a.call(this)),b.data&&(j=e.createFrame(b.data)),a&&"object"==typeof a)if(e.isArray(a))for(var l=a.length;h<l;h++)h in a&&c(h,h,h===a.length-1);else{var m=void 0;for(var n in a)a.hasOwnProperty(n)&&(void 0!==m&&c(m,h-1),m=n,h++);void 0!==m&&c(m,h-1,!0)}return 0===h&&(i=f(this)),i})},a.exports=b["default"]},function(a,b,c){"use strict";var d=c(2)["default"];b.__esModule=!0;var e=c(5),f=d(e);b["default"]=function(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new f["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("if",function(a,b){return d.isFunction(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||d.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("log",function(){for(var b=[void 0],c=arguments[arguments.length-1],d=0;d<arguments.length-1;d++)b.push(arguments[d]);var e=1;null!=c.hash.level?e=c.hash.level:c.data&&null!=c.data.level&&(e=c.data.level),b[0]=e,a.log.apply(a,b)})},a.exports=b["default"]},function(a,b){"use strict";b.__esModule=!0,b["default"]=function(a){a.registerHelper("lookup",function(a,b){return a&&a[b]})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerHelper("with",function(a,b){d.isFunction(a)&&(a=a.call(this));var c=b.fn;if(d.isEmpty(a))return b.inverse(this);var e=b.data;return b.data&&b.ids&&(e=d.createFrame(b.data),e.contextPath=d.appendContextPath(b.data.contextPath,b.ids[0])),c(a,{data:e,blockParams:d.blockParams([a],[e&&e.contextPath])})})},a.exports=b["default"]},function(a,b,c){"use strict";function d(a){g["default"](a)}var e=c(2)["default"];b.__esModule=!0,b.registerDefaultDecorators=d;var f=c(15),g=e(f)},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4);b["default"]=function(a){a.registerDecorator("inline",function(a,b,c,e){var f=a;return b.partials||(b.partials={},f=function(e,f){var g=c.partials;c.partials=d.extend({},g,b.partials);var h=a(e,f);return c.partials=g,h}),b.partials[e.args[0]]=e.fn,f})},a.exports=b["default"]},function(a,b,c){"use strict";b.__esModule=!0;var d=c(4),e={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(a){if("string"==typeof a){var b=d.indexOf(e.methodMap,a.toLowerCase());a=b>=0?b:parseInt(a,10)}return a},log:function(a){if(a=e.lookupLevel(a),"undefined"!=typeof console&&e.lookupLevel(e.level)<=a){var b=e.methodMap[a];console[b]||(b="log");for(var c=arguments.length,d=Array(c>1?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];console[b].apply(console,d)}}};b["default"]=e,a.exports=b["default"]},function(a,b){"use strict";function c(a){this.string=a}b.__esModule=!0,c.prototype.toString=c.prototype.toHTML=function(){return""+this.string},b["default"]=c,a.exports=b["default"]},function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=r.COMPILER_REVISION;if(b!==c){if(b<c){var d=r.REVISION_CHANGES[c],e=r.REVISION_CHANGES[b];throw new q["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new q["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){function c(c,d,e){e.hash&&(d=o.extend({},d,e.hash),e.ids&&(e.ids[0]=!0)),c=b.VM.resolvePartial.call(this,c,d,e);var f=b.VM.invokePartial.call(this,c,d,e);if(null==f&&b.compile&&(e.partials[e.name]=b.compile(c,a.compilerOptions,b),f=e.partials[e.name](d,e)),null!=f){if(e.indent){for(var g=f.split("\n"),h=0,i=g.length;h<i&&(g[h]||h+1!==i);h++)g[h]=e.indent+g[h];f=g.join("\n")}return f}throw new q["default"]("The partial "+e.name+" could not be compiled when running in runtime-only mode")}function d(b){function c(b){return""+a.main(e,b,e.helpers,e.partials,g,i,h)}var f=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],g=f.data;d._setup(f),!f.partial&&a.useData&&(g=j(b,g));var h=void 0,i=a.useBlockParams?[]:void 0;return a.useDepths&&(h=f.depths?b!==f.depths[0]?[b].concat(f.depths):f.depths:[b]),(c=k(a.main,c,e,f.depths||[],g,i))(b,f)}if(!b)throw new q["default"]("No environment passed to template");if(!a||!a.main)throw new q["default"]("Unknown template object: "+typeof a);a.main.decorator=a.main_d,b.VM.checkRevision(a.compiler);var e={strict:function(a,b){if(!(b in a))throw new q["default"]('"'+b+'" not defined in '+a);return a[b]},lookup:function(a,b){for(var c=a.length,d=0;d<c;d++)if(a[d]&&null!=a[d][b])return a[d][b]},lambda:function(a,b){return"function"==typeof a?a.call(b):a},escapeExpression:o.escapeExpression,invokePartial:c,fn:function(b){var c=a[b];return c.decorator=a[b+"_d"],c},programs:[],program:function(a,b,c,d,e){var g=this.programs[a],h=this.fn(a);return b||e||d||c?g=f(this,a,h,b,c,d,e):g||(g=this.programs[a]=f(this,a,h)),g},data:function(a,b){for(;a&&b--;)a=a._parent;return a},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c=o.extend({},b,a)),c},noop:b.VM.noop,compilerInfo:a.compiler};return d.isTop=!0,d._setup=function(c){c.partial?(e.helpers=c.helpers,e.partials=c.partials,e.decorators=c.decorators):(e.helpers=e.merge(c.helpers,b.helpers),a.usePartial&&(e.partials=e.merge(c.partials,b.partials)),(a.usePartial||a.useDecorators)&&(e.decorators=e.merge(c.decorators,b.decorators)))},d._child=function(b,c,d,g){if(a.useBlockParams&&!d)throw new q["default"]("must pass block params");if(a.useDepths&&!g)throw new q["default"]("must pass parent depths");return f(e,b,a[b],c,0,d,g)},d}function f(a,b,c,d,e,f,g){function h(b){var e=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],h=g;return g&&b!==g[0]&&(h=[b].concat(g)),c(a,b,a.helpers,a.partials,e.data||d,f&&[e.blockParams].concat(f),h)}return h=k(c,h,a,g,d,f),h.program=b,h.depth=g?g.length:0,h.blockParams=e||0,h}function g(a,b,c){return a?a.call||c.name||(c.name=a,a=c.partials[a]):a="@partial-block"===c.name?c.data["partial-block"]:c.partials[c.name],a}function h(a,b,c){c.partial=!0,c.ids&&(c.data.contextPath=c.ids[0]||c.data.contextPath);var d=void 0;if(c.fn&&c.fn!==i&&(c.data=r.createFrame(c.data),d=c.data["partial-block"]=c.fn,d.partials&&(c.partials=o.extend({},c.partials,d.partials))),void 0===a&&d&&(a=d),void 0===a)throw new q["default"]("The partial "+c.name+" could not be found");if(a instanceof Function)return a(b,c)}function i(){return""}function j(a,b){return b&&"root"in b||(b=b?r.createFrame(b):{},b.root=a),b}function k(a,b,c,d,e,f){if(a.decorator){var g={};b=a.decorator(b,g,c,d&&d[0],e,f,d),o.extend(b,g)}return b}var l=c(1)["default"],m=c(2)["default"];b.__esModule=!0,b.checkRevision=d,b.template=e,b.wrapProgram=f,b.resolvePartial=g,b.invokePartial=h,b.noop=i;var n=c(4),o=l(n),p=c(5),q=m(p),r=c(3)},function(a,b){(function(c){"use strict";b.__esModule=!0,b["default"]=function(a){var b="undefined"!=typeof c?c:window,d=b.Handlebars;a.noConflict=function(){return b.Handlebars===a&&(b.Handlebars=d),a}},a.exports=b["default"]}).call(b,function(){return this}())}])}),WPUSB("WPUSB.BuildComponents",function(a,b,c){a.create=function(a){var d="[data-"+c.prefix+"-component]";a.findComponent(d,b.proxy(this,"_start"))},a._start=function(a){"undefined"!=typeof WPUSB.Components&&this._iterator(a)},a._iterator=function(a){var c;a.each(function(d,e){e=b(e),c=a.ucfirst(this.getComponent(e)),this._callback(c,e)}.bind(this))},a.getComponent=function(a){var b=a.data(c.prefix+"-component");return b?b:""},a._callback=function(a,b){var c=WPUSB.Components[a];return"function"==typeof c?void c.call(null,b):void console.warn('Component "'+a+'" is not a function.')}},{}),function(a){a.fn.byElement=function(a){return this.find('[data-element="'+a+'"]')},a.fn.byAction=function(a){return this.find('[data-action="'+a+'"]')},a.fn.byReferrer=function(a){return this.find('[data-referrer="'+a+'"]')},a.fn.byComponent=function(a,b){return this.find("[data-"+b+'-component="'+a+'"]')},a.fn.findComponent=function(b,c){var d=a(this).find(b);return d.length&&"function"==typeof c&&c.call(null,d,a(this)),d.length},a.fn.ucfirst=function(a){return a=a.replace(/(?:^|-)\w/g,function(a){return a.toUpperCase()}),a.replace(/-/g,"")},a.fn.addEvent=function(b,c,d){var e=a.fn.ucfirst(["_on",b,c].join("-"));this.byAction(c).on(b,a.proxy(d,e))}}(jQuery),function(){var a=Handlebars.template,b=WPUSB.Templates=WPUSB.Templates||{};b.fixed=a({1:function(a,b,c,d,e){var f,g,h=c.helperMissing,i="function",j=a.escapeExpression;return"\n"+(null!=(f=c["if"].call(b,null!=b?b.first:b,{name:"if",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:"")+'\n\t<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-item "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.item_class||(null!=b?b.item_class:b))?g:h,typeof g===i?g.call(b,{name:"item_class",hash:{},data:e}):g))+'">\n\t\t<a title="Tweet" class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.btn_class||(null!=b?b.btn_class:b))?g:h,typeof g===i?g.call(b,{name:"btn_class",hash:{},data:e}):g))+'" rel="nofollow">\n\t\t\t<i class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-icon-"+j((g=null!=(g=c.item_class||(null!=b?b.item_class:b))?g:h,typeof g===i?g.call(b,{name:"item_class",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.fixed_layout||(null!=b?b.fixed_layout:b))?g:h,typeof g===i?g.call(b,{name:"fixed_layout",hash:{},data:e}):g))+' "></i>\n\t\t</a>\n\t</div>\n\n'},2:function(a,b,c,d,e){var f,g,h=c.helperMissing,i="function",j=a.escapeExpression;return'\t\t<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+" "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.fixed_layout||(null!=b?b.fixed_layout:b))?g:h,typeof g===i?g.call(b,{name:"fixed_layout",hash:{},data:e}):g))+" "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.layout||(null!=b?b.layout:b))?g:h,typeof g===i?g.call(b,{name:"layout",hash:{},data:e}):g))+' social-share">\n\n\t\t\t<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-item "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-total-share">\n\t\t\t\t<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-counts">\n\t\t\t\t\t<span data-element="total-share">\n\t\t\t\t\t\t'+j((g=null!=(g=c.counter||(null!=b?b.counter:b))?g:h,typeof g===i?g.call(b,{name:"counter",hash:{},data:e}):g))+"\n\t\t\t\t\t</span>\n\n"+(null!=(f=c["if"].call(b,null!=b?b.is_fixed_2:b,{name:"if",hash:{},fn:a.program(3,e,0),inverse:a.noop,data:e}))?f:"")+"\n\t\t\t\t</div>\n\t\t\t</div>\n"},3:function(a,b,c,d,e){return"\t\t\t\t\t\t<span>Shares</span>\n"},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f;return(null!=(f=c.each.call(b,b,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+'\t<span class="wpusb-toggle"></span>\n</div>'},useData:!0}),b["share-preview"]=a({1:function(a,b,c,d,e){var f,g,h=c.helperMissing,i="function",j=a.escapeExpression;return"\n"+(null!=(f=c["if"].call(b,null!=b?b.first:b,{name:"if",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:"")+'\n\t<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-item "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.item_class||(null!=b?b.item_class:b))?g:h,typeof g===i?g.call(b,{name:"item_class",hash:{},data:e}):g))+'">\n\t\t<a class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-button" title="'+j((g=null!=(g=c.item_title||(null!=b?b.item_title:b))?g:h,typeof g===i?g.call(b,{name:"item_title",hash:{},data:e}):g))+'">\n\t\t\t<i class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-icon-"+j((g=null!=(g=c.item_class||(null!=b?b.item_class:b))?g:h,typeof g===i?g.call(b,{name:"item_class",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.layout||(null!=b?b.layout:b))?g:h,typeof g===i?g.call(b,{name:"layout",hash:{},data:e}):g))+'"></i>\n\t\t\t<span class="wpusb-title">'+j((g=null!=(g=c.item_inside||(null!=b?b.item_inside:b))?g:h,typeof g===i?g.call(b,{name:"item_inside",hash:{},data:e}):g))+"</span>\n\t\t</a>\n\n"+(null!=(f=c["if"].call(b,null!=b?b.has_counter:b,{name:"if",hash:{},fn:a.program(4,e,0),inverse:a.noop,data:e}))?f:"")+"\t</div>\n\n"},2:function(a,b,c,d,e){var f,g=c.helperMissing,h="function",i=a.escapeExpression;return'\t\t<div class="'+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+" "+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+"-"+i((f=null!=(f=c.layout||(null!=b?b.layout:b))?f:g,typeof f===h?f.call(b,{name:"layout",hash:{},data:e}):f))+" social-share "+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+'-preview">\n'},4:function(a,b,c,d,e){var f,g=c.helperMissing,h="function",i=a.escapeExpression;return'\t\t\t<span class="'+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+'-count wpusb-counter">'+i((f=null!=(f=c.counter||(null!=b?b.counter:b))?f:g,typeof f===h?f.call(b,{name:"counter",hash:{},data:e}):f))+"</span>\n"},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f;return(null!=(f=c.each.call(b,b,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+'</div>\n<button class="button" data-action="no-title"></button>\n<button class="button" data-action="no-counter"></button>'},useData:!0}),b["square-plus"]=a({1:function(a,b,c,d,e){var f;return"\n"+(null!=(f=c["if"].call(b,null!=b?b.first:b,{name:"if",hash:{},fn:a.program(2,e,0),inverse:a.noop,data:e}))?f:"")+"\n"+(null!=(f=c.unless.call(b,null!=b?b.first:b,{name:"unless",hash:{},fn:a.program(5,e,0),inverse:a.noop,data:e}))?f:"")},2:function(a,b,c,d,e){var f,g,h=c.helperMissing,i="function",j=a.escapeExpression;return'\t\t<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+" "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.layout||(null!=b?b.layout:b))?g:h,typeof g===i?g.call(b,{name:"layout",hash:{},data:e}):g))+" social-share "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-preview">\n\n\t\t\t<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-item "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-counter wpusb-counter">\n\t\t\t\t<span class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-counter">'+j((g=null!=(g=c.counter||(null!=b?b.counter:b))?g:h,typeof g===i?g.call(b,{name:"counter",hash:{},data:e}):g))+'</span>\n\t\t\t\t<span class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-text" data-title="shares"></span>\n\t\t\t\t<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-slash" data-slash="'+(null!=(g=null!=(g=c.slash||(null!=b?b.slash:b))?g:h,f=typeof g===i?g.call(b,{name:"slash",hash:{},data:e}):g)?f:"")+'"></div>\n\t\t\t</div>\n\n\t\t\t<div class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-item "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-"+j((g=null!=(g=c.item_class||(null!=b?b.item_class:b))?g:h,typeof g===i?g.call(b,{name:"item_class",hash:{},data:e}):g))+" "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-full "+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-inside">\n\t\t\t\t<a href="#" class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+'-link" title="'+j((g=null!=(g=c.item_title||(null!=b?b.item_title:b))?g:h,typeof g===i?g.call(b,{name:"item_title",hash:{},data:e}):g))+'">\n\t\t\t\t\t<i class="'+j((g=null!=(g=c.prefix||(null!=b?b.prefix:b))?g:h,typeof g===i?g.call(b,{name:"prefix",hash:{},data:e}):g))+"-icon-"+j((g=null!=(g=c.item_class||(null!=b?b.item_class:b))?g:h,typeof g===i?g.call(b,{name:"item_class",hash:{},data:e}):g))+'-square-plus"></i>\n\n'+(null!=(f=c["if"].call(b,null!=b?b.inside:b,{name:"if",hash:{},fn:a.program(3,e,0),inverse:a.noop,data:e}))?f:"")+"\t\t\t\t</a>\n\t\t\t</div>\n\n"},3:function(a,b,c,d,e){var f;return'\t\t\t\t\t\t<span class="wpusb-title" data-title="'+a.escapeExpression((f=null!=(f=c.item_name||(null!=b?b.item_name:b))?f:c.helperMissing,"function"==typeof f?f.call(b,{name:"item_name",hash:{},data:e}):f))+'"></span>\n'},5:function(a,b,c,d,e){var f,g=c.helperMissing,h="function",i=a.escapeExpression;return'\n\t\t\t<div class="'+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+"-item "+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+"-"+i((f=null!=(f=c.item_class||(null!=b?b.item_class:b))?f:g,typeof f===h?f.call(b,{name:"item_class",hash:{},data:e}):f))+'">\n\t\t\t\t<a href="#" class="'+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+'-link" title="'+i((f=null!=(f=c.item_title||(null!=b?b.item_title:b))?f:g,typeof f===h?f.call(b,{name:"item_title",hash:{},data:e}):f))+'">\n\t\t\t\t\t<i class="'+i((f=null!=(f=c.prefix||(null!=b?b.prefix:b))?f:g,typeof f===h?f.call(b,{name:"prefix",hash:{},data:e}):f))+"-icon-"+i((f=null!=(f=c.item_class||(null!=b?b.item_class:b))?f:g,typeof f===h?f.call(b,{name:"item_class",hash:{},data:e}):f))+'-square-plus"></i>\n\t\t\t\t</a>\n\t\t\t</div>\n\n'},compiler:[7,">= 4.0.0"],main:function(a,b,c,d,e){var f;return(null!=(f=c.each.call(b,b,{name:"each",hash:{},fn:a.program(1,e,0),inverse:a.noop,data:e}))?f:"")+'</div>\n<button class="button" data-action="no-title"></button>\n<button class="button" data-action="no-counter"></button>'},useData:!0})}(),!function(a){var b="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?a(exports):b&&(b.hljs=a({}),"function"==typeof define&&define.amd&&define([],function(){return b.hljs}))}(function(a){function b(a){return a.replace(/[&<>]/gm,function(a){return E[a]})}function c(a){return a.nodeName.toLowerCase()}function d(a,b){var c=a&&a.exec(b);return c&&0===c.index}function e(a){return z.test(a)}function f(a){var b,c,d,f,g=a.className+" ";if(g+=a.parentNode?a.parentNode.className:"",c=A.exec(g))return u(c[1])?c[1]:"no-highlight";for(g=g.split(/\s+/),b=0,d=g.length;d>b;b++)if(f=g[b],e(f)||u(f))return f}function g(a,b){var c,d={};for(c in a)d[c]=a[c];if(b)for(c in b)d[c]=b[c];return d}function h(a){var b=[];return function d(a,e){for(var f=a.firstChild;f;f=f.nextSibling)3===f.nodeType?e+=f.nodeValue.length:1===f.nodeType&&(b.push({event:"start",offset:e,node:f}),e=d(f,e),c(f).match(/br|hr|img|input/)||b.push({event:"stop",offset:e,node:f}));return e}(a,0),b}function i(a,d,e){function f(){return a.length&&d.length?a[0].offset!==d[0].offset?a[0].offset<d[0].offset?a:d:"start"===d[0].event?a:d:a.length?a:d}function g(a){function d(a){return" "+a.nodeName+'="'+b(a.value)+'"'}k+="<"+c(a)+v.map.call(a.attributes,d).join("")+">"}function h(a){k+="</"+c(a)+">"}function i(a){("start"===a.event?g:h)(a.node)}for(var j=0,k="",l=[];a.length||d.length;){var m=f();if(k+=b(e.substr(j,m[0].offset-j)),j=m[0].offset,m===a){l.reverse().forEach(h);do i(m.splice(0,1)[0]),m=f();while(m===a&&m.length&&m[0].offset===j);l.reverse().forEach(g)}else"start"===m[0].event?l.push(m[0].node):l.pop(),i(m.splice(0,1)[0])}return k+b(e.substr(j))}function j(a){function b(a){return a&&a.source||a}function c(c,d){return new RegExp(b(c),"m"+(a.cI?"i":"")+(d?"g":""))}function d(e,f){if(!e.compiled){if(e.compiled=!0,e.k=e.k||e.bK,e.k){var h={},i=function(b,c){a.cI&&(c=c.toLowerCase()),c.split(" ").forEach(function(a){var c=a.split("|");h[c[0]]=[b,c[1]?Number(c[1]):1]})};"string"==typeof e.k?i("keyword",e.k):w(e.k).forEach(function(a){i(a,e.k[a])}),e.k=h}e.lR=c(e.l||/\w+/,!0),f&&(e.bK&&(e.b="\\b("+e.bK.split(" ").join("|")+")\\b"),e.b||(e.b=/\B|\b/),e.bR=c(e.b),e.e||e.eW||(e.e=/\B|\b/),e.e&&(e.eR=c(e.e)),e.tE=b(e.e)||"",e.eW&&f.tE&&(e.tE+=(e.e?"|":"")+f.tE)),e.i&&(e.iR=c(e.i)),null==e.r&&(e.r=1),e.c||(e.c=[]);var j=[];e.c.forEach(function(a){a.v?a.v.forEach(function(b){j.push(g(a,b))}):j.push("self"===a?e:a)}),e.c=j,e.c.forEach(function(a){d(a,e)}),e.starts&&d(e.starts,f);var k=e.c.map(function(a){return a.bK?"\\.?("+a.b+")\\.?":a.b}).concat([e.tE,e.i]).map(b).filter(Boolean);e.t=k.length?c(k.join("|"),!0):{exec:function(){return null}}}}d(a)}function k(a,c,e,f){function g(a,b){var c,e;for(c=0,e=b.c.length;e>c;c++)if(d(b.c[c].bR,a))return b.c[c]}function h(a,b){if(d(a.eR,b)){for(;a.endsParent&&a.parent;)a=a.parent;return a}return a.eW?h(a.parent,b):void 0}function i(a,b){return!e&&d(b.iR,a)}function m(a,b){var c=t.cI?b[0].toLowerCase():b[0];return a.k.hasOwnProperty(c)&&a.k[c]}function n(a,b,c,d){var e=d?"":D.classPrefix,f='<span class="'+e,g=c?"":C;return f+=a+'">',f+b+g}function o(){var a,c,d,e;if(!w.k)return b(A);for(e="",c=0,w.lR.lastIndex=0,d=w.lR.exec(A);d;)e+=b(A.substr(c,d.index-c)),a=m(w,d),a?(B+=a[1],e+=n(a[0],b(d[0]))):e+=b(d[0]),c=w.lR.lastIndex,d=w.lR.exec(A);return e+b(A.substr(c))}function p(){var a="string"==typeof w.sL;if(a&&!x[w.sL])return b(A);var c=a?k(w.sL,A,!0,y[w.sL]):l(A,w.sL.length?w.sL:void 0);return w.r>0&&(B+=c.r),a&&(y[w.sL]=c.top),n(c.language,c.value,!1,!0)}function q(){z+=null!=w.sL?p():o(),A=""}function r(a){z+=a.cN?n(a.cN,"",!0):"",w=Object.create(a,{parent:{value:w}})}function s(a,b){if(A+=a,null==b)return q(),0;var c=g(b,w);if(c)return c.skip?A+=b:(c.eB&&(A+=b),q(),c.rB||c.eB||(A=b)),r(c,b),c.rB?0:b.length;var d=h(w,b);if(d){var e=w;e.skip?A+=b:(e.rE||e.eE||(A+=b),q(),e.eE&&(A=b));do w.cN&&(z+=C),w.skip||(B+=w.r),w=w.parent;while(w!==d.parent);return d.starts&&r(d.starts,""),e.rE?0:b.length}if(i(b,w))throw new Error('Illegal lexeme "'+b+'" for mode "'+(w.cN||"<unnamed>")+'"');return A+=b,b.length||1}var t=u(a);if(!t)throw new Error('Unknown language: "'+a+'"');j(t);var v,w=f||t,y={},z="";for(v=w;v!==t;v=v.parent)v.cN&&(z=n(v.cN,"",!0)+z);var A="",B=0;try{for(var E,F,G=0;w.t.lastIndex=G,E=w.t.exec(c),E;)F=s(c.substr(G,E.index-G),E[0]),G=E.index+F;for(s(c.substr(G)),v=w;v.parent;v=v.parent)v.cN&&(z+=C);return{r:B,value:z,language:a,top:w}}catch(H){if(H.message&&-1!==H.message.indexOf("Illegal"))return{r:0,value:b(c)};throw H}}function l(a,c){c=c||D.languages||w(x);var d={r:0,value:b(a)},e=d;return c.filter(u).forEach(function(b){var c=k(b,a,!1);c.language=b,c.r>e.r&&(e=c),c.r>d.r&&(e=d,d=c)}),e.language&&(d.second_best=e),d}function m(a){return D.tabReplace||D.useBR?a.replace(B,function(a,b){return D.useBR&&"\n"===a?"<br>":D.tabReplace?b.replace(/\t/g,D.tabReplace):void 0}):a}function n(a,b,c){var d=b?y[b]:c,e=[a.trim()];return a.match(/\bhljs\b/)||e.push("hljs"),-1===a.indexOf(d)&&e.push(d),e.join(" ").trim()}function o(a){var b,c,d,g,j,o=f(a);e(o)||(D.useBR?(b=document.createElementNS("http://www.w3.org/1999/xhtml","div"),b.innerHTML=a.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):b=a,j=b.textContent,d=o?k(o,j,!0):l(j),c=h(b),c.length&&(g=document.createElementNS("http://www.w3.org/1999/xhtml","div"),g.innerHTML=d.value,d.value=i(c,h(g),j)),d.value=m(d.value),a.innerHTML=d.value,a.className=n(a.className,o,d.language),a.result={language:d.language,re:d.r},d.second_best&&(a.second_best={language:d.second_best.language,re:d.second_best.r}))}function p(a){D=g(D,a)}function q(){if(!q.called){q.called=!0;var a=document.querySelectorAll("pre code");v.forEach.call(a,o)}}function r(){addEventListener("DOMContentLoaded",q,!1),addEventListener("load",q,!1)}function s(b,c){var d=x[b]=c(a);d.aliases&&d.aliases.forEach(function(a){
y[a]=b})}function t(){return w(x)}function u(a){return a=(a||"").toLowerCase(),x[a]||x[y[a]]}var v=[],w=Object.keys,x={},y={},z=/^(no-?highlight|plain|text)$/i,A=/\blang(?:uage)?-([\w-]+)\b/i,B=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,C="</span>",D={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0},E={"&":"&amp;","<":"&lt;",">":"&gt;"};return a.highlight=k,a.highlightAuto=l,a.fixMarkup=m,a.highlightBlock=o,a.configure=p,a.initHighlighting=q,a.initHighlightingOnLoad=r,a.registerLanguage=s,a.listLanguages=t,a.getLanguage=u,a.inherit=g,a.IR="[a-zA-Z]\\w*",a.UIR="[a-zA-Z_]\\w*",a.NR="\\b\\d+(\\.\\d+)?",a.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",a.BNR="\\b(0b[01]+)",a.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",a.BE={b:"\\\\[\\s\\S]",r:0},a.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[a.BE]},a.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[a.BE]},a.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/},a.C=function(b,c,d){var e=a.inherit({cN:"comment",b:b,e:c,c:[]},d||{});return e.c.push(a.PWM),e.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),e},a.CLCM=a.C("//","$"),a.CBCM=a.C("/\\*","\\*/"),a.HCM=a.C("#","$"),a.NM={cN:"number",b:a.NR,r:0},a.CNM={cN:"number",b:a.CNR,r:0},a.BNM={cN:"number",b:a.BNR,r:0},a.CSSNM={cN:"number",b:a.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},a.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[a.BE,{b:/\[/,e:/\]/,r:0,c:[a.BE]}]},a.TM={cN:"title",b:a.IR,r:0},a.UTM={cN:"title",b:a.UIR,r:0},a.METHOD_GUARD={b:"\\.\\s*"+a.UIR,r:0},a}),hljs.registerLanguage("php",function(a){var b={b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},c={cN:"meta",b:/<\?(php)?|\?>/},d={cN:"string",c:[a.BE,c],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},a.inherit(a.ASM,{i:null}),a.inherit(a.QSM,{i:null})]},e={v:[a.BNM,a.CNM]};return{aliases:["php3","php4","php5","php6, php7"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[a.HCM,a.C("//","$",{c:[c]}),a.C("/\\*","\\*/",{c:[{cN:"doctag",b:"@[A-Za-z]+"}]}),a.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:a.UIR}),{cN:"string",b:/<<<['"]?\w+['"]?$/,e:/^\w+;?$/,c:[a.BE,{cN:"subst",v:[{b:/\$\w+/},{b:/\{\$/,e:/\}/}]}]},c,{cN:"keyword",b:/\$this\b/},b,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[a.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",b,a.CBCM,d,e]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},a.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[a.UTM]},{bK:"use",e:";",c:[a.UTM]},{b:"=>"},d,e]}}),WPUSB("WPUSB.Application",function(a,b,c){a.init=function(b){WPUSB.BuildComponents.create(b),a.highlight(b)},a.highlight=function(a){a.byElement("highlight").each(function(a,b){hljs.highlightBlock(b)})}},{}),WPUSB("WPUSB.Components.SharePreview",function(a,b,c){a.fn.start=function(){this.spinner=b(".ajax-spinner"),this.prefix=c.prefix,this.wrap=this.$el.closest(".wpusb-wrap"),this.order=this.wrap.byElement("sortable"),this.inputOrder=this.wrap.byElement("order"),this.layoutOptions=b(".layout-preview"),this.list=b(".wpusb-select-item input"),this.init()},a.fn.init=function(){this.addEventListener()},a.fn.addEventListener=function(){this.layoutOptions.on("click",this._onClickLayout.bind(this)),this.list.on("click",this._onClick.bind(this)),this.order.sortable(this.sortOptions())},a.fn._onClickLayout=function(a){this.layout=a.currentTarget.value,a.currentTarget.className.match("fixed-layout")&&(this.layout=b('[data-element="position-fixed"]:checked').val()),this._onClick()},a.fn._onClick=function(a){a&&(this.layout=b(".layout-preview:checked").val()),this._update(),this._stop()},a.fn.sortOptions=function(){return{opacity:.5,cursor:"move",axis:"x",tolerance:"pointer",items:"> td",placeholder:this.prefix+"-highlight",update:this._update.bind(this),stop:this._stop.bind(this)}},a.fn._update=function(a,c){c&&(this.layout=b(".layout-preview:checked").val()),this.itemsOrder=this.order.sortable("toArray"),this.inputOrder.val(JSON.stringify(this.itemsOrder))},a.fn._stop=function(a,c){this.itemsChecked=[],this.order.find("input:checked").each(function(a,c){this.itemsChecked.push(b(c).val())}.bind(this)),this.request()},a.fn.request=function(){this.spinner.css("visibility","visible");var a=b(".fixed-layout:checked"),d={action:"wpusb_share_preview",layout:this.layout,fixed_layout:a.val(),items:JSON.stringify(this.itemsOrder),checked:JSON.stringify(this.itemsChecked)},e=b.ajax({type:"POST",url:c.getAjaxUrl(),data:d,dataType:"json"});e.then(b.proxy(this,"_done"),b.proxy(this,"_fail"))},a.fn._done=function(a){this.spinner.css("visibility","hidden"),this.$el.byElement(this.prefix).addClass(this.prefix+"-preview-container").html(this.render(a)),WPUSB.Preview.create(this.$el)},a.fn._fail=function(a,b){this.spinner.css("visibility","hidden"),console.warn(a)},a.fn.render=function(a){return WPUSB.Templates[this.templateName()].call(null,a)},a.fn.templateName=function(){var a;switch(this.layout){case"square-plus":a="square-plus";break;case"fixed-left":case"fixed-right":a="fixed";break;default:a="share-preview"}return a}}),WPUSB("WPUSB.Components.ShareSettings",function(a,b,c){a.fn.start=function(){this.posFixed=this.$el.byElement("position-fixed"),this.fixed=this.elements.fixed,this.init()},a.fn.init=function(){this.addEventListener()},a.fn.addEventListener=function(){this.posFixed.on("change",this._onChangeFixedLeft.bind(this)),this.$el.addEvent("click","fixed-disabled",this)},a.fn._onChangeFixedLeft=function(a){return this.posFixed.is(":checked")?void this.fixed.val("on"):void this.fixed.val("")},a.fn._onClickFixedDisabled=function(a){this.posFixed.prop("checked",!1),this.fixed.val("")}}),WPUSB("WPUSB.Preview",function(a,b,c){a.create=function(a){this.title=b('[data-action="no-title"]'),this.counter=b('[data-action="no-counter"]'),this.preview=c.getPreviewTitles(),this.init()},a.init=function(){this.addEventListener()},a.addEventListener=function(){this.title.text(this.preview.titleRemove),this.counter.text(this.preview.counterRemove),this.title.on("click",this._onClickTitle.bind(this)),this.counter.on("click",this._onClickCounter.bind(this))},a._onClickTitle=function(a){a.preventDefault();var c=this.titleChangeText(this.title.text());this.title.text(c),b(".wpusb-title").toggle("fast")},a._onClickCounter=function(a){a.preventDefault();var c=this.counterChangeText(this.counter.text());this.counter.text(c),b(".wpusb-counter").toggle("fast")},a.counterChangeText=function(a){return a==this.preview.counterRemove?this.preview.counterInsert:this.preview.counterRemove},a.titleChangeText=function(a){return a==this.preview.titleRemove?this.preview.titleInsert:this.preview.titleRemove}},{}),jQuery(function(a){var b=a("body");WPUSB.vars={body:b,prefix:"wpusb"},WPUSB.Application.init.apply(null,[b])});