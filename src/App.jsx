import { useEffect, useState } from 'react'
import { EmployDate } from './EmployeeData'
import './App.css'

function App() {
const [data,setdata]=useState([])
const[firstname,setfirstname]=useState("")
const [lastname,setlastname]=useState("")
const[id,setid]=useState(0)
const [age,setage]=useState(0)
const[isupdate,setisupdate]=useState(false)

useEffect(()=>{
  setdata(EmployDate)
},[])
const handleEdit=(id)=>{
const dt=data.filter(item=>item.id===id)
if(id!==undefined){
  setisupdate(true)
setfirstname(dt[0].firstname)
setlastname(dt[0].lastname)
setage(dt[0].age)
setid(id)
}
}

const handleDlete=(id)=>{
  if(id>0){
    if(window.confirm("are you sure that you want to delete this")){
const dt=data.filter(item=>item.id!==id)
setdata(dt)
    }
  }
  alert(id)
} 
const handleUpdate=(()=>{
  const index=data.map((item)=>{
    return item.id;
    }).indexOf(id)
    const dt=[...data]
    dt[index].firstname=firstname;
    dt[index].lastname=lastname;
    dt[index].age=age;
    setdata(dt)
    handleClear()
})
const handleSave=((e)=>{
  let error=""
  if(firstname==="")
    error+="firstname is required"
  if(lastname==="")
    error+="lastname is required"
  if(age<=0)
    error+="age is required"
  if(error===""){
  e.preventDefault()
  const dt=[...data]
  const newobject={
    id:EmployDate.length+1,
    firstname:firstname,
    lastname:lastname,
    age:age
  }
  dt.push(newobject)
  setdata(dt)
}else{
  alert(error)
}
})
const handleClear=(()=>{
  setfirstname("")
  setlastname("")
  setage(0)
  setid(id)
  setisupdate(false)
})
  return (
    <>
    <div style={{display:'flex',justifyContent:"center",marginTop:"10px",marginBottom:"10px"}}>
<div>
  <label htmlFor="">First Nmae:<input type='text' placeholder='Your first name' onChange={(e)=>setfirstname(e.target.value)} value={firstname}/></label>
</div>
<div>
  <label htmlFor="">Last Name:<input type='text' placeholder='Your Last name' onChange={(e)=>setlastname(e.target.value)} value={lastname}/></label>
</div>
<div>
  <label htmlFor="">Age:<input type='text' placeholder='Your Age' onChange={(e)=>setage(e.target.value)} value={age}/></label>
</div>
<div>
  {
    isupdate?<button className='btn btn-danger' onClick={()=>handleUpdate()}>Update</button>:<button className='btn btn-primary' onClick={(e)=>handleSave(e)}>Save</button>
  }
{/* <button className='btn btn-primary' onClick={()=>handleSave()}>Save</button>&nbsp; */}
{/* <button className='btn btn-danger' onClick={()=>handleUpdate()}>Clear</button> */}
        <button className='btn btn-danger' onClick={()=>handleClear()}>Clear</button>
</div>
    </div>
<table className='table table-hover'>
  <thead>
    <tr>
      <td>Sr.No</td>
      <td>Id</td>
      <td>FirstName</td>
      <td>LastName</td>
      <td>age</td>
      <td>Actions</td>
    </tr>
  </thead>
  <tbody>
    {
     data.map((item,index)=>{
      return (
      <tr key={index}>
      <td>{index+1}</td>
      <td>{item.id}</td>
      <td>{item.firstname}</td>
      <td>{item.lastname}</td>
      <td>{item.age}</td>
      <td>
        <button className='btn btn-primary' onClick={()=>handleEdit(item.id)}>Edit</button>&nbsp;
        <button className='btn btn-danger' onClick={()=>handleDlete(item.id)}>Delete</button>

      </td>
    </tr>
      )
     }) 
    }
  </tbody>
</table>
    </>
  )
}

export default App
