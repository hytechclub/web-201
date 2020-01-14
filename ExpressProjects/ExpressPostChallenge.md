# Express POST Challenge
Create a new page on the server that will require the user to enter a password in order to show a secret file. Use an endpoint on the server to properly respond to POST requests with the password information.

## Requirements
- The user should be able to go to http://127.0.0.1:3000/gate to see a place where they can enter a password
- If they enter the correct password and submit, the same endpoint should load new (secret) HTML content
- If they enter the wrong password, the current page should reload

## Implementation
- Create two HTML files - one where the user can enter a password, and one with the secret content
- Use an HTML form to send a POST request from the browser to the server
    - Resource: [https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data)
- Use the built-in body parsing utilities from Express to properly parse the incoming POST request on the server
    - Resource: [https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters](https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters)
- The basic initial page should use `app.get` to respond to GET requests
- The secret response should use `app.post` to respond to POST requests
- The actual endpoint for both should be the same: `'/gate'`