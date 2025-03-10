document.addEventListener("DOMContentLoaded", function() {
    const username = "gishan-chamith";  // Your GitHub username
    const repoList = document.getElementById("github-projects");

    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                let listItem = document.createElement("li");
                listItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                repoList.appendChild(listItem);
            });
        })
        .catch(error => console.log("Error fetching GitHub repos:", error));
});
