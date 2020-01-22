module.exports = {
    // Load the form to add a player - GET
    addPlayerPage: function (request, response) {
        let renderData = {
            player: false,
            add: true
        };

        // Load the page
        response.render('edit-player', renderData);
    },

    // Add a player to the database - POST
    addPlayer: function (request, response) {
        // Load values from the POST request
        let first_name = request.body.first_name;
        let last_name = request.body.last_name;
        let position = request.body.position;
        let number = request.body.number;

        // Query to add the new player to the database
        let query = `INSERT INTO players (first_name, last_name, position, number)
            VALUES ('${first_name}', '${last_name}', '${position}', ${number});`;

        db.query(query, function (error, result) {
            if (error) {
                // Send server error
                return response.status(500).send(error);
            }

            // New player added successfully, reload homepage
            response.redirect('/');
        });
    },

    // Load the form to edit a player - GET
    editPlayerPage: function (request, response) {
        // Get player ID from the request
        let playerId = request.params.id;

        // Query to find information about the player with the given ID
        let query = `SELECT * FROM players WHERE id = '${playerId}';`;

        // Execute the query
        db.query(query, function (error, result) {
            if (error) {
                // Send server Error
                return response.status(500).send(error);
            }

            // Load the page
            response.render('edit-player', {
                player: result[0],
                add: false
            });
        });
    },

    // Update a player in the database - POST
    editPlayer: function (request, response) {
        // Get values from the request
        let playerId = request.params.id;
        let first_name = request.body.first_name;
        let last_name = request.body.last_name;
        let position = request.body.position;
        let number = request.body.number;

        // Query to update the existing player
        let query = `UPDATE players
            SET first_name = '${first_name}', last_name = '${last_name}', position = '${position}', number = ${number}
            WHERE id = ${playerId};`;

        // Execute the query
        db.query(query, function (err, result) {
            if (err) {
                // Send server error
                return response.status(500).send(err);
            }

            // Update successful, return to homepage
            response.redirect('/');
        });
    },

    // Delete a player from the database - GET
    deletePlayer: function (request, response) {
        // Get player ID from request
        let playerId = request.params.id;

        // Query to delete the given player
        let deleteUserQuery = `DELETE FROM players WHERE id = ${playerId};`;

        db.query(deleteUserQuery, function (error, result) {
            if (error) {
                // Send server error
                return response.status(500).send(error);
            }

            // Delete successful, return to homepage
            response.redirect('/');
        });
    }
};