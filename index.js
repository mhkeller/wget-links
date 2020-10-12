const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const notify = require('wsk-notify');
const { uniq } = require('underscore');

const inFile = process.argv[2];

/* --------------------------------------------
 * How much time to wait between requests
 */
const defaultSleep = 1000;

if (!inFile) {
	notify({ m: 'Error: Argument required. Example:', v: '`npm start -- fop`', d: ['yellow', 'bold'] });
	process.exit(0);
}

const inDir = 'in-urls';
const outDir = path.join('out', inFile);

if (!fs.existsSync(outDir)) {
	fs.mkdirSync(outDir);
}

/* --------------------------------------------
 * Add any URLs you want to skip here. Would be nicer, maybe, if this could be a file passed in as command line argument
 */
const skipList = [
];

const inFilePath = path.join(inDir, `${inFile}.txt`);

if (!fs.existsSync(inFilePath)) {
	notify({ m: 'Error: In file does not exists...', v: inFilePath, d: ['red', 'bold'] });
	process.exit(0);
}

const urls = uniq(fs.readFileSync(inFilePath, 'utf-8').split('\n').filter(Boolean));

function download(i) {
	let timeout = 0;
	const outPath = path.join(outDir, urls[i].split('/').pop())
		.replace(/:/g, '')
		.replace(/'/g, '')
		.replace(/"/g, '');

	if (skipList.includes(urls[i])) {
		notify({ m: 'On skip list, skipping...', d: 'gray' });
	} else if (!fs.existsSync(outPath)) {
		notify({ m: 'Doing...', v: `${i} of ${urls.length}`, d: ['cyan', 'bold'] });
		notify({ m: '\tFile...', v: urls[i], d: 'cyan' });
		try {
			spawnSync('wget', ['--content-disposition', urls[i], '-P', outDir], { shell: true, stdio: 'inherit' });
			// spawnSync('wget', [urls[i], '-O', outPath], { shell: true, stdio: 'inherit' });
		} catch (err) {
			notify({ m: 'Error...', v: urls[i], d: 'error' });
		}
		timeout = defaultSleep;
	} else {
		notify({ m: 'Exists, skipping...', d: 'gray' });
	}
	const next = i + 1;
	if (next < urls.length) {
		setTimeout(() => {
			download(next);
		}, timeout);
	}
}

download(0);
