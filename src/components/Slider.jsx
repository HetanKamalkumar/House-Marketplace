import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import {collection, getDocs, query, orderBy, limit} from 'firebase/firestore'
import { Swiper, SwiperSlide } from "swiper/react"
import { db } from "../firebase.config"
import 'swiper/swiper-bundle.css'
import Spinner from "./Spinner"
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function Slider() {

    const [loading, setLoading] = useState(true)
    const [listings, setListings] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {

        const fetchListings = async () => {

            const listingsRef = collection(db, 'listings')
            const q = query(listingsRef, orderBy('timestamp', 'desc'),
        limit(5))
            const querySnap = await getDocs(q)
    
            let listings = []
    
            querySnap.forEach((doc) => {
                return listings.push({
                    id: doc.id,
                    data: doc.data()
                })
            })
        
        console.log(listings)
        setListings(listings)
        setLoading(false)
        }

        fetchListings()
    }, [])

    if (loading) {
        return <Spinner />
    }
    
    if (listings.length === 0) {
        return <></>
    }

  return listings && (
    <>
        <p className="epxloreHeading">Recommended</p>

        <Swiper slidesPerView={1} pagination={{clickable: true}}>
            {listings.map(({data, id}) => (
                <SwiperSlide key={id} onClick={() => navigate(`/category/${data.type}/${id}`)}>
                    <div style={{background: `url(${data.imgUrls[0]})center no-repeat`,
                backgroundSize: 'cover',}}
                className="swiperSlideDiv">
                    <p className="swiperSlideText">{data.name}</p>
                    <p className="swiperSlidePrice">
                        ${data.discountedPrice ?? data.regularPrice}
                        {data.type === 'rent' && ' / month'}
                    </p>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </>
  )

}
export default Slider