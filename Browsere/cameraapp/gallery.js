setTimeout(()=>{
    if(db){
        
        let imageDbTransaction=db.transaction("image","readonly");
        let imageStore=imageDbTransaction.objectStore("image");
        let imageRequest=imageStore.getAll();
        imageRequest.onsuccess=()=>{
            let imageResult=imageRequest.result;
            let galleryCont=document.querySelector(".gallery-cont");
            imageResult.forEach((imageObj)=>{
                let imageElem=document.createElement("div");
                imageElem.setAttribute("class","media-cont");
                imageElem.setAttribute("id",imageObj.id);
                let url=imageObj.url;
    
                imageElem.innerHTML=`
                <div class="media">
                <img src="${url}"/>
                </div>
                <div class="delete action-btn">DELETE</div>
                <div class="download action-btn">DOWNLOAD</div>
                `;
                
                galleryCont.appendChild(imageElem);
    
            });
        };
    
    
        let videoDBTRansaction = db.transaction("video", "readonly");
        let videoStore = videoDBTRansaction.objectStore("video");
        let videoRequest = videoStore.getAll();
        videoRequest.onsuccess = () => {
            let videoResult = videoRequest.result;
            let galleryCont = document.querySelector(".gallery-cont");
            
            videoResult.forEach((videoObj) => {
                let videoElem = document.createElement("div");
                videoElem.setAttribute("class", "media-cont");
                videoElem.setAttribute("id", videoObj.id);
                let url = URL.createObjectURL(videoObj.blobData);
                
                videoElem.innerHTML = `
                <div class="media">
                <video autoplay loop src="${url}"></video>
                </div>
                <div class="delete action-btn">DELETE</div>
                <div class="download action-btn">DOWNLOAD</div>
                `;
                
                galleryCont.appendChild(videoElem);
            });
    
        };
    }
},100);




