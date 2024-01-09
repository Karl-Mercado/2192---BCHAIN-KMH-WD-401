//import React from "react";
//import ChildComponent from "./ChildComponent";

//function ParentComponent(){
    //const dataToPass = "Hello from Parents!"
    //return(
        //<ChildComponent message={dataToPass} />
    //)
//}
//export default ParentComponent

//Using Class Component
import React from "react";
import ChildComponent from "./ChildComponent";
class ParentComponent extends React.Component{
    render(){
        const message = "YOYOYOYO"
        return(
            <>
            <ChildComponent message = {message} />
            </>
        )
    }
}
export default ParentComponent