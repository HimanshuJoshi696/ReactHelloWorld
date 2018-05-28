/*First component in React JS */

import React from 'react';
import ReactDom from 'react-dom';
import ChildProduct from './components/UpdateDeleteEdit';
import AjaxCallByFetch from './components/ResponseUsingFetch';
import AjaxCallByJquery from './components/ResponseUsingJqry';
import $ from 'jquery';

import { BrowserRouter, Link, Route } from 'react-router-dom';
//  Add, Delete, Update Item  From the list   //

class ParentProduct extends React.Component{
    constructor(){
        super();
        this.state = {
            ProductLists:['IceCream', 'Bread', 'Egg', 'kabab'],
            CurrentValueInput:"",
        }
        
        this.UpdateValueToCurrentValue = this.UpdateValueToCurrentValue.bind(this)
        this.AddNewValueList = this.AddNewValueList.bind(this);
        this.DeleteListItem = this.DeleteListItem.bind(this);
        this.editTask = this.editTask.bind(this);
    }

    // ---------------------update the onchage vlaue in the new state --------------------------

    UpdateValueToCurrentValue(newValue){
        this.setState({
            CurrentValueInput:newValue.target.value
        })
    }
    // ---------------------Add new item in the list --------------------------

    AddNewValueList(event){
        event.preventDefault();
        let VarProductLists = this.state.ProductLists;
        let varCurrentValueInput = this.state.CurrentValueInput;
        VarProductLists.push(varCurrentValueInput)
        this.setState({
            VarProductLists
        })
    }
    
    // ---------------------Delete the Item from list --------------------------

    DeleteListItem(index){
       let varDeleteItem = this.state.ProductLists;
       varDeleteItem.splice(index, 1);
       this.setState({
           varDeleteItem
       })
    }

    editTask(index, newValue){
        let ProductLists = this.state.ProductLists;
        let ProductList = ProductLists[index];
        ProductList = newValue;
        this.setState({
            ProductLists
        })
    }
    // -------------------End Delete the Item from list --------------------------

    render(){
        return(
            <div className = "ProductListWrapper">
            <AjaxCallByFetch />
            <AjaxCallByJquery />
            <ChildProductListAdd  
                currentValueState = {this.state.currentValueState}
                updateValue = {this.UpdateValueToCurrentValue}
                AddNewValueList = {this.AddNewValueList}
            />

                <ul>{
                    this.state.ProductLists.map((namesList, index) =>{
                       return <ChildProduct 
                       ProductListPros = {namesList}
                       DeleteList = {this.DeleteListItem}
                       index = {index} key = {namesList}
                       editTask = {this.editTask}
                       />
                    })
                }
                    
                </ul>
            </div>
        )
    }
}
class ChildProductListAdd extends React.Component{
    render(){
        return(
            <form onSubmit = {this.props.AddNewValueList}>
                <input type = "text" value = {this.props.currentValueState}
                onChange = {this.props.updateValue}/>
                <button type = "submit" >Submit</button>
            </form>
        )
    }
}    
const FirstComp = ()=>(
    <div>
        Single page application first component
    </div>
)
// child componeont //
ReactDom.render(
    <BrowserRouter>
        <Route path= "/" component="FirstComp" />
    </BrowserRouter>,
     document.getElementById('productList'));

    // make ajax request reausable // 
class FetchReusable extends React.Component{
    constructor(){
        super();
        this.state = {
            contentArr : [],
        }
    }
    componentDidMount(){
        $.ajax({
            url: this.props.url,
            success:(data) =>{
                this.setState({
                    contentArr : data
                })
            },
            error:(err) => {
                console.log("err", err)
            }
        })
    }
    render(){
        return(
            <section>
                {this.props.children(this.state.contentArr)}
            </section>
        )
    }
}

class AppSendReq extends React.Component{
    render(){
        return(
            <section>
                <FetchReusable url ="https://jsonplaceholder.typicode.com/posts">
                {(data) =>{
                    return data.map((level, index) =>{
                    return <li key = {index}> {level.title}</li>
                    })
                }}
                </FetchReusable>

                user details now using ajax reausable code
                <FetchReusable url ="https://jsonplaceholder.typicode.com/users">
                {(data) =>{
                    return data.map((level, index) =>{
                    return <li key = {index}> {level.name}</li>
                    })
                }}
                </FetchReusable>
            </section>
        )
    }
}

ReactDom.render( <AppSendReq />, document.getElementById("AjaxRequest"))