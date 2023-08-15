# weatherApp
This was a project to experiment with the JavaScript `fetch()` API and asynchronous functions.

# Functionalty
The app is kept simple as it is just experimentation. But we have following use case: 
1. Type the name of a location in the search bar.
2. Click the search button.
3. The location name is inserted into a query string, for which a HTTP request is made using the `fetch()` API.
4. This returns a promise which is consumed by passing the relevant information retrieved from the HTTP response object into a factory function. This returns a hash.
5. The hash is then passed into the JSDOM and the infomation is displayed into the relevant DOM elements.
6. Finally, a new query in the search bar re-renders the entire page based on the new query.
