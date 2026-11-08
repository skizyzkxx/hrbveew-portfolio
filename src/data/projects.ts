import type { Category, Project } from '../types';
export const categories: Category[] = ['Todos', 'Discord', 'Web'];
// Projetos publicados no GitHub informado pelo usuário e o próprio portfólio.
// As capas são ilustrações, não capturas das aplicações.
export const projects: Project[] = [
  { id:'ticket', name:'Discord Ticket Bot', description:'Bot de suporte com tickets privados, controle de acesso e comandos para criar e encerrar atendimentos.', category:'Discord', technologies:['Python','discord.py'], thumbnail:'/images/discord.svg', placeholder:false, github:'https://github.com/skizyzkxx/Bot-ticket' },
  { id:'lumi', name:'Lumi AI', description:'Projeto de assistente com modos de conversa e criação de código. Em desenvolvimento, com integração de API ainda em ajuste.', category:'Web', technologies:['JavaScript','Node.js','HTML'], thumbnail:'/images/lumi.svg', placeholder:false, github:'https://github.com/skizyzkxx/Lumi-AI' },
  { id:'moderation', name:'Discord Mod Bot', description:'Advertências persistentes e timeout, com verificação de permissões e hierarquia dos cargos.', category:'Discord', technologies:['Python','SQLite','discord.py'], thumbnail:'/images/moderation.svg', placeholder:false, github:'https://github.com/skizyzkxx/bot-de-modera-o' },
  { id:'suggestions', name:'Suggestions Bot', description:'Sugestões para a comunidade, um voto por pessoa e aprovação ou recusa pela equipe.', category:'Discord', technologies:['Python','SQLite'], thumbnail:'/images/suggestions.svg', placeholder:false, github:'https://github.com/skizyzkxx/bots/tree/main/discord-suggestions-bot' },
  { id:'reminders', name:'Reminder Bot', description:'Lembretes agendados em canais, cancelamento por autor e recuperação após reinício do bot.', category:'Discord', technologies:['Python','SQLite'], thumbnail:'/images/reminders.svg', placeholder:false, github:'https://github.com/skizyzkxx/bots/tree/main/discord-reminder-bot' },
  { id:'portfolio', name:'Portfólio hrbveew', description:'Este site: apresentação pessoal, tecnologias, projetos e contato. Interface responsiva em preto e branco.', category:'Web', technologies:['React','TypeScript','Vite'], thumbnail:'/images/portfolio.svg', placeholder:false, github:'https://github.com/skizyzkxx/hrbveew-portfolio', demo:'https://hrbveew.xyz' },
];
