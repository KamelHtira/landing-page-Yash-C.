
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

      
      
