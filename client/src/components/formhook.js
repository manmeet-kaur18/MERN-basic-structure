import React,{useState} from 'react';
import $ from 'jquery';

function formhook() {
    const [name,setname] = useState({firstName:'',lastName:''});
    const handlesubmit =()=>{
            console.log('button was clicked');
            if (checkEmptyString(name.firstName))
            {
                alert('first name is required');
                return;
            }
            if (checkEmptyString(name.lastName))
            {
                alert('last name is required');
                return;
            }

            $.ajax({
                type: "POST",
                url: "/signup",
                dataType: "json",
                success: function (msg) {
                    if (msg.length > 0) {
                        location.href="/signup";
                    } else {
                        alert("Invalid User !");
                    }
                },
                data: name
            });

        function checkEmptyString(val)
        {
            return (val === undefined || val === null || val.trim().length === 0);
        }
    }
    return (
        <div>
            <h1>Form Component Hooks</h1>
            <input type="text" 
            value={name.firstName}
            onChange={e=>setname({...name,firstName:e.target.value})}
            />
            <input type="text" 
            value={name.lastName}
            onChange={e=>setname({...name,lastName:e.target.value})}
            />
            <h2>your first name is - {name.firstName}</h2>
            <h2>your first name is - {name.lastName}</h2>
            <button id="submit" onClick={handlesubmit}>Submit</button>
        </div>
    )
}

export default formhook
