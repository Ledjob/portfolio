(()=>{"use strict";var n={163:(n,e,t)=>{t.d(e,{A:()=>m});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),l=t.n(c),s=new URL(t(173),t.b),d=a()(o()),p=l()(s);d.push([n.id,`.contact-info {\n  padding: 20px;\n  font-family: system-ui;\n  font-size: 1.5rem;\n  color: rgb(250, 229, 244);\n}\n\n.fade-in {\n  animation: fadeIn 0.5s;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.contact-info p {\n  color: white;\n  font-size: 8.2rem;\n  font-family: system-ui;\n}\n\n.ticket-visual-wrapper {\n  width: 100%;\n  height: 100%;\n}\n\n.ticket-visual-profile {\n  padding: calc(39px * var(--size)) calc(155px * var(--size))\n    calc(39px * var(--size)) calc(58px * var(--size));\n}\n\n.ticket-profile-text {\n  margin: 0;\n}\n\n.dev-title {\n  transform: translateY(-11rem) translateX(5rem);\n}\n\n.row5 {\n  background-image: url(${p});\n  height: 900px; /* You must set a specified height */\n\n  background-position: right; /* Center the image */\n  background-repeat: no-repeat; /* Do not repeat the image */\n  /* Resize the background image to cover the entire container */\n  background-size: 800px 500px;\n}\n\n.dev {\n  transform: translateY(-11rem) translateX(7rem);\n}\n\n.my-email {\n  transform: translateX(-20rem) translateY(-7rem);\n}\n\n.ticket-profile-profile {\n  display: flex;\n  flex-direction: row;\n}\n\n.ticket-profile-image {\n  width: calc(164px * var(--size));\n  height: calc(164px * var(--size));\n  border-radius: 50%;\n}\n\n.ticket-profile-name {\n  font-size: calc(32px * var(--size));\n  margin: 10px 0 5px 20px;\n  font-weight: 700;\n}\n\n.ticket-visual-number-wrapper {\n  position: absolute;\n  right: 35px;\n  bottom: 0;\n}\n\n.ticket-visual-number {\n  transform: rotate(90deg) translateY(calc(100px * var(--size)));\n  transform-origin: bottom right;\n  font-size: calc(40px * var(--size));\n  font-weight: 700;\n  text-align: center;\n  padding-bottom: 35px;\n  width: calc(370px - 10px);\n  border-bottom: 2px dashed #333;\n}\n\n:root {\n  --size: 1;\n  --background: #1d1e20;\n  --color1: #d25778;\n  --color2: #ec585c;\n  --color3: #e7d155;\n  --color4: #56a8c6;\n}\n\nbody {\n  background: var(--background);\n  color: white;\n}\n\n.ticket {\n  width: 500%;\n  max-width: 800px;\n  height: 400px;\n  position: relative;\n  transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;\n  background: linear-gradient(\n    to right,\n    var(--color1),\n    var(--color2),\n    var(--color3),\n    var(--color4)\n  );\n  border-radius: 20px;\n  padding: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transform: translateX(-150px);\n}\n\n.ticket:before,\n.ticket:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 170px;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  z-index: 2;\n}\n\n.ticket:before {\n  background: var(--color1);\n  left: -30px;\n}\n\n.ticket:after {\n  right: -30px;\n  background: var(--color4);\n}\n\n.ticket-content-wrapper {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  background: var(--background);\n  border-radius: 15px;\n  padding: 20px; /* Adjust padding to fit content inside */\n  box-sizing: border-box; /* Ensure padding is included in the width/height */\n}\n.ticket-content-wrapper:before,\n.ticket-content-wrapper:after {\n  content: "";\n  display: block;\n  position: absolute;\n  top: 170px;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: var(--background);\n  z-index: 3;\n}\n\n.ticket-content-wrapper:before {\n  left: -30px;\n}\n\n.ticket-content-wrapper:after {\n  right: -30px;\n}\n\n.left,\n.right {\n  position: absolute;\n  top: 150px;\n  width: 50px;\n  height: 100px;\n  background: var(--background);\n  z-index: 4;\n}\n\n.left {\n  left: -50px;\n}\n\n.right {\n  right: -50px;\n}\n`,""]);const m=d},343:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,".wrapper-portfolio {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 2rem;\n  padding: 2rem;\n}\n\n.title-portfolio {\n  color: antiquewhite;\n  font-size: 4rem;\n  font-family: system-ui;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n\n.portfolio-items {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n  flex-wrap: wrap;\n}\n\n.image-portfolio1,\n.image-portfolio2,\n.image-portfolio3 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: #354567;\n  color: antiquewhite;\n  padding: 1rem;\n  border-radius: 8px;\n  width: 400px;\n  text-align: center;\n}\n\n.image-portfolio1 img,\n.image-portfolio2 img,\n.image-portfolio3 img {\n  max-width: 100%;\n  height: auto;\n  margin-bottom: 1rem;\n}\n\n.portfolio-item.hidden {\n  display: none;\n}\n",""]);const c=a},9:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"@media screen and (max-width: 850px) {\n  .col1 {\n    display: grid;\n    grid-template-rows: auto auto auto auto;\n    border: 1px solid antiquewhite;\n    background: #1d1e20;\n  }\n  .col2 {\n    display: grid;\n    grid-template-rows: 3fr 1fr;\n    border: 1px solid #d1cfe2;\n  }\n  .container {\n    display: grid;\n    grid-template-columns: 10% 90%;\n    margin: 0;\n    height: auto;\n    padding: 5px;\n    box-sizing: border-box;\n  }\n  .row5 {\n    display: grid;\n    background-color: #1d1e20;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n  }\n  #slider {\n    margin: 0;\n    width: 100%;\n    max-width: 100%;\n    text-align: center;\n  }\n  #slides {\n    height: 50vh;\n    position: relative;\n    z-index: 1;\n    padding: 5px;\n  }\n  #slides .inner {\n    height: 65vh;\n  }\n  #slides .slide {\n    font-size: 5rem;\n  }\n  .title1 {\n    font-size: 3rem;\n    transform: translateY(6rem);\n  }\n  .title2 {\n    font-size: 2rem;\n    transform: translateX(0rem);\n  }\n  .title3 {\n    font-size: 2rem;\n  }\n  .title4 {\n    font-size: 1.5rem;\n  }\n  p {\n    margin-top: 1rem;\n    font-size: 1rem;\n  }\n  .part1 {\n    font-size: 2rem;\n    transform: translateX(1rem) translateY(5rem);\n  }\n  .part2 {\n    transform: translateX(5rem);\n    font-size: 1rem;\n  }\n  .part3 {\n    font-size: 1.5rem;\n    transform: translateX(0rem) translateY(3rem);\n  }\n  #controls {\n    margin: -100px 0 0 0;\n  }\n  #controls label {\n    width: 30px;\n    height: 30px;\n  }\n  #slide1:checked ~ #controls label:nth-child(2),\n  #slide2:checked ~ #controls label:nth-child(3),\n  #slide3:checked ~ #controls label:nth-child(1) {\n    margin: -10% 0 0 0;\n    background-size: 100%;\n  }\n  #slide1:checked ~ #controls label:nth-last-child(1),\n  #slide2:checked ~ #controls label:nth-last-child(3),\n  #slide3:checked ~ #controls label:nth-last-child(2) {\n    margin: -10% 0 0 0;\n    background-size: 100%;\n  }\n  #bullets {\n    margin: 50px 0 0;\n  }\n  #bullets label {\n    width: 6px;\n    height: 6px;\n    margin: 0 3px;\n  }\n\n  /* portfolio part  */\n\n  .title-portfolio {\n    color: antiquewhite;\n    font-size: 2rem;\n    font-family: system-ui;\n    text-align: center;\n    margin-bottom: 1rem;\n  }\n\n  .portfolio-items {\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n    flex-wrap: wrap;\n  }\n\n  .image-portfolio1,\n  .image-portfolio2,\n  .image-portfolio3 {\n    border-radius: 4px;\n    width: 150px;\n    text-align: center;\n  }\n\n  .image-portfolio1 img,\n  .image-portfolio2 img,\n  .image-portfolio3 img {\n    margin-bottom: 0rem;\n  }\n\n  /* contact part  */\n\n  .row5 {\n    height: 900px; /* You must set a specified height */\n\n    background-position: right; /* Center the image */\n    background-repeat: no-repeat; /* Do not repeat the image */\n    /* Resize the background image to cover the entire container */\n    background-size: 800px 500px;\n  }\n\n  .contact-info {\n    padding: 10px;\n    font-size: 1rem;\n  }\n\n  .contact-info p {\n    font-size: 3rem;\n  }\n\n  .ticket-visual-profile {\n    padding: 10px;\n  }\n\n  .dev-title,\n  .dev,\n  .my-email {\n    transform: translateY(0) translateX(0);\n  }\n\n  .ticket-profile-profile {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .ticket-profile-image {\n    width: 80px;\n    height: 80px;\n    transform: translateY(0) translateX(-0rem);\n  }\n\n  .ticket-profile-name {\n    font-size: 1rem;\n    margin: 5px 0;\n    transform: translateX(5rem);\n  }\n\n  .ticket-visual-number-wrapper {\n    right: 10px;\n    bottom: 10px;\n  }\n\n  .ticket-visual-number {\n    transform: rotate(0) translateY(1.5rem);\n    font-size: 1rem;\n    width: 100%;\n    border-bottom: none;\n  }\n\n  .ticket {\n    width: 100%;\n    max-width: none;\n    height: auto;\n    transform: translateX(-10px);\n    padding: 10px;\n  }\n\n  .ticket-content-wrapper {\n    padding: 10px;\n  }\n\n  .ticket:before,\n  .ticket:after,\n  .ticket-content-wrapper:before,\n  .ticket-content-wrapper:after,\n  .left,\n  .right {\n    display: none;\n  }\n}\n",""]);const c=a},336:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,'/* slider part to move  */\n#slider {\n  margin: 0 auto;\n  width: 160vh;\n  max-width: 100%;\n  text-align: center;\n}\n#slider input[type="radio"] {\n  display: none;\n}\n#slider label {\n  cursor: pointer;\n  text-decoration: none;\n}\n#slides {\n  padding: 10px;\n  /* border: 3px solid #ccc; */\n  background: #1d1e20;\n  position: relative;\n  z-index: 1;\n  height: 65vh;\n}\n#overflow {\n  width: 100%;\n  overflow: hidden;\n}\n#slide1:checked ~ #slides .inner {\n  margin-left: 0;\n}\n#slide2:checked ~ #slides .inner {\n  margin-left: -100%;\n}\n#slide3:checked ~ #slides .inner {\n  margin-left: -200%;\n}\n#slide4:checked ~ #slides .inner {\n  margin-left: -300%;\n}\n#slides .inner {\n  transition: margin-left 800ms cubic-bezier(0.77, 0, 0.175, 1);\n  width: 400%;\n  height: 60vh;\n}\n\n#slides .slide {\n  width: 25%;\n  float: left;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  color: antiquewhite;\n  font-size: 10rem;\n  font-family: system-ui;\n}\n\n.title1 {\n  font-size: 20rem;\n  transform: translateY(10rem);\n}\n\n.title2 {\n  font-size: 8rem;\n  color: #7c97c6;\n  transform: translateX(-20rem) translateY(4rem);\n}\n\n.contrast {\n  background-color: #7771ef;\n}\n\n.title3 {\n  font-size: 8rem;\n  /* color: #9e7cc6; */\n  color: #5075ed;\n}\n\n.title4 {\n  font-size: 5rem;\n}\n\np {\n  margin-top: 5rem;\n  color: rgb(172, 108, 173);\n  font-size: 2rem;\n  font-family: "Roboto";\n}\n\n.part1 {\n  color: #9d7bf0;\n  font-size: 10rem;\n  transform: translateX(5rem) translateY(-10rem);\n  font-family: "Roboto";\n}\n\n.part2 {\n  justify-content: center;\n  align-items: center;\n  transform: translateX(28rem) translateY(-8rem);\n  color: antiquewhite;\n  font-size: 3rem;\n  font-family: system-ui;\n}\n\n.part2-grid {\n  display: grid;\n  width: 50%;\n}\n\n.part3 {\n  color: antiquewhite;\n  font-size: 5rem;\n  font-family: system-ui;\n  transform: translateX(1rem);\n}\n\n#slides .slide_1 {\n  background: #1d1e20;\n}\n#slides .slide_2 {\n  background: #1d1e20;\n}\n#slides .slide_3 {\n  background: #1d1e20;\n}\n\n#controls {\n  margin: -180px 0 0 0;\n  width: 100%;\n  height: 50px;\n  z-index: 3;\n  position: relative;\n}\n#controls label {\n  transition: opacity 0.2s ease-out;\n  display: none;\n  width: 50px;\n  height: 50px;\n  opacity: 0.4;\n}\n#controls label:hover {\n  opacity: 1;\n}\n#slide1:checked ~ #controls label:nth-child(2),\n#slide2:checked ~ #controls label:nth-child(3),\n#slide3:checked ~ #controls label:nth-child(1) {\n  background: url(https://cdn-icons-png.flaticon.com/512/8213/8213522.png)\n    no-repeat;\n  float: right;\n  margin: -12% -50px 0 0;\n  display: block;\n  background-size: 100%;\n}\n#slide1:checked ~ #controls label:nth-last-child(1),\n#slide2:checked ~ #controls label:nth-last-child(3),\n#slide3:checked ~ #controls label:nth-last-child(2) {\n  background: url(https://cdn-icons-png.flaticon.com/512/8213/8213522.png)\n    no-repeat;\n  float: left;\n  margin: -12% 0 0 -50px;\n  display: block;\n  background-size: 100%;\n  transform: rotate(180deg);\n}\n#bullets {\n  margin: 150px 0 0;\n  text-align: center;\n}\n#bullets label {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  background: #ccc;\n  margin: 0 10px;\n}\n#slide1:checked ~ #bullets label:nth-child(1),\n#slide2:checked ~ #bullets label:nth-child(2),\n#slide3:checked ~ #bullets label:nth-child(3) {\n  background: #444;\n}\n',""]);const c=a},208:(n,e,t)=>{t.d(e,{A:()=>x});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),l=t.n(c),s=new URL(t(101),t.b),d=new URL(t(66),t.b),p=new URL(t(493),t.b),m=new URL(t(796),t.b),u=a()(o()),h=l()(s),g=l()(d),f=l()(p),b=l()(m);u.push([n.id,`/* * {\n  background: #1d1e20;\n} */\nhtml {\n  background: #1d1e20;\n}\n.container {\n  display: grid;\n  grid-template-columns: 10% 90%;\n\n  margin: 0 auto;\n  border: 2px solid antiquewhite;\n  height: 98vh;\n  padding: 20px;\n  box-sizing: border-box;\n}\n\n.ticket-profile-name {\n  transform: translateX(5rem);\n}\n\n.col1 {\n  display: grid;\n  grid-template-rows: 1fr 1fr 3fr 1fr;\n  /* border: 2px solid antiquewhite; */\n  background: #1d1e20;\n}\n\n.col2 {\n  display: grid;\n  grid-template-rows: 5fr 1fr;\n  /* border: 2px solid #d1cfe2; */\n}\n\n.row1,\n.row2,\n.row3,\n.row4,\n.row5,\n.row6 {\n  border: 2px solid antiquewhite;\n  padding: 10px;\n  box-sizing: border-box;\n}\n\n.row1 {\n  background-color: lightblue;\n  background: url(${h});\n  background-size: 70%;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n.row2 {\n  background-color: lightgreen;\n  background: url(${g});\n  background-size: 70%;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n.row3 {\n  background-color: lightyellow;\n  background: url(${f});\n  background-size: 150%;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n.row4 {\n  background-color: lightpink;\n  background: url(${b});\n  background-size: 60%;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n.row5 {\n  display: grid;\n  background-color: #1d1e20;\n  max-width: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.row6 {\n  background-color: #1d1e20;\n}\n\n.portfolio-item.hidden {\n  display: none;\n}\n\n/* .portfolio-item {\n  transform: translateY(-10rem);\n} */\n\n/* github part  */\n\n#github-info {\n  display: flex;\n  text-align: center;\n  padding: 20px;\n  align-items: center;\n  justify-content: center;\n}\n\n#github-info h2 {\n  margin: 10px 0;\n}\n\n#github-info p {\n  margin: 5px 0;\n  color: antiquewhite;\n  font-size: 2rem;\n}\n\n#github-info a {\n  color: #56a8c6;\n  text-decoration: none;\n}\n\n#github-info a:hover {\n  text-decoration: underline;\n}\n`,""]);const x=u},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var l=n[c],s=r.base?l[0]+r.base:l[0],d=i[s]||0,p="".concat(s," ").concat(d);i[s]=d+1;var m=t(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=o(u,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var l=r(n,o),s=0;s<i.length;s++){var d=t(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},173:(n,e,t)=>{n.exports=t.p+"be099359fbcc7b5c2f49.png"},493:(n,e,t)=>{n.exports=t.p+"81d450d21c09bd322c8a.png"},796:(n,e,t)=>{n.exports=t.p+"d9a1e3f77584ae28ec36.png"},66:(n,e,t)=>{n.exports=t.p+"c843762fd05948d8b8eb.png"},101:(n,e,t)=>{n.exports=t.p+"47ea614bc3c44a3f52c3.png"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var r=t(72),o=t.n(r),i=t(825),a=t.n(i),c=t(659),l=t.n(c),s=t(56),d=t.n(s),p=t(540),m=t.n(p),u=t(113),h=t.n(u),g=t(208),f={};f.styleTagTransform=h(),f.setAttributes=d(),f.insert=l().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=m(),o()(g.A,f),g.A&&g.A.locals&&g.A.locals;var b=t(336),x={};x.styleTagTransform=h(),x.setAttributes=d(),x.insert=l().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=m(),o()(b.A,x),b.A&&b.A.locals&&b.A.locals;var v=t(343),k={};k.styleTagTransform=h(),k.setAttributes=d(),k.insert=l().bind(null,"head"),k.domAPI=a(),k.insertStyleElement=m(),o()(v.A,k),v.A&&v.A.locals&&v.A.locals;var w=t(163),y={};y.styleTagTransform=h(),y.setAttributes=d(),y.insert=l().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=m(),o()(w.A,y),w.A&&w.A.locals&&w.A.locals;var z=t(9),E={};function C(){const n=document.querySelector("#dynamic-content"),e=document.createElement("div");e.classList.add("ticket");const t=document.createElement("div");t.classList.add("left");const r=document.createElement("div");r.classList.add("right");const o=document.createElement("div");o.classList.add("ticket-content-wrapper");const i=document.createElement("div");i.classList.add("ticket-visual-profile");const a=document.createElement("div");a.classList.add("my-email"),a.textContent="ex@example.com";const c=document.createElement("div");c.classList.add("dev-title"),c.textContent="Full-stack";const l=document.createElement("div");l.classList.add("dev"),l.textContent="dev";const s=document.createElement("div");s.classList.add("ticket-profile-profile");const d=document.createElement("img");d.classList.add("ticket-profile-image"),d.src="https://github.com/ledjob.png";const p=document.createElement("div");p.classList.add("ticket-profile-text");const m=document.createElement("p");m.classList.add("ticket-profile-name"),m.textContent="Sasha Daxler";const u=document.createElement("div");u.classList.add("ticket-visual-number-wrapper");const h=document.createElement("div");h.classList.add("ticket-visual-number"),h.textContent="№ 888888";const g=document.createElement("div");g.classList.add("contact-info");const f=document.createElement("h2");f.textContent="CONTACT INFORMATION",document.createElement("p").textContent="Email: ex@example.com",document.createElement("p").textContent="Phone: (123) 456-7890",g.appendChild(f),o.appendChild(i),i.appendChild(s),s.appendChild(d),s.appendChild(p),p.appendChild(m),o.appendChild(u),u.appendChild(h),u.appendChild(a),o.appendChild(c),o.appendChild(l),e.appendChild(t),e.appendChild(r),e.appendChild(o),g.appendChild(e),g.classList.add("fade-in"),n.appendChild(g);const b=document.querySelector(".ticket"),x=document.querySelector(".ticket-content-wrapper");if(b&&x){const n=n=>{const{left:e,top:t,width:r,height:o}=b.getBoundingClientRect(),i=e+r/2,a=t+o/2,c=.04*(n.clientY-a),l=-.04*(n.clientX-i),s=Math.atan2(n.clientY-a,n.clientX-i)*(180/Math.PI);b.style.transform=`perspective(1000px) rotateX(${c}deg) rotateY(${l}deg) translateX(-150px)`,x.style.background=`linear-gradient(${s}deg, #1d1e20, #121212, #1d1e20)`;const d=x.querySelector("::before");d&&(d.style.transform=`rotate(${s}deg)`)};window.addEventListener("mousemove",n),window.addEventListener("resize",(()=>{const{left:n,top:e,width:t,height:r}=b.getBoundingClientRect();centerPoint={x:n+t/2,y:e+r/2}}))}}function A(){const n=document.querySelector("#dynamic-content"),e=document.createElement("div");e.classList.add("wrapper-portfolio");const t=document.createElement("div");t.classList.add("title-portfolio"),t.textContent="PROJECTS";const r=document.createElement("div");r.classList.add("portfolio-items"),e.appendChild(t),e.appendChild(r),[{title:"Restaurant website",img:"https://placehold.co/400x400"},{title:"Activity Tracker",img:"https://placehold.co/400x400"},{title:"Henlo  App",img:"https://placehold.co/400x400"}].forEach(((n,e)=>{const t=document.createElement("div");t.classList.add(`image-portfolio${e+1}`);const o=document.createElement("img");o.src=n.img;const i=document.createElement("p");i.textContent=n.title,t.appendChild(o),t.appendChild(i),r.appendChild(t)})),n.appendChild(e)}E.styleTagTransform=h(),E.setAttributes=d(),E.insert=l().bind(null,"head"),E.domAPI=a(),E.insertStyleElement=m(),o()(z.A,E),z.A&&z.A.locals&&z.A.locals,t.p,t.p,t(66),t(493),t(796),t(173),t(101);const L=document.querySelector(".row-container"),S=document.querySelector(".row5"),T=document.createElement("div");function q(n){switch(T.innerHTML="",L.style.display="home"===n?"block":"none",n){case"home":console.log("Showing home");break;case"portfolio":A();break;case"contact":C()}}function j(n){document.getElementById("github-info").innerHTML=`<p>${n}</p>`}T.id="dynamic-content",S.appendChild(T),document.querySelector(".row1").addEventListener("click",(()=>q("home"))),document.querySelector(".row2").addEventListener("click",(()=>q("portfolio"))),document.querySelector(".row3").addEventListener("click",(()=>q("contact"))),document.querySelector(".row4").addEventListener("click",(()=>{open("https://github.com/ledjob")})),A(),C(),async function(n){try{const n=await fetch("https://api.github.com/users/ledjob");if(403===n.status)return void j("Sorry, API rate limit reached. Please try again later.");const e=await n.json(),t=await fetch(e.repos_url);if(403===t.status)return void j("Sorry, API rate limit reached. Please try again later.");await t.json(),function(n,e){const t=document.getElementById("github-info"),r=document.createElement("div");r.innerHTML=`\n\n    <p>Github - Followers: ${n.followers} - Following: ${n.following}</p>\n    <p>Public Repos: ${n.public_repos}</p>\n  `,t.appendChild(r)}(e)}catch(n){console.error("Error fetching GitHub data:",n),j("An error occurred while fetching data. Please try again later.")}}(),q("contact")})();