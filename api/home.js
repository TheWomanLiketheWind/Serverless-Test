module.exports = (req, res) => {
  const { name = 'World' } = res.query
  res.status(200).send(`Hello ${name}!`)
}