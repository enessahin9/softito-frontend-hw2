function main() {
    // Klavyeden girilen A ve B gibi iki sayını, çarpma işlemi kullanmadan sadece toplama ve çıkarma kullanarak çarpımlarını ekrana yazdıran program.
    var a, b, sayac;

    sayac = 0;
    window.alert("Çarpılacak ilk sayıyı giriniz: ");
    a = Number(window.prompt('Enter a value for a'));
    window.alert("Çarpılacak ikinci sayıyı giriniz: ");
    b = Number(window.prompt('Enter a value for b'));
    if (a < 0 && b < 0) {
        a = Math.abs(a);
        b = Math.abs(b);
        for (b = b; b >= 1; b--) {
            sayac = sayac + a;
        }
    } else {
        for (b = b; b >= 1; b--) {
            sayac = sayac + a;
        }
    }
    window.alert("Sayıların çarpımı = " + sayac);
}
