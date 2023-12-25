function main() {
    // Klavyeden girilecek 20 sayının tek olanlarını ayrı, çift olanlarını ayrı toplayıp ekrana yazdıran program.
    var i, sayi, ttoplam, ctoplam;

    ttoplam = 0;
    ctoplam = 0;
    window.alert("20 adet sayı giriniz: ");
    for (i = 0; i <= 19; i++) {
        sayi = Number(window.prompt('Enter a value for sayi'));
        if (sayi % 2 == 0) {
            ctoplam = ctoplam + sayi;
        } else {
            ttoplam = ttoplam + sayi;
        }
    }
    window.alert("Girilen değerlerin tek sayı toplamları: " + ttoplam);
    window.alert("Girilen değerlerin çift sayı toplamları: " + ctoplam);
}
