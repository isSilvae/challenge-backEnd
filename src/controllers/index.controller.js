const { Pool } = require ('pg');

const pool=new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'is.silvae',
    database: 'challenge',
    port:'5432'
})

const getPosts = async (req, res) => {
  const response=  await pool.query('SELECT * FROM POST');
  res.status(200).json(response.rows);
};

const deletePost = async(req,res)=>{
   const id =parseInt(req.params.id,10);
   const response = await pool.query('DELETE FROM post WHERE id = $1', [id]);
   console.log(response);
   res.json({
        message: `Post ${id} deleted successfully`,
        body: {
            post: {id:id}
        }
    });
}

const updatePost = async(req,res)=>{
    const id =req.params.id;
    const { name , description }=req.body;
    const response = await pool.query('UPDATE post SET name= $1 , description= $2 WHERE id= $3',[
        name,
        description,
        id
    ]);
    console.log(response);
    res.json({
        message: 'Post Updated successfully',
        body: {
            post: {id,name,description}
        }
    });
}

const createPost=async(req,res)=>{  
    const { name , description }=req.body;
    const response = await pool.query(`INSERT INTO post (name,description) VALUES ($1, $2) RETURNING *`,[name,description]);
    const newPost =response.rows[0];
    res.json({
        message: 'post Added succefully',
        body: {
            post: newPost
        }
    });
};

module.exports = {
    getPosts,
    createPost,
    deletePost,
    updatePost
}