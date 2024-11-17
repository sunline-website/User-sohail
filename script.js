// script.js

// Function to handle the form submission and display the post
document.getElementById('postForm').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent page reload
  
  const title = document.getElementById('postTitle').value;
  const content = document.getElementById('postContent').value;
  
  if (title && content) {
    // Create a new post object
    const post = {
      title: title,
      content: content
    };

    // Add the new post to the posts list
    addPostToDisplay(post);

    // Clear the form fields
    document.getElementById('postTitle').value = '';
    document.getElementById('postContent').value = '';
  }
});

// Function to display posts dynamically
function addPostToDisplay(post) {
  const postsList = document.getElementById('postsList');
  
  const postElement = document.createElement('div');
  postElement.classList.add('post');
  
  const postTitle = document.createElement('h4');
  postTitle.textContent = post.title;
  
  const postContent = document.createElement('p');
  postContent.textContent = post.content;
  
  postElement.appendChild(postTitle);
  postElement.appendChild(postContent);
  
  postsList.appendChild(postElement);
}
