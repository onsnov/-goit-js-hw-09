!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");e.addEventListener("click",(function(){n=setInterval((function(){return t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.disabled=!0,a.disabled=!1})),a.addEventListener("click",(function(){clearInterval(n),e.disabled=!1,a.disabled=!0}));var n=null}();
//# sourceMappingURL=01-color-switcher.450b907a.js.map
