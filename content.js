



var audio = new Audio("https://cdn.freesound.org/previews/658/658264_6142149-lq.mp3");
var timeraudio = new Audio("https://cdn.freesound.org/previews/528/528866_7614679-lq.mp3")
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendResponse){
    var order_list = [];
    var itemsToKeep = [];
    alert("Getir Warehouse Helper is Working!")
    chrome.runtime.sendMessage(JSON.stringify({
        left: window.screenLeft + window.outerWidth,
        top: window.screenTop
    }), (response) => {});
    new MutationObserver(function(mutations) {
        for (let mutation of mutations) {
            if (mutation.type === 'characterData') {
                // Get Child Count:
                let orderCardCount = $("#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > *").length
                console.log(orderCardCount); // Print child count in console
                setTimeout(() => {checkOrder(orderCardCount)},500); // This function checking order number and carrier name
                setTimeout(() => {checkOrdertoRemove(orderCardCount)},500);
                removeItems(order_list,itemsToKeep);
                const changedData = parseInt(mutation.target.data);
                const OldData = parseInt(mutation.oldValue);
                var today = new Date();
                var changeTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

                const currentTime = new Date();
                const fivesecTime = new Date(currentTime.getTime() + 7000);
                const alertTime = fivesecTime.getHours() + ":" + fivesecTime.getMinutes() + ":" + fivesecTime.getSeconds();
                // // Order Number :
                // const ordernum = document.querySelector("#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div > div:nth-child(1) > span")
                // // Carrier Name :
                // setTimeout(() => {
                //     const carriername = document.querySelector("#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div > div:nth-child(3) > span > span")
                //     try {
                //         // Print Order Number and Carrier Name in Console :
                //         console.log(ordernum.textContent);
                //         console.log(carriername.textContent);
                //     } catch(err) {}
                // }, 500);
                console.log(`Changed data: ${changedData} from ${OldData}, time: ${changeTime} alert time: ${alertTime}`);
                if (changedData > OldData) {
                    audio.play();
                    const delay = 7000;
                    setTimeout(() => {
                        const ordernumtimed = document.querySelector("#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div > div:nth-child(1) > span")
                        
                        if (orderCardCount > 1) {
                            for (let index = 1; index <= orderCardCount; index++) {
                                console.log(index);
                                const ordernum = document.querySelector(`#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div:nth-child(${index}) > div:nth-child(1) > span`);
                                const carriername = document.querySelector(`#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div:nth-child(${index}) > div:nth-child(3) > span > span`);
                                
                                const item_exist = order_list.includes(ordernum);
                                if (item_exist === true){
                                    console.log(`Süre doldu: ${ordernum.textContent} siparişi ${carriername.textContent} tarafından onaylanmadı`);
                                    timeraudio.play();
                                }
                                


                                
                            }
                        }
                        else if(orderCardCount == 1){
                            const ordernum = document.querySelector(`#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(1) > span`);
                            const carriername = document.querySelector(`#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > span > span`);
                            const item_exist = order_list.includes(ordernum);
                            if (item_exist === true){
                                console.log(`Süre doldu: ${ordernum.textContent} siparişi ${carriername.textContent} tarafından onaylanmadı`);
                                timeraudio.play();
                            }
                        }
                        
                        
                        // if(ordernum === ordernumtimed){
                        //     var today = new Date();
                        //     var changeTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                        //     console.log('alert time :',changeTime)
                        //     var xhr = new XMLHttpRequest();
                        //     var url = "http://localhost:3000/sendmessage";
                        //     xhr.open("POST", url, true);
                        //     xhr.setRequestHeader("Content-Type", "application/json");
                        //     xhr.onreadystatechange = function () {
                        //         if (xhr.readyState === 4 && xhr.status === 200) {
                        //             var json = JSON.parse(xhr.responseText);
                        //             console.log(json.number + ", " + json.message);
                        //         }
                        //     };
                        //     var data = JSON.stringify({"number": "9055555555", "message": "TEST MESSAGE"});
                        //     xhr.send(data);
                        //     timeraudio.play();
                        //     console.log("zaman doldu");
                        // }
                      }, delay);
                }
            }
        }

        function checkOrder(ordercount){
            if (ordercount > 1) {
                for (let index = 1; index <= ordercount; index++) {
                    console.log(index);
                    const ordernum = document.querySelector(`#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div:nth-child(${index}) > div:nth-child(1) > span`);
                    const carriername = document.querySelector(`#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div:nth-child(${index}) > div:nth-child(3) > span > span`);
                    console.log(ordernum.textContent);
                    console.log(carriername.textContent);
                    order_list.indexOf(ordernum) === -1 ? order_list.push(ordernum) : console.log("This item already exists");
                    
                }
            }
            else if(ordercount == 1){
                const ordernum = document.querySelector(`#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(1) > span`);
                const carriername = document.querySelector(`#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > span > span`);
                console.log(ordernum.textContent);
                console.log(carriername.textContent);
                order_list.indexOf(ordernum) === -1 ? order_list.push(ordernum) : console.log("This item already exists");
            }
        
        }

        function checkOrdertoRemove(ordercount){
            itemsToKeep = [];
            if (ordercount > 1) {
                for (let index = 1; index <= ordercount; index++) {
                    console.log(index);
                    const ordernum = document.querySelector(`#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div:nth-child(${index}) > div:nth-child(1) > span`);
                    const carriername = document.querySelector(`#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div:nth-child(${index}) > div:nth-child(3) > span > span`);
                    itemsToKeep.indexOf(ordernum) === -1 ? itemsToKeep.push(ordernum) : console.log("This item already exists");
                    
                }
            }
            else if(ordercount == 1){
                const ordernum = document.querySelector(`#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(1) > span`);
                const carriername = document.querySelector(`#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div:nth-child(1) > div:nth-child(3) > span > span`);
                itemsToKeep.indexOf(ordernum) === -1 ? itemsToKeep.push(ordernum) : console.log("This item already exists");
            }
        
        }
        // // Order Number :
        // const ordernum = document.querySelector("#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div > div:nth-child(1) > span")
        // // Carrier Name :
        // setTimeout(() => {
        //     const carriername = document.querySelector("#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > div > div > div:nth-child(3) > span > span")
        //     try {
        //         // Print Order Number and Carrier Name in Console :
        //         console.log(ordernum.textContent);
        //         console.log(carriername.textContent);
        //     } catch(err) {}
        //   }, 500);


    }).observe(
        document.querySelector('#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20 > div > div.ant-row > div.ant-col.ant-col-xs-24.ant-col-md-20 > div > div:nth-child(4) > span'),
        { subtree: true, characterData: true, childList: true , characterDataOldValue: true}
    );
}


