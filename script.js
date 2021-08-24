function geraQRCode(){
    document.getElementById('qrcode').innerHTML = ''
    var link = document.getElementById('linkQRCode').value;
    new QRCode(document.getElementById('qrcode'), {
        text: link,
        width: 250,
        height: 250 
    });
} 

function lerQRCode(){
    let scanner = new Instascan.Scanner({ video: document.getElementById('webcam') });
    Instascan.Camera.getCameras().then(cameras => {
        scanner.camera = cameras[0];
        scanner.start();
    }).catch(e => console.error(e));

    scanner.addListener('scan', content => {
        document.getElementById('divReturnScan').style.display = 'block';
        document.getElementById('scanQRCode').value = content;
    });
}

document.getElementById('btnAcessarQRCode').addEventListener('click', function(){
    link = document.getElementById('scanQRCode').value;
    window.open(link);
});