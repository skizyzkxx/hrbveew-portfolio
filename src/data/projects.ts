import type { Category, Project } from '../types';
export const categories: Category[] = ['Todos', 'Discord', 'Web'];
// Projetos publicados no GitHub informado pelo usuário e o próprio portfólio.
// As capas são ilustrações, não capturas das aplicações.
export const projects: Project[] = [
  { id:'ticket', name:'Discord Ticket Bot', description:'Bot de suporte com tickets privados, controle de acesso e comandos para criar e encerrar atendimentos.', category:'Discord', technologies:['Python','discord.py'], thumbnail:'/images/discord.svg', placeholder:false, github:'https://github.com/skizyzkxx/Bot-ticket' },
  { id:'lumi', name:'Lumi AI', description:'Projeto de assistente com modos de conversa e criação de código. Em desenvolvimento, com integração de API ainda em ajuste.', category:'Web', technologies:['JavaScript','Node.js','HTML'], thumbnail:'/images/lumi.svg', placeholder:false, github:'https://github.com/skizyzkxx/Lumi-AI' },
  { id:'portfolio', name:'Portfólio hrbveew', description:'Este site: apresentação pessoal, tecnologias, projetos e contato. Interface responsiva em preto e branco.', category:'Web', technologies:['React','TypeScript','Vite'], thumbnail:'/images/portfolio.svg', placeholder:false, demo:'https://hrbveew-portfolio.beneditosguimaraes.chatgpt.site' },
];
