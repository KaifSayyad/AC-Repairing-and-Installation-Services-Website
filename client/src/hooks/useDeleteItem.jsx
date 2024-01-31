import { createClient } from '@supabase/supabase-js';

const useDeleteItem = async (key) => {

    const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase URL and anonymous key are required');
      }
    

    if (!key) {
        console.log("Empty key");
        return; 
    }

    try {
        const supabase = createClient(supabaseUrl, supabaseAnonKey);
        const { error } = await supabase.from('services').delete().match({'id': key});

        if (error) {
            console.log("Error deleting item:", error.message);
        } else {
            console.log("Item deleted successfully");
        }
    } catch (error) {
        console.log("Error deleting item:", error.message);
    }
};

export default useDeleteItem;
