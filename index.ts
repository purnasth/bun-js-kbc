// function sayHello(name: string): string {
//   return `Hello, ${name}!`;
// }

// console.log(sayHello("Purna"));

// // print env
// console.log(process.env.BUN_ENV);

// //? Bun

// let data = Bun.file("README.md");
// console.log(await data.text());

// // shorthand

// console.log(await Bun.file("README.md").text());

// Bun.serve()

// Bun.serve({
//   port: 4000,
//   fetch: function () {
//     return new Response("Hello, World!");
//   },
// });

// Bun.serve({
//   port: 4000,
//   fetch(req) {
//     console.log(req.url);
//     return new Response("Hello, from Bun --watch");
//   },
// });

//? NOTE: to auto update on the browser bun --watch index.ts

// Bun.serve({
//   port: 4000,
//   fetch(req) {
//     console.log(req);
//     let url = new URL(req.url);
//     if (url.pathname === "/") {
//       return new Response("Home Page");
//     } else if (url.pathname === "/about") {
//       return new Response("About Us");
//     } else {
//       return new Response("404 Not Found", { status: 404 });
//     }
//   },
// });

// ! Database Connection: SQ Lite

import { Database } from "bun:sqlite";

let db = new Database("mydb.sqlite");

db.query(
  "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, address TEXT)"
).run();

db.query('INSERT INTO users (name, address) VALUES("Purna", "Kathmandu")').run();

//? to run the query terminal
    // sqlite3 mydb.sqlite
    // SQLite version 3.43.2 2023-10-10 13:08:14
    // Enter ".help" for usage hints.
    // sqlite> .tables
    // users
    // sqlite> 

//? Database is encrypted so cannot be opened via open file .. so we need to extension on vscode to open the file
    // Name: SQLite
    // Id: alexcvzz.vscode-sqlite
    // Description: Explore and query SQLite databases.
    // Version: 0.14.1
    // Publisher: alexcvzz
    // VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite