import React, { useEffect, useState } from 'react'
import Header from '../../components/home/Header'
import Navbar from '../../components/home/Navbar'
import SwiperList from '../../components/home/SwiperList'
import CourseList from '../../components/home/CourseList'
import RecommendList from '../../components/home/RecommendList'
import getHomeData from '../../api/home'

export default function Home() {
  const [swiperList1, setSwiperList1] = useState([])
  const [courseList, setCourseList] = useState([])
  const [recommendList, setRecommendList] = useState([])
  const [swiperList2, setSwiperList2] = useState([])

  useEffect(() => {
    getHomeData().then((res) => {
      console.log(res.data.data)
      const { swiperList1, swiperList2, courseList, recommendList } = res.data.data
      setSwiperList1(swiperList1)
      setSwiperList2(swiperList2)
      setCourseList(courseList)
      setRecommendList(recommendList)
    })
  }, [])

  return (
    <div className="home">
      <Header />
      <Navbar />
      <SwiperList swiperList={swiperList1} />
      <CourseList list={courseList} />
      <RecommendList list={recommendList} />
    </div>
  )
}
