const db = require ('../config/database');

exports.newUser = async(req, res) => {
  const { uuid, name, email } = req.body;
  const { rows } = await db.query(
    "insert into obitec (uuid, name, email) values ($1, $2, $3)",
    [uuid, name, email]
  );

  res.status(201).send({
    message: 'User added.',
    body: {
      user: {
        uuid, name, email 
      }
    },
  });
};

exports.listUsers = async(req, res) => {
  const response = await db.query(
    'SELECT * FROM obitec ORDER BY name ASC'
  )
  res.status(200).send(response.rows);
}