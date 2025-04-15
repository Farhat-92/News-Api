let input = document.querySelector("#input");
let cont = document.querySelector(".cont");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let keyword = input.value.trim();

  if (keyword) {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${keyword}&apiKey=3919fcbce08d4bb1920bf8faeef3530f`;
    fetch(url)
      .then((res) => {
        console.log("resolved");
        // console.log(res);
        res.json().then((data) => {
          cont.innerHTML = "";
          //   console.log(data.articles);
          if (data.articles && data.articles.length > 0) {
            for (i of data.articles) {
              const author = document.createElement("h3");
              const title = document.createElement("h4");
              const desp = document.createElement("p");

              author.innerText = `Author : ${i.author}`;
              title.innerText = i.title;
              desp.innerText = i.description;
              // console.log(i.author);
              // console.log(i.title);
              console.log(i.description);

              cont.appendChild(author);
              cont.appendChild(title);
              cont.appendChild(desp);
            }
          } else {
            cont.innerHTML = "<p>Sorry no news found for this topic</p>";
          }
        });
      })
      .catch(() => {
        cont.innerHTML = "<p>Error fetching the news.</p>";
        console.log("rejected");
      });
  } else {
    cont.innerHTML = "<p>Enter a topic</p>";
  }
});
