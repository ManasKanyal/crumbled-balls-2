class dustbin{

    constructor(x,y){
    
 
      
        this.x = x;
        this.y = y;
        
   this.dustbinWidth=170;
   this.dustbinHeight=170;
   this.wallThickness=20;
    
   this.image=loadImage("dustbin.png")
   this.bottombody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
   this.leftbody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
   this.rightbody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})



    World.add(world,this.bottombody);
    World.add(world,this.rightbody);
    World.add(world,this.leftbody);
        

    
    }
    
    display(){
    

        var posBottom=this.bottombody.position;
			

            push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			pop()
    
    
    }
    
    }