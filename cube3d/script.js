let x = 0;
let y = 0;

document.addEventListener('mousemove', (event) => {
    x = (event.clientX / window.innerWidth) - 0.5;
    y = (event.clientY / window.innerHeight) - 0.5;
});

function animate() {
    let cube = document.querySelector('.cube');
    cube.style.transform = `rotateX(${y * 180}deg) rotateY(${x * -180}deg)`;
    requestAnimationFrame(animate);
}

animate();