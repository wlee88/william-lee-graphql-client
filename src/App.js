import React from 'react';
import GraphiQL from 'graphiql';

import 'graphiql/graphiql.css';
import './App.css';


const WELCOME_MESSAGE = `# 👋 Hello
# http://iam.william-lee.com and I am a Full Stack Developer 
# of about 10 years and currently living in Brisbane, Australia.
#
# Have fun and explore me in graphQL.
# It's also way easier to update my things.
# 
# Explore the docs on the right hand side for all my info or just 
# run my default query below.
#
# Protip: use cmd + enter to run a query.

{
  name,
  born,
  email,
  favouriteTech,
  resume,
  linkedIn,
  github,
  soundcloud,
  hobbies
}
`

var fetchURL = 'https://william-lee-graph-ql.herokuapp.com';

// Defines a GraphQL fetcher using the fetch API.
function graphQLFetcher(graphQLParams) {
  return fetch(fetchURL, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(graphQLParams),
  }).then(function (response) {
    return response.json();
  });
}


function App() {
  return (
    <GraphiQL 
    fetcher={graphQLFetcher} 
    defaultQuery={WELCOME_MESSAGE} 
    docExplorerOpen={true}
    >
    <GraphiQL.Logo>
      <a href="http://iam.william-lee.com">
        <img src="/web-logo-grey.png" alt="William Lee Logo" />
      </a>
    </GraphiQL.Logo>
    
    </GraphiQL>
  );
}

export default App;
