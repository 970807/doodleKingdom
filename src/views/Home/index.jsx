import React, { useEffect, useState } from 'react'
import Header from '../../components/Home/Header'
import Navbar from '../../components/Home/Navbar'
// import getHomeData from '../../api/home'

export default function Home() {
  // const [swiperList1, setSwiperList1] = useState([])
  // const [swiperList2, setSwiperList2] = useState([])

  useEffect(() => {
    // getHomeData().then((res) => {
    //   console.log(res.data.data)
    //   const { swiperList1, swiperList2 } = res.data.data
    //   setSwiperList1(swiperList1)
    //   setSwiperList2(swiperList2)
    // })
  }, [])

  return (
    <div className="home">
      <Header />
      <Navbar />
    </div>
  )
}
