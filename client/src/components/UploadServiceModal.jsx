import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import uniqid from 'uniqid'
import { useSupabaseClient } from '@supabase/auth-helpers-react';

import Modal from './Modal.jsx';
import { useUser } from '../hooks/useUser.jsx'
import useUploadServiceModal from '../hooks/useUploadServiceModal.jsx';
import Input from './Input.jsx';


const UploadServiceModal = () => {
  const { onClose, isOpen } = useUploadServiceModal();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();

  const {
    register,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      title: '',
      description: '',
      image: null,
    },
  });

  const onChange = (event) => {
    if (event.type === 'click') {
      reset();
      onClose();
    }
  };


  const onSubmit = async (values) => {
    try {
      setIsLoading(true);

      const imagesFile = values.image?.[0];

      if (!imagesFile || !user) {
        toast.error('Missing fields');
        return;
      }

      const uniqueID = uniqid();


      //Upload Image
      const {
        data: imageData,
        error: imageError,
      } = await supabaseClient.storage.from('images').upload(`image-${values.title}-${uniqueID}`, imagesFile, {
        cacheControl: '3600',
        upsert: false
      })

      if (imageError) {
        setIsLoading(false);
        return toast.error('Failed image upload');
      }

      const {
        error: supabaseError
      } = await supabaseClient.from('services').insert({
        user_id: user.id,
        title: values.title,
        description: values.description,
        price: values.price,
        category:values.serviceType,
        image_path: imageData.path,
      });

      if (supabaseError) {
        setIsLoading(false)
        return toast.error(supabaseError.message);
      }
      setIsLoading(false);
      toast.success("uploaded Successfully!");
      reset();
      onClose();
      setTimeout(() => {
        window.location.reload();
      }, 2000)

    } catch (error) {
      toast.error("Something went wrong");
    }
    finally {
      setIsLoading(false);
    }
  };


  return (
    <Modal
      title='Upload'
      description='Upload the service'
      isOpen={isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} >
        <Input
          id='title'
          disabled={isLoading}
          {...register('title', { required: true })}
          placeholder='Name of service'
        />
        <Input
          id='description'
          disabled={isLoading}
          {...register('description', { required: true })}
          placeholder='Description of service'
        />
        <Input
          id='price'
          disabled={isLoading}
          {...register('price', { required: true })}
          placeholder='Price of service'
        />
        <Input
        id='serviceType'
          type="select"
          {...register('serviceType', { required: true })}
          options={[
            { label: "Basic Service", value: "Basic" },
            { label: "Gas Filling Service", value: "Gas" },
            { label: "Second Hand Product", value: "Used" }
          ]}
        />
        <div>
          <div className=' my-1 mx-2'>
            select an image
          </div>
          <Input
            id='image'
            type='file'
            disabled={isLoading}
            accept='image/*'
            {...register('image', { required: true })}
          />
        </div>
        <div className='text-center'>
          <button disabled={isLoading} type="submit" className="btn btn-success" style={{ width: '200px', borderRadius: '50px', marginTop: '4px', border: 'none' }}>Create</button>
        </div>
      </form>
    </Modal>
  );
};

export default UploadServiceModal;
