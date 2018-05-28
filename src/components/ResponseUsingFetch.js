/* Using Fetch Api */

import React from 'react';
import $ from 'jquery';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class AjaxCallByFetch extends React.Component{
    constructor(){
        super();
        this.state = {
            hits: [],
        };
    }
    componentDidMount(){
       fetch(API + DEFAULT_QUERY)
       .then(response => response.json())
       .then(data => this.setState({ hits: data.hits }));
    }
    render(){
        return(
            <section>
                <h1>Response from json</h1>
                   <ul>
                       {
                           this.state.hits.map((ListName) =>{
                            return <li key={ListName.id}>{ListName.title}</li>
                           })
                       }
                   </ul>
            </section>
        )
    }

}
export default AjaxCallByFetch;