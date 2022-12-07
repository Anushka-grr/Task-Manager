# Task-Manager

_Keep a track of all your Tasks_

Task Manager App with APIs to create, read, update, delete To Do tasks.
Each To do will have a description, status: pending/done and a unique id.

## Features

- Create a list of tasks to be done
- Edit Single tasks' description
- Edit task status to done or pending
- Delete tasks
- Each task gets a unique Id.

## Tech used :

- [Bootstrap] - Fronted Built using HTML CSS and Boostrap
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [MongoDb](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) - a document database

## Installation

This project requires [Node.js](https://nodejs.org/) v14+ to run.
Install the dependencies and devDependencies and start the server.

```sh
npm i
npm start
```

Create a .env file. The .env file will contain the URI connection string. This contains the user, password, host address as well as database and extra connection options for connecting to your MongoDB database.

```sh
MONGO_URI='mongo+srv://<user>:<pass>@<host>:<port>/<database>?<connection options>'
```

[node.js]: http://nodejs.org
[express]: https://expressjs.com
[Bootstrap]: https://getbootstrap.com/
