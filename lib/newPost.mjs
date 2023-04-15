// get date
// make filename
// make file

import { access, constants, writeFile } from 'node:fs';

const file = 'message.txt';
const data = 'hey';

const newPost = () => {
	access(file, constants.F_OK, err => {
		if (!err) {
			console.log(`${file} exists`);
			return;
		} else {
			writeFile(file, data, err => {
				if (err) throw err;
				console.log('The file has been saved!');
			});
		}
	});
};

newPost();
