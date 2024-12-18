<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Preparación de conservas de frutas y verduras

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para la práctica de la elaboración de conservas de frutas y verduras, se detallarán a continuación los procesos para la preparación de mermeladas, frutas en almíbar, encurtidos y conservas de vegetales. A través de este desarrollo, el aprendiz encontrará las herramientas para aplicar buenas prácticas de higiene y seguridad alimentaria durante todo el proceso de elaboración de las conservas, esenciales para la obtención de productos de alta calidad, aptos para su almacenamiento y consumo seguro.

    Separador
    #t_3_1.titulo-segundo.color-acento-contenido.my-3
      h3(data-aos='flip-left') 3.1 Elaboración de conservas de fruta

    p.my-3 Las conservas son productos elaborados a base de frutas frescas, estas son muy estables porque su alto contenido de ácido evita que crezcan los microorganismos, además, su proceso de fabricación permite el tratamiento térmico que es otro punto clave en la conservación e inocuidad de las conservas. A continuación, se van a explicar algunos procesos de elaboración de dichos productos.

    h5.blue_icon.my-3(data-aos="fade-left") Frutas en almíbar

    p.mt-3 Este producto es elaborado con frutas de muy buena calidad, las cuales son picadas en trozos uniformes y agregadas a un líquido de gobierno o jarabe como cobertura, luego se realiza la pasteurización para inhibir microorganismos. Recuerde que estas se deben almacenar en un lugar fresco.
    p.mb-4 La preparación de frutas en almíbar requiere de las siguientes operaciones:

    p.text-center.text-light(style="background: #33490B; padding: 1em; border-radius: 10px; width: fit-content") <b>1. Selección de la materia prima</b>

    .row.justify-content-center.my-3
      .col-lg-4.col-md-8.align-content-center
        img.my-3(src='@/assets/curso/temas/tema3/img2.png', alt='Imagen decorativa')
      .col-lg-8.align-content-center
        ol.ms-2(style="list-style: lower-alpha; color: #703A22")
          li
            span.text-dark La fruta a procesar debe tener sus colores característicos, deben ser vivos interna y externamente.
          li.hr-punteado.my-3
            span.text-dark Las frutas deben presentar buenas condiciones físicas, es decir, que no presenten golpes, magulladuras o raspones y no tengan rastros de ataques de insectos ni de hongos como el moho.
          li.hr-punteado.my-3
            span.text-dark Si el fruto viene sujeto al tallo, debe estar perfectamente pegado a este.
          li.hr-punteado.my-3 
            span.text-dark La fruta debe tener la madurez adecuada, no debe estar ni muy madura ni muy verde porque esto influye en la calidad del producto, además, las frutas muy maduras no resisten los procesos térmicos como el escaldo y la pasteurización.
          li.hr-punteado.my-3 
            span.text-dark Tenga en cuenta las siguientes características a la hora de escoger frutas frescas.

    .row.justify-content-center.my-3.fnd-5
      .col-lg-10
        .tarjeta.p-4.fnd-6
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
                h5 Piña
                p Se recomienda buscar piñas con una sola corona, de color verde intenso con algunas tonalidades amarillas en la base.  Los "ojos" de la piña deben ser prominentes y estar bien formados. La piel debe estar firme, libre de golpes, magulladuras o zonas blandas.

              .col-lg-4.col-md-8.align-content-center
                figure
                  img(src='@/assets/curso/temas/tema3/img6.png', alt='Imagen decorativa')
            
            .row.justify-content-center
              .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
                h5 Mandarina
                p Se deben elegir mandarinas firmes al tacto, con la piel de color anaranjado vibrante, amarillo o verde, dependiendo de la variedad.  La cáscara debe estar libre de decoloraciones, manchas o signos de deterioro.

              .col-lg-4.col-md-8.align-content-center
                figure
                  img(src='@/assets/curso/temas/tema3/img7.png', alt='Imagen decorativa')
            
            .row.justify-content-center
              .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
                h5 Mango
                p Se deben optar por mangos firmes en la parte superior,  cerca del tallo.  La piel debe estar lisa, sin arrugas ni signos de deshidratación.  Se recomienda evitar los mangos con golpes, cortes o señales de insectos. El color del mango varía según la variedad, pudiendo ser amarillo, verde o rojo, o una combinación de estos colores.

              .col-lg-4.col-md-8.align-content-center
                figure
                  img(src='@/assets/curso/temas/tema3/img8.png', alt='Imagen decorativa')
            
            .row.justify-content-center
              .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
                h5 Tomate de árbol
                p Se aconseja seleccionar tomates de árbol firmes, con forma ovoide y piel lisa de color anaranjado intenso. Se deben descartar aquellos que presenten golpes, fisuras o zonas blandas.

              .col-lg-4.col-md-8.align-content-center
                figure
                  img(src='@/assets/curso/temas/tema3/img9.png', alt='Imagen decorativa')
            
            .row.justify-content-center
              .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
                h5 Fresa
                p Se deben buscar fresas firmes, de color rojo brillante y uniforme.  Las hojas verdes en la parte superior deben verse frescas,  no marchitas.  Se deben evitar las fresas con zonas blandas,  magulladas o con moho.

              .col-lg-4.col-md-8.align-content-center
                figure
                  img(src='@/assets/curso/temas/tema3/img10.png', alt='Imagen decorativa')
            
            .row.justify-content-center
              .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
                h5 Mora
                p Se aconseja elegir moras firmes,  de color negro intenso y brillante.  El aroma debe ser fresco y frutal, sin indicios de fermentación o acidez.  Se deben descartar las moras con magulladuras,  zonas blandas o con moho.

              .col-lg-4.col-md-8.align-content-center
                figure
                  img(src='@/assets/curso/temas/tema3/img11.png', alt='Imagen decorativa')
            
            .row.justify-content-center
              .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
                h5 Naranja
                p Se recomienda buscar naranjas firmes al tacto,  con la piel lisa y brillante,  libre de manchas o daños causados por hongos. El color de la piel debe ser uniforme y característico de la variedad,  generalmente un naranja intenso.

              .col-lg-4.col-md-8.align-content-center
                figure
                  img(src='@/assets/curso/temas/tema3/img12.png', alt='Imagen decorativa')
            
            .row.justify-content-center
              .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
                h5 Guayaba
                p Se aconseja seleccionar guayabas firmes,  con la piel lisa y sin arrugas.  El color debe ser  intenso y característico de la variedad,  evitando aquellas que presenten manchas,  golpes o zonas blandas. 

              .col-lg-4.col-md-8.align-content-center
                figure
                  img(src='@/assets/curso/temas/tema3/img13.png', alt='Imagen decorativa')
                  
    p.text-center.text-light(style="background: #33490B; padding: 1em; border-radius: 10px; width: fit-content") <b>2. Acondicionamiento</b>

    p.my-3 Después de clasificar las frutas que tienen las condiciones óptimas, se procede a adecuarlas, esto implica lavar la fruta para extraerle suciedad y pelarlas si el producto así lo requiere para el acondicionamiento. Tenga en cuenta que las principales formas de presentación de la fruta son:

    .row.justify-content-center(data-aos="fade-up")
      .col-lg-5.col-md-8.mt-3.align-content-center
        figure
          img(src='@/assets/curso/temas/tema3/img14.png', alt='Imagen decorativa')
      .col-lg-7
        LineaTiempoD.color-secundario.mt-3
          .row(numero="1" titulo="Enteras")
            .col-md-12.mb-4.mb-md-0
              p Algunas frutas pueden ser envasadas enteras con cascara o sin esta, con el corazón o sin este.
          .row(numero="2" titulo="Mitades")
            .col-md-12.mb-4.mb-md-0
              p Algunas frutas se envasan por mitades con cáscaras o sin estas; con los tallos y corazones retirados.
          .row(numero="3" titulo="Cuartos")
            .col-md-12.mb-4.mb-md-0
              p Están cortadas en cuatro mitades iguales.
          .row(numero="4" titulo="Lonjas")
            .col-md-12.mb-4.mb-md-0
              p Las frutas son cortadas en forma longitudinal y poco gruesa.
          .row(numero="5" titulo="Rodajas o anillos")
            .col-md-12.mb-4.mb-md-0
              p Las frutas son cortadas en forma redonda con un espesor aproximadamente de 10 mm.
          .row(numero="6" titulo="Cubos")
            .col-md-12.mb-4.mb-md-0
              p Las frutas después de ser peladas son cortadas en cubos con un espesor aproximadamente de 10 mm.
              
    p.mt-4.text-center.text-light(style="background: #33490B; padding: 1em; border-radius: 10px; width: fit-content") <b>3. El escaldado de la fruta</b>
    p.my-3 La fruta se debe llevar al agua caliente por un tiempo determinado, para esto tenga en cuenta los tiempos de escaldado vistos en la actividad de aprendizaje 3, este método se hace para inactivar enzimas, ablandar la fruta y reducir los microorganismos, recuerde que el tiempo de escaldado se debe realizar dependiendo de la madurez y la firmeza de la fruta.
   
    p.text-center.text-light(style="background: #33490B; padding: 1em; border-radius: 10px; width: fit-content") <b>4. Elaboración de almíbar</b>
    p.my-3 Seleccione el tipo de almíbar que quiere preparar (espeso, medio o ligero). Al elaborar el almíbar disuelva el azúcar en el agua y llévela al fuego mezclando constantemente hasta que espese. Recuerde que este también se puede preparar con el jugo de las frutas en lugar del agua y se le debe adicionar azúcar, pero tenga en cuenta el azúcar de la fruta para que no se pase de dulzor.

    p.text-center.text-light(style="background: #33490B; padding: 1em; border-radius: 10px; width: fit-content") <b>5. Llenado de los frascos</b>

    .row.justify-content-center.my-3
      .col-lg-8.align-content-center
        p.my-3 Esta operación se realiza después del escaldado y cuando el almíbar está listo para el llenado se debe tener en cuenta lo siguiente:
        ol.ms-2.text-stron(style="list-style: lower-alpha; color: #703A22; font-weight: 600")
          li 
            span.text-dark(style="font-weight: normal") Introduzca las frutas en los frascos sólo hasta un 1cm por debajo del cuello del recipiente.
          li.hr-punteado.my-3
            span.text-dark(style="font-weight: normal") Agregue el almíbar hasta el cuello del frasco, recuerde que este debe estar hirviendo y cubrir bien todas las frutas sin dejar burbujas de aire.
          li.hr-punteado.my-3
            span.text-dark(style="font-weight: normal") Tape el frasco sin apretar la tapa y continúe con el proceso térmico (vacío y pasteurización) esto se debe realizar siguiendo las recomendaciones vistas en la actividad de aprendizaje 3, donde se explica todo lo relacionado con el vacío de los frascos y la forma de realizar la pasteurización de los recipientes para conservas. Recuerde que las frutas en almíbar pueden ser atacadas por hongos que aparecen en la superficie de la conserva.
      .col-lg-4.col-md-4.align-content-center
        img(src='@/assets/curso/temas/tema3/img15.png', alt='Imagen decorativa')

    .row.justify-content-center.my-3.fnd-7
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 2.
            span <em>Proceso de elaboración de fresas en almíbar</em>
        img.my-3(src="@/assets/curso/temas/tema3/img17.svg", alt="alt")
        figcaption Fuente: SENA (2024).

    p.text-center.text-light(style="background: #33490B; padding: 1em; border-radius: 10px; width: fit-content") <b>Elaboración de mermelada</b>
    p.my-3 La mermada es un producto obtenido de llevar la concentración de un jugo de fruta o frutas troceadas, al cual se le adiciona azúcar y otros aditivos como la pectina, hasta lograr un producto con consistencia gelatinosa.

    p.text-center.text-light(style="background: #33490B; padding: 1em; border-radius: 10px; width: fit-content") <b>Operaciones aconsejadas para elaborar mermeladas</b>

    .row.justify-content-center.my-3
      .col-xl-8.col-lg-8.justify-content-center.align-content-center
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
          .row.justify-content-center(titulo="1. Lavado")
            .col-xl-12.col-lg-12.col-md-12.align-content-center
              p Las frutas se lavan con suficiente agua para retirar suciedad.
  
          .row.justify-content-center(titulo="2. Pelado")
            .col-xl-12.col-lg-12.col-md-12.align-content-center
              p Se puede realizar con soda cáustica o con cuchillo y consiste en retirar la piel de la fruta que a veces es dura y áspera, por ejemplo, en frutas como: la pera, el durazno, el mango o la piña. Para las frutas de cáscaras suaves no se requiere pelarlas como es el caso de las moras, las fresas, la cereza, la ciruela y las uvas.

          .row.justify-content-center(titulo="3. Acondicionamiento")
            .col-xl-12.col-lg-12.col-md-12.align-content-center
              p Esta operación consiste en trocear la fruta y luego licuarla para obtener el jugo que se va a llevar a concentración.

          .row.justify-content-center(titulo="4. Cocción y adición de azúcar")
            .col-xl-12.col-lg-12.col-md-12.align-content-center
              p Llevar la pulpa a un recipiente, poner al fuego y cuando esté tibia se le adiciona la mitad del azúcar y se agita constantemente; al alcanzar una temperatura de 70 ºC se le adiciona la otra mitad del azúcar; adicionar el azúcar en dos partes mejora el color, sabor y brillo de la mermelada, este producto se debe cocinar a fuego medio. Cuando se está cociendo el producto se deben retirar las impurezas que se suben en forma de espuma y finalmente determinar el punto de mermelada, que es el que indica que el producto está listo, esto se hace de la siguiente manera:
              .col-lg-12
                .ms-2(style="list-style: lower-alpha; color: #703A22")
                  li 
                    span.text-dark Sacar una muestra del producto y verter unas gotas sobre un plato o una tapa y voltear el utensilio, si el producto no se derrama es porque tiene el punto apropiado, entonces se procede a apagar.
                  li.hr-punteado.my-3
                    span.text-dark Otra manera de determinar el punto final de la mermelada es coger una gota del producto y verterla en un vaso de agua, cuando esta caiga en el fondo del agua si no se desintegra es porque ya dio el punto.
              
          .row.justify-content-center(titulo="Envasado")
            .col-xl-12.col-lg-12.col-md-12.align-content-center
              p Este procedimiento se realiza inmediatamente después de cuando está lista la mermelada, se llenan los frascos dejando 1⁄2 centímetro entre la boca y el frasco, una vez finalizada esta operación se procede a pasteurizar.

      .col-xl-4.col-lg-4.col-md-6.align-content-center(data-aos="fade-right")
        figure
          img.my-3(src="@/assets/curso/temas/tema3/img18.png", alt="alt")

    .titulo-sexto.color-acento-contenido.mb-4
        h5 Figura 3.
        span <em>Proceso de elaboración de la mermelada</em>
    img.my-3(src="@/assets/curso/temas/tema3/img19.svg", alt="alt")
    figcaption.mb-4 Fuente: SENA (2024).

    .row.my-4.fnd-4
      .col-lg-8.m-auto
        .row.align-items-center.grad1.p-4.justify-content-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/tema3/img20.svg", alt="")
          .col-lg-7
            h3(style="color: #FF964C") Mermeladas, jaleas, jarabes, dulces y confituras
            p.mb-0.text-light Para explorar más opciones de frutas en la elaboración de mermeladas, le invitamos a consultar el siguiente enlace.
          .col-lg-3.text-center
            a.boton.boton--b(href="https://www.fao.org/4/x5029s/X5029S07.htm#4.3%20Mermeladas,%20jaleas,%20jarabes,%20dulces%20y%20confituras" target="_blank")
              span Ir al sitio
              i.fas.fa-solid.fa-link

    .row.justify-content-center.my-3(style="background: #FFF0D6; padding: 2em")
      .col-lg-10.my-3.mx-2(style="background: #ffffff; padding-top: 2em; padding-bottom: 2em; padding-left: 1.5em; border-radius: 15px; box-shadow: 4px 4px 6px -2px #DDDDDC")
        h5.text-center.text-light(style="background: #33490B; padding: 1.5em; border-radius: 10px") La importancia del grado <em>Brix</em> en la elaboración de mermeladas

        p.mt-4 El grado <em>Brix</em> (°Bx) es una unidad de medida que se utiliza para determinar <b>la cantidad de sólidos solubles</b> presentes en una solución líquida, principalmente azúcares como la sacarosa, fructosa y glucosa. Un grado <em>Brix</em> equivale a <b>1 gramo de sacarosa por cada 100 gramos de solución.</b>
        p.my-3 En términos más simples, el <em>Brix</em> mide la <b>concentración de azúcar</b> en un líquido. Cuanto mayor sea el grado <em>Brix</em>, <b>mayor será la dulzura y la densidad</b> de la solución.

        .row.justify-content-center.my-3.mx-1
          .col-lg-3.mx-0.align-content-center(style="background: #73964A; padding: 2em")
            h2.mb-0.text-light.text-center ¿Cómo se mide el <em>Brix</em>?
          .col-lg-9.align-content-center(style="background: #EDF1E9; padding: 2em")
            p.mb-0 El método más común para medir el <em>Brix</em> es utilizando un refractómetro. Este instrumento mide el índice de refracción de la luz al pasar a través de la solución. Cuanto mayor sea la concentración de azúcar, mayor será el índice de refracción y, por lo tanto, mayor será el grado <em>Brix</em>.

        h3.my-3.text-center(style="color: #5C783B") Aplicaciones <em>Brix</em>

        p.my-3 El grado <em>Brix</em> se utiliza ampliamente en la industria alimentaria y de bebidas, así como en la agricultura y otras áreas, incluyendo:

        ul.my-3
          li
            span(style="color: #5C783B") <b>Industria alimentaria: </b>
            span.text-dark control de calidad en la elaboración de jugos, refrescos, mermeladas, jarabes, miel, vino y cerveza.
          li.hr-punteado.my-2
            span(style="color: #5C783B") <b>Agricultura: </b>
            span.text-dark determinación del punto óptimo de madurez de las frutas y verduras para su cosecha.
          li.hr-punteado.my-2
            span(style="color: #5C783B") <b>Industria azucarera: </b>
            span.text-dark monitoreo de la concentración de azúcar durante la producción de azúcar.
          li.hr-punteado.my-2
            span(style="color: #5C783B") <b>Acuicultura: </b>
            span.text-dark control de la salinidad del agua.
        
        h3.text-center(style="color: #5C783B") Importancia del <em>Brix</em> en la elaboración de conservas

        p.text-center.my-3 En la elaboración de conservas, el grado <em>Brix</em> es un parámetro crucial para:

        ul.my-3
          li
            span.text-dark Controlar la dulzura del producto final.
          li.hr-punteado.my-2
            span.text-dark Determinar la cantidad de azúcar necesaria para la conservación.
          li.hr-punteado.my-2
            span.text-dark Garantizar la estabilidad y seguridad del producto, ya que una concentración adecuada de azúcar inhibe el crecimiento de microorganismos.

        p.my-4(style="background: #E3EADB; padding: 2em") En resumen, el grado <em>Brix</em> es una medida fundamental para evaluar la concentración de azúcar en soluciones líquidas y juega un papel esencial en diversas industrias, incluyendo la alimentaria, para garantizar la calidad y seguridad de los productos.

        p.text-center <b>Fuente:</b> SENA (2024).


    Separador
    #t_3_2.titulo-segundo.color-acento-contenido.my-3
      h3(data-aos='flip-left') 3.2 Conservas de vegetales

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img22.png')})`}"
        )

      .bloque-texto-g__texto.p-4(data-aos="zoom-in")
        p.mb-0 Las conservas de vegetales ofrecen una manera práctica y deliciosa de disfrutar de los sabores frescos durante todo el año. Desde encurtidos agridulces hasta conservas en salmuera que capturan la frescura de los vegetales en su punto óptimo, las posibilidades son infinitas. 

    h5.blue_icon.my-3(data-aos="fade-left") Vegetales en salmuera o al natural

    p.my-3 Esta técnica de conservación permite preservar la textura y el sabor característico de los vegetales frescos. Se basa en la inmersión de los vegetales, previamente escaldados, en una solución de salmuera, compuesta por agua y sal en proporciones específicas. La salmuera actúa como conservante natural, inhibiendo el crecimiento de microorganismos. En frascos esterilizados para evitar el deterioro y así garantizar la vida útil en el almacenamiento.

    p.my-3 Los vegetales en salmuera o al natural conservan su sabor fresco y son ideales para ensaladas, guarniciones o como ingrediente en una variedad de platillos.


    .titulo-sexto.color-acento-contenido.mb-4
        h5 Figura 4.
        span <em>Pasos para la elaboración de vegetales en salmuera</em>
    img.my-3(src="@/assets/curso/temas/tema3/img23.svg", alt="alt")
    figcaption Fuente: SENA (2024).

    p.my-3 Al seleccionar vegetales debe tener en cuenta que estos posean buenas características organolépticas como: olor, sabor y textura; en la siguiente tabla se describen ejemplos de las características de algunas verduras:

    .row.justify-content-center.my-3.fnd-5
      .col-lg-10
        .tarjeta.p-4.fnd-6
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
                h5 Coliflor y el brócoli
                p En el caso de la coliflor, se deben seleccionar aquellas cuyas flores comestibles presenten una consistencia firme y un color blanco o marfil uniforme.  Las flores no deben estar separadas de la cabeza ni presentar manchas oscuras. Para el brócoli, se buscan cabezas compactas, con flores de color verde intenso y sin signos de amarillamiento.

              .col-lg-4.col-md-8.align-content-center
                figure
                  img(src='@/assets/curso/temas/tema3/img24.png', alt='Imagen decorativa')
            .row.justify-content-center
              .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
                h5 Pepino cohombro
                p Se recomienda elegir pepinos firmes al tacto,  con la piel lisa y brillante,  libre de manchas o golpes. Se debe verificar que no presenten tierra adherida y que su aspecto general denote frescura.

              .col-lg-4.col-md-8.align-content-center
                figure
                  img(src='@/assets/curso/temas/tema3/img25.png', alt='Imagen decorativa')
            .row.justify-content-center
              .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
                h5 Arvejas
                p Las arvejas frescas deben tener un color verde brillante y uniforme.  Al presionarlas suavemente con la uña, deben ofrecer una ligera resistencia,  lo que indica frescura.  Si se adquieren arvejas desgranadas, estas deben presentar un color verde intenso y una apariencia carnosa,  sin signos de deshidratación o marchitez.

              .col-lg-4.col-md-8.align-content-center
                figure
                  img(src='@/assets/curso/temas/tema3/img26.png', alt='Imagen decorativa')
            .row.justify-content-center
              .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
                h5 Zanahorias
                p Se recomienda seleccionar zanahorias firmes al tacto,  con la piel lisa,  sin grietas ni arrugas.  El color debe ser uniforme y vibrante,  característico de la variedad.  Se deben evitar las zanahorias blandas,  flexibles o con la piel arrugada,  ya que son signos de deshidratación.

              .col-lg-4.col-md-8.align-content-center
                figure
                  img(src='@/assets/curso/temas/tema3/img27.png', alt='Imagen decorativa')
            .row.justify-content-center
              .col-lg-8.col-md-12.mb-4.mb-md-0.align-content-center
                h5 Habichuela
                p Se deben elegir habichuelas firmes al tacto, con un color verde intenso y brillante.  La superficie debe ser lisa, con ondulaciones características y sin manchas oscuras,  golpes o signos de deterioro.  Al partirlas,  deben ofrecer una textura crujiente. 

              .col-lg-4.col-md-8.align-content-center
                figure
                  img(src='@/assets/curso/temas/tema3/img28.png', alt='Imagen decorativa')
    .cajon.color-adicional-2.p-4.my-3(data-aos="fade-up")(style="background: #F4EDEA")
       p.mb-0 Una vez seleccionados los vegetales, se deben lavar para eliminar cualquier tipo de suciedad, después se adecuan según la forma que se les desee dar y luego se procede a escaldar a cada uno de los vegetales por separado, cuando se saquen del agua hirviendo, es necesario realizar un choque con frío, esto para acentuar el color del vegetal.     

    p.my-4.text-center.text-light(style="background: #33490B; padding: 1em; border-radius: 10px; width: fit-content") <b>Elaboración de salmuera</b>
    p.my-3 La salmuera es el líquido que se le adiciona a la conserva de vegetales, está compuesta de agua y sal. La salmuera se realiza añadiendo a un litro de agua tres cucharadas soperas de sal, esto se disuelve y se lleva al fuego.
    .row.justify-content-center.my-3
      .col-lg-7.col-md-6
        img.my-3(src='@/assets/curso/temas/tema3/img29.svg', alt='Imagen decorativa')
        figcaption Fuente: SENA (2024).
    
    p.my-4.text-center.text-light(style="background: #33490B; padding: 1em; border-radius: 10px; width: fit-content") <b>Llenado de los frascos</b>
    p.my-3 Una vez estén escaldados y la salmuera preparada, se debe empezar el llenado de los envases recordando dejar siempre el espacio entre el producto y la cabeza del frasco.
    p.my-3 Los vegetales como habichuelas, zanahoria y la papa deben envasarse por debajo del cuello del frasco y luego adicionar la salmuera hasta el cuello del envase.
    .row.justify-content-center.my-3
      .col-lg-7.col-md-6
        img.my-3(src='@/assets/curso/temas/tema3/img30.svg', alt='Imagen decorativa')
        figcaption Fuente: SENA (2024).
    
    .cajon.color-acento-contenido-2.p-4.my-3(data-aos="fade-up")(style="background: #FFEBC9")
      p.mb-0 Al envasar fríjoles, maíz, alverjas y lentejas se deben dejar 3 cm por debajo del cuello del envase para que estos adquieran volumen durante la elaboración y adicionar la salmuera caliente hasta el cuello del frasco.

    .row.justify-content-center.my-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 5.
            span <em>Proceso de elaboración de fríjoles al natural</em>
        img.my-3(src="@/assets/curso/temas/tema3/img31.svg", alt="alt")
        figcaption Fuente: SENA (2024).
    
    .titulo-sexto.color-acento-contenido.mb-4
        h5 Figura 6.
        span <em>Pasos para la elaboración de vegetales agridulces</em>
    img.my-3(src="@/assets/curso/temas/tema3/img32.svg", alt="alt")
    figcaption Fuente: SENA (2024).

    p.my-4.text-center.text-light(style="background: #33490B; padding: 1em; border-radius: 10px; width: fit-content") <b>Elaboración del líquido de cobertura del encurtido</b>

    p.my-3 Adicionar en un recipiente la misma cantidad de vinagre y de agua, agregar a la solución sal, azúcar, aceite y especias como ajo, laurel o pimienta negra, llevar al fuego durante 10 minutos.

    .row.justify-content-center.my-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4
            h5 Figura 7.
            span <em>Proceso de elaboración pimientos en conserva</em>
        img.my-3(src="@/assets/curso/temas/tema3/img33.svg", alt="alt")
        figcaption Fuente: SENA (2024).
        .row.my-3
      .col-lg-8.m-auto
        .row.align-items-center.grad1.p-4.justify-content-center
          .col-auto
            figure
              img(src="@/assets/curso/temas/tema3/img34.svg", alt="")
          .col-lg-7
            h3(style="color: #FF964C") Encurtidos
            p.mb-0.text-light Para explorar más opciones de frutas en la elaboración de conservas de vegetales y encurtidos.
          .col-lg-3.text-center
            a.boton.boton--b(href="https://www.fao.org/4/x5029s/X5029S09.htm#4.6%20Encurtidos" target="_blank")
              span Ir al sitio
              i.fas.fa-solid.fa-link
</template>

<script>
export default {
  name: 'Tema3',
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
