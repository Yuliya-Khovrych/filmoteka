!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequired7c6;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=l);var r=l("ks9fz"),a=l("iU1Pc");const i=document.querySelector(".films"),s=document.querySelector("button#queue-btn"),c=document.querySelector("button#watched-btn");function u(){s.classList.add("active"),s.disabled=!0,c.classList.remove("active"),c.disabled=!1}function d(){i.innerHTML="";const t=JSON.parse(localStorage.getItem("queueList"));if(t)return(0,r.createMarkup)(t);e(a).Notify.info("Your queue is empty. You can add movies to queue on main page.")}r=l("ks9fz"),a=l("iU1Pc");const p=document.querySelector(".films"),m=document.querySelector("button#queue-btn"),f=document.querySelector("button#watched-btn");function y(){m.classList.remove("active"),m.disabled=!1,f.classList.add("active"),f.disabled=!0}function h(){p.innerHTML="";const t=JSON.parse(localStorage.getItem("watchedList"));if(t)return(0,r.createMarkup)(t);e(a).Notify.info("Your watched is empty. You can add movies to watched on main page.")}var v=l("j7N2m");var b=e(l("7jKnM")).template({1:function(e,t,n,o,l){var r,a,i=null!=t?t:e.nullContext||{},s=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<li class='library__trends-item' data-id=\""+e.escapeExpression("function"==typeof(a=null!=(a=s(n,"id")||(null!=t?s(t,"id"):t))?a:e.hooks.helperMissing)?a.call(i,{name:"id",hash:{},data:l,loc:{start:{line:2,column:42},end:{line:2,column:48}}}):a)+'">\n'+(null!=(r=s(n,"if").call(i,null!=t?s(t,"poster_path"):t,{name:"if",hash:{},fn:e.program(2,l,0),inverse:e.program(4,l,0),data:l,loc:{start:{line:3,column:4},end:{line:8,column:11}}}))?r:"")+"</li>\n"},2:function(e,t,n,o,l){var r,a=null!=t?t:e.nullContext||{},i=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"    <img src='https://image.tmdb.org/t/p/w342"+c(typeof(r=null!=(r=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?r:i)===s?r.call(a,{name:"poster_path",hash:{},data:l,loc:{start:{line:4,column:45},end:{line:4,column:60}}}):r)+"' alt='Film \""+c(typeof(r=null!=(r=u(n,"title")||(null!=t?u(t,"title"):t))?r:i)===s?r.call(a,{name:"title",hash:{},data:l,loc:{start:{line:4,column:73},end:{line:4,column:82}}}):r)+"\" poster' loading='lazy' />\n"},4:function(e,t,n,o,l){var r,a=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"    <img src='https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg' alt='Film \""+e.escapeExpression("function"==typeof(r=null!=(r=a(n,"title")||(null!=t?a(t,"title"):t))?r:e.hooks.helperMissing)?r.call(null!=t?t:e.nullContext||{},{name:"title",hash:{},data:l,loc:{start:{line:6,column:89},end:{line:6,column:98}}}):r)+"\" poster'\n        loading='lazy' />\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,o,l){var r;return null!=(r=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:10,column:9}}}))?r:""},useData:!0}),g=l("6EpDH"),w=l("1DJoj");const S={trendsList:document.querySelector(".library__trends-list")};var k=l("lD4MA");const L={films:document.querySelector(".films"),libraryTrends:document.querySelector(".library__trends-list"),header:document.querySelector("#header")};!async function(){try{const e=await(await(0,g.getMovies)(w.path,1)).data;S.trendsList.innerHTML=b(e.results),$(".library__trends-list").slick({arrows:!0,slidesToShow:7,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:920,settings:{arrows:!0,slidesToShow:5,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3}},{breakpoint:767,settings:{arrows:!0,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3}},{breakpoint:426,settings:{mobileFirst:!0,arrows:!0,slidesToShow:2,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3}}]})}catch(e){console.log(e.message)}}(),d(),s.addEventListener("click",d),s.addEventListener("click",u),f.addEventListener("click",h),f.addEventListener("click",y),k.headerObserver.observe(L.header),$(".carousel").slick({dots:!0,arrows:!1,speed:1e3,easing:"ease",autoplay:!0,autoplaySpeed:2e3,pauseOnFocus:!0,pauseOnHover:!0,pauseOnDotsHover:!0}),L.films.addEventListener("click",v.onMovieCardClick),L.libraryTrends.addEventListener("click",v.onMovieCardClick),window.addEventListener("scroll",k.animateUpButton)}();
//# sourceMappingURL=library.409b4598.js.map
