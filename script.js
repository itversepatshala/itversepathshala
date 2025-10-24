
document.addEventListener('DOMContentLoaded',function(){
  // Fade-in on scroll
  const obsOptions = {threshold:0.12};
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting) e.target.classList.add('visible');
    });
  }, obsOptions);
  document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

  // Simple mobile nav toggle (if needed) - can be expanded later
});
