import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as m,i as f}from"./assets/vendor-77e16229.js";/* empty css                      */const a=document.querySelector("[data-start]"),h=document.querySelector(".value[data-days]"),y=document.querySelector(".value[data-hours]"),S=document.querySelector(".value[data-minutes]"),v=document.querySelector(".value[data-seconds]");let e=null,o=null;function p(t){const r=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),d=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:l,minutes:i,seconds:d}}function g(t){return t<=new Date?(f.error({title:"Error",message:"Please select a date in the future"}),!1):!0}function D(){o=setInterval(()=>{const n=e-new Date;if(n<=0){clearInterval(o);return}const{days:s,hours:u,minutes:c,seconds:r}=p(n);h.textContent=String(s).padStart(2,"0"),y.textContent=String(u).padStart(2,"0"),S.textContent=String(c).padStart(2,"0"),v.textContent=String(r).padStart(2,"0")},1e3)}m("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){e=t[0],g(e)?a.disabled=!1:a.disabled=!0}});a.addEventListener("click",()=>{e&&(clearInterval(o),D())});
//# sourceMappingURL=commonHelpers.js.map