document.querySelectorAll("nav ul li a").forEach(t=>{t.addEventListener("click",function(t){let e=this.getAttribute("href");if(e.startsWith("#")){t.preventDefault();let o=e.substring(1),l=document.getElementById(o);l&&window.scrollTo({top:l.offsetTop,behavior:"smooth"})}})});
//# sourceMappingURL=tennis.eba69572.js.map
