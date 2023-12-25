function main() {
    // Klavyeden girilen bir sayının tüm tam bölenlerini bulup listeleyen program.
    var n, i;

    window.alert("Tam bölenlerini görmek istediğiniz sayıyı giriniz: ");
    n = Number(window.prompt('Enter a value for n'));
    if (n <= 0) {
        window.alert("Pozitif bir tamsayı giriniz!");
    } else {
        for (i = 1; i <= n; i++) {
            if (n % i == 0) {
                window.alert(i);
            }
        }
    }
}
