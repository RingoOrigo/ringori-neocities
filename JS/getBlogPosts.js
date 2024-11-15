// Get file containing all blog posts
fetch("../MISC/blog-posts.txt")
    .then(response => response.text())
    .then(text => {
        // Split the file into individual posts.
        // Each post is separated by ---
        const posts = text.split('---');

        // Get the element that will contain all blog posts
        const container = document.getElementById("postContainer");

        // Now split each post into its own <p> field on the website
        posts.forEach(post => {
            const lines = post.trim().split('\n');
            const date = lines[0];
            const content = lines[1];

            // Make an element to hold the post's data
            const postElement = document.createElement('div');
            
            // Set the HTML code for each post
            postElement.innerHTML = `
            <h3 id="date">${date}</h3>
            <p>${content}</p>`

            // Append each post to the container
            container.appendChild(postElement);
        });
    })
    .catch(error => {
        document.getElementById("postContainer").innerText = "Failure to generate blog posts";
    })