# Angular Implicit

This is a sample working implementation of **angular 4 secured with identity server 4**. It has,

- /server *dotnet core server*
- /client *angular 4 client

## Running Locally

First,
- Clone the repo

### Running the server,

- Open a terminal in the **server folder**
- Run a `dotnet restore`
- Run a `dotnet run`

### Running the client,

- Open a terminal in the **client folder**
- Run a `npm i`
- Run a `ng server --port=4200` (*port 4200 is important because identity server is configured to allow this client port*)
- Open a browser window at `http://localhost:4200/`

### Login In,

- You can use either `alice/password` or `bob/password` to login.

### Note

- Identity Server 4 here uses in memory users here.

