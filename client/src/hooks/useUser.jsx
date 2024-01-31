import { createContext, useEffect, useState, useContext } from "react";
import { useSessionContext, useUser as useSupaUser } from "@supabase/auth-helpers-react";

export const UserContext = createContext();

export const MyUserContextProvider = (props) => {
    const {
        session,
        isLoading: isLoadingUser,
        supabaseClient: supabase
    } = useSessionContext();
    const user = useSupaUser()
    const accessToken = session?.access_token ?? null;
    const [isLoadingData, setIsLoading] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const [subscription, setSubscription] = useState(null);

    const getUserDetails = () => supabase.from('user').select('*').single();
    const getSubscription = () =>
        supabase
            .from("subscriptions")
            .select('*,prices(*,products(*))')
            .in('status', ['trialing', 'active'])
            .single();

    useEffect(() => {
        if (user && !isLoadingData && !userDetails && !subscription) {
            setIsLoading(true);

            Promise.allSettled([getUserDetails(), getSubscription()]).then(
                (result) => {
                    const userDetailsPromise = result[0];
                    const subscriptionPromise = result[1];

                    if (userDetailsPromise.status === 'fulfilled') {
                        setUserDetails(userDetailsPromise.value.data);
                    }

                    if (subscriptionPromise.status === 'fulfilled') {
                        setSubscription(subscriptionPromise.value.data);
                    }

                    setIsLoading(false);
                }
            );
        } else if (!user && !isLoadingUser && !isLoadingData) {
            setUserDetails(null);
            setSubscription(null);
        }
        // eslint-disable-next-line
    }, [user, isLoadingUser]);

    const value = {
        accessToken,
        user,
        userDetails,
        isLoading: isLoadingUser || isLoadingData,
        subscription
    }

    return <UserContext.Provider value={value} {...props} />
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within the UserProvider');
    }

    return context;
}
