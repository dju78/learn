(function(){
  'use strict';
  const search=document.getElementById('resourceSearch');
  const chips=Array.from(document.querySelectorAll('.chip[data-filter]'));
  const cards=Array.from(document.querySelectorAll('.chapter[data-title]'));
  const noResults=document.getElementById('noResults');
  if(!search||!cards.length)return;
  let filter='all';
  function update(){
    const q=search.value.trim().toLocaleLowerCase();
    let visible=0;
    for(const card of cards){
      const matchesFilter=filter==='all'||card.dataset.kind===filter;
      const matchesSearch=card.dataset.title.includes(q);
      card.hidden=!(matchesFilter&&matchesSearch);
      if(!card.hidden)visible++;
    }
    if(noResults)noResults.hidden=visible!==0;
  }
  search.addEventListener('input',update);
  for(const chip of chips){
    chip.addEventListener('click',()=>{
      filter=chip.dataset.filter;
      for(const other of chips){
        const active=other===chip;
        other.classList.toggle('active',active);
        other.setAttribute('aria-pressed',String(active));
      }
      update();
    });
  }
})();
