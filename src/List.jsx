import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';

const List = () => {
   const [line, setLine] = useState(False);
   
   
   const cusIt = () => {
       setLine(line);
   }
   return(
       <div className="todo_style">
         <span onClick={cutIt}>
              <DeleteIcon className="deleteIcon" />
         </span>

       </div>
   );
};