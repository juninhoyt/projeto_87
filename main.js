// const { fabric }     = require("./fabrics");

var canvas = new fabric.Canvas('myCanvas');


blockY=1;
blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var block_image_object= "";


   function new_image(getImage)
   {
    fabric.Image.fromURL(getImage, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(blockImageWidth);
        block_image_object.scaleToHeight(blockImageHeight);
        block_image_object.set({
            top:blockY,
            left:blockX
        });
        canvas.add(block_image_object);
    })
   }


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.key;
console.log(e.key);

   if(keyPressed == 'e')
   {
    new_image('rr1.png');
    console.log("e")
    window.addEventListener("keydown" , myKeyDown);
   }
   if(keyPressed == 'v')
   {
    new_image('gr.png');
       console.log("v")
      
   }
   if(keyPressed == 'a')
   {
    new_image('yr.png');
       console.log("a")
      
   }
   if(keyPressed == 'r')
   {
    new_image('pr.png');
    console.log("r")
      
   }
   if(keyPressed == 'i')
   {
    new_image('br.png');
       console.log("i")
   
   }
   
}