{
    class myButton{
        button;
        constructor(content){
            this.button = document.createElement("button");
            this.button.innerHTML = content;
            document.body.appendChild(this.button);
        }
        set width(width){
            this.button.style.width = width + "px";
           }
        set height(height){
            this.button.style.height = height + "px";
        }

        get width(){
            return this.button.style.width;
        }
        get height(){
            return this.button.style.height;
        }
        onclick(fn){
            this.button.onclick = fn;
        }
    }
    let ourButton = new myButton("clickhere");
    console.log("ourbutton",ourButton);

    ourButton.width = 100;
    ourButton.height = 150;

    console.log("ourbutton width is",ourButton.width);
    console.log("ourbutton height is",ourButton.height);

    ourButton.onclick(function (){
        console.log("button clicked...")
    });

  
}
{
    class yellowbutton extends myButton{
        onclick(fn){
            this.button.onclick = function (){
                fn();
                this.button.style.background = "yellow";
            }.bind(this);
        }
    }
}