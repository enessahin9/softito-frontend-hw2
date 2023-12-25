function main() {
    // Klavyeden girilecek bir sayının tek mi çift mi olduğunu bulan program.
    var x;

    window.alert("Kontrol etmek istediğiniz sayıyı giriniz: ");
    x = Number(window.prompt('Enter a value for x'));
    if (x < 0) {
        window.alert("Pozitif bir değer giriniz!");
    } else {
        if (x % 2 == 0) {
            window.alert("Girilen sayı çifttir!");
        } else {
            window.alert("Girilen sayı tektir!");
        }
    }
}
