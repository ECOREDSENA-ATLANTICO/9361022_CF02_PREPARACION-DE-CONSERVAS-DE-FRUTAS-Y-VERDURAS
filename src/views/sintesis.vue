<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El componente: Métodos de conservación y preparación de conservas de frutas y verduras aborda temas clave relacionados con los ingredientes y los aspectos higiénicos en la manipulación de conservas. Se enfoca en identificar los ingredientes necesarios, como sal, azúcar, pectinas y aditivos, así como las técnicas y condiciones de higiene que deben seguirse para asegurar la calidad y seguridad de los productos. Se destacan medidas de limpieza y desinfección, tanto de los equipos como del personal manipulador, con el fin de evitar la contaminación durante el proceso productivo. Esto asegura que los productos conservados sean seguros para el consumo y prolonga su vida útil.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
