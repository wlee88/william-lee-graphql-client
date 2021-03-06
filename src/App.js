import React from 'react';
import GraphiQL from 'graphiql';

import 'graphiql/graphiql.css';
import './App.css';

const GRAPH_QL_SERVER_API_URL = 'https://olc94y2409.execute-api.ap-southeast-2.amazonaws.com/production/graphql';
const WELCOME_MESSAGE = `# 👋 Hello
# http://iam.william-lee.com and I am a Full Stack Developer 
# currently living in Brisbane, Australia.
#
# Have fun and query my deets in GraphQL.
# 
# Explore the docs on the right hand side or just 
# run my default query below.
#
# Protip: use cmd + enter to run a query.

{
  name,
  born,
  devAge,
  email,
  favouriteTech,
  resume,
  linkedIn,
  github,
  soundcloud,
  hobbies
}
`
var fetchURL = GRAPH_QL_SERVER_API_URL;

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
