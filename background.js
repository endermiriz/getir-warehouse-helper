
chrome.action.onClicked.addListener(myFunction);
function myFunction(tab) {
    let msg = {
        txt:"GetirWareHouse"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}