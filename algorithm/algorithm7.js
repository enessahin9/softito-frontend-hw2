function main() {
    // Sıfır girilinceye kadar klavyeden girilen değerlerin ortalamasını hesaplayan program.
    var topla, sayi, sayac, ort;

    topla = 0;
    sayac = 1;
    window.alert("0 değeri girilinceye kadar ortalaması alınacak değerleri giriniz: ");
    do {
        window.alert(sayac.ToString() + ". sayıyı giriniz: ");
        sayi = Number(window.prompt('Enter a value for sayi'));
        topla = topla + sayi;
        sayac = sayac + 1;
    } while (sayi != 0);
    ort = (double);
    topla / (sayac - 2);
    window.alert("Girilen " + (sayac - 2) + " adet sayının toplamı: " + topla);
    window.alert("Girilen " + (sayac - 2) + " adet sayının ortalaması:" + ort);
}
