const subject = "science_fiction";
const limit = 20;
const offset = 0;
const uri = `https://openlibrary.org/subjects/${subject}.json?limit=${limit}&offset=${offset}`;

const fetchData = async () => {
  const timeOutMs = 5000;
  /*
  The API at openlibrary.org does not support CORS.
  Request header field content-type is not allowed by Access-Control-Allow-Headers 
  in preflight response and Request header field cors is not allowed.
  */
  const response = await fetch(uri, {
    method: "GET",
    cors: "no-cors",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    timeout: timeOutMs,
  });
  if (!response.ok) {
    alert(`HTTP error! status: ${response.status}`);
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

const extractWorks = (data) => {
  const works = data.works.map((work) => {
    return {
      title: work.title,
      key: work.key,
      cover_id: work.cover_id,
      authors: work.authors,
      first_publish_year: work.first_publish_year,
      edition_count: work.edition_count,
    };
  });
  sortWorksByDate(works);
  return works;
};

const sortWorksByDate = (works) =>
  works.sort((a, b) => {
    return a.first_publish_year - b.first_publish_year;
  });

const fetchBooks = async () => {
  const data = await fetchData();
  return extractWorks(data);
};

const main = document.querySelector("main");

const article = `
      <article>
        <figure>
          <div class="img-container">
            <img
              src="SRC"
              alt="ALT"
            >
          </div>
          <figcaption>
            <h2>TITLE</h2>
            <h3>AUTHOR</h3>
          </figcaption>
        </figure>
      </article>
      `;

function createBookCard(book) {
  const template = document.createElement("template");
  template.innerHTML = article;
  const clone = template.content.cloneNode(true);
  clone.querySelector("img").src =
    `https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg`;
  clone.querySelector("img").alt =
    `Book cover of ${book.title} by ${book.authors[0].name}`;
  clone.querySelector("h2").textContent = book.title;
  clone.querySelector("h3").textContent = book.authors[0].name;
  return clone;
}

async function render() {
  const fragment = document.createDocumentFragment();
  const books = await fetchBooks();
  books.forEach((book) => {
    fragment.appendChild(createBookCard(book));
  });
  main.appendChild(fragment);
}

// DOMContentLoaded is not fired on Glitch websites
// document.addEventListener("DOMContentLoaded", render);
render();
