!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).imageCompression=n()}(this,function(){"use strict";function getDataUrlFromFile(e){return new Promise(function(n,r){var t=new FileReader;t.readAsDataURL(e),t.onload=function(){n(t.result)},t.onerror=r})}function getFilefromDataUrl(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Date.now();return new Promise(function(t){for(var a,i=e.split(","),o=i[0].match(/:(.*?);/)[1],s=atob(i[1]),c=s.length,u=new Uint8Array(c);c--;)u[c]=s.charCodeAt(c);try{a=new File([u],n,{type:o})}catch(e){(a=new Blob([u],{type:o})).name=n,a.lastModified=r}t(a)})}function loadImage(e){return new Promise(function(n,r){var t=new Image;t.onload=function(){n(t)},t.onerror=r,t.src=e})}function drawImageInCanvas(e,n){var r,t=(r="function"==typeof OffscreenCanvas?new OffscreenCanvas(e.width,e.height):document.createElement("canvas")).getContext("2d");return Number.isInteger(n)&&(e.width>n||e.height>n)?e.width>e.height?(r.width=n,r.height=e.height/e.width*n):(r.width=e.width/e.height*n,r.height=n):(r.width=e.width,r.height=e.height),t.drawImage(e,0,0,r.width,r.height),r}function drawFileInCanvas(e,n){return new Promise(function(r,t){var a,i,o=function $Try_2_Post(){try{return i=drawImageInCanvas(a,n),r([a,i])}catch(e){return t(e)}},s=function $Try_2_Catch(n){try{return getDataUrlFromFile(e).then(function(e){try{return loadImage(e).then(function(e){try{return a=e,o()}catch(e){return t(e)}},t)}catch(e){return t(e)}},t)}catch(e){return t(e)}};try{return createImageBitmap(e).then(function(e){try{return a=e,o()}catch(e){return s()}},s)}catch(e){s()}})}function canvasToFile(e,n,r,t){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;return new Promise(function(i,o){var s;return e instanceof OffscreenCanvas?e.convertToBlob({type:n,quality:a}).then(function(e){try{return(s=e).name=r,s.lastModified=t,$If_4.call(this)}catch(e){return o(e)}}.bind(this),o):getFilefromDataUrl(e.toDataURL(n,a),r,t).then(function(e){try{return s=e,$If_4.call(this)}catch(e){return o(e)}}.bind(this),o);function $If_4(){return i(s)}})}function compress(e,n){return new Promise(function(r,t){var a,i,o,s,c,u,m;return a=n.remainingTrials||10,i=1024*n.maxSizeMB*1024,drawFileInCanvas(e,n.maxWidthOrHeight).then(function(n){try{return s=(o=n)[0],c=o[1],u=1,canvasToFile(c,e.type,e.name,e.lastModified,u).then(function(n){try{var o=function $If_1(){return r(m)};if(m=n,"image/png"===e.type){var l,f=function $Loop_2(){return a--&&m.size>i?(c.width*=.9,c.height*=.9,c.getContext("2d").drawImage(s,0,0,c.width,c.height),canvasToFile(c,e.type,e.name,e.lastModified,u).then(function(e){try{return m=e,$Loop_2}catch(e){return t(e)}},t)):[1]},h=function $Loop_2_exit(){return o.call(this)};return(l=function(e){for(;e;){if(e.then)return void e.then(l,t);try{if(e.pop){if(e.length)return e.pop()?h.call(this):e;e=f}else e=e.call(this)}catch(e){return t(e)}}}.bind(this))(f)}var g,d=function $Loop_4(){return a--&&m.size>i?(c.width*=.9,c.height*=.9,c.getContext("2d").drawImage(s,0,0,c.width,c.height),u*=.9,canvasToFile(c,e.type,e.name,e.lastModified,u).then(function(e){try{return m=e,$Loop_4}catch(e){return t(e)}},t)):[1]},p=function $Loop_4_exit(){return o.call(this)};return(g=function(e){for(;e;){if(e.then)return void e.then(g,t);try{if(e.pop){if(e.length)return e.pop()?p.call(this):e;e=d}else e=e.call(this)}catch(e){return t(e)}}}.bind(this))(d)}catch(e){return t(e)}}.bind(this),t)}catch(e){return t(e)}}.bind(this),t)})}var e,n=0;var r=function createWorker(e){return new Worker(URL.createObjectURL(new Blob(["(".concat(e,")()")])))}(function(){self.addEventListener("message",function(e){return new Promise(function(n,r){var t,a,i,o,s=e.data;t=s.file,a=s.id,i=s.imageCompressionLibUrl,o=s.options;var c=function $Try_1_Post(){try{return n()}catch(e){return r(e)}},u=function $Try_1_Catch(e){try{return console.error("[worker] error",e),self.postMessage({error:e.message,id:a}),c()}catch(e){return r(e)}};try{var m;return console.log("[worker] importScripts",i),importScripts(i),console.log("[worker] self",self),imageCompression(t,o).then(function(e){try{return m=e,self.postMessage({file:m,id:a}),c()}catch(e){return u(e)}},u)}catch(e){u(e)}})})});function compressOnWebWorker(t,a){return new Promise(function(i,o){return new Promise(function(s,c){e||(e=function createSourceObject(e){return URL.createObjectURL(new Blob([e],{type:"application/javascript"}))}("\n    function imageCompression (){return (".concat(imageCompression,").apply(null, arguments)}\n    imageCompression.drawImageInCanvas = ").concat(imageCompression.drawImageInCanvas,"\n    imageCompression.getDataUrlFromFile = ").concat(imageCompression.getDataUrlFromFile,"\n    imageCompression.getFilefromDataUrl = ").concat(imageCompression.getFilefromDataUrl,"\n    imageCompression.loadImage = ").concat(imageCompression.loadImage,"\n    imageCompression.drawFileInCanvas = ").concat(imageCompression.drawFileInCanvas,"\n    imageCompression.canvasToFile = ").concat(imageCompression.canvasToFile,"\n    drawImageInCanvas = imageCompression.drawImageInCanvas\n    getDataUrlFromFile = imageCompression.getDataUrlFromFile\n    getFilefromDataUrl = imageCompression.getFilefromDataUrl\n    loadImage = imageCompression.loadImage\n    drawFileInCanvas = imageCompression.drawFileInCanvas\n    canvasToFile = imageCompression.canvasToFile\n    function compress (){return (").concat(compress,").apply(null, arguments)}\n    ")));var u=n++;return r.addEventListener("message",function handler(e){e.data.id===u&&(r.removeEventListener("message",handler),e.data.error&&o(e.data.error),i(e.data.file))}),r.postMessage({file:t,id:u,imageCompressionLibUrl:e,options:a}),s()})})}function imageCompression(e,n){return new Promise(function(r,t){var a,i;if(n.maxSizeMB=n.maxSizeMB||Number.POSITIVE_INFINITY,n.useWebWorker="boolean"!=typeof n.useWebWorker||n.useWebWorker,!(e instanceof Blob||e instanceof File))return t(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(e.type))return t(new Error("The file given is not an image"));if(a="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,n.useWebWorker&&"function"==typeof Worker&&!a){var o=function(){try{return $If_2.call(this)}catch(e){return t(e)}}.bind(this),s=function $Try_1_Catch(e){try{return console.error("run compression in web worker failed",e),o()}catch(e){return t(e)}};try{var c;return compressOnWebWorker(e,n).then(function(n){try{return(c=n).name=e.name,c.lastModified=e.lastModified,r(c)}catch(e){return s(e)}},s)}catch(e){s(e)}}function $If_2(){return a?console.log("run compression in web worker"):console.log("run compression in main thread"),compress(e,n).then(function(n){try{return(i=n).name=e.name,i.lastModified=e.lastModified,r(i)}catch(e){return t(e)}},t)}return $If_2.call(this)})}return imageCompression.drawImageInCanvas=drawImageInCanvas,imageCompression.getDataUrlFromFile=getDataUrlFromFile,imageCompression.getFilefromDataUrl=getFilefromDataUrl,imageCompression.loadImage=loadImage,imageCompression.canvasToFile=canvasToFile,imageCompression.drawFileInCanvas=drawFileInCanvas,imageCompression});
//# sourceMappingURL=browser-image-compression.js.map
