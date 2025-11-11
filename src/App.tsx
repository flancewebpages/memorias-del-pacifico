import React from "react";
import { motion } from "framer-motion";

const App: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-choco-50 via-amber-50 to-choco-100 text-choco-900 font-sans">
      {/* ======= HERO ======= */}
      <section
        data-section="hero"
        className="relative flex flex-col justify-center items-center text-center px-6 py-32 md:py-40 overflow-hidden"
      >
        <img
          src="imagenes/paper-texture-light.jpg"
          className="absolute inset-0 -z-10 w-full h-full object-cover object-center opacity-95"
        />

        <div className="absolute inset-0 bg-amber-900/10 mix-blend-multiply" />

        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-choco-900 drop-shadow-[0_2px_6px_rgba(255,255,255,0.5)]"
        >
          <h1 className="text-3xl md:text-5xl font-serif font-extrabold leading-snug">
            Los Abouchaar y el sueño azucarero de Sautatá:
            <br />
            <span className="text-amber-700 italic">
              historia familiar y desigualdad en el Pacífico colombiano
              (1924–1944)
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-choco-800 leading-relaxed max-w-2xl mx-auto">
            En el corazón húmedo del Chocó, una familia de origen sirio soñó con
            transformar un territorio olvidado en una potencia azucarera. Su
            historia mezcla ambición, industria y desigualdad.
          </p>
        </motion.div>
      </section>

      <section
        data-section="apuesta"
        className="px-6 md:px-20 py-20 bg-white/90 text-justify rounded-t-3xl shadow-inner"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-5 text-lg leading-relaxed"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-choco-800 mb-6">
            La apuesta industrial de los Abouchaar en el Chocó
          </h2>

          <p>
            La familia Abouchaar, de origen sirio, llegó a Colombia a inicios
            del siglo XX y se estableció en el Caribe, donde participó en el
            comercio en Cartagena y Barranquilla. Con el tiempo, esa experiencia
            los llevó a invertir en proyectos que unieran el comercio con la
            producción, buscando nuevas oportunidades fuera de las ciudades
            portuarias.
          </p>

          <p>
            En esa búsqueda, el Chocó apareció como un territorio fértil, con
            amplios recursos naturales y la posibilidad de conectar el río
            Atrato con los mercados del Caribe.
          </p>

          <p>
            En 1924, los Abouchaar (Miguel y Abdo) fundaron la{" "}
            <span className="font-semibold text-choco-700">
              Empresa Agrícola de Sautatá
            </span>
            , una iniciativa que integraba agricultura, industria y transporte
            en un mismo proyecto. Con un ingenio azucarero, un aserrío, una
            destilería de alcohol y zonas de cultivo, Sautatá representó una
            forma distinta de entender el progreso en el Pacífico: una apuesta
            por transformar un territorio olvidado a partir del trabajo, la
            innovación y la visión de una familia que creyó en su potencial.
          </p>
        </motion.div>

        {/* ======= GALERÍA HISTÓRICA ======= */}
        <div className="mt-16 border-t border-amber-200 pt-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              src: "imagenes/foto1.png",
              alt: "Matrimonio de Miguel Abuchar e Isabel Lemus",
              caption: (
                <>
                  Matrimonio de Miguel Abuchar con Isabel Lemus, en 1910
                  <br />
                  (Colección de Alberto Abuchar, Bogotá).
                </>
              ),
            },
            {
              src: "imagenes/foto2.png",
              alt: "Miguel Abuchar con monjas en el Ingenio de Sautatá",
              caption: (
                <>
                  Miguel Abuchar con un grupo de monjas en el Ingenio de
                  Sautatá, 1926
                  <br />
                  (Álbum de Luis Vélez, Turbo, Antioquia).
                </>
              ),
            },
            {
              src: "imagenes/foto3.png",
              alt: "Ingenio Azucarero de Sautatá",
              caption: <>Ingenio Azucarero de Sautatá (1929).</>,
            },
          ].map((foto, i) => (
            <motion.figure
              key={i}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-full aspect-[4/3] bg-amber-50 border border-choco-200 rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="object-contain w-full h-full hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <figcaption className="mt-3 text-[13px] italic text-choco-700 max-w-sm leading-snug">
                {foto.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>



      {/* ======= SECCIÓN 2 ======= */}
      <section
        data-section="contexto"
        className="px-6 md:px-20 py-24 bg-gradient-to-br from-amber-50 to-choco-50 text-justify shadow-inner"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-choco-800">
            Contexto colombiano
          </h2>

          <p>
            En las primeras décadas del siglo XX, Colombia vivía un proceso de
            cambio lleno de contrastes. Mientras el país buscaba consolidar un
            Estado moderno, las diferencias entre las regiones seguían siendo
            profundas. El crecimiento del café, la urbanización y el auge de una
            nueva clase empresarial impulsaron el desarrollo en el centro, pero
            zonas como el Chocó continuaron dependiendo de la extracción de
            recursos y de una economía poco conectada con el resto del país.
          </p>

          <p>
            En ese panorama, proyectos como Sautatá fueron excepcionales. Era
            una iniciativa privada que intentaba aplicar ideas modernas de
            producción en un territorio donde casi todo seguía funcionando de
            forma artesanal. Aunque el discurso del progreso empezaba a ganar
            fuerza, el Estado tenía una presencia mínima fuera de los grandes
            centros urbanos. El Pacífico colombiano quedó fuera de las rutas
            comerciales y del impulso industrial, y su desarrollo dependió más
            del esfuerzo de familias y empresarios locales que de una política
            nacional de integración.
          </p>

          <h3 className="text-xl md:text-2xl font-serif font-semibold text-amber-800 pt-6">
            Las raíces coloniales de la desigualdad
          </h3>

          <p>
            El Chocó carga con una herencia económica que se remonta a la época
            colonial, cuando la región fue explotada por su oro y sus recursos
            sin recibir inversión pública ni estructuras institucionales
            duraderas. Esa historia de exclusión consolidó un modelo de
            desarrollo desigual, donde la riqueza natural convivía con la
            pobreza estructural (Barragán, 2012). Este patrón de instituciones
            extractivas, descrito por Engerman y Sokoloff (1997), se mantuvo
            hasta el siglo XX y condicionó el futuro de proyectos como el de la
            Empresa Agrícola de Sautatá.
          </p>

          <p>
            Cuando los Abuchar llegaron al Atrato, intentaron introducir una
            lógica empresarial moderna en un territorio donde el Estado era casi
            inexistente (González Escobar, <i>Sirio-libaneses en el Chocó</i>).
            El ingenio operaba sin caminos, sin apoyo financiero y dependiendo
            por completo del río. En palabras de Alberto Abuchar, recogidas en
            su testimonio oral,{" "}
            <span className="italic text-choco-700">
              “todo se movía por agua; el río era la carretera”.
            </span>
          </p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <div className="w-full md:w-3/4 aspect-[16/9] bg-amber-50 border border-choco-200 rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
            <img
              src="imagenes/foto4.png"
              alt="Confluencia de los ríos Atrato y Arquía"
              className="object-contain w-full h-full"
            />
          </div>
          <figcaption className="mt-3 text-[13px] italic text-choco-700 max-w-2xl leading-snug">
            Confluencia de los ríos Atrato y Arquía, donde estaba localizada la
            finca de Abdo Abuchar, entrada para el camino de Urrao, 1914. <br />
            (Tomado de: Archivo General de la Nación, sección República, fondo
            Ministerio de Obras Públicas).
          </figcaption>
        </motion.figure>
      </section>

      {/* ======= SECCIÓN 3 ======= */}
      <section
        data-section="expansion"
        className="px-6 md:px-20 py-24 bg-white text-justify shadow-inner"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-semibold text-choco-800">
            La expansión desordenada de la frontera
          </h2>

          <p>
            El Ingenio de Sautatá puede entenderse como un intento de extender
            la frontera agrícola hacia el Pacífico colombiano. La familia
            Abuchar, que ya había consolidado redes comerciales en el Caribe,
            trasladó parte de su capital y maquinaria al río Atrato, convencida
            de que el desarrollo industrial podía abrir paso a una nueva etapa
            económica en el Chocó (González Escobar,{" "}
            <i>Sirio-libaneses en el Chocó</i>).
          </p>

          <p>
            Su estructura productiva, con cañaverales, destilería, aserrío y
            talleres mecánicos, mostraba una visión empresarial poco común para
            la región. Sin embargo, la expansión se dio en condiciones
            precarias: las vías terrestres eran inexistentes, el transporte
            dependía de los vapores que subían por el Atrato desde Quibdó o
            Cartagena, y los envíos de maquinaria desde el Caribe podían tardar
            meses en llegar.
          </p>

          <p>
            En ese contexto, los Abuchar actuaron como pioneros de una frontera
            económica abierta sin respaldo estatal, confiando en su propia
            logística y en la fuerza de trabajo local. El concepto de{" "}
            <span className="italic text-choco-700">
              “frontera condicional”
            </span>
            , propuesto por García-Jimeno y Robinson (2011), ayuda a entender la
            fragilidad de experiencias como la de Sautatá. Aunque los autores no
            se refieren directamente al Chocó, su idea de que el crecimiento
            económico depende de instituciones efectivas se ajusta a esta
            historia. La expansión fue posible gracias a la iniciativa familiar,
            pero su sostenibilidad se vio limitada por la falta de crédito,
            infraestructura y políticas de integración. Como recordaba Graciela
            Abuchar,{" "}
            <span className="italic text-choco-700">
              “todo dependía del río; si el barco no llegaba, todo se detenía”.
            </span>
          </p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <div className="w-full md:w-3/4 aspect-[16/9] bg-amber-50 border border-choco-200 rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
            <img
              src="imagenes/foto5.png"
              alt="Puerto de Sautatá, 1920"
              className="object-contain w-full h-full"
            />
          </div>
          <figcaption className="mt-3 text-[13px] italic text-choco-700 max-w-2xl leading-snug">
            Cargue de un vapor en el puerto de Sautatá. 1920 (Atención de
            Claudia Leal).
          </figcaption>
        </motion.figure>
      </section>

  {/* ======= SECCIÓN 4: ESFUERZOS DE DESARROLLO FALLIDOS ======= */}
  <section
    data-section="esfuerzos"
    className="px-6 md:px-20 py-24 bg-gradient-to-b from-amber-50 via-white to-amber-50 text-justify shadow-inner"
  >
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed"
    >
      <h2 className="text-2xl md:text-3xl font-serif font-semibold text-choco-800">
        Esfuerzos de desarrollo fallidos
      </h2>

      <p>
        El Ingenio de Sautatá representó uno de los primeros intentos del
        Pacífico colombiano por fortalecer la producción local y reducir la
        dependencia de los mercados externos. En su concepción, anticipó las
        ideas de la sustitución de importaciones, al buscar que el azúcar,
        el alcohol y la madera se produjeran y procesaran dentro del país{" "}
        (<i>González Escobar, Sirio-libaneses en el Chocó</i>). Sin embargo,
        el contexto regional no favoreció ese propósito. Los costos de
        operación eran altos, el acceso a crédito casi inexistente y la falta
        de infraestructura aumentaba los gastos de transporte. A diferencia
        del Valle del Cauca, donde el Estado impulsaba la industria, en el
        Chocó la producción dependía completamente del esfuerzo familiar.
      </p>

      <p>
        Durante la década de 1940, la empresa enfrentó conflictos laborales
        que reflejaron las tensiones de una economía en transición. Las
        huelgas en el aserrío y la destilería, impulsadas por demandas de
        mejores salarios y jornadas, interrumpieron la producción y
        deterioraron las finanzas del ingenio (<i>SciELO, 2012</i>). A ello
        se sumó la inestabilidad de los precios y la dificultad para
        sostener una operación industrial en medio de la selva. Como
        recordaba Graciela Abuchar,{" "}
        <span className="italic text-choco-700">
          “era un ingenio grande, lleno de vida, pero sin apoyo”.
        </span>{" "}
        Sautatá terminó siendo un ejemplo del tipo de desarrollo que nace
        con fuerza, pero se apaga al no encontrar respaldo en el entorno
        institucional y económico que lo rodea.
      </p>
    </motion.div>

    {/* Imagen foto6 */}
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-12 flex flex-col items-center text-center"
    >
      <div className="w-full md:w-3/4 aspect-[16/9] bg-amber-50 border border-choco-200 rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
        <img
          src="/imagenes/foto6.png"
          alt="Trabajadores esclavos de la empresa Sautatá"
          className="object-contain w-full h-full"
        />
      </div>
      <figcaption className="mt-3 text-[13px] italic text-choco-700 max-w-2xl leading-snug">
        Trabajadores esclavos de la empresa Sautatá. 1920 (Atención de Claudia Leal).
      </figcaption>
    </motion.figure>

    {/* ======= NUEVA SUBSECCIÓN: INTERACCIÓN CENTRO–PERIFERIA ======= */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto mt-20 space-y-6 text-lg leading-relaxed"
    >
      <h3 className="text-xl md:text-2xl font-serif font-semibold text-amber-800">
        Interacción centro–periferia
      </h3>

      <p>
        El cierre del Ingenio de Sautatá y la venta de su maquinaria al Valle
        del Cauca evidenciaron la distancia estructural entre el centro y la
        periferia del país. Mientras el Chocó carecía de carreteras, crédito
        y apoyo institucional, el Valle contaba con vías férreas, puertos y
        políticas de fomento que consolidaron una agroindustria estable{" "}
        (<i>Echeverría, 2019; ASOCAÑA, 2023</i>). Esa transferencia de recursos
        simboliza cómo el desarrollo colombiano se concentró en regiones
        integradas, dejando a los márgenes sin continuidad productiva. Lo que
        en el Atrato fue un esfuerzo familiar aislado, en el Cauca se
        convirtió en un modelo sostenido de crecimiento industrial.
      </p>

      {/* Tabla comparativa */}
      <div className="overflow-x-auto mt-10">
        <table className="min-w-full border border-choco-300 rounded-xl shadow-md bg-white/90">
          <thead className="bg-amber-100 text-choco-900">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Aspecto</th>
              <th className="px-4 py-3 text-left font-semibold">
                Chocó (Ingenio Sautatá)
              </th>
              <th className="px-4 py-3 text-left font-semibold">
                Valle del Cauca (Ingenios azucareros)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-amber-200 text-[15px] leading-relaxed">
            <tr>
              <td className="px-4 py-3 font-medium text-choco-800">
                Infraestructura de transporte
              </td>
              <td className="px-4 py-3">
                Sin carreteras estables; dependencia total del río Atrato y de los
                vapores fluviales (<i>González Escobar</i>).
              </td>
              <td className="px-4 py-3">
                Red vial y ferroviaria consolidada; conexión con Buenaventura y el
                resto del país (<i>Arboleda, 2015</i>).
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-choco-800">
                Acceso al crédito e inversión
              </td>
              <td className="px-4 py-3">
                Capital familiar limitado; sin apoyo estatal ni banca regional{" "}
                (<i>Banco de la República, 2020</i>).
              </td>
              <td className="px-4 py-3">
                Inversión sostenida de bancos y empresas nacionales; políticas de
                fomento industrial (<i>Ripoll Echeverría, 2010</i>).
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-choco-800">
                Integración al mercado
              </td>
              <td className="px-4 py-3">
                Producción local sin conexión constante con el mercado nacional;
                problemas de transporte y almacenamiento (<i>Videoteca del Chocó, 2020</i>).
              </td>
              <td className="px-4 py-3">
                Exportación de azúcar y derivados; integración vertical y mercados
                internacionales (<i>Asocaña, 2023</i>).
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-choco-800">
                Presencia institucional
              </td>
              <td className="px-4 py-3">
                Estado débil o ausente; infraestructura pública mínima{" "}
                (<i>Barragán, 2012</i>).
              </td>
              <td className="px-4 py-3">
                Estado activo en infraestructura, crédito y regulación del sector{" "}
                (<i>Arboleda, 2015</i>).
              </td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-choco-800">
                Escala y continuidad
              </td>
              <td className="px-4 py-3">
                Proyecto pionero (400 trabajadores y 5.000 hectáreas) pero
                aislado; colapsa tras la quiebra de 1944.
              </td>
              <td className="px-4 py-3">
                Sector consolidado; ingenios como Providencia, Cauca y Riopaila
                permanecen activos (<i>Banrepcultural, 2022</i>).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>

    {/* Imagen foto7 */}
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-16 flex flex-col items-center text-center"
    >
      <div className="w-full md:w-3/4 aspect-[16/9] bg-amber-50 border border-choco-200 rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
        <img
          src="/imagenes/foto7.png"
          alt="Fábrica de la Manuelita y ferrocarril del Pacífico"
          className="object-contain w-full h-full"
        />
      </div>
      <figcaption className="mt-3 text-[13px] italic text-choco-700 max-w-2xl leading-snug">
        La fábrica de la Manuelita (Valle del Cauca) y el ferrocarril del Pacífico (1920).
      </figcaption>
    </motion.figure>

    {/* ======= NUEVA SUBSECCIÓN: EL LEGADO DE SAUTATÁ ======= */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto mt-20 space-y-6 text-lg leading-relaxed"
    >
      <h3 className="text-xl md:text-2xl font-serif font-semibold text-amber-800">
        El legado de Sautatá
      </h3>

      <p>
        La historia del Ingenio de Sautatá trasciende su cierre y se convierte en
        una forma de entender el desarrollo desigual del país. Lo que los Abuchar
        construyeron en el Atrato no fue solo una empresa, sino un intento por
        demostrar que el progreso también podía nacer lejos del centro. Su legado
        no está en los resultados económicos, sino en la capacidad de haber
        transformado, aunque fuera por un tiempo, la idea de lo posible en el
        Pacífico. Sautatá fue trabajo, aprendizaje y persistencia en medio de la
        ausencia estatal, y su recuerdo, hoy recogido en los testimonios de
        Graciela Abuchar, sigue mostrando que el esfuerzo individual no basta
        cuando las condiciones estructurales permanecen intactas.
      </p>
    </motion.div>

    {/* Imagen foto8 */}
    <motion.figure
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-16 flex flex-col items-center text-center"
    >
      <div className="w-full md:w-3/4 aspect-[16/9] bg-amber-50 border border-choco-200 rounded-2xl shadow-md overflow-hidden flex items-center justify-center">
        <img
          src="/imagenes/foto8.png"
          alt="Oficinas y campamento del Ingenio de Sautatá"
          className="object-contain w-full h-full"
        />
      </div>
      <figcaption className="mt-3 text-[13px] italic text-choco-700 max-w-2xl leading-snug">
        Oficinas y campamento del Ingenio de Sautatá (Tomado de:{" "}
        <i>Geografía Económica de Colombia, t. VI. Chocó, Contraloría General de la República. Bogotá, 1943, p. 443.</i>)
      </figcaption>
    </motion.figure>
  </section>


      {/* ======= SECCIÓN 5: REFERENCIAS ======= */}
      <section
        data-section="referencias"
        className="px-6 md:px-20 py-20 bg-choco-900 text-amber-50"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-serif font-semibold mb-8 text-amber-100">
            Referencias
          </h2>

          <ul className="space-y-4 text-[15px] leading-relaxed">
            <li>
              Barragán, R. (2012).{" "}
              <i>
                Esclavitud, minería y libertad en el Pacífico colombiano: legado
                colonial y desigualdad persistente.
              </i>{" "}
              Revista de Historia Social y de las Mentalidades, 16(2), 45–68.
            </li>

            <li>
              Diario La Libertad. (2024, marzo 29).{" "}
              <i>
                Rescatando la historia: El Chocó en blanco y negro revela el pasado a
                través del cine.
              </i>{" "}
              Recuperado de:{" "}
              <a
                href="https://diariolalibertad.com/sitio/2024/03/29/rescatando-la-historia-el-choco-en-blanco-y-negro-revela-el-pasado-a-traves-del-cine/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:underline"
              >
                diariolalibertad.com
              </a>
            </li>

            <li>
              Engerman, S., & Sokoloff, K. (1997).{" "}
              <i>
                Factor endowments, institutions, and differential paths of growth
                among new world economies.
              </i>{" "}
              In S. Haber (Ed.),{" "}
              <i>How Latin America fell behind</i> (pp. 260–304). Stanford University
              Press.
            </li>

            <li>
              García-Jimeno, C., & Robinson, J. A. (2011).{" "}
              <i>The Myth of the Frontier.</i> National Bureau of Economic Research
              Working Paper No. 14774.
            </li>

            <li>
              González Escobar, L. F. (s.f.).{" "}
              <i>
                Sirio-libaneses en el Chocó: cien años de presencia económica y
                cultural.
              </i>{" "}
              Archivo familiar de la familia Abuchar.
            </li>

            <li>
              Abuchar, A. (2020).{" "}
              <i>Testimonio oral sobre la Empresa Agrícola de Sautatá.</i> En{" "}
              <i>Sautatá.</i> Audio de memoria familiar.
            </li>

            <li>
              SciELO. (2012).{" "}
              <i>
                El Pacífico colombiano: historia, economía y desarrollo regional.
              </i>{" "}
              Revista de Estudios Sociales, 43(2), 85–100.
            </li>

            <li>
              Universidad Tecnológica del Chocó – Videoteca del Chocó. (2020).{" "}
              <i>Sautatá, memoria de una empresa agroindustrial.</i>{" "}
              <a
                href="https://videotecachoco.utch.edu.co/peliculas/8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:underline"
              >
                videotecachoco.utch.edu.co
              </a>
            </li>

            <li>
              Yélez, L. (1926).{" "}
              <i>
                Miguel Abuchar con un grupo de monjas en el Ingenio de Sautatá
                [Fotografía].
              </i>{" "}
              Álbum personal, Turbo, Antioquia.
            </li>

            <li>
              Leal, C. (1920).{" "}
              <i>Cargue de un vapor en el puerto de Sautatá [Fotografía].</i>{" "}
              Archivo personal.
            </li>

            <li>
              ASOCAÑA. (2023).{" "}
              <i>Informe Anual 2023–2024.</i>{" "}
              <a
                href="https://www.asocana.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:underline"
              >
                asocana.org
              </a>
            </li>

            <li>
              Echeverría, M. T. R. (2019).{" "}
              <i>El desarrollo de la industria azucarera en el Valle del Cauca.</i>{" "}
              Revista Economía y Región, Universidad Tecnológica de Bolívar.
            </li>

            <li>
              ICA, Instituto Colombiano Agropecuario. (2025, 9 mayo).{" "}
              <i>
                La caña que endulza desde el Valle del Cauca se produce…
              </i>{" "}
              Recuperado de:{" "}
              <a
                href="https://www.ica.gov.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:underline"
              >
                ica.gov.co
              </a>
            </li>

            <li>
              Ministerio de Transporte de Colombia. (s.f.).{" "}
              <i>
                Historia del transporte y la infraestructura en Colombia.
              </i>{" "}
              Recuperado de:{" "}
              <a
                href="https://web.mintransporte.gov.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:underline"
              >
                web.mintransporte.gov.co
              </a>
            </li>

            <li>
              Sánchez Mejía, H. R. (2014).{" "}
              <i>
                Estado, innovación y expansión de la agroindustria azucarera en
                Colombia.
              </i>{" "}
              Revista de Estudios Sociales, 46(1), 83–100.
            </li>

            <li>
              Lado B. (2022, 26 de abril).{" "}
              <i>
                La fábrica de la Manuelita (Valle del Cauca) y el ferrocarril del
                Pacífico (1920) [Fotografía].
              </i>{" "}
              En <i>Los Eder, la familia más importante del Valle.</i>{" "}
              <a
                href="https://ladob.info/los-eder-la-familia-mas-importante-del-valle/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-300 hover:underline"
              >
                ladob.info
              </a>
            </li>

            <li>
              Contraloría General de la República. (1943).{" "}
              <i>
                Oficinas y campamento del Ingenio de Sautatá [Fotografía].
              </i>{" "}
              En <i>Geografía Económica de Colombia</i> (Vol. VI, Chocó, p. 443).
              Bogotá: Contraloría General de la República.
            </li>
          </ul>
        </motion.div>
      </section>


      {/* ======= FOOTER ======= */}
      <footer className="text-center py-8 text-choco-700 text-sm">
        © 2025 — Historia familiar de los Abouchaar y Sautatá
      </footer>
    </main>
  );
};

export default App;
