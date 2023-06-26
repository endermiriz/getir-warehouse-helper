
var audio = new Audio("https://cdn.freesound.org/previews/658/658264_6142149-lq.mp3");
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendResponse){
    alert("Getir Warehouse Helper is Working!")
    new MutationObserver(function(mutations) {
        audio.play();

        // Order Number :
        const element = document.querySelector("#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div > div:nth-child(1) > span")
        // Print Order Number in Console :
        console.log(element.textContent);
    }).observe(
        document.querySelector('#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > span'),
        { subtree: true, characterData: true, childList: true }
    );
}
