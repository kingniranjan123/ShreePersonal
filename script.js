// Staggered Animation for Bento Grids
document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll('.bento-item');

    // Add staggered delay to each tile
    tiles.forEach((tile, index) => {
        tile.style.animationDelay = `${index * 100}ms`;
    });

    // Hover effect enhancement (optional: tilt effect)
    tiles.forEach(tile => {
        tile.addEventListener('mousemove', (e) => {
            const rect = tile.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            tile.style.setProperty('--mouse-x', `${x}px`);
            tile.style.setProperty('--mouse-y', `${y}px`);
        });
    });
});
