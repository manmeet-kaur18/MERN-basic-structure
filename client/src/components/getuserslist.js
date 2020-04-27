import React,{useState,useEffect} from 'react';
import openSocket from 'socket.io-client';
function getuserslist() {
    const [names,setnames]=useState([]);
    useEffect(() => {
        // var element = function (id) {
        //     return document.getElementById(id);
        // }
        // var status = element('status');
        var maintable = document.getElementById('maintable');
    
        // //set default status
        // var statusDefault = status.textCount;
        // var setStatus = function (s) {
        //     //set staus
        //     status.textContent = s;
        //     if (s != statusDefault) {
        //         var delay = setTimeout(function () {
        //             setStatus(statusDefault);
        //         }, 520);
        //     }
        // };
        // //connect to socket.io
        var socket = openSocket('http://localhost:4000');
    
        //Check for Connection
        if (socket != undefined) {
            console.log('connected to socket');
        }
    
        // Handle Output
        socket.on('output', function (data) {
            console.log(data);
            if (data.length) {
               setnames(data);
            }
        });
    
        // Get Status From server
        // socket.on('status', function (data) {
        //     // Get Message status0
        //     setStatus((typeof data === 'object') ? data.message : data);
    
        //     // If status is clear, clear text
        //     if (data.clear) {
        //         textarea.value = '';
        //     }
        // });
        // $.ajax({
        //     type: "GET",
        //     url: "/getnames",
        //     dataType: "json",
        //     success: function (msg) {
        //         if (msg.length > 0) {
        //             setnames(msg);
        //         } else {
        //             alert("Invalid User !");
        //         }
        //     },
        // });
    }, );
    return (
        <div>
            <ul>
            {
                names.map( 
                    name=> (<li key={name.id}>{name.firstName}</li>)
                )
            }
            </ul>
        </div>
    )
}

export default getuserslist
