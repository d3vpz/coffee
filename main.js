let engine = new Coffee();

engine.createWindow(320, 240);
engine.displayWindow();

let morshu_image = new CoffeeObject();
morshu_image.sprite = new CoffeeSprite('morshu', 128, 64);
morshu_image.scaleTo(128, 128);

setInterval(() => {
    engine.wipe();
    engine.fillRect(0, 0, 320, 240);
    engine.drawObject(morshu_image);
}, 0);