function main() {
    // Kullanıcıdan üç adet sayı alıp, ortanca sayıyı ekrana yazdıran program.
    var x, y, z;

    window.alert("Büyüklük sıralamasında ortanca sayıyı bulmak istediğiniz üç adet sayıyı giriniz: ");
    x = Number(window.prompt('Enter a value for x'));
    y = Number(window.prompt('Enter a value for y'));
    z = Number(window.prompt('Enter a value for z'));
    if (x < y && y < z || z < y && y < x) {
        window.alert("Ortanca sayı: " + y);
    } else {
        if (y < x && x < z || z < x && x < y) {
            window.alert("Ortanca sayı: " + x);
        } else {
            if (x < z && z < y || y < z && z < x) {
                window.alert("Ortanca sayı: " + z);
            } else {
                window.alert("Lütfen birbirinden farklı üç tam sayı giriniz!");
            }
        }
    }
}
