import React from 'react';

const FamilyMemberList = (props) => {
    return(
        <li onClick = {() => {
            props.familyCallMethod(props.index)
        }}>{props.FamilyDetails.name}</li>
    )
}
export default FamilyMemberList;