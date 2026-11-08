import { ArrowDown, ArrowUpRight, Github, Pause, Play } from 'lucide-react';
import { profile } from '../data/profile';
import { useCarousel } from '../hooks/useCarousel';

const featured = [
 { name:'Discord Ticket Bot', type:'BOTS / PYTHON', image:'/images/discord.svg', url:'https://github.com/skizyzkxx/Bot-ticket' },
 { name:'Lumi AI', type:'WEB / ATUALMENTE DESLIGADA', image:'/images/lumi-cover.jpg', url:'https://github.com/skizyzkxx/Lumi-AI' },
 { name:'Bots de comunidade', type:'MODERAÇÃO / SUGESTÕES / LEMBRETES', image:'/images/community.svg', url:'https://github.com/skizyzkxx/bots' },
];

export function Hero() {
 const { selected, playing, paused, select, setHovered, setFocused, toggle } = useCarousel(featured.length);
 const project = featured[selected];
 return <section id="inicio" className="hero container">
  <div className="hero-content"><div className="hero-topline"><img className="profile-avatar" src={profile.avatar} alt="" width="44" height="44"/><div><strong>hrbveew</strong><span>desenvolvedor / Brasil</span></div></div>
   <h1>Bots, sites<br/>e <span className="outline-word">automações.</span></h1>
   <p>Do Discord à web. Desenvolvo ferramentas para comunidades, organizo processos e construo interfaces.</p>
   <div className="hero-actions"><a className="button primary" href="#projetos">Explorar projetos <ArrowUpRight size={18}/></a><a className="hero-contact" href="#contato">Falar comigo <ArrowUpRight size={16}/></a></div>
   <a className="hero-github" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={15}/> github.com/skizyzkxx <ArrowUpRight size={13}/><span className="sr-only"> (abre em nova aba)</span></a>
  </div>
  <div className="hero-showcase" role="region" aria-roledescription="carrossel" aria-label="Projetos em destaque" onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)} onFocusCapture={()=>setFocused(true)} onBlurCapture={event=>{if(!event.currentTarget.contains(event.relatedTarget)) setFocused(false);}}><div className="showcase-top"><span>PROJETO EM DESTAQUE</span><span>0{selected+1} / 03</span></div>
   <a className="showcase-link" href={project.url} target="_blank" rel="noopener noreferrer"><div className="showcase-image" key={project.image}><img src={project.image} width="640" height="400" alt={'Capa ilustrativa: '+project.name}/></div><div className="showcase-caption"><div><small>{project.type}</small><h2>{project.name}</h2></div><span className="round-arrow"><ArrowUpRight size={23}/></span></div><span className="sr-only">Ver código no GitHub (abre em nova aba)</span></a>
   <div className="showcase-bottom"><div className="showcase-controls" data-playing={playing} role="group" aria-label="Escolher projeto em destaque">{featured.map((p,i)=><button key={p.name} aria-label={p.name} aria-pressed={selected===i} onClick={()=>select(i)}><span/></button>)}</div><button className="autoplay-toggle" onClick={toggle} aria-label={paused?'Retomar troca automática':'Pausar troca automática'}>{paused?<Play size={13}/>:<Pause size={13}/>}<span>{paused?'Retomar':'Pausar'}</span></button></div>
  </div>
  <div className="hero-bottom"><a href="#projetos"><ArrowDown size={15}/> Um pouco do que construo</a><div><span>Python</span><span>JavaScript</span><span>TypeScript</span></div></div>
 </section>;
}
