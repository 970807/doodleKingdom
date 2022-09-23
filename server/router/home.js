const express = require('express')
const htmlCtrl = require('../controller/home')

const router = express.Router()

// 首页数据
router.get('/', htmlCtrl)

module.exports = router
