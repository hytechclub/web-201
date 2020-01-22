module.exports = {
    getHomePage: function (request, response) {
        // Query database to get all the players
        let query = 'SELECT * FROM players ORDER BY id ASC'; 

        // Reponse to query
        function queryCallback(error, result) {
            if (error) {
                return response.status(500).send(error);
            }

            let renderData = {
                players: result
            }

            response.render('index', renderData);
        }

        // Execute query
        db.query(query, queryCallback);
    },
};