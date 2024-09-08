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

Bun.serve({
  port: 4000,
  fetch(req) {
    console.log(req);
    let url = new URL(req.url);
    if (url.pathname === "/") {
      return new Response("Home Page"); 
    } else if (url.pathname === "/about") {
      return new Response("About Us");
    } else {
      return new Response("404 Not Found", { status: 404 });
    }
  },
});
