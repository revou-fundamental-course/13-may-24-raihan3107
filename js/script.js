document.getElementById('luas-segitiga').addEventListener('submit', function(event) {
    event.preventDefault();

    let alas = parseFloat(document.getElementById('alas').value);
    let tinggi = parseFloat(document.getElementById('tinggi').value); 

    if (alas > 0 && tinggi > 0) {
        let area = 0.5 * alas * tinggi;
        document.getElementById('result').innerHTML = ("L = 1/2 x a x t " + "<br>" + "L = 1/2 x " + alas + " x " + tinggi + "<br>" + "L = " + area);
        console.log(alas);
    } else {
        document.getElementById('result').innerText = 'Mohon untuk Memasukkan Angka Positif yang Valid';
    }
});

document.getElementById('keliling-segitiga').addEventListener('submit', function(event){
    event.preventDefault();

    let sisia = parseFloat(document.getElementById('sisia').value);
    let sisib = parseFloat(document.getElementById('sisib').value);
    let sisic = parseFloat(document.getElementById('sisic').value);
    
    if (sisia > 0 && sisib > 0 && sisic > 0) {
        console.log(sisia);
        let keliling = sisia + sisib + sisic;
        document.getElementById('hasil').innerHTML = ("K = S1 + S2 + S3 " + "<br>" + "K = " + sisia + " + " + sisib + " + " + sisic + "<br>" + "K = " + keliling);
    } else {
        document.getElementById('hasil').innerText = 'Mohon untuk Memasukkan Angka Positif yang Valid';
    }    
});
