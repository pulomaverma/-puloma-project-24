class Dustbin {
    constructor(x,y,w,h){
        var dustbin ={
            isStatic: true
            
        }	
    
        this.body = Bodies.rectangle(x,y,w,h,dustbin);
        
   this.width=w;
   this.height=h; 
}
display(){
 fill("white")  
 rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
}


} 

