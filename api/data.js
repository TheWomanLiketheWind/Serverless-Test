
module.exports = (req, res) => {
  const data = require('../data.json')
  res.json(data.posts)
}