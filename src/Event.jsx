import React, { useState } from 'react';

const Event = () => {
   const [name, setName] = useState(""); 
   const [lastName, setLastName] = useState('');
   const [fullName, setFullName] = useState();
   const [lastNameNew, setLastNameNew] = useState();
   

   const inputEvent = (event) => {
      //console.log(event.target.value);
      setName(event.target.value);
   };
   const inputEventTwo = (event) => {
        setLastName(event.target.value);
   };
    const onSubmit = (event) => {
       event.preventDefault();
       //event.preventDefault(); - it is used for prevent Form default behaviour.
      setFullName(name);
      setLastNameNew(lastName);
    };
   return(
      <>
        <div className="main_div">
          <form onSubmit={onSubmit}>
            <div>
               <h1>Hello {fullName} {lastNameNew}  </h1>
               <input text="text" placeholder="Enter Your First Name" onChange={inputEvent} value={name} />
               <br/>
               <input text="text" placeholder="Enter Your Last Name" onChange={inputEventTwo} value={lastName} />
               <button type="submit"> Submit Me 😄</button>
            </div>
            </form>
        </div>
     </>
     );
};

export default Event;