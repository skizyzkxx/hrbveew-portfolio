import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About, Skills } from './sections/AboutSkills';
import { Services } from './sections/Services';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import { useReveal } from './hooks/useReveal';
export default function App(){useReveal();return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Navbar/><main id="conteudo"><Hero/><Projects/><About/><Skills/><Services/><Contact/></main><footer className="footer container"><a className="brand" href="#inicio">hrbveew</a><span>© {new Date().getFullYear()} hrbveew. Bots, web e automação.</span><a className="back-top" href="#inicio">Voltar ao topo <ArrowUp size={16}/></a></footer></>;}
