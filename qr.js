  let oldRecord = "";
  
  async function fetchData() {

    let res=await fetch ("http://localhost:3000/getqr");
    let record=await res.json();
    if (record.qrData === "") {
        document.getElementById("qrcode").innerHTML="Whatsapp Bağlandı Sekmeyi Kapatabilirsiniz.";
    }
    else{


        if (record.qrData != oldRecord) {

            new QRCode(document.getElementById("qrcode"), {
                text: record.qrData,
                width: 300,
                height: 300
              });
            console.log(record.qrData);
            if(document.getElementById("qrcode").childElementCount > 2){
                const list = document.getElementById("qrcode");
                if (list.hasChildNodes()) {
                    list.removeChild(list.children[1]);
                    list.removeChild(list.children[0]);
                  }
            }

        }
        else{
        }

        oldRecord = record.qrData;
        fetchData();
    }

      
    // document.getElementById("qrcode").innerHTML=record.qrData;
//   // Gelen veriyi almak için GET isteği gönder
//     await fetch('http://localhost:3000/getqr') // URL'yi doğru şekilde güncelleyin
//       .then(response => response.json()) // JSON yanıtını al
//       .then(data => {
//         var qrData = data.qrData; // qrData'yı al

//         // QR kodu oluşturma
//         var qrcode = new QRCode(document.getElementById("qrcode"), {
//           text: qrData,
//           width: 200,
//           height: 200
//         });
//       })
//       .catch(error => {
//         // console.error('Hata:', error); // Hata durumunda konsola yazdır
//       });
    }

    fetchData();