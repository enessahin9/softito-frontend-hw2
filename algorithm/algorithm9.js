function main() {
    // Klavyeden girilecek iki pozitif tam sayının OBEB (Ortak Bölenlerin En Büyüğü)'ini hesaplayan program.
    var sayi1, sayi2, kucukSayi, i, ebob;

    window.alert("OBEB hesaplamak istediğiniz 1. sayıyı giriniz: ");
    sayi1 = Number(window.prompt('Enter a value for sayi1'));
    window.alert("OBEB hesaplamak istediğiniz 2. sayıyı giriniz: ");
    sayi2 = Number(window.prompt('Enter a value for sayi2'));
    if (sayi1 > sayi2) {
        kucukSayi = sayi2;
    } else {
        kucukSayi = sayi1;
    }
    for (i = 1; i <= kucukSayi + 1; i++) {
        if (sayi1 % i == 0 && sayi2 % i == 0) {
            ebob = i;
        }
    }
    window.alert("OBEB = " + ebob);
}
