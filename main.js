let engine = new Coffee();

engine.createWindow(320,240);
engine.windowScale = 1;
engine.displayWindow();

let player = new CoffeeObject();
player.goTo(engine.origin_x, engine.origin_y);

let angle = 0;

setInterval(() => {
    if (CoffeeKeys.ArrowLeft) {
        angle--;
    }
    if (CoffeeKeys.ArrowRight) {
        angle++;
    }
    engine.wipe();
    engine.fillColor = 'black';
    engine.fillRect(0, 0, engine.window.width, engine.window.height);
    engine.fillColor = 'white';
    engine.fillRect(player.x-3, player.y-3, 6, 6);
    engine.lineColor = 'red';
    engine.lineWidth = 1;
    engine.angledLine(player.x, player.y, rad(angle), 8);
}, 0);