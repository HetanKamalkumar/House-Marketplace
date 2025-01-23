import { useState, useRef, useEffect } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import Spinner from '../components/Spinner'

function CreateListing() {

  const [geolocationEnabled, setGeolocationEnabled] = useState(true)
  const [formData, setFormData] = useState({
    type: 'rent',
    name: '',
    bedroom: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address:'',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: {},
    latitude: 0,
    longitude: 0
  })

  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);
  
  
  
  useEffect(() => {
    if (isMounted.current) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData((prevFormData) => ({
            ...prevFormData,
            userRef: user.uid,
          }));
        } else {
          navigate("/sign-in");
        }
      });
    }

    return () => {
      isMounted.current = false; // Mark the component as unmounted
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Create Listing</div>;
}

export default CreateListing