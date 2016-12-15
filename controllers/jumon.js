const jumon = require('../models/jumon')

exports.search = (req, res) => {
  const values = {
    title: 'Jumon List',
    jumon: jumon.filter((j) => {
      return j.name.indexOf(req.query.q) > -1 ||
        j.description.indexOf(req.query.q) > -1
    })
  }

  if (req.headers['content-type'] === 'application/json') {
    return res.json(values)
  }
  return res.render('jumon', values)
}
