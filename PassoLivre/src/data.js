export const CATEGORIES = [
  { id: 'rampa', label: 'Rampa ausente', icon: 'accessibility' },
  { id: 'calcada', label: 'Calçada danificada', icon: 'warning-outline' },
  { id: 'obstaculo', label: 'Obstáculo na passagem', icon: 'alert-circle-outline' },
  { id: 'sinalizacao', label: 'Sinalização inadequada', icon: 'eye-outline' },
  { id: 'outro', label: 'Outro problema', icon: 'ellipsis-horizontal-circle-outline' },
];
export const SEED = [
  {id:'demo-1', category:'calcada', title:'Calçada irregular', address:'Centro, Indaiatuba - SP', details:'Trecho com piso quebrado e passagem estreita.', status:'registrado', createdAt:'2026-11-12T10:00:00.000Z', demo:true},
  {id:'demo-2', category:'rampa', title:'Travessia sem rampa', address:'Jardim Morada do Sol, Indaiatuba - SP', details:'Ausência de rebaixamento na travessia.', status:'registrado', createdAt:'2026-11-10T10:00:00.000Z', demo:true},
  {id:'demo-3', category:'obstaculo', title:'Passagem obstruída', address:'Cidade Nova, Indaiatuba - SP', details:'Obstáculo reduz espaço livre da calçada.', status:'registrado', createdAt:'2026-11-08T10:00:00.000Z', demo:true}
];
export const STORAGE_KEY = '@passolivre:reports:v1';
export const SETTINGS_KEY = '@passolivre:settings:v1';
export const categoryLabel = id => CATEGORIES.find(c => c.id === id)?.label || 'Outro problema';
