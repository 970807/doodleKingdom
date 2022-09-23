/* eslint-disable */
module.exports = () => {
  return (err, req, res, next) => {
    console.error(err)
    res.json({
      code: 500,
      message: '服务器错误'
    })
  }
}
