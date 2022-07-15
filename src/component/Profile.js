import React from "react";
import { useLocation } from "react-router-dom";
import "../index.css";

export default function Profile(){
    const location = useLocation();

    return(

        <table>
        <tbody>
            <tr>
                <th>Name:</th>
                <td>{location.state.values.name}</td>
            </tr>

            <tr>
                <th>Email:</th>
                <td>{location.state.values.email}</td>
            </tr>

            <tr>
                <th>Password:</th>
                <td>{location.state.values.password}</td>
            </tr>

            <tr>
                <th>Phone No:</th>
                <td>{location.state.values.phoneNumber}</td>
            </tr>

            <tr>
                <th>Country:</th>
                <td>{location.state.country}</td>
            </tr>     
        </tbody>       
        </table>
        
    )
}