const get_api_res_btn = document.getElementById('get_api_res_btn');

const api_title = document.getElementById('api_title');
const api_year = document.getElementById('api_year');
const api_director = document.getElementById('api_director');


const film_name = document.getElementById('film_name');
const test = document.getElementById('test');

get_api_res_btn.addEventListener('click', getAPI);

    function getAPI(){
		let endPoint = 'http://www.omdbapi.com/?t=' + film_name.value + '&apikey=3d4f5f92';
		
        fetch(endPoint, {
		method: 'GET'
	})
    .then(res => res.json())
    .then(data=> {
        api_title.innerHTML='Title: ' + data.Title;
        api_year.innerHTML='Year: ' + data.Year;
        api_director.innerHTML='Director: ' + data.Director;
    });
}