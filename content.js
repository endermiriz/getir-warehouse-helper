
var audio = new Audio("https://cdn.freesound.org/previews/658/658264_6142149-lq.mp3");
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendResponse){
    alert("Getir Warehouse Helper is Working!")
    
    new MutationObserver(function(mutations) {
        for (let mutation of mutations) {
            if (mutation.type === 'characterData') {
                const changedData = parseInt(mutation.target.data);
                const OldData = parseInt(mutation.oldValue);
                console.log(`Changed data: ${changedData} from ${OldData}`);
                if (changedData > OldData) {
                    audio.play();
                }
            }
        }
        
        // Order Number :
        const ordernum = document.querySelector("#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div > div:nth-child(1) > span")
        // Print Order Number in Console :
        try {
            console.log(ordernum.textContent);
          }
          catch(err) {
          }
        
    }).observe(
        document.querySelector('#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > span'),
        { subtree: true, characterData: true, childList: true , characterDataOldValue: true}
    );
}
