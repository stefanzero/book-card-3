const books = [
  {
    title: "Frankenstein or The Modern Prometheus",
    key: "/works/OL450063W",
    cover_id: 12356249,
    authors: [
      {
        key: "/authors/OL25342A",
        name: "Mary Shelley",
      },
    ],
    first_publish_year: 1818,
    edition_count: 2183,
  },
  {
    title: "The Princess and Curdie",
    key: "/works/OL15448W",
    cover_id: 14357835,
    authors: [
      {
        key: "/authors/OL23082A",
        name: "George MacDonald",
      },
    ],
    first_publish_year: 1832,
    edition_count: 415,
  },
  {
    title: "Alice's Adventures in Wonderland",
    key: "/works/OL138052W",
    cover_id: 10527843,
    authors: [
      {
        key: "/authors/OL22098A",
        name: "Lewis Carroll",
      },
    ],
    first_publish_year: 1865,
    edition_count: 3546,
  },
  {
    title: "Vingt mille lieues sous les mers",
    key: "/works/OL1099280W",
    cover_id: 6573517,
    authors: [
      {
        key: "/authors/OL113611A",
        name: "Jules Verne",
      },
      {
        key: "/authors/OL2832142A",
        name: "Serge Micheli",
      },
      {
        key: "/authors/OL2832141A",
        name: "Francois Riviere",
      },
    ],
    first_publish_year: 1870,
    edition_count: 382,
  },
  {
    title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
    key: "/works/OL24156W",
    cover_id: 295773,
    authors: [
      {
        key: "/authors/OL25963A",
        name: "Robert Louis Stevenson",
      },
    ],
    first_publish_year: 1875,
    edition_count: 360,
  },
  {
    title: "Flatland",
    key: "/works/OL118388W",
    cover_id: 10069547,
    authors: [
      {
        key: "/authors/OL20585A",
        name: "Edwin Abbott Abbott",
      },
    ],
    first_publish_year: 1884,
    edition_count: 543,
  },
  {
    title: "The Time Machine",
    key: "/works/OL52267W",
    cover_id: 9009316,
    authors: [
      {
        key: "/authors/OL13066A",
        name: "H. G. Wells",
      },
    ],
    first_publish_year: 1895,
    edition_count: 1151,
  },
  {
    title: "The Island of Dr. Moreau",
    key: "/works/OL381550W",
    cover_id: 968312,
    authors: [
      {
        key: "/authors/OL13066A",
        name: "H. G. Wells",
      },
      {
        key: "/authors/OL7563369A",
        name: "Fiona Beddall",
      },
      {
        key: "/authors/OL2825724A",
        name: "Dobbs",
      },
      {
        key: "/authors/OL3101873A",
        name: "Fabrizio Fiorentino",
      },
      {
        key: "/authors/OL7934538A",
        name: "David Domínguez",
      },
      {
        key: "/authors/OL7708382A",
        name: "Jonathan Kent",
      },
      {
        key: "/authors/OL52922A",
        name: "Margaret Atwood",
      },
      {
        key: "/authors/OL12605439A",
        name: "Judit Lligonya Tenasen",
      },
      {
        key: "/authors/OL12600907A",
        name: "Manuel Rivas Cabezuelo",
      },
      {
        key: "/authors/OL12605440A",
        name: "Amaia Gurbindo",
      },
      {
        key: "/authors/OL7969831A",
        name: "Judit Lligonya Tenas",
      },
      {
        key: "/authors/OL12605446A",
        name: "Marta Seoane Rebollo",
      },
    ],
    first_publish_year: 1896,
    edition_count: 273,
  },
  {
    title: "Dracula",
    key: "/works/OL85892W",
    cover_id: 12216503,
    authors: [
      {
        key: "/authors/OL31727A",
        name: "Bram Stoker",
      },
    ],
    first_publish_year: 1897,
    edition_count: 730,
  },
  {
    title: "The Invisible Man",
    key: "/works/OL52266W",
    cover_id: 6419199,
    authors: [
      {
        key: "/authors/OL13066A",
        name: "H. G. Wells",
      },
    ],
    first_publish_year: 1897,
    edition_count: 416,
  },
  {
    title: "The War of the Worlds",
    key: "/works/OL52114W",
    cover_id: 36314,
    authors: [
      {
        key: "/authors/OL13066A",
        name: "H. G. Wells",
      },
    ],
    first_publish_year: 1898,
    edition_count: 429,
  },
  {
    title: "The Wonderful Wizard of Oz",
    key: "/works/OL18417W",
    cover_id: 552443,
    authors: [
      {
        key: "/authors/OL23431A",
        name: "L. Frank Baum",
      },
    ],
    first_publish_year: 1899,
    edition_count: 2052,
  },
  {
    title: "The Lost World",
    key: "/works/OL262460W",
    cover_id: 8231444,
    authors: [
      {
        key: "/authors/OL161167A",
        name: "Arthur Conan Doyle",
      },
    ],
    first_publish_year: 1900,
    edition_count: 747,
  },
  {
    title: "The Iron Heel",
    key: "/works/OL74502W",
    cover_id: 8243314,
    authors: [
      {
        key: "/authors/OL44633A",
        name: "Jack London",
      },
    ],
    first_publish_year: 1907,
    edition_count: 594,
  },
  {
    title: "The Secret Agent",
    key: "/works/OL39108W",
    cover_id: 8239401,
    authors: [
      {
        key: "/authors/OL19441A",
        name: "Joseph Conrad",
      },
    ],
    first_publish_year: 1907,
    edition_count: 255,
  },
  {
    title: "The Poison Belt",
    key: "/works/OL262596W",
    cover_id: 5788361,
    authors: [
      {
        key: "/authors/OL161167A",
        name: "Arthur Conan Doyle",
      },
    ],
    first_publish_year: 1913,
    edition_count: 345,
  },
  {
    title: "At The Earth's Core And Out Of Time's Abyss",
    key: "/works/OL1417907W",
    cover_id: 9317372,
    authors: [
      {
        key: "/authors/OL146605A",
        name: "Edgar Rice Burroughs",
      },
    ],
    first_publish_year: 1914,
    edition_count: 223,
  },
  {
    title: "Brave New World",
    key: "/works/OL64365W",
    cover_id: 8231823,
    authors: [
      {
        key: "/authors/OL19767A",
        name: "Aldous Huxley",
      },
    ],
    first_publish_year: 1932,
    edition_count: 675,
  },
  {
    title: "Nineteen Eighty-Four",
    key: "/works/OL1168083W",
    cover_id: 9267242,
    authors: [
      {
        key: "/authors/OL118077A",
        name: "George Orwell",
      },
    ],
    first_publish_year: 1949,
    edition_count: 433,
  },
  {
    title: "Fahrenheit 451",
    key: "/works/OL103123W",
    cover_id: 12993656,
    authors: [
      {
        key: "/authors/OL24137A",
        name: "Ray Bradbury",
      },
    ],
    first_publish_year: 1953,
    edition_count: 255,
  },
];

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

function render() {
  const fragment = document.createDocumentFragment();
  books.forEach((book) => {
    fragment.appendChild(createBookCard(book));
  });
  main.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", render);
