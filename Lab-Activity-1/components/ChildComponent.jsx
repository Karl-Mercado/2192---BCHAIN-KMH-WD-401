//import React from "react";

//function ChildComponent(props){
    //return(
        //<div>
            //<p>Welcome to the World!</p>
        //</div>
    //)
//}
//export default ChildComponent

//Using Class Component
import React from "react";
class ChildComponent extends React.Component{
    render(){
        return(
            <>
            <p>{this.props.message}</p>
            </>
        )
    }
}
export default ChildComponent