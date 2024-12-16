<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Nombre del componente formativo',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> este cuestionario te ayudará a poner a prueba tu conocimiento sobre la elaboración de conservas de frutas y verduras,  desafiándote a identificar las técnicas de conservación más adecuadas, comprender los principios de la pasteurización y esterilización,  y reconocer las características de calidad en las materias primas.  Prepárate para responder a preguntas de selección múltiple donde deberás elegir la respuesta correcta de entre varias opciones. ¡Mucha suerte!',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál de las siguientes técnicas NO es un método tradicional de conservación de alimentos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Irradiación.', esCorrecta: true },
            { id: 'b', texto: 'Desecación.', esCorrecta: false },
            { id: 'c', texto: 'Deshidratación.', esCorrecta: false },
            { id: 'd', texto: 'Salazón.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué microorganismo es especialmente peligroso en las conservas de baja acidez y puede causar botulismo?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Salmonella.', esCorrecta: false },
            {
              id: 'b',
              texto: '<em>Clostridium botulinum.</em>',
              esCorrecta: true,
            },
            { id: 'c', texto: '<em>Escherichia coli.</em>', esCorrecta: false },
            {
              id: 'd',
              texto: '<em>Listeria monocytogenes.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el objetivo principal del escaldado de vegetales antes de su conservación?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inactivar enzimas y reducir la carga microbiana.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Mejorar su sabor.', esCorrecta: false },
            { id: 'c', texto: 'Ablandar su textura.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Aumentar su valor nutricional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué mide el grado <em>Brix</em> (°Bx)?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La acidez de una solución.', esCorrecta: false },
            { id: 'b', texto: 'La acidez de una solución.', esCorrecta: true },
            {
              id: 'c',
              texto: 'La cantidad de agua en un alimento.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'La temperatura de cocción.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál de los siguientes métodos de conservación NO utiliza calor?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pasteurización.', esCorrecta: false },
            { id: 'b', texto: 'Esterilización.', esCorrecta: false },
            { id: 'c', texto: 'Salazón.', esCorrecta: true },
            { id: 'd', texto: 'Cocción.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la principal diferencia entre la pasteurización y la esterilización?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La esterilización elimina todas las formas de vida microbiana, incluyendo las esporas, mientras que la pasteurización no.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La pasteurización se utiliza solo para frutas, mientras que la esterilización se utiliza para vegetales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La pasteurización utiliza temperaturas más bajas que la esterilización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La pasteurización requiere envasado al vacío, mientras que la esterilización no.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué se busca lograr al aplicar vacío en las conservas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar el oxígeno del interior del frasco.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar la presión dentro del frasco.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ablandar la textura del alimento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejorar el sabor del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál de las siguientes NO es una buena práctica de higiene en la elaboración de conservas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Enfriar las conservas rápidamente después del tratamiento térmico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reutilizar las tapas de los frascos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utilizar utensilios limpios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Lavar cuidadosamente los frascos y tapas antes de usarlos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué característica NO es deseable en una piña para la elaboración de conservas?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Una sola corona.', esCorrecta: false },
            {
              id: 'b',
              texto: '"Ojos" prominentes y bien formados.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Zonas blandas en la piel.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Color verde intenso con algunas tonalidades amarillas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Por qué es importante controlar la acidez (pH) en la elaboración de conservas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para determinar el método de conservación adecuado (pasteurización o esterilización).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Para mejorar la textura del producto final.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Para evitar la oxidación del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Para asegurar un sabor agradable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
