const axios = require('axios')
const cheerio = require('cheerio')
const { sourceWebUrl } = require('../config/default.config')

async function getData(req, res, next) {
  try {
    const sourceHtml = await fetchSourceWebData()
    const resData = parseSourceHtml(sourceHtml)
    res.json({
      code: 200,
      data: resData
    })
  } catch (err) {
    next(err)
  }
}

// 爬取源站点数据
async function fetchSourceWebData() {
  const res = await axios.get(sourceWebUrl)
  return res.data
}

// 解析源站点html为所需要的数据
function parseSourceHtml(sourceHtml) {
  // 轮播图1
  const swiperList1 = parseSwiperList1(sourceHtml)

  // 轮播图2
  const swiperList2 = parseSwiperList2(sourceHtml)

  // 课程列表
  const courseList = parseCourseList(sourceHtml)

  // 推荐数据
  const recommendList = parseRecommendList(sourceHtml)

  // 最近推荐作品
  const recentRecommendWorkList = parseRecentRecommendWorkList(sourceHtml)

  // 热门作品
  const hotWorkList = parseHotWorkList(sourceHtml)

  // 近期活动比赛
  const recentActiveRaceList = parseRecentActiveRaceList(sourceHtml)

  // 最近开课
  const recentStartCourseList = parseRecentStartCourseList(sourceHtml)

  return {
    swiperList1,
    swiperList2,
    courseList,
    recommendList,
    recentRecommendWorkList,
    hotWorkList,
    recentActiveRaceList,
    recentStartCourseList
  }
}

// 解析轮播图1
function parseSwiperList1(sourceHtml) {
  return parseSwiperList('swiper_id_id_name_1', sourceHtml)
}

// 解析轮播图2
function parseSwiperList2(sourceHtml) {
  return parseSwiperList('swiper_id_id_name_2', sourceHtml)
}

function parseSwiperList(swiperElId, sourceHtml) {
  const $ = cheerio.load(sourceHtml)
  const res = $(`#${swiperElId}>.swiper-wrapper>.swiper-slide`)
    .map((idx, el) => {
      const temp = {
        id: $(el)
          .attr('onclick')
          .match(/open\('.*id=(.+)&?'\)/)?.[1],
        linkUrl: $(el)
          .attr('onclick')
          .match(/open\('(.+)'\)/)?.[1],
        imgUrl: $(el)
          .attr('style')
          .match(/url\((.+)\)/)?.[1]
      }
      return temp
    })
    .get()
  return res
}

// 解析课程列表
function parseCourseList(sourceHtml) {
  const $ = cheerio.load(sourceHtml)
  const res = $('.container.mt-2.mt-lg-4>.row a')
    .map((idx, el) => {
      const temp = {
        id: $(el)
          .attr('href')
          .match(/id=(.+)&?/)[1],
        linkUrl: $(el).attr('href'),
        imgUrl: $(el).children('img').eq(0).attr('src'),
        title: $(el).children().eq(1).text()
      }
      return temp
    })
    .get()
  return res
}

