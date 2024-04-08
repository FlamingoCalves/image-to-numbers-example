document.getElementById('generateBtn').addEventListener('click', function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const scale = 100; // Scale each pixel by this much
    const unscaledArray = [];

    for (let row = 0; row < 6; row++) {
        const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        unscaledArray.push(new Array(6).fill(color));
        for (let col = 0; col < 6; col++) {
            ctx.fillStyle = color;
            ctx.fillRect(col * scale, row * scale, scale, scale);
        }
    }

    // Display the unscaled array
    document.getElementById('unscaledArray').textContent = JSON.stringify(unscaledArray, null, 2);
});