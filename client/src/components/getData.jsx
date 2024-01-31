
import { createClient } from '@supabase/supabase-js';

const getData = async () => {
    const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase URL and anonymous key are required');
      }

    try {
        const supabase = createClient(supabaseUrl, supabaseAnonKey);

        const { data, error } = await supabase
            .from('services')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching services:', error.message);
            throw error;
        }
        return data || [];
    } catch (error) {
        console.error('Unexpected error while fetching services:', error.message);
        throw error;
    }
}

export default getData;
