import { useSupabaseClient } from '@supabase/auth-helpers-react';

const useLoadImage = (data) =>{
    const supabaseclient = useSupabaseClient();

    if(!data){
        return null;
    }

    const {data: imageData} = supabaseclient.storage.from('images').getPublicUrl(data.image_path);

    return imageData.publicUrl;
}

export default useLoadImage;

