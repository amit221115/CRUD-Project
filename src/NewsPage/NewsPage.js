import React from "react";
import "../Assets/NewsPage.css";
import { useState,useEffect } from "react";

export default function NewsPage(){

const[formState, setFormState] = useState("false");
const[formEdit, setformEdit] = useState("false");
const[formData, setformData] = useState("false");


    return(
        <div className="container">
            <div className="header"><h1>Curd Operation</h1></div>
            <button className="main-button">Add</button>
            <table>
            <tr>
                <td>Id</td>
                <td>Title</td>
                <td>Details</td>
                <td>Action</td>
            </tr>

            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <button>Edit</button>
                        <button>Delete</button>
                    </td>
                </tr>
            </tbody>
            </table>
        </div>

    );
}