import pg from "pg";
const pool = new pg.Pool({
  user: "me",
  host: "localhost",
  database: "spaced",
  password: "password",
  port: 5432,
});

export const getCards = (request, response) => {
  pool.query(
    `SELECT * FROM cards where rememberlevel=${
      request.query.level ?? "rememberlevel"
    }`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

export const insertCard = (request, response) => {
  const query = `INSERT INTO cards (
    question,
    answer,
    rememberTime,
    createTime,
    rememberLevel,
    score)
    VALUES ('${request.body.question.toString()}', '${
    request.body.answer
  }', null, to_timestamp(${Date.now()} / 1000.0), 0, 0)`;
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

export const updateCard = (request, response) => {
  let query;
  if (request.body.status === "remember") {
    query = `UPDATE cards 
    SET 
    rememberlevel= rememberlevel + 1,
    remembertime= to_timestamp(${Date.now()} / 1000.0),
    score=1
    WHERE id = ${parseInt(request.params.id)}`;
  }
  if (request.body.status === "forget") {
    query = `UPDATE cards 
    SET 
    rememberlevel= 0,
    remembertime= null,
    score=-1
    WHERE id = ${parseInt(request.params.id)}`;
  }
  pool.query(query, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
