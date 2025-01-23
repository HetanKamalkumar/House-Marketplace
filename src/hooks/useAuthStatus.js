import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true); // User is logged in
      } else {
        setLoggedIn(false); // No user logged in
      }
      setCheckingStatus(false); // Firebase auth state has been checked
    });

    return () => unsubscribe();
  }, []);

  return { loggedIn, checkingStatus };
};
