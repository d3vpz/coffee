let engine = new Coffee();

engine.createWindow(320, 240);
engine.displayWindow();

let morshu_image = new CoffeeSprite('morshu', 128, 128);

setInterval(() => {
    engine.wipe();
    engine.fillRect(0, 0, 320, 240);
    engine.drawSprite(morshu_image, 0, 0);
}, 0);