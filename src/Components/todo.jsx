import React , { useState } from 'react';
import todoimg from '../img/notes.svg';
import { FormControl, InputGroup,Button } from 'react-bootstrap';
import Svgg from "./svgg"
import Wavedowm from "./wavedowm"

const Todo = () => {

    const [inputdata , setinputdata] = useState("");
    const [items , setitems] = useState([]);


    const additem = ()=>{
      if(!inputdata){

      }else{
        setitems([...items,inputdata])
        setinputdata("")
      }
    }

    const deleteitem = (id)=>{
        const updateditem = items.filter((item,index)=>{
            return index != id;
        })
        setitems(updateditem)
        }

        const remove =()=>{
            setitems([])
        }
        
    

  return (
    <>
      <div className="main">
          <Svgg />
        <div className="child">
          <figure>
            <img src={todoimg} className="todoimg" alt="imgError"  />
            <figcaption>Add Your List 👇</figcaption>
          </figure>

          <div className="add_item">
          <InputGroup className="mb-3">
   
    <FormControl aria-label="Amount (to the nearest dollar)" 
    placeholder="Add.." 
    value={inputdata}
    onChange={(e) => setinputdata(e.target.value)}
    
    />
    <i className="fas fa-plus add" title="Add Item" onClick={additem}>
        </i>
  </InputGroup>
          </div>

          <div className="show_item">
             {
                 items.map((item,ind)=>{
                    return(
                    <div className="individual_items" key={ind}>
                    <h3 className="item">{item}
                    <i className="far fa-trash-alt fas" title="Delete" onClick={()=>deleteitem(ind)}></i>
                    </h3>
                   
                </div>
                    )
                 })
             }
          </div>

          <div className="button">
            <Button className="btn" onClick={remove}>
                Remove All
            </Button>
            
          </div>
        </div>
        <Wavedowm />
      </div>
    </>
  );
};

export default Todo;