function sendMessageToCarrier(message,ordernumber,carriername) {
    var xhr = new XMLHttpRequest();
    var url = "http://localhost:3000/sendmessage";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.number + ", " + json.message);
        }
    };
    var data = JSON.stringify({"number": "9055555555", "message": "TEST MESSAGE"});
    xhr.send(data);
}

function removeItems(list, itemsToKeep) {
    for (let i = list.length - 1; i >= 0; i--) {
        if (!itemsToKeep.includes(list[i])) {
          list.splice(i, 1);
        }
      }
  }


// function addTrackerHTML(){
//     const element = document.createElement('div');
//     var htmlcontent = '<div class="order-js"><div class="order-container"><div class="order-container-tab"><div class="order-container-tab-list"><div class="order-container-tab-nav-wrap"><div class="order-container-tab-list-nav-list" style="transform: translate(0px, 0px);"><div class="ant-tabs-tab"><div role="tab" class="ant-tabs-tab" id="ordern-1" tabindex="0">Order:1</div></div></div></div></div></div></div></div>';
//     element.innerHTML = htmlcontent;
//     var targetElement = document.querySelector('#root > div > div.layout--M4fKj > div.ant-row.ant-row-top > div.ant-col.ant-col-xs-24.ant-col-md-18.ant-col-xl-20');
//     targetElement.appendChild(element);
//     // targetElement.appendChild = htmlcontent;
//     // targetElement.innerHTML = htmlcontent;
// }