// ==UserScript==
// @name         YTB
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Ari Monox
// @match        *://*.youtube.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
let vid =['vBLhotBVcV0','HFBqTuB_nKM']
let start=0
let end=0
let sleep=1000
let loop=0
const check=()=>{
var addr=window.location.search
try{
addr=window.location.search.split('?')[1].split('&').map(i=>i.split('=')[1])[0]
}catch(e){

}
if(addr != vid[1]){
  clearInterval(loop)
  sleep = 1000
  loop=setInterval(check,sleep)
 if(end==0){
     end=512
 }else if(start < end){
     start += 8
 }else if(start >= end){
     window.location.replace(`https://www.youtube.com/watch?v=${vid[1]}`)
 }
}else{
  clearInterval(loop)
  sleep = 5000
  loop=setInterval(check,sleep)
}
console.clear()
console.log(addr,start,end,sleep)

}

loop=setInterval(check,sleep)

})();
