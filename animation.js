var config = {
    type: Phaser.AUTO,
    width: 800, // Set the width of the canvas
    height: 600, // Set the height of the canvas
    backgroundColor: '#fbf0e4', // Set the background color
    scene: {
        preload: preload, // Load images of cat from assets
        create: create    // Create the animation for the cat
    }
};
//create phaser game object
var game = new Phaser.Game(config);

// Load images of cat from assets folder
function preload ()
{
    this.load.image('cat1', 'assets/cat1.png');
    this.load.image('cat2', 'assets/cat2.png');
    this.load.image('cat3', 'assets/cat3.png');
    this.load.image('cat4', 'assets/cat4.png');
}

function create ()
{
    //create an animation of the cat using 4 images of it.
    this.anims.create({
        key: 'snooze',
        frames: [
            { key: 'cat1' },
            { key: 'cat2' },
            { key: 'cat3' },
            { key: 'cat4', duration: 50 }
        ],
        frameRate: 8,
        repeat: -1
    });

    this.add.sprite(400, 300, 'cat1').play('snooze');
}