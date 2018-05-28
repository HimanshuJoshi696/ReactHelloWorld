import React from 'react';
const BreadChild = (props)=>{
    return(
        <li onClick = {()=>{
            props.listCliked(props.index)
        }}>{props.catagories.names}</li>
    )
}
export default BreadChild;
// state less component (if you have state then you must have class component 
// if you dont have state on your component then we can create stateless component
// using const keyword and you can see above example
//and state less component we can not use this because stateless component remove
//this keyword value)