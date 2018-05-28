import React from 'react';

const FamilyInsertMember = (props) => {
    return(
        <div className = "insertMember">
            <form onSubmit = {props.AddState}>
                <input type = "text" value = {props.PersentValue} onChange = {props.UpdateValues}/>
                <button type = "submit" >Submit</button>
             </form>
        </div>
    )
}

export default FamilyInsertMember;