//Menuwrap Icons - non blocking 
function waitForElement(e,t){const n=new MutationObserver((i=>{for(const o of i)if("childList"===o.type&&document.querySelector(e)){n.disconnect(),t(document.querySelector(e));break}})),i=document.querySelector(".menuwrap");i&&n.observe(i,{childList:!0,subtree:!0})}function addIdsToMenuItems(e){const t=e.querySelector(".left");t&&(t.style.visibility="visible"),e.querySelectorAll(".left li.menu").forEach((e=>{const t=e.querySelector("a");if(t){const n=t.getAttribute("href"),i=(t.innerHTML.trim(),t.querySelector("span")?.innerHTML.trim());e.querySelector(".nick")?e.id="nick":"https://msg.forumcommunity.net/?act=Msg&CODE=01&c=655775"===n?e.id="messenger":"https://msg.forumcommunity.net/?act=UserCP&CODE=26&c=655775"===n?e.id="topics":"#notifications"===n?e.id="notif":e.querySelector('form[action="/?act=Mod"]')||["&nbsp;Moderation","&nbsp;Moderazione","&nbsp;Moderación","&nbsp;Modération","&nbsp;Mäßigung","&nbsp;Moderação"].includes(i)?e.id="mod":(["&nbsp;Administration","&nbsp;Amministrazione","&nbsp;Administración","&nbsp;Verwaltung","&nbsp;Administração"].includes(i)||"https://www.forumcommunity.net/?cid=655775"===n)&&(e.id="admin"),"&nbsp;Messenger"===i&&(e.id="messenger")}})),e.querySelectorAll(".left li:not(.menu)").forEach((e=>{const t=e.querySelector("a");t&&("HOME"===t.textContent.trim()?e.id="pahome":"/latestupdates"===t.getAttribute("href")&&(e.id="updates"))}))}waitForElement(".menuwrap",addIdsToMenuItems);
//Slideshow - non blocking 
!function(){const e=document.querySelector(".slider").children,t=document.querySelector(".prev"),n=document.querySelector(".next"),i=document.querySelector(".indicator");let c,r=0;function updateCircleIndicator(){const e=document.querySelector(".indicator .active");e&&e.classList.remove("active"),i.children[r]&&i.children[r].classList.add("active")}function nextSlide(){r=r===e.length-1?0:r+1,changeSlide()}function changeSlide(){for(let t of e)t.classList.remove("active");e[r]&&e[r].classList.add("active")}function resetTimer(){clearInterval(c),c=setInterval(autoPlay,4e3)}function autoPlay(){nextSlide(),updateCircleIndicator()}e.length>0&&i&&t&&n?function initializeSlider(){t.addEventListener("click",(()=>{r=0===r?e.length-1:r-1,changeSlide(),updateCircleIndicator(),resetTimer()})),n.addEventListener("click",(()=>{nextSlide(),updateCircleIndicator(),resetTimer()})),function createIndicatorCircles(){i.innerHTML="";for(let t=0;t<e.length;t++){const e=document.createElement("div");e.addEventListener("click",(()=>{r=t,changeSlide(),updateCircleIndicator(),resetTimer()})),e.id=t,0===t&&e.classList.add("active"),i.appendChild(e)}}(),resetTimer()}():console.warn("Slider elements not found. Ensure the .slider, .prev, .next, and .indicator elements are in place.")}();
//Image Async 
function addAsyncDecoding(){document.querySelectorAll("img").forEach(t=>{t.hasAttribute("decoding")||t.setAttribute("decoding","async"),t.hasAttribute("loading")||t.hasAttribute("data-src")||t.classList.contains("lazyload")||t.closest("#pa_slideshow")||t.setAttribute("loading","lazy")}),document.querySelectorAll("iframe:not([loading])").forEach(t=>t.setAttribute("loading","lazy"))}let debounceTimeout;function debounceMutation(){clearTimeout(debounceTimeout),debounceTimeout=setTimeout(()=>{addAsyncDecoding()},200)}const imasyncObserver=new MutationObserver(debounceMutation);imasyncObserver.observe(document.body,{childList:!0,subtree:!0,attributes:!1,characterData:!1});
