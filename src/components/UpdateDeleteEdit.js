import React from 'react';

class ChildProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stateChanges : false
        }
       
        this.renderList = this.renderList.bind(this);
        this.renderFormInput = this.renderFormInput.bind(this); 
        this.toggleState = this.toggleState.bind(this); 
        this.EditInputValue = this.EditInputValue.bind(this)
    }

// -------------------Render List Item --------------------------

renderList(){
    return(
        <li>
            {this.props.ProductListPros} &nbsp;
            <button type="submit" 
                onClick = { () =>{
                    this.props.DeleteList(this.props.index)
                }}>Delete 
            </button>
            <button type="submit" 
                onClick = {(evt) =>{
                    evt.stopPropagation();
                    this.toggleState() 
                }}>Edit List 
            </button>
        </li>
    )
}



// -------------------Render Update Item --------------------------

renderFormInput(){
    return(
        <form>
            <input type = "text" defaultValue = {this.props.ProductListPros}
                ref = {(value) => {
                    this.input = value;
                }} 
            />
            <button type="submit" onClick = {this.EditInputValue}>Update List </button>
         </form>
    )
}

// -------------------State toggle change state --------------------------

toggleState(){
   var stateChanges =  this.state.stateChanges;
   this.setState({
     stateChanges: !this.stateChanges
   })
}
// -------------------Edit change value  --------------------------
EditInputValue(evt){
    evt.preventDefault();
    this.props.editTask(this.props.index, this.input.value);
    var stateChanges =  this.state.stateChanges;
   this.setState({
     stateChanges: this.stateChanges
   })
}
// -------------------Render  --------------------------

    render(){
        let stateChanges = this.state.stateChanges;
        return(
            <section>{
                stateChanges ? this.renderFormInput() : this.renderList()
            }   
            </section>
        )
    }
}  

/*ChildProduct.propTypes = {
    ProductListPros: React.PropTypes.func.isRequired,
    DeleteList: React.PropTypes.func,
    editTask: React.PropTypes.func,
}*/
export default ChildProduct;