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
2. To download every URL in a file, run `node index.js <filename>`. For example, to run it on the `fun-links.txt` file, you would do `node index.js fun-links`.

This will download all of your files to `out/fun-links/`.

## License

MIT
