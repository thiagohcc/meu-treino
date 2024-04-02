'use strict';

const exercise = [
  { name: 'Flexão de Braço', number: 1, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Agachamento', number: 2, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Prancha Abdominal', number: 3, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Levantamento Terra', number: 4, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Abdominais', number: 5, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Corrida Estacionária', number: 6, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Agachamento com Salto', number: 7, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Flexão de Braço Inclinada', number: 8, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Rosca Bíceps', number: 9, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Prancha Lateral', number: 10, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Flexão de Braço Diamond', number: 11, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Agachamento com Barra', number: 12, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Prancha com Elevação de Perna', number: 13, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Flexão de Braço com Pernas Elevadas', number: 14, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Agachamento Sumô', number: 15, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Prancha com Rotação', number: 16, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Supino Reto', number: 17, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Afundo', number: 18, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Prancha com Apoio nas Mãos', number: 19, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Tríceps Banco', number: 20, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Flexão de Braço com Rotação', number: 21, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Ponte Glúteos', number: 22, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Cadeira Extensora', number: 23, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Flexão de Braço com Peso', number: 24, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Remada Curvada', number: 25, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Elevação Frontal', number: 26, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Agachamento Livre', number: 27, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Prancha com Bola Suíça', number: 28, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Rosca Alternada', number: 29, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Flexão de Braço Declinada', number: 30, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Agachamento Frontal', number: 31, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Prancha com Elevação de Braços', number: 32, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Flexão de Braço na Barra', number: 33, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Leg Press', number: 34, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Abdominal com Bola', number: 35, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Rosca Scott', number: 36, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Flexão de Braço com Pegada Larga', number: 37, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Agachamento com Halteres', number: 38, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Prancha com Elevação Alternada de Braço e Perna', number: 39, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Desenvolvimento com Halteres', number: 40, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Elevação Lateral', number: 41, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Flexão de Braço com Toque no Ombro', number: 42, photo_url: 'url_da_foto', video_url: 'url_do_video' },
  { name: 'Agachamento Búlgaro', number: 43, photo_url: 'url_da_foto', video_url: 'url_do_video' },

];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('exercise', exercise);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('exercise', null, {});
  }
};
