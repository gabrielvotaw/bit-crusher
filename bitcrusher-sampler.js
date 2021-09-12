
/**
 * BitCrusher Sampler
 * Gabriel Votaw
 * Last Modified 2/19/2021
 */

let button1,button2,button3,button4,button5,bitCrusher,wetMix,bitMix;

function setup(){
    createCanvas(windowWidth,windowHeight);
    textFont("Arial");

    bitCrusher = new Tone.BitCrusher({
        bits: 8,
        wet: 0.5
    }).toDestination();

    multiplayer = new Tone.Players({
        coins: "coins.mp3",
        phaser: "phaser.mp3",
        storyIntro: "storyintro.mp3",
        spell: "spell.mp3"
    }).connect(bitCrusher);

    button1 = createButton("Play Coins");
    button1.position(width/2-50,100);
    button1.mousePressed(() => multiplayer.player("coins").start());

    button2 = createButton("Play Phaser");
    button2.position(width/2-50,150);
    button2.mousePressed(() => multiplayer.player("phaser").start());

    button1 = createButton("Play Story Intro");
    button1.position(width/2-50,200);
    button1.mousePressed(() => multiplayer.player("storyIntro").start());

    button1 = createButton("Play Spell");
    button1.position(width/2-50,250);
    button1.mousePressed(() => multiplayer.player("spell").start());

    wetMix = createSlider(0,1,0.5,0);
    wetMix.style("width","200px");
    wetMix.position(width/2-100,height/2);

    bitMix = createSlider(1,10,8,1);
    bitMix.style("width","200px");
    bitMix.position(width/2-100,height/2+150);
}

function draw(){
    background("gray");

    bitCrusher.wet.value = wetMix.value();
    bitCrusher.bits.value = bitMix.value();

    textSize(50);
    text("BitCrusher Sampler", 1250,100);
    textSize(25);
    text("(Lower Bits To Lower Quality Of Sound)", 1250,150);

    textSize(15);
    text(
        int(wetMix.value()*100 ) + "% Effected Sound",
        wetMix.x + 35,
        wetMix.y - 10
    );

    text(
        "Number of Bits: " + bitMix.value(),
        bitMix.x + 45,
        bitMix.y - 10
    );
}