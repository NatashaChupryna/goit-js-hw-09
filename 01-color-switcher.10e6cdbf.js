!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),n=document.querySelector("body"),r=null;t.addEventListener("click",(function(e){r=setInterval((function(){return n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled",!0)})),e.addEventListener("click",(function(){clearInterval(r),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.10e6cdbf.js.map
