// Масив рядків
const usernames: string[] = ["alice", "bob", "charlie"];

// Масив чисел
const ratings: number[] = [4.5, 3.8, 5];

// Масив об'єктів з однаковою структурою
const products: { id: number; title: string }[] = [
  { id: 1, title: "Phone" },
  { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);

  