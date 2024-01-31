import React from 'react'
import { MdDeleteOutline } from "react-icons/md";


import useLoadImage from '../hooks/useLoadimage.jsx';
import gif from '../assets/images/finger-tapping-loading-animation.gif';
import useDeleteItem from '../hooks/useDeleteItem.jsx';
import toast from 'react-hot-toast';

const RowItems = ({ data, index  }) => {

    const imagePath = useLoadImage(data);

    const handelonDelete = async () => {
        await useDeleteItem(data.id);
        toast.success("successfully Deleted : "+data.id);
        setTimeout(() => {
            window.location.reload();
          }, 2000)
        return;
    }

    return (
        <div className='d-flex  items-center gap-x-3 cursor-pointer w-full p-2 rounded-md bg-white my-2 hover:bg-slate-500' style={{ cursor: 'pointer' }}>
            <div style={{width:'2rem', marginRight:'2px' ,display: 'flex', alignItems: 'center' , justifyContent:'center'}}>
                {index+1}
            </div>
            <div className='relative rounded-md min-h-[50px] min-w-[50px]  '>
                <img src={imagePath || gif} alt="media item" className='object-cover' style={{ height: '80px', width: '80px', borderRadius: '3px' }} />
            </div>
            <div className='d-flex mx-3 overflow-hidden'>
                <div style={{ width: '10rem', display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontWeight: '500' }}>
                        {data.title}
                    </p>
                </div>
                <div className='no-display-mobile' style={{ width: '10rem', display: 'flex', alignItems: 'center' }}>
                    <p  className='mx-3 no-display-mobile' style={{ fontWeight: '500' }}>
                        {data.category}
                    </p>
                </div>
                <div className='no-display-mobile' style={{ width: '9rem', display: 'flex', alignItems: 'center' }}>
                    <p className='text-sm truncate mx-3 no-display-mobile' style={{ fontWeight: '500' }}>
                        {data.description}
                    </p>
                </div>
                <div style={{ width: '7rem', display: 'flex', alignItems: 'center' }}>
                    <p className='mx-3' style={{ fontWeight: '500' }}>
                        <b>Price : ₹</b> {data.price}
                    </p>
                </div>
                <div style={{ width: '5rem', display: 'flex', alignItems: 'center' }}>
                    <button type="button" className="btn btn-danger" onClick={handelonDelete}>
                        <MdDeleteOutline style={{height:'35px', width:'24px'}}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RowItems
