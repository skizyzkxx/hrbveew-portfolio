import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';
const links = [['inicio','Início'],['projetos','Projetos'],['sobre','Sobre'],['habilidades','Habilidades'],['servicos','Serviços'],['contato','Contato']];
const ids = links.map(([id])=>id);
export function Navbar() {
 const [open,setOpen] = useState(false); const active = useActiveSection(ids);
 useEffect(()=>{ const close=(e:KeyboardEvent)=>{if(e.key==='Escape') setOpen(false);}; window.addEventListener('keydown',close); return ()=>window.removeEventListener('keydown',close); },[]);
 return <header className="header"><div className="container nav-inner"><a className="brand" href="#inicio" onClick={()=>setOpen(false)} aria-label="hrbveew — início"><span className="brand-mark">h<span>.</span></span>hrbveew<span className="brand-dot">.</span></a><button className="menu-toggle" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="main-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav id="main-nav" aria-label="Navegação principal" className={open?'nav-links open':'nav-links'}>{links.map(([id,label])=><a key={id} href={'#'+id} aria-current={active===id?'location':undefined} onClick={()=>setOpen(false)}>{label}</a>)}</nav><a className="nav-cta" href="#contato">Vamos conversar <ArrowUpRight size={15}/></a></div></header>;
}
