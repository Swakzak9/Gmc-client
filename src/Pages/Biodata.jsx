import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Biodata() {
  const [data, setData] = useState(null)


  useEffect(()=>{
    const fetchStudent = async()=>{
      const response = await axios.get('http://localhost:3001/users/user')
      console.log(response.data)
    }
    fetchStudent()
  },[])



  return (
    <div>
        <h1>Biodata Page</h1>
      <div>
        <img src="images/pexels-anastasiya-gepp-654466-1462630.jpg" alt="A student" className="h-60 w-96"  />
      </div>
      <div className="font-serif mx-3 mt-3">
     <h1 className="mt-2"> Name:  Kenechukwu Joanna</h1>
     

     <h1 className="mt-2">Matriculation Number: GMC/SD/24/1597</h1>
     

     <h1 className="mt-2"> Faculty: Computer Science</h1>

     <h1 className="mt-2"> Department: Software Development</h1>

     <h1 className="mt-2"> Email: KenechukwuJoana@gmail.com</h1>

     <h1 className="mt-2"> Blood group: O+</h1>
     
     <h1 className="mt-2"> Address:  No 74 Allen Avenue Ikeja, Lagos</h1>
     
     <h1 className="mt-2"> Height: 5'8</h1>

     <h1 className="mt-2"> Marital Status : Single</h1>
      </div>
    </div>
  )
}

export default Biodata
