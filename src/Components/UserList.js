import React,{useState} from 'react'
import {Table} from 'react-bootstrap'
import axios from 'axios'


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmx1ZWhvdXJhZG1pbiIsImlhdCI6MTY1ODI1NzI2M30.FxjjQPtTkLp5sbt04way12Fj3c4ReH_QveETIUrWk-E"
const apiUrl ="https://-admin-dash.herokuapp.com"

const authAxios = axios.create({
  baseUrl:apiUrl,
  headers:{
      Authorization:`Bearer ${token}`
  }
})

function UserList() {

    const [users,setUsers] = useState([]);

  const fetchData =(async()=>{
    try{

        //fetch and set users
        const result = await authAxios.get(`/users/get-all-users`);
     
      
      setUsers(result.data);

    }catch (error) {}

  })


return (
    <div>
        <div><h3>USER LIST</h3></div>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>name</th>
          <th>Account Created</th>
          <th>Shop id</th>
          <th>image processing</th>
          <th>image saved</th>

          <th>image published</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
          <td>@mdo</td>


        </tr>
        
        
      </tbody>
    </Table>




    {/* <div>
        <button onClick={()=>fetchData()}>get All users</button>
        {users.map(user=>{
            return<p key={user.shop_owner}>{user.shop_id}</p>
          })}
          {requestError && <p className="error">{requestError}</p>}
    </div> */}



    </div>

    
  )
}

export default UserList