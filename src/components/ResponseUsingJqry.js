import React from 'react';
import $ from 'jquery';

class AjaxCallByJquery extends React.Component{
    constructor(){
        super();
        this.state = {
            userDetails : [],
        }
    }
    componentDidMount(){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            success: (data) =>{
                this.setState({
                    userDetails: data
                })
            }
        })
    }
    render(){
        return(
            <section>
                <ul>
                    {
                        this.state.userDetails.map((userData) =>{
                            return <li key ={userData.id}>{userData.name}</li>
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default AjaxCallByJquery;