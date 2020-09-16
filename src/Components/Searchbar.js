import React from "react";
import {Button} from "react-bootstrap"

function Searchbar(props){
    return (
        <form action="#" onSubmit={event=>props.handleSubmit(event)} className="form-inline d-flex justify-content-center md-form form-sm mt-0">
            <i className="fas fa-search" aria-hidden="true"></i>
            <input className="form-control form-control-sm ml-3 w-75" onChange={(event)=> props.handleChange(event)} type="text" placeholder="Search"
                   aria-label="Search"/>
            {/*<select className="selectpicker">*/}
            {/*    <option>User</option>*/}
            {/*    <option>Content</option>*/}
            {/*</select>*/}
            <button className="btn btn-outline-secondary" type="submit">Submit</button>
        </form>
    )
}
export default Searchbar