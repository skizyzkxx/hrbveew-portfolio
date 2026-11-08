import { ArrowDown, ArrowUpRight } from 'lucide-react';
export function Hero() {
 return <section id="inicio" className="hero container">
  <div className="hero-topline"><span>DESENVOLVEDOR / BRASIL</span><span>PYTHON, JAVASCRIPT & TYPESCRIPT</span></div>
  <h1 className="hero-name">hrbveew<span>.</span></h1>
  <div className="hero-intro"><div className="hero-index" aria-hidden="true">PORTFÓLIO<br/>PESSOAL ↘</div><div className="hero-copy"><h2>Bots, sites e ferramentas<br/>para resolver o que precisa.</h2><p>Desenvolvo para comunidades e para a web. Meu foco está em bots para Discord, automações e sistemas personalizados.</p><div className="hero-actions"><a className="button primary" href="#projetos">Ver projetos <ArrowUpRight size={18}/></a><a className="hero-contact" href="#contato">Falar comigo <ArrowUpRight size={17}/></a></div></div><a className="hero-scroll" href="#sobre" aria-label="Conhecer mais sobre hrbveew"><ArrowDown size={25}/></a></div>
 </section>;
}
