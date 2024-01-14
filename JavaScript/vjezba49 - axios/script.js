"use strict";

async function getPost() {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts/1"); // odmah pretvara u objekt
    console.log(res);
    console.log(res.data);
    console.log(res.data.title);
  } catch (error) {
    console.log(error);
  }
}

getPost();
