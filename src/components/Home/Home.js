import React from "react";
import './home.css'
import { Link } from "react-router-dom";



function Home(props) {
  
  const [data, setData] = React.useState()
  const [nData, setNData] = React.useState(JSON.parse(localStorage.getItem("listData")) || [])
  
  function handleAdd(){
    let obj = {
      id:Math.random()*100+1,
      data: data,
      isEdit: false
    }
    nData.push(obj)
    localStorage.setItem("listData", JSON.stringify(nData))
    window.location.reload(true)
  }

  function edit(e, i){
    let cData = [...nData]
    cData[i].data=e.target.value
    setNData(cData)
  }

  function handleDelete(i){
    const fData = nData.filter((task) => task.id !== i);
    localStorage.setItem("listData", JSON.stringify(fData))
    window.location.reload(true)
  }
  function setEdit(i){
    let cData = [...nData]
    cData[i].isEdit = !cData[i].isEdit
    localStorage.setItem("listData", JSON.stringify(nData))
    setNData(cData)
  }
  
  return (
    <div className="home">
      <div className="nav">
        <h3>Welcome</h3>
        <h3>{props.name}</h3>
        <h3><Link style={{textDecoration: 'none', color: 'white'}} to="/">Logout</Link></h3>
      </div>
      <div className="listItems">
        <h1>List Items</h1>
        <form>
            <input id="addData" onChange={(e) => setData(e.target.value)} type="text" placeholder="Enter list data..."/>
            <button onClick={handleAdd} id="addBtn" type="button">Add</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>List Items</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {nData.map((d, i)=>
              <tr key={d.id}>
                <td> {(d.isEdit)?<input type="text" value={d.data} onChange={(e)=>edit(e, i)}/>: d.data} </td>
                <td style={{cursor: "pointer"}} onClick={()=>{setEdit(i)}}>{(d.isEdit)?"Save":"Edit"}</td>
                <td style={{cursor: "pointer"}} onClick={()=>{handleDelete(d.id)}}>{'Delete'}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
