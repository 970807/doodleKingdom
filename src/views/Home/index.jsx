import React, { useEffect, useState } from 'react'
import Header from '../../components/home/Header'
import Navbar from '../../components/home/Navbar'
import SwiperList from '../../components/home/SwiperList'
import CourseList from '../../components/home/CourseList'
import RecommendList from '../../components/home/RecommendList'
import RecentRecommendList from '../../components/home/RecentRecommendList'
import RecentActiveRaceList from '../../components/home/RecentActiveRaceList'
import HotWorkList from '../../components/home/HotWorkList'
import RecentStartCourseList from '../../components/home/RecentStartCourseList'
import FooterNav from '../../components/home/FooterNav'
import CopyrightRow from '../../components/home/CopyrightRow'
import getHomeData from '../../api/home'

export default function Home() {
  const [swiperList1, setSwiperList1] = useState([])
  const [courseList, setCourseList] = useState([])
  const [recommendList, setRecommendList] = useState([])
  const [swiperList2, setSwiperList2] = useState([])
  const [recentRecommendWorkList, setRecentRecommendWorkList] = useState([])
  const [hotWorkList, setHotWorkList] = useState([])
  const [recentActiveRaceList, setRecentActiveRaceList] = useState([])
  const [recentStartCourseList, setRecentStartCourseList] = useState([])

  useEffect(() => {
    getHomeData().then((res) => {
      console.log(res.data.data)
      const {
        swiperList1,
        swiperList2,
        courseList,
        recommendList,
        recentRecommendWorkList,
        hotWorkList,
        recentActiveRaceList,
        recentStartCourseList
      } = res.data.data
      setSwiperList1(swiperList1)
      setSwiperList2(swiperList2)
      setCourseList(courseList)
      setRecommendList(recommendList)
      setRecentRecommendWorkList(recentRecommendWorkList)
      setHotWorkList(hotWorkList)
      setRecentActiveRaceList(recentActiveRaceList)
      setRecentStartCourseList(recentStartCourseList)
    })
  }, [])

  return (
    <div className="home">
      <Header />
      <Navbar />
      <SwiperList swiperList={swiperList1} />
      <CourseList list={courseList} />
      <RecommendList list={recommendList} />
      <SwiperList swiperList={swiperList2} style={{ marginTop: '12px' }} />
      <RecentRecommendList list={recentRecommendWorkList} />
      <HotWorkList list={hotWorkList} />
      <RecentActiveRaceList list={recentActiveRaceList} />
      <RecentStartCourseList list={recentStartCourseList} />
      <FooterNav />
      <CopyrightRow />
    </div>
  )
}
