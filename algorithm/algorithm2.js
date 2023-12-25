function main() {
    // Klavyeden girilecek bir N değerine kadar fibonacci dizisini bulan program.
    var x, y, z, s, n;

    x = 1;
    y = 1;
    s = 3;
    n = Number(window.prompt('Enter a value for n'));
    window.alert(x.ToString() + " ");
    window.alert(y.ToString() + " ");
    while (s <= n) {
        z = x + y;
        window.alert(z.ToString() + " ");
        x = y;
        y = z;
        s = s + 1;
    }
}
