const nav = document.getElementById('nav');
document.getElementById('menuBtn').addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));

const modal=document.getElementById('modal'), modalTitle=document.getElementById('modalTitle'), modalBody=document.getElementById('modalBody'), modalTags=document.getElementById('modalTags'), modalLink=document.getElementById('modalLink'), modalKicker=document.getElementById('modalKicker'), modalOutcomes=document.getElementById('modalOutcomes');
const projects={
  car:{title:'Used Car Price Prediction System',body:'An end-to-end machine-learning project that estimates used-car prices from features such as year, mileage, manufacturer, condition, and location. The focus was on careful data preparation, feature selection, model evaluation, and translating the work into a practical prediction flow.',outcomes:[['Approach','Prepared tabular vehicle data for modeling and comparison.'],['Core learning','Balanced model performance with explainable, decision-ready outputs.'],['Project visual','The featured chart is an illustrative project visual; replace it with a real dashboard or notebook screenshot when available.']],tags:['Python','Pandas','Scikit-learn','Flask','Data Cleaning'],link:'https://github.com/dipeshthashrestha1'},
  uefa:{title:'UEFA Champions League Data Analysis',body:'A football analytics project exploring club performance, goals, wins, stages, and player-level patterns. Built to communicate sports insights through clear dashboards and meaningful comparisons.',outcomes:[['Approach','Combined football data with dashboard storytelling to compare performance patterns.'],['Core learning','Used visual analysis to make tournament data easier to explore and discuss.'],['Next upgrade','Add your real Power BI screenshot and a direct dashboard or repository link.']],tags:['Power BI','DAX','SQL','Data Storytelling'],link:'https://dipeshthashrestha.github.io'},
  cyber:{title:'Cybersecurity Threat Detection Project',body:'A project applying data analysis and machine-learning methods to detect suspicious patterns and support safer digital systems. It combines feature analysis, model thinking, and security-focused reporting.',outcomes:[['Approach','Explored signals that can help surface potentially suspicious behavior.'],['Core learning','Connected analytical workflows with security-focused problem solving.'],['Next upgrade','Add a short methodology diagram or anonymized model output screenshot.']],tags:['Python','Machine Learning','Security','Analytics'],link:'https://github.com/dipeshthashrestha1'}
};
function openProject(key){const p=projects[key];modalKicker.textContent='CHRONICLE UNSEALED';modalTitle.textContent=p.title;modalBody.textContent=p.body;modalOutcomes.innerHTML=p.outcomes.map(([h,t])=>`<div><b>${h}</b>${t}</div>`).join('');modalTags.innerHTML=p.tags.map(t=>`<span>${t}</span>`).join('');modalLink.href=p.link;modalLink.innerHTML='Open Project <span>↗</span>';modal.showModal()}
document.querySelectorAll('.project,.project-open').forEach(btn=>btn.addEventListener('click',()=>openProject(btn.dataset.project)));
document.querySelector('.close').addEventListener('click',()=>modal.close());
modal.addEventListener('click',e=>{if(e.target===modal)modal.close()});

const skills={
  'Python':{title:'Python — Master of Automation',text:'Used for data cleaning, exploratory analysis, scripting, and machine-learning workflows across project work.'},
  'SQL':{title:'SQL — Keeper of Queries',text:'Used to structure, retrieve, join, and analyze data so questions can be answered accurately and efficiently.'},
  'Tableau':{title:'Tableau — Seer of Dashboards',text:'Used to turn analysis into intuitive visual stories, dashboards, and stakeholder-friendly reporting.'},
  'Data Analysis':{title:'Data Analysis — Reader of Patterns',text:'The core practice of moving from messy data to meaningful questions, trends, and recommendations.'},
  'Data Engineering':{title:'Data Engineering — Builder of Pipelines',text:'Focused on ETL concepts, reliable data flow, and preparing datasets that people can actually use.'},
  'Machine Learning':{title:'Machine Learning — Dragon of Prediction',text:'Applied to prediction and pattern-detection projects where a model can support a real decision.'}
};
const skillDetail=document.getElementById('skillDetail');
document.querySelectorAll('[data-skill]').forEach(btn=>btn.addEventListener('click',()=>{const s=skills[btn.dataset.skill];document.querySelectorAll('[data-skill]').forEach(x=>x.classList.remove('active'));btn.classList.add('active');skillDetail.innerHTML=`<b>${s.title}</b><span>${s.text}</span>`}));

const form=document.getElementById('contactForm');form.addEventListener('submit',e=>{e.preventDefault();const n=document.getElementById('name').value,em=document.getElementById('email').value,m=document.getElementById('message').value;const subject=encodeURIComponent(`A raven from ${n}`);const body=encodeURIComponent(`Name: ${n}\nEmail: ${em}\n\nMessage:\n${m}`);window.location.href=`mailto:dipeshthashrestha1@gmail.com?subject=${subject}&body=${body}`});

const themeToggle=document.getElementById('themeToggle');
function setTheme(light){document.body.classList.toggle('light',light);themeToggle.setAttribute('aria-pressed',String(light));themeToggle.innerHTML=light?'<span>☀</span><b>SCHOLAR’S SCROLL</b>':'<span>☾</span><b>DRAGON COURT</b>';themeToggle.setAttribute('aria-label',light?"Switch to Dragon Court dark theme":"Switch to Scholar's Scroll light theme");localStorage.setItem('dipesh-dragon-theme',light?'light':'dark')}
setTheme(localStorage.getItem('dipesh-dragon-theme')==='light');themeToggle.addEventListener('click',()=>setTheme(!document.body.classList.contains('light')));

const canvas=document.getElementById('embers'),ctx=canvas.getContext('2d');let W,H,embers=[];function resize(){W=canvas.width=innerWidth;H=canvas.height=innerHeight}addEventListener('resize',resize);resize();for(let i=0;i<90;i++)embers.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.8+.3,vx:(Math.random()-.5)*.25,vy:-Math.random()*.55-.12,a:Math.random()*.6+.1});function draw(){ctx.clearRect(0,0,W,H);for(const e of embers){ctx.beginPath();ctx.fillStyle=`rgba(244,${90+Math.floor(Math.random()*70)},36,${document.body.classList.contains('light')?e.a*.25:e.a})`;ctx.arc(e.x,e.y,e.r,0,Math.PI*2);ctx.fill();e.x+=e.vx;e.y+=e.vy;if(e.y<-10||e.x<-10||e.x>W+10){e.y=H+10;e.x=Math.random()*W}}requestAnimationFrame(draw)}draw();
