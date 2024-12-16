export default {
  global: {
    componenteFormativo:
      'Métodos de conservación y preparación de conservas de frutas y verduras',
    descripcionCurso:
      'Este componente proporciona una guía completa sobre los métodos de conservación y preparación de conservas de frutas y verduras. Explica al aprendiz la importancia de la clasificación de los alimentos para su uso adecuado y la prevención de su deterioro. Se describen los factores que afectan la seguridad alimentaria, incluyendo los agentes biológicos, el almacenamiento adecuado y el control de temperatura y humedad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Métodos de conservación de frutas y verduras',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Generalidades de la conservación',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Preparación de conservas de frutas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Esterilización de frascos y tapas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Llenado y aplicación de vacío',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tratamiento térmico: Pasteurización y esterilización',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Enfriamiento y almacenamiento',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Preparación de conservas de vegetales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Elaboración de conservas de fruta',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Métodos de conservación de frutas y verduras',
      referencia:
        'Saldaña Romero, A. (2018, 11 de julio). Historia de la conservación de los alimentos [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=QlWfdiU5MQE',
    },
    {
      tema: 'Métodos de conservación de frutas y verduras',
      referencia:
        'Lejavitzer, A. (2011). El papel de la fruta. Estudios Avanzados, 16(16), 37-50.',
      tipo: 'Artículo',
      descarga:
        '/downloads/Dialnet-ElPapelDeLaFrutaEnLaGastronomiaRomanaDeEpocaImperi-3852414.pdf',
    },
    {
      tema: 'Preparación de conservas de frutas.',
      referencia:
        'Paltrinieri, G. (1997). Procesamiento a pequeña escala de frutas y hortalizas amazónicas nativas e introducidas: Manual técnico. (Tratado de Cooperación Amazónica, Colaborador). TCA.',
      tipo: 'Capítulo de libro',
      link:
        'https://www.fao.org/4/x5029s/X5029S07.htm#4.3%20Mermeladas,%20jaleas,%20jarabes,%20dulces%20y%20confituras',
    },
    {
      tema: 'Preparación de conservas de vegetales.',
      referencia:
        'Paltrinieri, G. (1997). Procesamiento a pequeña escala de frutas y hortalizas amazónicas nativas e introducidas: Manual técnico. (Tratado de Cooperación Amazónica, Colaborador). TCA.',
      tipo: 'Capítulo de Libro ',
      link: 'https://www.fao.org/4/x5029s/X5029S09.htm#4.6%20Encurtidos',
    },
  ],
  glosario: [
    {
      termino: 'Actividad de agua (aw)',
      significado:
        'la actividad de agua (aw) es una medida que se utiliza para expresar la cantidad de agua disponible en un alimento para el crecimiento de microorganismos y reacciones químicas. Se define como la relación entre la presión de vapor de agua del alimento y la presión de vapor de agua pura a la misma temperatura. Su valor varía de 0 a 1, donde 1 representa agua pura. Los microorganismos necesitan agua disponible para crecer y multiplicarse. Una aw baja dificulta el desarrollo de bacterias, levaduras y mohos, contribuyendo a la conservación del alimento.',
    },
    {
      termino: 'Almíbar',
      significado:
        'el almíbar es una solución de agua y azúcar, generalmente en proporciones variables, que se utiliza para cubrir y conservar frutas en conserva. La concentración de azúcar en el almíbar determina su densidad y su capacidad de conservación. Se clasifican en: ligero (menor concentración de azúcar), medio y espeso (mayor concentración de azúcar). El almíbar no solo conserva las frutas, sino que también les aporta dulzura y realza su sabor.',
    },
    {
      termino: 'Autoclave',
      significado:
        'una autoclave es un equipo que se utiliza para esterilizar materiales y equipos mediante la aplicación de calor húmedo a alta presión. Funciona como una olla a presión de gran tamaño, donde se introduce vapor de agua a alta temperatura (generalmente 121°C) y presión (15 psi). Estas condiciones extremas eliminan eficazmente microorganismos, incluyendo esporas bacterianas, garantizando la esterilidad del material. Se utiliza en la industria alimentaria para esterilizar conservas enlatadas, asegurando su seguridad y prolongando su vida útil.',
    },
    {
      termino: '<em>Brix</em> (°Bx)',
      significado:
        'el grado <em>Brix</em> (°Bx) es una unidad de medida que se utiliza para determinar la cantidad de sólidos solubles presentes en una solución líquida, principalmente azúcares. Un grado <em>Brix</em> equivale a 1 gramo de sacarosa por cada 100 gramos de solución. Se mide con un instrumento llamado refractómetro, que mide el índice de refracción de la luz al pasar a través de la solución. El <em>Brix</em> es un indicador de la dulzura y la densidad de la solución, y se utiliza ampliamente en la industria alimentaria para controlar la calidad de productos como jugos, refrescos, mermeladas, jarabes y bebidas alcohólicas.',
    },
    {
      termino: '<em>Clostridium botulinum</em>',
      significado:
        '<em>Clostridium botulinum</em> es una bacteria anaeróbica (que vive en ausencia de oxígeno) que produce una toxina muy potente, la toxina botulínica, que causa botulismo. El botulismo es una enfermedad grave que afecta el sistema nervioso y puede ser fatal. La bacteria puede encontrarse en el suelo, el agua y los alimentos contaminados, especialmente en conservas caseras mal procesadas. El <em>Clostridium botulinum</em> se desarrolla en ambientes con bajo contenido de oxígeno, pH superior a 4.6 y baja concentración de sal. ',
    },
    {
      termino: 'Conservación de alimentos',
      significado:
        'conjunto de técnicas y métodos aplicados para prolongar la vida útil de los alimentos, preservando su calidad nutricional, sensorial y seguridad microbiológica. Las técnicas de conservación se basan en la inhibición del crecimiento de microorganismos, la inactivación de enzimas que causan el deterioro y la prevención de la oxidación.',
    },
    {
      termino: 'Desecación',
      significado:
        'método de conservación tradicional que consiste en eliminar la humedad de los alimentos mediante la exposición al aire libre y al sol. Este proceso reduce la actividad de agua, impidiendo el crecimiento de microorganismos y prolongando la vida útil de los alimentos. Frutas, carnes, pescados y hierbas aromáticas se han desecado durante siglos para su conservación.',
    },
    {
      termino: 'Deshidratación',
      significado:
        'método de conservación similar a la desecación, pero que utiliza fuentes de calor artificial, como hornos o deshidratadores eléctricos, para acelerar el proceso de eliminación de humedad. La deshidratación permite un control más preciso de la temperatura y la humedad, obteniendo productos con mayor calidad y uniformidad.',
    },
    {
      termino: 'Escaldado',
      significado:
        'técnica que consiste en sumergir con brevedad los alimentos, generalmente vegetales, en agua hirviendo durante un tiempo específico. El escaldado tiene múltiples beneficios: inactivar enzimas que causan el deterioro, reducir la carga microbiana superficial, fijar el color de los vegetales y ablandarlos para facilitar su envasado. Es un paso previo a la congelación, deshidratación o envasado de vegetales.',
    },
    {
      termino: 'Esterilización',
      significado:
        'proceso térmico que elimina todos los microorganismos presentes en un alimento, incluyendo las esporas bacterianas, que son altamente resistentes al calor. Se logra mediante la aplicación de altas temperaturas, generalmente 121°C, durante un tiempo determinado. La esterilización se realiza en autoclaves y es fundamental para garantizar la seguridad de las conservas de baja acidez, como las de vegetales.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'conjunto de medidas y prácticas destinadas a garantizar que los alimentos sean seguros para el consumo humano. Implica controlar los peligros biológicos, químicos y físicos a lo largo de toda la cadena alimentaria, desde la producción hasta el consumo. La inocuidad alimentaria es esencial para proteger la salud de los consumidores y prevenir enfermedades transmitidas por alimentos.',
    },
    {
      termino: 'Organoléptico',
      significado:
        'término que describe las características sensoriales de un alimento, percibidas a través de los sentidos. Incluye atributos como sabor, aroma, textura, color y apariencia. La calidad organoléptica de un alimento influye en su aceptabilidad y apreciación por parte del consumidor.',
    },
    {
      termino: 'Pasteurización',
      significado:
        'proceso térmico que utiliza calor controlado para eliminar microorganismos patógenos y extender la vida útil de los alimentos. A diferencia de la esterilización, la pasteurización no elimina todas las formas de vida microbiana, pero sí reduce significativamente la cantidad de microorganismos presentes.',
    },
  ],
  referencias: [
    {
      referencia:
        'Centers for Disease Control and Prevention. (2022). Botulism.',
      link: 'https://www.cdc.gov/botulism/about/index.html',
    },
    {
      referencia:
        'Contardi, C. (2008). Manual de conservas caseras. Mendoza, Argentina: INTA. ',
      link:
        'https://es.slideshare.net/slideshow/10-manual-de-conservas-caseras/36112967',
    },
    {
      referencia:
        'FAO. (2004). Conservación de frutas y hortalizas mediante tecnologías combinadas. Consultado el 01 de marzo de 2014.',
      link: '',
    },
    {
      referencia: 'Jay, J. M. (2005). Modern food microbiology. Springer. ',
      link: '',
    },
    {
      referencia:
        'Montanari, M. (2006). La comida como cultura. Editorial Planeta.',
      link: '',
    },
    {
      referencia:
        'Prescott, L. M., Harley, J. P., & Klein, D. A. (2002). Microbiology. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Ruiz, S. (1990). Producción casera de dulces, jaleas y mermeladas. México: Olimpo.',
      link: '',
    },
    {
      referencia:
        'Secretaria de agricultura, ganadería, desarrollo rural pesca y alimentación. (s.f.). Procesamiento de frutas y verduras a nivel casero. Consultado el 03 de marzo de 2014, en ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Jairo Valencia Ebratt',
          cargo: 'Evaluador instruccional',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Eulises Orduz Amezquita',
          cargo: 'Diseñador <em>web</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Rafael Bladimir Pérez Meriño',
          cargo: 'Desarrollador <em>fullstack</em>',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carmen Alicia Martinez Torres',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro para el desarrollo agroecológico y agroindustrial Sabanalarga - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
