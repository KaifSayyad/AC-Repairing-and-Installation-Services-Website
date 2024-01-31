import React, { useState } from "react";
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from "@supabase/auth-helpers-react";

const SupabaseProvider = ({ children }) => {

  const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY;


  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL and anonymous key are required');
  }

  const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  
  const [auth] = useState(() => createClient(supabaseUrl, supabaseAnonKey));

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
