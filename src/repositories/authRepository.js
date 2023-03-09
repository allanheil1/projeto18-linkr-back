import connection  from "../database/database.js";

function validateEmailExists(email) {
    return connection.query(
        `
        SELECT
            *
        FROM
            users
        WHERE
            email=$1
        `,
        [email]
    );
}

function insertUser(email, encryptedPassword, username, pictureUrl) {

    return connection.query(
        `INSERT INTO 
            users 
            (email, password, name, photo) 
        VALUES 
            ($1, $2, $3, $4);`,
        [email, encryptedPassword, username, pictureUrl]
      );
}

export { validateEmailExists, insertUser };