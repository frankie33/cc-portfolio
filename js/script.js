document.addEventListener("mouseover", function() {
  document.getElementById("hover").innerHTML;
});



var output = [];
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if( xhr.readyState == 4 && xhr.status == 200 ) {
    var repos = JSON.parse(xhr.responseText);
    repos.forEach(function(repo) {
      console.log(repo);
      output.push(`
        <div class="col-md-6">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title"><a href="${repo.html_url}" target="_blank">${repo.name}</a></h5>
              <p class="card-text">${repo.description}</p>
              <a href="${repo.html_url}" class="btn btn-primary" target="_blank">See repo</a>
            </div>
          </div>
          
        </div>
      `);
    });
    document.getElementById("repos").innerHTML = output.join(" ");
  }
}

xhr.open("GET", "https://api.github.com/users/frankie33/repos");
xhr.send();



