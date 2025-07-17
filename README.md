# Book Cards - Version 3

by [Stefan Musarra](https://github.com/stefanzero/book-card-3)

## Description

Example project displaying books as cards with

- cover image
- book title
- author

## Version 3: Fetch request added to retrieve data from openLibrary.org

### function fetchData

Async function to return complete JSON response data.

### function extractWorks

Function that extracts most important properties from the response data.
Calls sortWorksByDate then returns works array.

### function sortWorksByDate

Sorts works array in place in chronological order of published date.

### function fetchBooks

Async function that calls fetchData and extractWorks.
Returns sorted works array.

### const article

Template string of HTML from Version 1 of this project

### function createBookCard

- create template element
- set template HTML to article string
- use querySelector to select img and replace with image URL
- use querySelector to select h2 and replace with book title
- use querySelector to select h3 and replace with book author

## References

Data from the [Open Libray API](https://openlibrary.org/developers/api)

### Query URI

#### Parameters

- subject = science_fiction
- limit = 20

URI = `http://openlibrary.org/subjects/science_fiction.json?limit=20`

## Data reformatted using Node script

### raw data

Query URI is entered in the address bar and then "pretty-print" is clicked in Chrome.

The result is copied to the "raw" directory.

### extracted data

Only these fields are extracted

- title
- key
- cover_id
- authors
- first_publish_year
- edition_count

Extracted data is sorted by date and written to the "extracted" directory
