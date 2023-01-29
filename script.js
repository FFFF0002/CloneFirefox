
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
const check=()=>{
var addr=window.location.search
try{
addr=window.location.search.split('?')[1].split('&').map(i=>i.split('=')[1])[0]
}catch(e){

}
if(addr != vid[1]){
    if(sleep==5000){
        sleep=1000
    }
 if(end==0){
     end=512
 }else if(start < end){
     start += 8
 }else if(start >= end){
     window.location.replace(`https://www.youtube.com/watch?v=${vid[1]}`)
 }
}else{
  if(sleep==1000){
      sleep=5000
  }
}
console.clear()
console.log(addr,start,end,sleep)

}

setInterval(check,sleep)
})();
