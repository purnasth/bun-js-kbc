function sayHello(name: string): string {
  return `Hello, ${name}!`;
}

console.log(sayHello("Purna"));

// print env
console.log(process.env.BUN_ENV);