// 解析推荐数据
function parseRecommendList(sourceHtml) {
  const getTitle = (el) => $(el).children().eq(0).children().eq(0).text()

  const $ = cheerio.load(sourceHtml)

  const res = $('.container')
    .filter((idx, el) => {
      return getTitle(el) === '首页推荐'
    })
    .find('.row>.col-6>.rounded')
    .map((idx, el) => {
      const temp = {
        id: $(el)
          .children()
          .eq(0)
          .children('a')
          .eq(0)
          .attr('onclick')
          .match(/redClick\((.+)\)/)?.[1],
        coverUrl: $(el)
          .children()
          .eq(0)
          .children()
          .eq(2)
          .attr('style')
          .match(/background:url\((.+)\)/)?.[1],
        title: $(el).children().eq(1).children().eq(1).text(),
        browseCount: +$(el).find('.icon_see').next().text(),
        favConut: +$(el).find('.icon_love').next().text(),
        commentCount: +$(el).find('.icon_pl').next().text(),
        pictureCount:
          +$(el)
            .find('.rounded')
            .text()
            .match(/(\d+)图/)?.[1] || null,
        avatarUrl: $(el).find('a>img.headimg').attr('src'),
        linkUrl:
          sourceWebUrl +
          $(el).children().eq(0).children('a').eq(1).attr('href'),
        userId: $(el)
          .children()
          .eq(1)
          .children()
          .eq(2)
          .children('a')
          .eq(1)
          .attr('href')
          .match(/\/user\/(.+)/)?.[1],
        nickname: $(el)
          .children()
          .eq(1)
          .children()
          .eq(2)
          .children('a')
          .eq(1)
          .children('span')
          .eq(0)
          .text(),
        publishDate: $(el)
          .children()
          .eq(1)
          .children()
          .eq(2)
          .children('span')
          .eq(0)
          .text(),
        isAuth: $(el).find('.icon_star_sm').length !== 0,
        isHot: $(el).find('.icon_work_hot').length !== 0,
        isRecommend: $(el).find('.icon_work_tuijian').length !== 0
      }
      return temp
    })
    .get()
  return res
}

// 解析最近推荐作品
function parseRecentRecommendWorkList(sourceHtml) {
  const getTitle = (el) => $(el).children().eq(0).children().eq(0).text()

  const $ = cheerio.load(sourceHtml)

  const res = $('.container')
    .filter((idx, el) => {
      return getTitle(el) === '最近推荐作品'
    })
    .find('.row>a')
    .map((idx, el) => {
      const temp = {
        id: $(el)
          .attr('href')
          .match(/\/view\/(.+)/)?.[1],
        imgUrl: $(el).find('div>img').eq(0).attr('src')
      }
      return temp
    })
    .get()
  return res
}

// 解析热门作品
function parseHotWorkList(sourceHtml) {
  const getTitle = (el) => $(el).children().eq(0).children().eq(0).text()

  const $ = cheerio.load(sourceHtml)

  const res = $('.container')
    .filter((idx, el) => {
      return getTitle(el) === '热门作品'
    })
    .eq(0)
    .children()
    .eq(1)
    .children('a')
    .map((idx, el) => {
      const temp = {
        id: $(el)
          .attr('href')
          .match(/\/view\/(.+)/)?.[1],
        imgUrl: $(el).find('div>img').eq(0).attr('src')
      }
      return temp
    })
    .get()
  return res
}

// 解析近期活动比赛
function parseRecentActiveRaceList(sourceHtml) {
  const getTitle = (el) => $(el).children().eq(0).children().eq(0).text()

  const $ = cheerio.load(sourceHtml)

  const res = $('.container')
    .filter((idx, el) => {
      return getTitle(el) === '近期活动比赛'
    })
    .eq(0)
    .children()
    .eq(1)
    .children()
    .map((idx, el) => {
      const temp = {
        id: $(el)
          .find('a')
          .eq(0)
          .attr('href')
          .match(/v=(.+)&?/)?.[1],
        imgUrl: $(el).find('a>img').eq(0).attr('src'),
        title: $(el).find('a').eq(0).next().text(),
        awardScale: $(el)
          .find('a')
          .eq(0)
          .next()
          .next()
          .children()
          .eq(0)
          .children('div')
          .eq(1)
          .text()
      }
      return temp
    })
    .get()
  return res
}

// 解析最近开课
function parseRecentStartCourseList(sourceHtml) {
  const getTitle = (el) => $(el).children().eq(0).children().eq(0).text()

  const $ = cheerio.load(sourceHtml)

  const res = $('.container')
    .filter((idx, el) => {
      return getTitle(el) === '最近开课'
    })
    .children()
    .eq(1)
    .find('a')
    .map((idx, el) => {
      const temp = {
        id: $(el)
          .attr('href')
          .match(/id=(.+)&?/)?.[1],
        imgUrl: $(el)
          .attr('style')
          .match(/url\((.+)\)/)?.[1]
      }
      return temp
    })
    .get()
  return res
}

module.exports = getData
