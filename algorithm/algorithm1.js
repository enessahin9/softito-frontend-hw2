function main() {
    var x, n, i;

    // Girilecek X değerinden N değerine kadar olan  tüm doğal sayıları listeleyen program.
    window.alert("X değerini giriniz: ");
    x = Number(window.prompt('Enter a value for x'));
    window.alert("N değerini giriniz: ");
    n = Number(window.prompt('Enter a value for n'));
    if (n <= x) {
        window.alert("Lütfen N değerini X değerinden büyük giriniz!");
    } else {
        for (i = x; i <= n; i++) {
            window.alert(i);
            document.writeln(i);
        }
    }
}
