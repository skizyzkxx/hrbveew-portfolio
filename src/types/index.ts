export type Category = 'Todos' | 'Discord' | 'Web' | 'Automação';
export interface Project { id: string; name: string; description: string; category: Exclude<Category,'Todos'>; technologies: string[]; thumbnail: string; placeholder: boolean; status?: string; github?: string; demo?: string; }
