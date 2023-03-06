

$(document).ready(function () {


    const scanner = new Html5QrcodeScanner(
        "qr-reader", { facingMode: { exact: "environment" } }, { fps: 10, qrbox: 250 });




    function onscansuccess(qrcodemessage) {
        window.location.href = qrcodemessage;
        console.log(qrcodemessage);
    }

    scanner.render(onscansuccess);

    const config = { fps: 10, qrbox: 250 }

    $("#testButton").click(function () {

        const html5QrCode = new Html5Qrcode("qr-reader");
        const qrCodeSuccessCallback = (decodedText, decodedResult) => {
            /* handle success */
        };
        const config = { fps: 10, qrbox: { width: 250, height: 250 } };

        html5QrCode.start({ facingMode: "environment" }, config, qrCodeSuccessCallback);
    });


    $("#testButton2").click(function () {

        Html5Qrcode.stop().then((ignore) => {
            // QR Code scanning is stopped.
        }).catch((err) => {
            // Stop failed, handle it.
        });
    });



});






