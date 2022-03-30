const db = require ('../config/database');

exports.newUser = async(req, res) => {
  console.log("chegou aqui")
  
  const { uuid, name, email } = req.body;
  console.log( uuid, name, email)
  console.log(req.body)
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
    'select * from obitec order by name asc'
  )
  res.status(200).send(response.rows);
}

exports.updateUser = async(req, res) => {
  //getting ID req.params //
  const uuid = req.params.id;
  const { name, email } = req.body;

  const response = await db.query(
    'update obitec set name = $1, email = $2 where uuid = $3 ',
    [name, email, uuid])

    res.status(200).send({ message: "Updated!"});
}

exports.deleteUser = async(req,res) => {
  const uuid = req.params.id;
  const response = await db.query("delete from obitec where uuid = $1", [uuid])

  res.status(200).send({ message: "Deleted!"});
};