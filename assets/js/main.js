document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.post-preview');
  
  posts.forEach(post => {
    post.addEventListener('mouseenter', () => {
      post.classList.add('animate__animated', 'animate__pulse');
    });
    
    post.addEventListener('mouseleave', () => {
      post.classList.remove('animate__pulse');
    });
  });

  // Reading progress indicator
  const progressBar = document.createElement('div');
  progressBar.classList.add('reading-progress');
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
});
