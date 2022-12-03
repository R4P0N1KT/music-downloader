const convertButton = document.querySelector('.convert-button');
const urlInput = document.querySelector('.input-URL');
let theme = document.querySelector('.option');
let select = document.querySelector('.opt');
let serverURL = 'http://localhost:4000';

theme.addEventListener('click', function() {
	if (theme.value === 'darkmode') {
		document.querySelector('body').style.backgroundColor = '#404258';
		document.querySelector('body').style.color = 'white';
		theme.style.color = 'white';
		theme.style.backgroundColor = '#404258';

		document.querySelector('p').innerHTML = 'Made with 🤍 by raponikt';

	}

	if (theme.value === 'lightmode') {
		document.querySelector('body').style.backgroundColor = 'white';
		document.querySelector('body').style.color = 'black';
		theme.style.backgroundColor = 'white';
		theme.style.color = 'black';

		document.querySelector('p').innerHTML = 'Made with 🖤 by raponikt';

	}
})

convertButton.addEventListener('click', () => {
	if (!urlInput.value) {
		alert('Put a valid URL');
	} else {
		if (select.value == 'mp3') {
			downloadMp3(urlInput.value);
		} else if (select.value == 'mp4') {
			downloadMp4(urlInput.value)
		}
	}
});

async function downloadMp3(query) {
	const res = await fetch(`${serverURL}/downloadmp3?url=${query}`);
	if(res.status == 200) {
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp3?url=${query}`;
  		a.setAttribute('download', '');
		a.click();
	} else if(res.status == 400) {
		alert("Invalid url");
	}
}

async function downloadMp4(query) {
	const res = await fetch(`${serverURL}/downloadmp4?url=${query}`);
	if(res.status == 200) {
		var a = document.createElement('a');
  		a.href = `${serverURL}/downloadmp4?url=${query}`;
  		a.setAttribute('download', '');
		a.click();
	} else if(res.status == 400) {
		alert('Invalid url');
	}
}