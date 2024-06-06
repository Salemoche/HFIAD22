var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topbar").classList.remove("hide");
  } else {
    document.getElementById("topbar").classList.add("hide");
  }
  prevScrollpos = currentScrollPos;
}

// Fetch users
fetch('https://dummyjson.com/api?users=5')
    .then(response => response.json())
    .then(data => {
        const users = data.users;

        // Fetch posts
        fetch('https://dummyjson.com/api?posts=5')
            .then(response => response.json())
            .then(data => {
                const posts = data.posts;

                // Generate HTML for each post
                let html = '';
                for (let i = 0; i < 5; i++) {
                    html += `
                        <div class="article">
                            <img src="${users[i].profilePicture}" alt="Author ${i+1}">
                            <p>${users[i].name}</p>
                            <h2>${posts[i].title}</h2>
                            <p>${posts[i].excerpt}</p>
                            <p>${posts[i].date} - ${posts[i].readTime} min read - ${posts[i].comments.length} comments</p>
                            <img src="${posts[i].thumbnail}" alt="Thumbnail ${i+1}">
                        </div>
                    `;
                }

                // Replace the content of the article-tile div
                document.querySelector('.article-tile').innerHTML = html;
            });
    });