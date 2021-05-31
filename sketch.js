var back
var megaCharizardx
var suicune
var attackb
var attackb1
var attackb2
var attackb3
var attackc
var attackc1
var attackc2
var attackc3
var welcome
var start
var b
var b1
var megaWin
var megapro
var suicuneHP = 100
var megaCharizardxHP = 100
//megaCharizardx attacks
var attackEmber
var attackFlame
var attackPoison
var attackSwift
//groups
var EmberGroup
var FlameGroup
var PoisonGroup
var SwiftGroup
//suicune attacks
var attackdreamEater
var attackRockTomb
var attackIceBolt
var attackBoltTackle
//groups
var dreamEaterGroup
var RockTombGroup
var BoltIceGroup
var BoltTackleGroup

function setup() {

  createCanvas(windowWidth, windowHeight);
  back = createSprite(windowWidth, windowHeight)
  megaCharizardx = createSprite(200,500)
  suicune = createSprite(1200,200)
  welcome = createSprite(600,200)

  //start button
  start = createButton("start")
  start.mousePressed(Start)
  start.position(550,250)
  start.size(100)

  //start things
  b = createSprite(400,300)
  b1 = createSprite(800,300)

  //megaCharizardx attacks
  attackb = createButton("Ember")
  attackb1 = createButton("Flame Thrower")
  attackb2 = createButton("Poison")
  attackb3 = createButton("Swift")
  attackb.position(50,620)
  attackb1.position(120,620)
  attackb2.position(240,620)
  attackb3.position(310,620)

  //suicune attacks
  attackc = createButton("Ice Bolt")
  attackc1 = createButton("Rock Tomb")
  attackc2 = createButton("Dream Eater")
  attackc3 = createButton("Bolt Tackle")
  attackc.position(1260,320)
  attackc1.position(1170,320)
  attackc2.position(1070,320)
  attackc3.position(1170,350)

  //group suc
  EmberGroup = new Group();
  FlameGroup = new Group();
  PoisonGroup = new Group();
  SwiftGroup = new Group();

  //gropups mega
  dreamEaterGroup = new Group();
  RockTombGroup = new Group();
  BoltIceGroup = new Group();
  BoltTackleGroup = new Group();

}

function preload(){

  back1 = loadImage("back.jpg")
  megaCharizardx1 = loadImage("tenor.gif")
  suicune1 = loadImage("suicune.gif")
  attackEmber1 = loadImage("ember.png")
  attackFlame1 = loadImage("flame.png")
  attackPoison1 = loadImage("poision.png")
  attackSwift1 = loadImage("swift.png")
  attackdreamEater1 = loadImage("dream eater.png")
  attackRockTomb1 = loadImage("rock.png") 
  attackIceBolt1 = loadImage("swift tackle.png") 
  attackBoltTackle1 = loadImage("cunfuse.png")
  welcome1 = loadImage("welcome.gif")
  b2 = loadImage("start.gif")
  b11 = loadImage("start1.gif")
  megaWin1 = loadImage("mega.png")
  megapro1 = loadImage("megawin1.png")

}

