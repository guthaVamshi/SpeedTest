var limit = 1;
var toast = document.querySelector('.toast-body');
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts?limit=' + limit,
    headers: { 'X-Api-Key': '7PZbGPZ2fWRutbB/LZYc/Q==vpiX6muvVcNRyhRU'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        toast.innerHTML = result[0]['fact'];
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
}); 
