export default async function getLatestResponse() {

const res = await fetch("https://jsonplaceholder.typicode.com/posts");

return res.json();
}