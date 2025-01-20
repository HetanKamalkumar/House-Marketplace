import { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checkingStatus, setCheckingStatus] = useState(true)

  useEffect(() => {
    const auth = getAuth()

    // Set up the auth state listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
      setCheckingStatus(false) // Finished checking status
    })

    // Cleanup listener when the component unmounts
    return () => unsubscribe()

  }, []) // Empty dependency array ensures the effect runs only once on mount

  return { loggedIn, checkingStatus }
}
