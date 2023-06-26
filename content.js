
var audio = new Audio("https://cdn.freesound.org/previews/658/658264_6142149-lq.mp3");
var timeraudio = new Audio("https://cdn.freesound.org/previews/387/387533_3829977-lq.mp3")
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendResponse){
    alert("Getir Warehouse Helper is Working!")
    
    new MutationObserver(function(mutations) {
        for (let mutation of mutations) {
            if (mutation.type === 'characterData') {
                const changedData = parseInt(mutation.target.data);
                const OldData = parseInt(mutation.oldValue);
                var today = new Date();
                var changeTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

                const currentTime = new Date();
                const fivesecTime = new Date(currentTime.getTime() + 5000);
                const alertTime = fivesecTime.getHours() + ":" + fivesecTime.getMinutes() + ":" + fivesecTime.getSeconds();

                console.log(`Changed data: ${changedData} from ${OldData}, time: ${changeTime} alert time: ${alertTime}`);
                if (changedData > OldData) {
                    audio.play();
                    const delay = 5000;
                    setTimeout(() => {
                        const ordernumtimed = document.querySelector("#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div > div:nth-child(1) > span")
                        if(ordernum === ordernumtimed){
                            var today = new Date();
                            var changeTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                            console.log('alert time :',changeTime)
                            timeraudio.play();
                            console.log("zaman doldu");
                        }
                      }, delay);
                }
            }
        }
        // Order Number :
        const ordernum = document.querySelector("#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div > div:nth-child(1) > span")
        // Carrier Name :
        setTimeout(() => {
            const carriername = document.querySelector("#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div > div:nth-child(3) > span > span")
            try {
                // Print Order Number and Carrier Name in Console :
                console.log(ordernum.textContent);
                console.log(carriername.textContent);
            } catch(err) {}
          }, 500);


    }).observe(
        document.querySelector('#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > span'),
        { subtree: true, characterData: true, childList: true , characterDataOldValue: true}
    );
}
