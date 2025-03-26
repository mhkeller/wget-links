wget links
===

> A very simple script to wget a bunch of links with a delay in between each request. This is not meant to be a comprehensive project with a fully developed API so tweak it as necessary.

## Installing

This project requires Node.js. Download it [from here](https://nodejs.org/).

```sh
git clone https://github.com/mhkeller/wget-links.git
cd wget-links
npm install
```

## Usage

1. Create a text file with one URL per line and save it in the `in-urls/` folder with a short name like `fun-links.txt`. See [an example](in-urls/example.txt).
2. To download every URL in a file, run `npm start -- <filename>`. For example, to run it on the `fun-links.txt` file, you would do `npm start -- fun-links`.

This will download all of your files to `out/fun-links/`.

## Grabbing links

If you have a big list of hyperlinks to PDFs on a page, here's an easy way to grab them and paste them into the right format.

```js
copy(Array.from(document.querySelectorAll('a.my-css-selector')).map(el => `http://mydomain.com${el.getAttribute('href')}`).join('\n'))
```

To make this work for a given site, change the CSS selector and the domain to the appropriate values. For example, let's say you have a page structure like this on `https://example.com`:

```html
<ul id="document list">
	<li><a href="files/my-document1.pdf">Document 1</a></li>
	<li><a href="files/my-document2.pdf">Document 2</a></li>
	<li><a href="files/my-document3.pdf">Document 3</a></li>
	<li><a href="files/my-document4.pdf">Document 4</a></li>
</ul>
```

You would paste this into the console and it would copy all of the absolute URLs:

```js
copy(Array.from(document.querySelectorAll('#document-list a')).map(el => `https://example.com${el.getAttribute('href')}`).join('\n'))
```

If the URLs are not relative URLS, then use this version that doesn't prepend a domain.

```js
copy(Array.from(document.querySelectorAll('#document-list a')).map(el => el.getAttribute('href')).join('\n'))
```

## License

MIT
