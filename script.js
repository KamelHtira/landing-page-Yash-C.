
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
      window.onscroll = ()=>{
          this.scrollY >20 ? navbar.classList.add("sticky1") : navbar.classList.remove("sticky1");
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
      animateValue(obj1, 0, 28, 2500);
      const obj2 = document.getElementById("second-number");
      animateValue(obj2, 0, 35, 2500);
      const obj3 = document.getElementById("third-number");
      animateValue(obj3, 0, 24, 2500);
      const obj4 = document.getElementById("forth-number");
      animateValue(obj4, 0, 7, 2500);
      const obj5 = document.getElementById("fifth-number");
      animateValue(obj5, 0, 7, 2500);
      }
      let i=0;

      window.onscroll = ()=>{
        if(this.scrollY>1850 && i==0){
            console.log("here");
            runNumbers();i++;
            
        }
    }


