chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        let data = JSON.parse(request);
        chrome.windows.create({
            url: chrome.runtime.getURL("index2.html"),
            type: "popup",
            top: data.top,
            left: data.left-400,
            width: 600,
            height: 512,
        });
    }
);
chrome.action.onClicked.addListener(myFunction);
function myFunction(tab) {
    let msg = {
        txt:"GetirWareHouse"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}