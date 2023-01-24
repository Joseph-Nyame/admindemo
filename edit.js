
  // edit home api
  function update(id) {
    console.log(id);
    var form = new FormData();
    form.append("id", id);
    var settings = {
   "url": "http://127.0.0.1:8000/api/update-home/" + id ,
   "method": "delete",
   "timeout": 0,
   "processData": false,
   "mimeType": "multipart/form-data",
   "contentType": false,
   "data": form
  };
  
  $.ajax(settings).done(function (response) {
   console.log(response);
  });

  

  

  
    const api_url = "http://localhost:8000/api/find-home" +id;

// Defining async function

async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
 
}
// Calling that async function
getapi(api_url);

} 
 