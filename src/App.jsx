import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {
   const [itemList, setItemList] = useState();
   const [item, setItem] = useState([]);

   const itemEvents = (event) =>{
      setItemList(event.target.value);
   };

   const listOfItems = () => {
      setItem( (oldItems) =>{
          return [...oldItems, itemList];
      });
      setItemList('');
   };

   const deleteItem = (id) =>{
      console.log("Deleted");
      setItem((oldItems) =>{
         return oldItems.filter((arrElem, index) => {
            return index !== id;
         });
      });
   };

    return( 
      <>
        <div className='main_div'>
           <div className='center_div'>
           <br />
           <h1> ToDo List</h1>
           <br />
           <input type='text' placeholder="Add a Items" 
           value={itemList}
           onChange={itemEvents} />
           <button onClick={listOfItems}> + </button>

           <ol>
              {/* <li> {itemList} </li> */}
              { item.map((itemVal, index) => {
                 return <ToDoList 
                 key = {index}
                 id = {index}
                 text={itemVal}
                 onSelect={deleteItem}   
                 />
              })}
           </ol>
           </div>

        </div>
     </>
    );
};

export default App;