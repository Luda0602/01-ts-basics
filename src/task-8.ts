import axios from "axios";

// Інтерфейс описує структуру одного поста
interface Post {
  id: number;
  title: string;
  body: string;
}

// Функція з правильною типізацією відповіді — масив Post
async function fetchPosts(): Promise<Post[]> {
  const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  return response.data;
}

// Виклик функції
fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
