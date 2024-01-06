import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getHistory } from '../services/all API'

export default function Watchhistory() {
  const [history, setHistory] = useState([])
  async function watchhistory() {
    const response = await getHistory()
    const { data } = response;
   
    setHistory(data)
  }
  useEffect(() => {
    watchhistory();
  }, [])
  const handleDelete=async(id)=>{
    await deleteWatchHistory(id)
    watchhistory();
  }

  return (
    <><div className='container mt-5 mb-5 d-flex justify-content-between'>
      <h5>Watch History</h5>
      <Link to='/home' style={{ textDecoration: "none", color: "white", fontSize: "20px", fontWeight: "600px" }}><i class="fa-solid fa-arrow-left me-2"></i>Back To Home
      </Link>
    </div>
      <table className='table container mb-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>URL</th>
            <th>TimeStamp</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            history.length > 0 ?
              history.map((item,index) => (
                <tr>
                  <td>{index+1}</td>
                  <td>{item.caption}</td>
                  <td>{item.embededLink}</td>
                  <td>{item.timestamp}</td>
                  <td><button onClick={()=>handleDelete(item.id)}  className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>

                </tr>

              ))
              :
              <p>NO watch History Found</p>
          }



        </tbody>
      </table>
    </>


  )
}

