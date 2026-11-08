import { Bot, Ticket, MessagesSquare, Workflow, PanelsTopLeft, Blocks, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
const services = [
 {icon:Bot,title:'Bots para Discord',text:'Comandos, gerenciamento e integrações pensados para a rotina da sua comunidade.',tags:'COMUNIDADES · INTEGRAÇÕES'},
 {icon:Ticket,title:'Sistemas de tickets',text:'Organização de solicitações em canais dedicados, com fluxos de abertura e encerramento.',tags:'ORGANIZAÇÃO · SUPORTE'},
 {icon:MessagesSquare,title:'Sistemas de atendimento',text:'Fluxos personalizados para aproximar pessoas e facilitar a comunicação.',tags:'ATENDIMENTO · FLUXOS'},
 {icon:Workflow,title:'Automações',text:'Scripts e ferramentas para reduzir tarefas repetitivas e conectar serviços.',tags:'PYTHON · APIS'},
 {icon:PanelsTopLeft,title:'Desenvolvimento web',text:'Landing pages e sites responsivos para apresentar sua ideia, negócio ou comunidade.',tags:'SITES · INTERFACES'},
 {icon:Blocks,title:'Sistemas personalizados',text:'Uma solução pensada a partir da sua necessidade, com escopo definido em conjunto.',tags:'FERRAMENTAS · SOLUÇÕES'},
];
export function Services(){return <section id="servicos" className="section container"><div className="section-intro"><SectionHeading number="04" label="O QUE POSSO CRIAR" title="O que posso desenvolver." description="O escopo de cada projeto é combinado antes de começar. Estas são as áreas em que tenho interesse em trabalhar."/><a className="text-link" href="#contato">Conversar sobre um projeto <ArrowUpRight size={17}/></a></div><div className="services-grid">{services.map((s,i)=><article className="service-card" key={s.title}><div className="service-top"><s.icon size={25}/><span>0{i+1}</span></div><h3>{s.title}</h3><p>{s.text}</p><span className="micro-label">{s.tags}</span></article>)}</div></section>;}
