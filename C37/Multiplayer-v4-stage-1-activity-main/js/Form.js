class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "enter your name");
    this.playButton = createButton("play")
    this.titleImage = createImg("./assets/title.png")
    this.greeting = createElement("h2")
  }
  setElementPosition(){
   // this.titleImage.position(120,100)
    this.input.position(width/2-110, height/2-80)
    this.playButton.position(width/2-90, height/2-20)
    this.greeting.position(width/2-300, height/2-100)

  }
  display(){
    this.setElementPosition();
    this.handleMousePressed();
  }
  handleMousePressed(){
    this.playButton.mousePressed(()=>{
      this.input.hide()
      this.playButton.hide()
      var message = `hello ${this.input.value()} wait for another player to join`
      this.greeting.html(message)
    }) 

    
  }

}
