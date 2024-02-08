class Coffee {
    constructor() {
        this.lineWidth = 1;
        this.lineColor = '#000000';

        this.fillColor = '#000000';

        this.ux = 0;
        this.uy = 0;
        this.uw = null;
        this.uy = null;
    }

    /**
     * Create the window object for the Coffee engine.
     * @param {Number} width 
     * @param {Number} height
     */
    createWindow(width = 320, height = 240) {
        this.window = document.createElement('canvas');
        this.window.id = "coffee_window";
        this.window.width = width;
        this.window.height = height;
        this.window.style.border = "1px solid white";
        this.ctx = this.window.getContext('2d');
    }

    /**
     * Makes the Coffee window visible.
     */
    displayWindow() {
        document.body.appendChild(this.window);
    }

    /**
     * Adjusts window dimensions to the specified width and height.
     * @param {Number} width 
     * @param {Number} height 
     */
    resizeWindow(width = this.window.width, height = this.window.height) {
        this.window.width = width;
        this.window.height = height;
    }

    /**
     * Draws a CoffeeSprite on to the window.
     * @param {CoffeeSprite} sprite
     * @param {Number} x 
     * @param {Number} y 
     */
    drawSprite(sprite, x, y) {
        this.ctx.beginPath();
        let is_cropped = this.ux != null && this.uy != null && this.uw != null && this.uh != null;
        if (is_cropped) {
            this.ctx.drawImage(sprite.image, this.ux, this.uy, this.uw, this.uh, x, y, sprite.width, sprite.height);
        } else {
            this.ctx.drawImage(sprite.image, x, y, sprite.width, sprite.height);
        }
    }

    /**
     * Crops a sprite to specified dimensions. Great for spritesheets.
     * @param {Number} ux 
     * @param {Number} uy 
     * @param {Number} uw 
     * @param {Number} uh 
     */
    cropSprite(ux, uy, uw, uh) {
        this.ux = ux;
        this.uy = uy;
        this.uw = uw;
        this.uh = uh;
    }

    /**
     * Draws a line on the Coffee surface.
     * @param {Number} x0 
     * @param {Number} y0 
     * @param {Number} x1 
     * @param {Number} y1 
     */
    line(x0, y0, x1, y1) {
        this.ctx.strokeStyle = this.lineColor;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.beginPath();
        this.ctx.moveTo(x0, y0);
        this.ctx.lineTo(x1, y1);
        this.ctx.stroke();
    }

    /**
     * Draws a single pixel on the Coffee surface.
     * @param {Number} x 
     * @param {Number} y 
     * @param {String} col 
     */
    pixel(x, y, col) {
        this.ctx.fillStyle = col;
        this.ctx.beginPath();
        this.ctx.fillRect(x, y, 1, 1);
    }

    fillRect(x, y, w, h) {
        this.ctx.fillStyle = this.fillColor;
        this.ctx.beginPath();
        this.ctx.fillRect(x, y, w, h);
    }

    /**
     * Clears the Coffee surface.
     */
    wipe() {
        this.ctx.clearRect(0, 0, this.window.width, this.window.height);
    }

    drawObject(object) {
        this.drawSprite(object.sprite, object.x, object.y);
    }
}

class CoffeeSprite {
    /**
     * Creates new sprite for use with the Coffee engine.
     * @param {String} image_path 
     * @param {Number} width
     * @param {Number} height
     */
    constructor(image_id, width = 128, height = 128) {
        this.image = document.getElementById(image_id)
        this.width = width;
        this.height = height;
    }

}

let CoffeeKeys = {};

document.addEventListener('keydown', function(event) {
    CoffeeKeys[event.key] = true;
});

document.addEventListener('keyup', function(event) {
    CoffeeKeys[event.key] = false;
});

class CoffeeObject {
    /**
     * The main building block of the game. Can be a player, box, enemy, etc.
     */
    constructor() {
        this.x = 0;
        this.y = 0;
        this.sprite = null;
    }

    /**
     * Sets object's x and y.
     * @param {Number} x 
     * @param {Number} y 
     */
    goTo(x, y) {
        this.x = x;
        this.y = y;
    }

    /**
     * Scales an object to the specified width and height.
     * @param {Number} w 
     * @param {Number} h 
     */
    scaleTo(w, h) {
        this.sprite.width = w;
        this.sprite.height = h;
    }
}
