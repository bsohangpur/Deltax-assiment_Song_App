
# Song App

This App is created by @bsohangpur, in this project at home page you find top 10 songs sorted as latest as you add and you can add reviews by click on add reviews button. On Add Song page you find all CURD opration were you Create, update and delete the songs.
as same on Add Artist page.



## Authors

- [@bsohangpur](https://github.com/bsohangpur)


## Deployment

To create react build on this project run

```bash
  npm run build
```

To create Express Api on this project run

```bash
  npm run start
```

## Documentation

[Documentation](https://scribehow.com/shared/Workflow__UyOSMbetQD-fkUpihlFquQ)


## Appendix

All details Regarding to project are present. in Documentation Link.

Here are all detail about project.

For Back-End Tech we use 

Node,
Express,
Mongoose for easy connect mongoDB to Express.
Cors for cors policy.
Multer for media uploads.
Dotenv for environment variable.


For Front-End Tech be.
React vite with Typescript.
React-router-dom for routing.
React-icons
React-Redux for connecting React with Redux.
Redux Toolkit instead of Redux that give more power of Redux with less code.
React-hook-form for easy form handling form data.
Axios instead of fetch which give more easy to handle fetching data from Api.

DataBase 
We use MongoDb which is more powerful and easy to handle data.

Folder Structure.

Back-End (Server folder name)
Contained Config folder were all configuration files.
Models were all Data base Schema present.
Routes were all routes are presents.
Uploads folder for all medias.
App.js file for entry point to Api.
Server.js file for runs servers.
Package.json file were all detail about Api dependency are present. 

Front End (Client folder name)
Src were all main file are present.
Assets folder contain all static image file.
Components contains Artist, EditArtist, EditSong, Songdetail, Songs files.
Constant contain constant files.
Page contain all pages.
Redux were all redux file contain.
App.tsx file contain all main routing code.
Main.tsx file have main entry for react app.
Index.html file contain main html temp.
Package.json file were all detail about React App dependency are present. 



## Features

- Add Song Form.
- Live Reviews.
- Fullscreen mode
- Add Artist Form.
- Home page with all top 10 songs List.


## Tech Stack

**Client:** React, Redux, TailwindCSS, Typescript

**Server:** Node, Express, Mongoose, Multer

**Database:** MongoDb


## Run Locally

Clone the project

```bash
  git clone 
```

Go to the project directory

```bash
  cd DeltaX_Assiment
```

Install dependencies

```bash
  npm install
```
Go to the project back-end directory

```bash
  cd server
```

Start the server

```bash
  npm run dev yarn dev
```
Install dependencies

```bash
  npm install 
```

Go to the project front-end directory

```bash
  cd client
```

Start the server

```bash
  npm run dev or yarn dev
```
## Roadmap

- Start create Api first and test it on postman.

- Create React-vite app create all pages and components.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`MONGODBATLES`

