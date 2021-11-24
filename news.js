const searchForm = document.querySelector('.search');
		const input = document.querySelector('.input');
		const newsList = document.querySelector('.news-list');
		const submit = document.querySelector('.submit');

		console.log(newsList);

		submit.addEventListener('click', retrieve)
		function retrieve(e){
			if(input.value == ''){
				alert('This field is empty!')
				return
			}
			newsList.innerHTML = '';
			e.preventDefault();

			const apiKey = '10509121f8ba4f998f7d43c436836cf5';

			let topic = input.value;

			let url =`https://newsapi.org/v2/everything?q=${input.value}&apiKey=${apiKey}`;

			fetch(url).then((response) => {
				return response.json()
			}).then((data) => {
				console.log(data)
				data.articles.forEach(article => {
					let li = document.createElement('li');
					let a = document.createElement('a');

					a.setAttribute('href', article.url);
					a.setAttribute('target', '_self');
					a.textContent = article.title;
					li.appendChild(a);
					newsList.appendChild(li);
				})
			}).catch((error) => {
				alert('Does not work ' + error);
				console.log(error);
			})
			console.log(topic);
		}