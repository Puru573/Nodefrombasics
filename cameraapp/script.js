let gallery=document.querySelector(".gallery");
gallery.addEventListener("click",()=>{
    location.assign("./gallery.html");
});
let uid=new ShortUniqueId();
let video=document.querySelector("video");
let captureBtnCont=document.querySelector(".capture-btn-cont");
let captureBtn=document.querySelector(".capture-btn");
let transparentColor="transparent";
let recordBtnCont = document.querySelector(".record-btn-cont");
let recordBtn = document.querySelector(".record-btn");

let recorder;
let constraints={
    video:true,
    audio:false
}
let shouldRecord=false;

navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
    video.srcObject=stream;

    recorder=new MediaRecorder(stream);
    recorder.addEventListener("start",()=>{
        recordBtn.classList.add("scale-capture");
        //memory(event ka apna obj)
        chunks=[];
        console.log("rec started");
    })

    recorder.addEventListener("dataavailable",(e)=>{
        chunks.push(e.data);
        console.log("recording pushed in chunks");
    });
    recorder.addEventListener("stop",()=>{
        //convert video
        let blob=new Blob(chunks,{type:'video/mp4'});
        console.log('rec stopped');

        //download video in desktop
        let videoURL=URL.createObjectURL(blob);
        console.log(videoURL);
        //store in database
        // let a=document.createElement('a');
        // a.href=videoURL;
        // a.download="myvideo.mp4";
        // a.click();
        if(db){
            let videoID=uid();
            let dbTransaction=db.transaction("video","readwrite");
            let videoStore=dbTransaction.objectStore("video");
            let videoEntry={
                id:`vid-${videoID}`,
                blobData:blob,
            }
            let addrequest=videoStore.add(videoEntry);
            addrequest.onsuccess=()=>{
                console.log("video added to db successfully");
            }
        }
    })
});

//click photo
captureBtnCont.addEventListener("click",()=>{
    captureBtn.classList.add("scale-capture");

    let canvas=document.createElement("canvas");
    let tool=canvas.getContext("2d");
    canvas.width=video.videoWidth;
    canvas.height=video.videoHeight;
    tool.drawImage(video,0,0,canvas.width,canvas.height);

    //applying filters on photo
    tool.fillStyle=transparentColor;
    tool.fillRect(0,0,canvas.width,canvas.height);
    let imageURL=canvas.toDataURL();
    // let img= document.createElement("img");
    // img.src=imageURL;
    // document.body.append(img);

    if(db) {
        let imageID=uid();
        let dbTransaction=db.transaction("image","readwrite");
        let imageStore=dbTransaction.objectStore("image");
        let imageEntry={
            id:`img-${imageID}`,
            url:imageURL
        };
        let addRequest=imageStore.add(imageEntry);
        addRequest.onsuccess=() => {
         console.log("image added to db successfully");   
        }
    }
    setTimeout(()=>{
        captureBtn.classList.remove("scale-capture");

    },510);

 
});

recordBtnCont.addEventListener("click",()=>{
  
    shouldRecord=!shouldRecord;
  
    if(shouldRecord){
        recordBtn.classList.add("scale-record");
        //recording start
        recorder.start();
        //start timer
        startTimer();
    }
    else{
        //stop the recording
        recordBtn.classList.remove("scale-record");
        recorder.stop();
        //stop the timer
        stopTimer();
    }
});

let timer=document.querySelector(".timer");
let counter=0; 
let timerID;
function startTimer(){
    timer.style.display="block";
    function displayTimer(){
        let totalseconds=counter;
        let hours=Number.parseInt(totalseconds/3600);
        totalseconds=totalseconds % 3600;

        let minutes=Number.parseInt(totalseconds / 60);
        totalseconds=totalseconds % 60;

        let seconds=totalseconds;

        hours=hours<10 ? `0 ${hours}`:hours;
        minutes=minutes<10 ?`0 ${minutes}`:minutes;
        seconds=seconds<10 ?`0 ${seconds}`:seconds;
        timer.innerText=`${hours}:${minutes}:${seconds}`;
        counter++;

    }
    timerID=setInterval(displayTimer,1000);
    counter=0;
    
}
function stopTimer(){
    clearInterval(timerID);
    timer.innerText="00:00:00";
    timer.style.display='none';
}

// filter layer

let filterLayer=document.querySelector(".filter-layer");
let allfilters=document.querySelectorAll(".filter");

allfilters.forEach((filterElem) => {
    filterElem.addEventListener('click',()=>{
        transparentColor=getComputedStyle(filterElem).getPropertyValue('background-color');
        filterLayer.style.backgroundColor=transparentColor;
    })
})
// getcomputed style he vo saari property lata he
// getproperty jo he vo value lata he 