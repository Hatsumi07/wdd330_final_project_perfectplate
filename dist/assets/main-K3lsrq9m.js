(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function l(n,r=document){return r.querySelectorAll(n)}function c(n,r){l(n).forEach(o=>{o.addEventListener("click",r),o.addEventListener("touchend",e=>{e.preventDefault(),r()})})}async function a(){const n="https://tasty.p.rapidapi.com/recipes/list?from=-10&size=20&tags=under_30_minutes",r={method:"GET",headers:{"x-rapidapi-key":"fbd67d2c6emsha591a205fd69c3bp1a4f1cjsn105a8f5193c6","x-rapidapi-host":"tasty.p.rapidapi.com"}};try{const o=await(await fetch(n,r)).json();console.log(o)}catch(i){console.error(i)}}a();c(".top-recipe",function(){window.location.href="/recipe_pages/index.html"});c(".find-recipes",function(){window.location.href="/recipe_listing/index.html"});console.log("URL",window.location.href);
