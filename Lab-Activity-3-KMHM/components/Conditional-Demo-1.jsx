//MERCADO, KARL MATTHEW H. WD-401

import React from "react";

function Greeting(){
    return(
        <h1>Hello! I am standard function.</h1>
    );
}
const ArrowGreeting = () =>(
    <h1>Hello! I am an arrow function.</h1>
)
function ShinyButton(){
    const handleClick = () => {
        alert("You clicked me!");
    }
    return(
        <Button
        onClick={() => {
            alert('clicked');
        }}
>
  Click me
</Button>

    );
}
export default App();