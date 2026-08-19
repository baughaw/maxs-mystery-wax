const pulls=[
{name:'DONUT DUST',image:'assets/donut-dust.webp',rarity:'COMMON • 10 / 24'},
{name:'DRIPPY',image:'assets/drippy.webp',rarity:'UNCOMMON • 8 / 24'},
{name:'POOPY PETE',image:'assets/poopy-pete.webp',rarity:'RARE • 4 / 24'},
{name:'MYSTERY DROP',image:'assets/yellow-shape.webp',rarity:'ULTRA RARE • 2 / 24'}
];
const weighted=[0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,2,2,2,2,3,3];
const btn=document.querySelector('#pullBtn');
const bagButton=document.querySelector('#bagButton');
const bag=document.querySelector('#bag');
const reveal=document.querySelector('#reveal');
const waxImage=document.querySelector('#waxImage');
const waxName=document.querySelector('#waxName');
const waxRarity=document.querySelector('#waxRarity');
let pulling=false;
function pullWax(){
 if(pulling)return; pulling=true;
 reveal.classList.remove('show');
 bag.classList.remove('opened','ripping');
 void bag.offsetWidth;
 bag.classList.add('ripping');
 btn.textContent='RIPPING...';
 setTimeout(()=>{
   const p=pulls[weighted[Math.floor(Math.random()*weighted.length)]];
   waxImage.src=p.image; waxImage.alt=p.name+" Max's Mystery Wax";
   waxName.textContent=p.name; waxRarity.textContent=p.rarity;
   bag.classList.add('opened'); reveal.classList.add('show');
   btn.textContent='PULL AGAIN'; pulling=false;
 },620);
}
btn.addEventListener('click',pullWax); bagButton.addEventListener('click',pullWax);
document.querySelector('#findBtn').addEventListener('click',()=>{const q=document.querySelector('#storeSearch').value.trim();document.querySelector('#storeResult').textContent=q?`Searching around “${q}” — real retailer locations are the next data layer.`:'Enter a city or ZIP code to find wax.'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.style.opacity='1';e.target.style.transform='translateY(0)'}}),{threshold:.1});
document.querySelectorAll('.shape-card,.lab-copy,.story-copy').forEach(el=>{el.style.opacity='.01';el.style.transform='translateY(24px)';el.style.transition='opacity .6s,transform .6s';observer.observe(el)});