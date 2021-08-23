# Market Store App 

## Summary

This project is a sample mini e-commerce app for shirts and mugs. 
It was bootstrapped with create-react-app typescript.

## Features

* users can filter products by two categories mugs/shirts 
* users can filter products by brands 
* users can filter products by tags 
* users can sort products by price (low to high / high to low)
* users can sort products by date (new to old / old to new)


## Installation
To run the app locally

- clone the repository locally with: 

```bash
  git clone https://github.com/melowsoft/getir-store
```
- cd into project directory with: 

```bash
  cd getir-store/client
```

- Install all dependencies in project directory with:

```bash
  npm install
```
**Note: The Client depends on Json server for fetching data, hence you need to run json-server to serve the client ***

- To run json-server:
first install json-server on your local machine, if you don't have it installed with

```bash
  npm install -g json-server
```
when you have json-server installed, run the following command in the root directory of the project:

```bash
  npx json-server --watch db.json --port 5000
```
to expose the api on port localhost://5000

**Note: json-server should run on a different port from our react app ***

- Finally you can now cd into the react app and start the app with:

```bash
  npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### Testing

- To run test:

```bash
  npm run test
```

### Stack
- React
- Typescript
- Redux
- Json server


