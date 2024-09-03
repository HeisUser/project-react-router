# Ways (Methods) of Routing in React Router v6
#### Learning and Know how the Routing Methods and Param Route with GraphQL


## Learning Object
- Form Handling in A or B param on a same input field in GraphQL with Destructuring JSON Object in Nested-Complex, at **client**.
- Retrieve Data from **server** of Strapi with GraphQL methods. Strapi is the Data Control Panel in MySQL based.
- Added Delete Feature of Component on _SearchResult.jsx_ to delete data via GraphQL on Data Control Panel of Strapi (server) in MySQL based.
- Lifted Status of Deletion if failed or successfully executed.

## Regarding Files as
- Form Page Data (Param) Submission Handling **_SearchForm.jsx_**
- Retrieve Result Component of Search **_SearchResult.jsx_**
- Redirect Component of Clicked-Button-Submission **_FormHandler.jsx_**
- Data Loader of Apollo Clientbe used at _DataRoutes.jsx_ **_ClientApollo.jsx_**
- Deletion Component to be exported onto _SearchResult.jsx_ file **_DeletionFeature.jsx_**
- Query of GraphQL to determine retrieve result for _SearchResult.jsx_ file **_queries.jsx_**
- Mutation Query of GraphQL to determine delete result for _SearchResult.jsx_ file **_mutations.jsx_**
- _GraphQL Query & Mutation methods are determined from Apollo Sandbox Explorer_

## in use of React Hooks
- useState, useParams, useLoaderData, useEffect, useNavigate, useQuery, ApolloClient
- prop-types, useMutation, refetch() @useQuery

## Usage
#### Route Definition of URL Link created at DataRoutes.jsx file
- http://localhost:5173/form/result/:searchQuery

## GraphQL Endpoints:
- http://localhost:1337/graphql

## Project Requirement as :
- **client** with Apollo Client of GraphQL
- **server** with Strapi in GraphQL Server and in MySQL based

## Github Link regard this Branch on Delete-Feature-Strapi-GraphQL-Param
- **SSH** ```git@github.com:HeisUser/project-react-router.git```
- **HTTPS** https://github.com/HeisUser/project-react-router.git

# Default Created of React Router v6
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
