function main() {
    // Klavyeden girilen A ve B gibi iki sayıyı, bölme işlemi kullanmadan sadece toplama ve çıkarma kullanarak kalanlı bölme yaptıran program.
    var a, b, bölüm;

    bölüm = 0;
    window.alert("Bölünen sayıyı giriniz: ");
    a = Number(window.prompt('Enter a value for a'));
    window.alert("Bölen sayıyı giriniz: ");
    b = Number(window.prompt('Enter a value for b'));
    if (b == 0) {
        window.alert("Sonsuz!");
    } else {
        while (a >= b) {
            a = a - b;
            bölüm = bölüm + 1;
        }
        window.alert("Bölüm: " + bölüm);
        window.alert("Kalan: " + a);
    }
}