function draw() {
  
  //background
   background("black");
   back.addImage(back1)
   megaCharizardx.addImage(megaCharizardx1)
   suicune.addImage(suicune1)
   welcome.addImage(welcome1)
   b.addImage(b2)
   b1.addImage(b11)

   back.scale = 0.7
   megaCharizardx.scale = 2

   drawSprites();

   fill("white")
   textSize(20);
   text("MegaCharizard x",50,390)
   fill(27,255,0)
   text("Helth "+megaCharizardxHP,50,420)
   fill("white")
   text("Suicune",1200,50)
   fill(27,255,0)
   text("Helth "+suicuneHP,1200,80)

     //mouse pressed over attacks
  //megaCharizardx
  attackb.mousePressed(Ember);
  attackb1.mousePressed(FlameThrower);
  attackb2.mousePressed(Poison);
  attackb3.mousePressed(swift)
  //suicune
  attackc2.mousePressed(dreamEater)
  attackc1.mousePressed(RockTomb)
  attackc.mousePressed(IceBolt)
  attackc3.mousePressed(BoltTackle)

  //suciune damage
  if(EmberGroup.isTouching(suicune)){

    suicuneHP = suicuneHP - 5
    EmberGroup.destroyEach();

  }

  if(FlameGroup.isTouching(suicune)){

    suicuneHP = suicuneHP - 10
    FlameGroup.destroyEach();

  }

  if(PoisonGroup.isTouching(suicune)){

    suicuneHP = suicuneHP - 15
    PoisonGroup.destroyEach();

  }

  if(SwiftGroup.isTouching(suicune)){

    suicuneHP = suicuneHP - 5
    SwiftGroup.destroyEach();

  }

  if(suicuneHP === 0){

   suicune.destroy();
   megaWin = createSprite(600,300)
   megaWin.addImage(megaWin1)
   megaWin.scale = 0.5  

  }

  //mmegachrizardX damage

  if(dreamEaterGroup.isTouching(megaCharizardx)){

    megaCharizardxHP = megaCharizardxHP - 10
    dreamEaterGroup.destroyEach();
 
   }

   if(RockTombGroup.isTouching(megaCharizardx)){

    megaCharizardxHP = megaCharizardxHP - 5
    RockTombGroup.destroyEach();
 
   }

   if(BoltIceGroup.isTouching(megaCharizardx)){

    megaCharizardxHP = megaCharizardxHP - 10
    BoltIceGroup.destroyEach();
 
   }

   if(BoltTackleGroup.isTouching(megaCharizardx)){

    megaCharizardxHP = megaCharizardxHP - 15
    BoltTackleGroup.destroyEach();
 
   }

  if(megaCharizardxHP === 0){

    megaCharizardx.destroy();
    megapro = createSprite(600,400)
    megapro.addImage(megapro1)
    megapro.scale = 2
    
  }

}

function Ember(){

  attackEmber = createSprite(200,500)
  attackEmber.addImage(attackEmber1)
  attackEmber.scale = 0.2
  attackEmber.velocityX = 10
  attackEmber.velocityY = -3

   EmberGroup.add(attackEmber);

}

function FlameThrower(){

  attackFlame = createSprite(200,500)
  attackFlame.addImage(attackFlame1)
  attackFlame.scale = 0.2
  attackFlame.velocityX = 10
  attackFlame.velocityY = -3

  FlameGroup.add(attackFlame);

}

function Poison(){

  attackPoison = createSprite(200,500)
  attackPoison.addImage(attackPoison1)
  attackPoison.scale = 0.2
  attackPoison.velocityX = 10
  attackPoison.velocityY = -3

  PoisonGroup.add(attackPoison);

}

function swift(){

  attackSwift = createSprite(200,500)
  attackSwift.addImage(attackSwift1)
  attackSwift.scale = 0.2
  attackSwift.velocityX = 10
  attackSwift.velocityY = -3

  SwiftGroup.add(attackSwift);

}

function dreamEater(){

  attackdreamEater = createSprite(1200,200)
  attackdreamEater.addImage(attackdreamEater1)
  attackdreamEater.velocityX = -10
  attackdreamEater.velocityY = 3

  dreamEaterGroup.add(attackdreamEater);

}

function RockTomb(){

  attackRockTomb = createSprite(1200,200)
  attackRockTomb.addImage(attackRockTomb1)
  attackRockTomb.scale = 0.3
  attackRockTomb.velocityX = -10
  attackRockTomb.velocityY = 3

  RockTombGroup.add(attackRockTomb)

}

function IceBolt(){

  attackIceBolt = createSprite(1200,200)
  attackIceBolt.addImage(attackIceBolt1)
  attackIceBolt.scale = 0.3
  attackIceBolt.velocityX = -10
  attackIceBolt.velocityY = 3

  BoltIceGroup.add(attackIceBolt);

}

function BoltTackle(){

  attackBoltTackle = createSprite(1200,200)
  attackBoltTackle.addImage(attackBoltTackle1)
  attackBoltTackle.scale = 0.3
  attackBoltTackle.velocityX = -10
  attackBoltTackle.velocityY = 3

  BoltTackleGroup.add(attackBoltTackle);

}

function Start(){

  start.hide();
  welcome.destroy();
  b.destroy();
  b1.destroy();

}


  
    
  


