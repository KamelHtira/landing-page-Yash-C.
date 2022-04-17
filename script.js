
      const navbar = document.querySelector(".navbar1");
      const menu = document.querySelector(".menu-list");
      const menuBtn = document.querySelector(".menu-btn");
      const cancelBtn = document.querySelector(".cancel-btn");
      menuBtn.onclick = ()=>{
          
          menu.classList.add("active");
          menuBtn.classList.add("hide");
          cancelBtn.classList.add("show")

}
      cancelBtn.onclick = ()=>{
          menu.classList.remove("active");
          menuBtn.classList.remove("hide");
          cancelBtn.classList.remove("show")
}


    
      function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          obj.innerHTML = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
      function runNumbers(){
      const obj1 = document.getElementById("first-number");
      animateValue(obj1, 0, 10, 2500);
      const obj2 = document.getElementById("second-number");
      animateValue(obj2, 0, 500, 2500);
      const obj3 = document.getElementById("third-number");
      animateValue(obj3, 0, 24, 2500);
      const obj4 = document.getElementById("forth-number");
      animateValue(obj4, 0, 7, 2500);

      }
      let k=0;

      window.onscroll = ()=>{
        if(this.scrollY>1850 && k==0){
            console.log("here");
            runNumbers();k++;
            
        }

        this.scrollY >20 ? navbar.classList.add("sticky1") : navbar.classList.remove("sticky1");
      }

    $('.owl-carousel').owlCarousel({
      items:1,
      merge:true,
      loop:true,
      margin:100,
      video:true,
      lazyLoad:true,
      center:true,
      
      responsive:{
          480:{
              items:2
          },
          600:{
              items:4
          }
      }
  })


  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 
  function myFunction1() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 
  function myFunction2() {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  } 


  const scriptURL1 = 'https://script.google.com/macros/s/AKfycby9D6QNMmazh2Q1WmDJtsc9vwbDPVCIU_P88F5ZcfvTE4Ac2GB35bSe391W7ULhvkGh/exec'
  const form1 = document.forms['google-sheet']

  form1.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL1, { method: 'POST', body: new FormData(form1)})
      .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
      .catch(error => console.error('Error!', error.message))
  })

  const scriptURL2 = 'https://script.google.com/macros/s/AKfycby9D6QNMmazh2Q1WmDJtsc9vwbDPVCIU_P88F5ZcfvTE4Ac2GB35bSe391W7ULhvkGh/exec'
  const form2 = document.forms['google-sheet2']

  form2.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL2, { method: 'POST', body: new FormData(form2)})
      .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
      .catch(error => console.error('Error!', error.message))
  })