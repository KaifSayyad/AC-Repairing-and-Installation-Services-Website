import React, { useEffect, useState } from 'react'

import { useUser } from '../hooks/useUser.jsx';
import useUploadServiceModal from '../hooks/useUploadServiceModal.jsx';
import RowItems from './RowItems.jsx';
import getData from "./getData.jsx";


const Settings = () => {

  const { user } = useUser();
  const uploadSeviceModal = useUploadServiceModal();
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await getData();
        setData(value);
      } catch (error) {
        console.error('Error fetching Data:', error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return (
      <>
        <div className='container' style={{ marginTop: '30px' }}>
          <div className='my-3' style={{ display: 'flex', alignItems: 'center' }} >
            <h6>Add services</h6>
            <div className='mx-3'>
              <button type="button" className="btn btn-secondary" onClick={uploadSeviceModal.onOpen} data-bs-toggle="modal" >+</button>
            </div>
          </div>
          <hr />
          <div className='text-center' >
            No Data
          </div>
        </div>
      </>
    );
  }

  if (!user) {
    return null;
  }



  const openServiceModal = () => {
    return uploadSeviceModal.onOpen();
  };

  return (
    <div className='container' style={{ marginTop: '30px' }}>
      <div className='my-3' style={{ display: 'flex', alignItems: 'center' }} >
        <h6>Add services</h6>
        <div className='mx-3'>
          <button type="button" className="btn btn-secondary" onClick={openServiceModal} data-bs-toggle="modal" >+</button>
        </div>
      </div>
      <hr />
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <RowItems data={item} index={index}/>
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Settings
