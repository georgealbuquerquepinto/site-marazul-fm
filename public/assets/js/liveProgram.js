const programs = [
  // DOM
  [
    {
      program: 'Em sintonia com a fé',
      announcer: 'Edson Pinto',
      begin: '07:00:00',
      end: '07:59:59'
    },
    {
      program: 'Santa Missa',
      announcer: null,
      begin: '08:00:00',
      end: '08:59:59'
    },
    {
      program: 'Conectar com Deus',
      announcer: 'Cleirton e Israel',
      begin: '10:00:00',
      end: '10:59:59'
    },
    {
      program: 'Voz Cristã',
      announcer: 'Vando Sales',
      begin: '14:00:00',
      end: '14:59:59'
    },
    {
      program: 'O Santo Terço',
      announcer: null,
      begin: '18:00:00',
      end: '18:29:59'
    },
  ],
  // SEG
  [
    {
      program: 'Experiência de Deus',
      announcer: 'Pe. Reginaldo Manzotti',
      begin: '10:00:00',
      end: '10:59:59'
    },
    {
      program: 'O Santo Terço',
      announcer: null,
      begin: '18:00:00',
      end: '18:29:59'
    },
    {
      program: 'A Voz do Brasil',
      announcer: null,
      begin: '19:00:00',
      end: '19:59:59'
    },
  ],
  // TER
  [
    {
      program: 'Boteco 98',
      announcer: 'Gilailson Silveira',
      begin: '08:00:00',
      end: '09:59:59'
    },
    {
      program: 'Experiência de Deus',
      announcer: 'Pe. Reginaldo Manzotti',
      begin: '10:00:00',
      end: '10:59:59'
    },
    {
      program: 'O Santo Terço',
      announcer: null,
      begin: '18:00:00',
      end: '18:29:59'
    },
    {
      program: 'A Voz do Brasil',
      announcer: null,
      begin: '19:00:00',
      end: '19:59:59'
    },
  ],
  // QUA
  [
    {
      program: 'Boteco 98',
      announcer: 'Gilailson Silveira',
      begin: '08:00:00',
      end: '09:59:59'
    },
    {
      program: 'Experiência de Deus',
      announcer: 'Pe. Reginaldo Manzotti',
      begin: '10:00:00',
      end: '10:59:59'
    },
    {
      program: 'O Santo Terço',
      announcer: null,
      begin: '18:00:00',
      end: '18:29:59'
    },
    {
      program: 'A Voz do Brasil',
      announcer: null,
      begin: '19:00:00',
      end: '19:59:59'
    },
  ],
  // QUI
  [
    {
      program: 'Boteco 98',
      announcer: 'Gilailson Silveira',
      begin: '08:00:00',
      end: '09:59:59'
    },
    {
      program: 'Experiência de Deus',
      announcer: 'Pe. Reginaldo Manzotti',
      begin: '10:00:00',
      end: '10:59:59'
    },
    {
      program: 'O Santo Terço',
      announcer: null,
      begin: '18:00:00',
      end: '18:29:59'
    },
    {
      program: 'A Voz do Brasil',
      announcer: null,
      begin: '19:00:00',
      end: '19:59:59'
    },
  ],
  // SEX
  [
    {
      program: 'Boteco 98',
      announcer: 'Gilailson Silveira',
      begin: '08:00:00',
      end: '09:59:59'
    },
    {
      program: 'Experiência de Deus',
      announcer: 'Pe. Reginaldo Manzotti',
      begin: '10:00:00',
      end: '10:59:59'
    },
    {
      program: 'O Santo Terço',
      announcer: null,
      begin: '18:00:00',
      end: '18:29:59'
    },
    {
      program: 'A Voz do Brasil',
      announcer: null,
      begin: '19:00:00',
      end: '19:59:59'
    },
  ],
  // SAB
  [
    {
      program: 'Especial Roberto Carlos',
      announcer: null,
      begin: '06:00:00',
      end: '07:59:59'
    },
    {
      program: 'Programa Edson Pinto',
      announcer: 'Edson Pinto',
      begin: '08:00:00',
      end: '09:59:59'
    },
    {
      program: 'A notícia do Ceará',
      announcer: null,
      begin: '10:00:00',
      end: '11:59:59'
    },
    {
      program: 'O melhor do Brega',
      announcer: null,
      begin: '13:00:00',
      end: '17:29:59'
    },
    {
      program: 'O Santo Terço',
      announcer: null,
      begin: '18:00:00',
      end: '18:29:59'
    },
  ]
]

const getLiveProgram = () => {
  return programs[0][0];
  const now = new Date();
  const todayPrograms = programs[now.getDay()];
  const timeNow = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  const liveProgram = todayPrograms.find(obj => { return obj.begin <= timeNow && obj.end >= timeNow })

  return liveProgram;
}