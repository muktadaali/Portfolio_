const menu=document.querySelector(".menu-toggle"),nav=document.querySelector(".nav-links");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const filters=document.querySelectorAll(".filter"), projects=document.querySelectorAll(".project-card");
filters.forEach(btn=>btn.addEventListener("click",()=>{
  filters.forEach(b=>b.classList.remove("active")); btn.classList.add("active");
  const filter=btn.dataset.filter;
  projects.forEach(card=>{
    const cats=card.dataset.category.split(" ");
    card.classList.toggle("hide",filter!=="all"&&!cats.includes(filter));
  });
}));

const sections=[...document.querySelectorAll("main section[id],header")];
const links=[...document.querySelectorAll(".nav-links a")];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(l=>l.classList.toggle("active",l.getAttribute("href")==="#"+entry.target.id));
    }
  });
},{rootMargin:"-35% 0px -55% 0px"});
sections.forEach(s=>{if(s.id) observer.observe(s)});
