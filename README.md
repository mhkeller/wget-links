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

1. Create a text file with one URL per line. Save it as something short like `fun-links.txt`
2. To download every URL in that file, run `node index.js <filename>`. To run the example script we just created it would be `node index.js fun-links`

This will download all of your files to `out/fun-links/`.

## License

MIT
