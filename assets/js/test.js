var scanner = new Html5QrcodeScanner(
    "qr-reader", { fps: 10, qrbox: 250 });

scanner.render(onscansuccess);

function onscansuccess(qrcodemessage) {
    window.location.href = qrcodemessage;
    console.log(qrcodemessage);
}

$("#testButton").click(function () {

    
    modalScanner();
    scanner.start();
});