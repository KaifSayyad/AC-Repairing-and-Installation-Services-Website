import { useSessionContext, useSupabaseClient } from '@supabase/auth-helpers-react';
import React, { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

import Modal from './Modal';
import useAuthModal from '../hooks/useAuthModal';

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const { session } = useSessionContext();
    const { onClose, isOpen } = useAuthModal();



    useEffect(() => {
        if (session) {
            onClose();
        }

    }, [session, onClose]);



    const onChange = (open) => {
        if (!open) {
            onClose();
        }
    }



    return (
        <div>
            <Modal
                title="Welcome "
                description="Login to your account"
                isOpen={isOpen}
                onChange={onChange}
                id="exampleModal1"
                >
                <Auth
                    theme='light'
                    providers={[]}
                    supabaseClient={supabaseClient}
                    appearance={{
                        theme: ThemeSupa,
                        variables: {
                            default: {
                                colors: {
                                    brand: '#121111',
                                    brandAccent: '#22c55e'
                                }
                            }
                        }
                    }}
                />
            </Modal>
        </div>
    );
};

export default AuthModal;
