<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
  
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/intro/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este componente formativo introduce al aprendiz en el mundo de la conservación de frutas y verduras, un arte que combina técnicas ancestrales con la ciencia moderna para preservar la frescura, sabor y valor nutricional de estos alimentos. A través de este recorrido formativo, se busca desarrollar la capacidad del aprendiz para supervisar y controlar cada etapa del proceso de producción de conservas, garantizando la obtención de un producto final que cumpla con los más altos estándares de calidad.
    
    .row.justify-content-center.my-3
      .col-lg-3.col-md-8.align-content-center(data-aos="fade-right")
        img.my-3(src='@/assets/curso/temas/intro/img2.png', alt='Imagen decorativa')
      .col-lg-9.align-content-center(data-aos="fade-left")
        p.my-3 El viaje comienza adentrándose en los principios fundamentales de la conservación. Se explorará cómo factores ambientales, como la temperatura y la humedad, junto con la acción de microorganismos, pueden afectar la integridad de frutas y verduras. De esta manera, el aprendiz estará preparado para reconocer los signos de deterioro y comprender cómo las diferentes técnicas de conservación actúan para contrarrestarlos, asegurando así la inocuidad del producto final.
        p.my-3 Se analizarán en profundidad los diferentes métodos de conservación, desde los más tradicionales como la salazón o el uso de azúcar como conservante natural, hasta técnicas más modernas como la pasteurización y esterilización. El aprendiz aprenderá a diferenciar cada método y a seleccionar el más adecuado para cada tipo de alimento, considerando sus características particulares y el resultado final que se busca obtener en términos de sabor, textura y tiempo de conservación.
    
    .cajon.color-acento-contenido.p-4.my-3(data-aos="fade-up")(style="background: #FFEBC9")
      p.mb-0 Para finalizar, se brindará al aprendiz una guía práctica para elaborar diferentes tipos de conservas, incluyendo mermeladas, frutas en almíbar, encurtidos y vegetales en salmuera. Cada etapa del proceso, desde la selección de la materia prima hasta el envasado y almacenamiento, será cuidadosamente explicada, haciendo hincapié en la importancia de la higiene y manipulación adecuada de los alimentos para garantizar su seguridad y calidad. De esta forma, el aprendiz estará capacitado para elaborar conservas deliciosas y seguras para el consumo.
    
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/bFreInIXn08?si=zJXLs7n6MnW9HFZ2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Nota: Sena (2024).
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
