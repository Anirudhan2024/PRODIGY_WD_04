document.querySelectorAll('nav ul li a').forEach(anchor=>{
    anchor.addEventListener('click',function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior:'smooth'
      });
    });
  });
  const scrollToTopButton=document.createElement('button');
  scrollToTopButton.textContent="⬆️";
  scrollToTopButton.classList.add('scroll-to-top');
  document.body.appendChild(scrollToTopButton);
  window.addEventListener('scroll',function(){
    if(window.scrollY>300){
      scrollToTopButton.style.display='block';
    }
    else{
      scrollToTopButton.style.display='none';
    }
  });
  scrollToTopButton.addEventListener('click',function(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });
