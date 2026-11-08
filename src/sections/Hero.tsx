import { useState } from 'react';
import { ArrowDown, ArrowUpRight, Github } from 'lucide-react';
import { profile } from '../data/profile';

const featured = [
 { name:'Discord Ticket Bot', type:'BOTS / PYTHON', image:'/images/discord.svg', url:'https://github.com/skizyzkxx/Bot-ticket' },
 { name:'Lumi AI', type:'WEB / EM DESENVOLVIMENTO', image:'/images/lumi.svg', url:'https://github.com/skizyzkxx/Lumi-AI' },
 { name:'Bots de comunidade', type:'MODERAÇÃO / SUGESTÕES / LEMBRETES', image:'/images/community.svg', url:'https://github.com/skizyzkxx/bots' },
];

export function Hero() {
 const [selected, setSelected] = useState(0);
 const project = featured[selected];
 return <section id="inicio" className="hero container">
  <div className="hero-content"><div className="hero-topline"><span className="identity-dot"/> hrbveew / desenvolvedor</div>
   <h1>Bots, sites<br/>e <span className="outline-word">automações.</span></h1>
   <p>Do Discord à web. Desenvolvo ferramentas para comunidades, organizo processos e construo interfaces.</p>
   <div className="hero-actions"><a className="button primary" href="#projetos">Explorar projetos <ArrowUpRight size={18}/></a><a className="hero-contact" href="#contato">Falar comigo <ArrowUpRight size={16}/></a></div>
   <a className="hero-github" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={15}/> github.com/skizyzkxx <ArrowUpRight size={13}/><span className="sr-only"> (abre em nova aba)</span></a>
  </div>
  <div className="hero-showcase"><div className="showcase-top"><span>PROJETO EM DESTAQUE</span><span>0{selected+1} / 03</span></div>
   <a className="showcase-link" href={project.url} target="_blank" rel="noopener noreferrer"><div className="showcase-image" key={project.image}><img src={project.image} width="640" height="400" alt={'Capa ilustrativa: '+project.name}/></div><div className="showcase-caption"><div><small>{project.type}</small><h2>{project.name}</h2></div><span className="round-arrow"><ArrowUpRight size={23}/></span></div><span className="sr-only">Ver código no GitHub (abre em nova aba)</span></a>
   <div className="showcase-controls" role="group" aria-label="Escolher projeto em destaque">{featured.map((p,i)=><button key={p.name} aria-label={p.name} aria-pressed={selected===i} onClick={()=>setSelected(i)}><span/></button>)}</div>
  </div>
  <div className="hero-bottom"><a href="#projetos"><ArrowDown size={15}/> Um pouco do que construo</a><div><span>Python</span><span>JavaScript</span><span>TypeScript</span></div></div>
 </section>;
}
