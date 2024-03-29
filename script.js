$(window).on("load", function () {
  $("#preloader").fadeOut("fast");

  var header = document.querySelector("header");
  var main = document.querySelector("main");

  //Alinea main con header
  //main.style.marginTop = header.offsetHeight-10 + 'px';

  //Detecta click en los botones para seleccionar color SEMBRA11000
  var colorButtonS = $(".color-button-11");
  var muestraImgS = $("#muestra11000 img");

  colorButtonS.click(function () {
    //var nameImgS = `./${this.id}.jpg`;
    // https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/11000/sembra11000-a.webp
    var nameImgS = `https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/11000/${this.id}.webp`;

    muestraImgS.attr("src", nameImgS);
    colorButtonS.removeClass("button-color-active");
    $(this).addClass("button-color-active");
  });

  //Detecta click en botones para seleccionar color SEMBRA7000
  var colorButton7 = $(".color-button");
  var muestraImg7 = $("#muestra7000 img");

  colorButton7.click(function () {
    //https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/7000/sembra7000-a.webp
    //var nameImg7 = `./${this.id}.jpg`;
    var nameImg7 = `https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/7000/${this.id}.webp`;

    muestraImg7.attr("src", nameImg7);
    colorButton7.removeClass("button-color-active");
    $(this).addClass("button-color-active");
  });

    //Detecta click en botones para seleccionar color SEMBRA4000
    var colorButton4 = $(".color-button-4");
    var muestraImg4 = $("#muestra4000 img");
  
    colorButton4.click(function () {
      //https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/4000/sembra4000-g.webp
      //var nameImg4 = `./${this.id}.jpg`;
      var nameImg4 = `https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/4000/${this.id}.webp`;
  
      muestraImg4.attr("src", nameImg4);
      colorButton4.removeClass("button-color-active");
      $(this).addClass("button-color-active");
    });

  //Detecta click en botones para seleccionar color SEMBRA MICROPERFODADO
  var colorButtonMP = $(".color-button-microperforado");
  var muestraImgMP = $("#muestra-microperforado img");

  colorButtonMP.click(function () {
    //https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Microperforado/microperforado-azul.webp
    var nameImgMP = `https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Microperforado/${this.id}.webp`;
    //var nameImgMP = `./${this.id}.jpg`;

    muestraImgMP.attr("src", nameImgMP);
    colorButtonMP.removeClass("button-color-active");
    $(this).addClass("button-color-active");
  });

  //Detecta click en botones para seleccionar color SEMBRA SCREEN EXTERIOR
  var colorButtonSE = $(".color-button-screen-exterior");
  var muestraImgSE = $("#muestra-screen-exterior img");

  colorButtonSE.click(function () {
    //https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Screen-Exterior/screen-exterior-beige.webp
    var nameImgSE = `https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Screen-Exterior/${this.id}.webp`;
    //var nameImgSE = `./${this.id}.jpg`;

    muestraImgSE.attr("src", nameImgSE);
    colorButtonSE.removeClass("button-color-active");
    $(this).addClass("button-color-active");
  });

  //
  var currentCristal = 1;
  var sectionCristal = $("#cristal article");
  var nextBtn = $("#next");
  var prevBtn = $("#prev");
  //Cristal 1
  var nodeC1 = `
  
          <h2>
              SEMBRA <small>Cristal</small>
          </h2>
          <br>
          <h4>
              <strong>CRISTAL N°1</strong> TRANSPARENCIA SUPERIOR
          </h4>
          <br>
          <h5>Tratamiento UV - Anti Hongo</h5>
          <br>
          <table class="schedule-specs">
              <tbody>
                  <tr>
                      <td class="tabla-clave"> Peso (grs. por metro cuadrado)</td>
                      <td>127 g/m2
                      </td>
                  </tr>
                  <tr>
                      <td class="tabla-clave">Espesor</td>
                      <td>100 micrones
                      </td>
                  </tr>
                  <tr>
                      <td class="tabla-clave">Ancho de rollo</td>
                      <td> 1,40 mts
                      </td>
                  </tr>
                  <tr>
                      <td class="tabla-clave">Largo de rollo</td>
                      <td>100 mts
                      </td>
                  </tr>
                  <tr>
                      <td class="tabla-clave">Resistencia térmica</td>
                      <td>-25 ºC a 50 ºC
                      </td>
                  </tr>
                  <tr>
                      <td class="tabla-clave">Retardante al fuego</td>
                      <td>NFPA701, M2, B2
                      </td>
                  </tr>
                  <tr>
                      <td class="tabla-clave">Resistencia a la tracción</td>
                      <td> 25 MPA
                      </td>
                  </tr>
                  <tr>
                      <td class="tabla-clave">Tasa de resistencia a la tracción</td>
                      <td> 160%
                      </td>
                  </tr>
                  <tr>
                      <td class="tabla-clave">Resistencia UV</td>
                      <td> FR NFPA701, M2, B2
                      </td>
                  </tr>
                  <tr>
                      <td class="tabla-clave" >Resistente al frío</td>
                      <td> Si
                      </td>
                  </tr>
                  <tr>
                      <td class="tabla-clave">Protección Anti Hongo</td>
                      <td>Si
                      </td>
                  </tr>
                  <tr>
                      <td class="tabla-clave">Homogéneo, plano</td>
                      <td>Si
                      </td>
                  </tr>
              </tbody>
          </table>
    `;
  //Cristal 2
  var nodeC2 = `

        <h2>
            SEMBRA <small>Cristal</small>
        </h2>
        <br>
        <h4>
            <strong>CRISTAL N°2</strong> TRANSPARENCIA SUPERIOR
        </h4>
        <br>
        <h5>Tratamiento UV - Anti Hongo</h5>
        <br>
        <table class="schedule-specs">
            <tbody>
                <tr>
                    <td class="tabla-clave"> Peso (grs. por metro cuadrado)</td>
                    <td>195 g/m2
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Espesor</td>
                    <td>150 micrones
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Ancho de rollo</td>
                    <td> 1,40 mts
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Largo de rollo</td>
                    <td>50 mts
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Resistencia térmica</td>
                    <td>-25 ºC a 50 ºC
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Retardante al fuego</td>
                    <td>NFPA701, M2, B2
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Resistencia a la tracción</td>
                    <td> 27 MPA
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Tasa de resistencia a la tracción</td>
                    <td> 212%
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Resistencia UV</td>
                    <td> FR NFPA701, M2, B2
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Resistente al frío</td>
                    <td> Si
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Protección Anti Hongo</td>
                    <td>Si
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Homogéneo, plano</td>
                    <td>Si
                    </td>
                </tr>
            </tbody>
        </table>
  `;
  //Cristal 3
  var nodeC3 = `
        <h2>
            SEMBRA <small>Cristal</small>
        </h2>
        <br>
        <h4>
            <strong>CRISTAL N°3</strong> TRANSPARENCIA SUPERIOR
        </h4>
        <br>
        <h5>Tratamiento UV - Anti Hongo</h5>
        <br>
        <table class="schedule-specs">
            <tbody>
                <tr>
                    <td class="tabla-clave"> Peso (grs. por metro cuadrado)</td>
                    <td>325 g/m2
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Espesor</td>
                    <td>250 micrones
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Ancho de rollo</td>
                    <td> 1,40 mts
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Largo de rollo</td>
                    <td>50 mts
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Resistencia térmica</td>
                    <td>-25 ºC a 50 ºC
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Retardante al fuego</td>
                    <td>NFPA701, M2, B2
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Resistencia a la tracción</td>
                    <td> 27 MPA
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Tasa de resistencia a la tracción</td>
                    <td> 270%
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Resistencia UV</td>
                    <td> FR NFPA701, M2, B2
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Resistente al frío</td>
                    <td> Si
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Protección Anti Hongo</td>
                    <td>Si
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Homogéneo, plano</td>
                    <td>Si
                    </td>
                </tr>
            </tbody>
        </table>
  `;
  //Cristal 4
  var nodeC4 = `

        <h2>
            SEMBRA <small>Cristal</small>
        </h2>
        <br>
        <h4>
            <strong>CRISTAL N°4</strong> TRANSPARENCIA SUPERIOR
        </h4>
        <br>
        <h5>Tratamiento UV - Anti Hongo</h5>
        <br>
        <table class="schedule-specs">
            <tbody>
                <tr>
                    <td class="tabla-clave"> Peso (grs. por metro cuadrado)</td>
                    <td>440 g/m2
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Espesor</td>
                    <td>350 micrones
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Ancho de rollo</td>
                    <td> 1,40 mts
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Largo de rollo</td>
                    <td>50 mts
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Resistencia térmica</td>
                    <td>-25 ºC a 50 ºC
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Retardante al fuego</td>
                    <td>NFPA701, M2, B2
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Resistencia a la tracción</td>
                    <td> 23 MPA
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Tasa de resistencia a la tracción</td>
                    <td> 380%
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Resistencia UV</td>
                    <td> FR NFPA701, M2, B2
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Resistente al frío</td>
                    <td> Si
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Protección Anti Hongo</td>
                    <td>Si
                    </td>
                </tr>
                <tr>
                    <td class="tabla-clave">Homogéneo, plano</td>
                    <td>Si
                    </td>
                </tr>
            </tbody>
        </table>
  `;
  //Cristal 5
  var nodeC5 = `
      <h2>
          SEMBRA <small>Cristal</small>
      </h2>
      <br>
      <h4>
          <strong>CRISTAL N°5</strong> TRANSPARENCIA SUPERIOR
      </h4>
      <br>
      <h5>Tratamiento UV - Anti Hongo</h5>
      <br>
      <table class="schedule-specs">
          <tbody>
              <tr>
                  <td class="tabla-clave"> Peso (grs. por metro cuadrado)</td>
                  <td>565 g/m2
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Espesor</td>
                  <td>450 micrones
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Ancho de rollo</td>
                  <td> 1,40 mts
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Largo de rollo</td>
                  <td>50 mts
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Resistencia térmica</td>
                  <td>-25 ºC a 50 ºC
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Retardante al fuego</td>
                  <td>NFPA701, M2, B2
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Resistencia a la tracción</td>
                  <td> 23 MPA
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Tasa de resistencia a la tracción</td>
                  <td> 365%
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Resistencia UV</td>
                  <td> FR NFPA701, M2, B2
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Resistente al frío</td>
                  <td> Si
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Protección Anti Hongo</td>
                  <td>Si
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Homogéneo, plano</td>
                  <td>Si
                  </td>
              </tr>
          </tbody>
      </table>
  `;
  //Cristal 6
  var nodeC6 = `
  <h2>
      SEMBRA <small>Cristal</small>
  </h2>
  <br>
  <h4>
      <strong>CRISTAL N°6</strong> TRANSPARENCIA SUPERIOR
  </h4>
  <br>
  <h5>Tratamiento UV - Anti Hongo </h5>
  <br>
  <table class="schedule-specs">
      <tbody>
          <tr>
              <td class="tabla-clave"> Peso (grs. por metro cuadrado)</td>
              <td>650 g/m2
              </td>
          </tr>
          <tr>
              <td class="tabla-clave">Espesor</td>
              <td>520 micrones
              </td>
          </tr>
          <tr>
              <td class="tabla-clave">Ancho de rollo</td>
              <td> 1,80 mts
              </td>
          </tr>
          <tr>
              <td class="tabla-clave">Largo de rollo</td>
              <td>40 mts
              </td>
          </tr>
          <tr>
              <td class="tabla-clave">Resistencia térmica</td>
              <td>-25 ºC a 50 ºC
              </td>
          </tr>
          <tr>
              <td class="tabla-clave">Retardante al fuego</td>
              <td>AUTOEXTINGUIBLE
              </td>
          </tr>
          <tr>
              <td class="tabla-clave">Resistencia a la tracción</td>
              <td> 23 MPA
              </td>
          </tr>
          <tr>
              <td class="tabla-clave">Tasa de resistencia a la tracción</td>
              <td> 362%
              </td>
          </tr>
          <tr>
              <td class="tabla-clave">Resistencia UV</td>
              <td> Si
              </td>
          </tr>
          <tr>
              <td class="tabla-clave">Protección Anti Hongo</td>
              <td>Si
              </td>
          </tr>
          <tr>
              <td class="tabla-clave">Homogéneo, plano</td>
              <td>Si
              </td>
          </tr>
          <tr>
              <td class="tabla-clave">Caracteristica</td>
              <td>SUPERTRANSPARENTE
              </td>
          </tr>
      </tbody>
  </table>
`;
  //Cristal 7£
  var nodeC7 = `
      <h2>
          SEMBRA <small>Cristal</small>
      </h2>
      <br>
      <h4>
          <strong>CRISTAL N°7</strong> TRANSPARENCIA SUPERIOR
      </h4>
      <br>
      <h5>Tratamiento UV - Anti Hongo</h5>
      <br>
      <table class="schedule-specs">
          <tbody>
              <tr>
                  <td class="tabla-clave"> Peso (grs. por metro cuadrado)</td>
                  <td>790 g/m2
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Espesor</td>
                  <td>630 micrones
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Ancho de rollo</td>
                  <td> 1,40 mts
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Largo de rollo</td>
                  <td>50 mts
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Resistencia térmica</td>
                  <td>-25 ºC a 50 ºC
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Retardante al fuego</td>
                  <td>NFPA701, M2, B2
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Resistencia a la tracción</td>
                  <td> 24 MPA
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Tasa de resistencia a la tracción</td>
                  <td> 360%
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Resistencia UV</td>
                  <td> FR NFPA701, M2, B2
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Resistente al frío</td>
                  <td> Si
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Protección Anti Hongo</td>
                  <td>Si
                  </td>
              </tr>
              <tr>
                  <td class="tabla-clave">Homogéneo, plano</td>
                  <td>Si
                  </td>
              </tr>
          </tbody>
      </table>
  `;

  nextBtn.click(function () {
    $("#cristal article").hide().fadeIn("slow");

    if (currentCristal > 0 && currentCristal < 7) {
      currentCristal++;
    }

    if (currentCristal === 1) {
      prevBtn.css({
        opacity: 0,
        cursor: "initial",
      });
    } else {
      prevBtn.css({
        opacity: 1,
        cursor: "pointer",
      });
    }

    if (currentCristal === 7) {
      nextBtn.css({
        opacity: 0,
        cursor: "initial",
      });
    } else {
      nextBtn.css({
        opacity: 1,
        cursor: "pointer",
      });
    }

    switch (currentCristal) {
      case 1:
        sectionCristal.html(nodeC1);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;
      case 2:
        sectionCristal.html(nodeC2);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;
      case 3:
        sectionCristal.html(nodeC3);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;
      case 4:
        sectionCristal.html(nodeC4);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;
      case 5:
        sectionCristal.html(nodeC5);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;
      case 6:
        sectionCristal.html(nodeC6);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;
      case 7:
        sectionCristal.html(nodeC7);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;    }
  });

  prevBtn.click(function () {
    $("#cristal article").hide().fadeIn("slow");

    if (currentCristal > 1 && currentCristal <= 7) {
      currentCristal--;
    }

    if (currentCristal === 1) {
      prevBtn.css({
        opacity: 0,
        cursor: "initial",
      });
    } else {
      prevBtn.css({
        opacity: 1,
        cursor: "pointer",
      });
    }

    if (currentCristal === 7) {
      nextBtn.css({
        opacity: 0,
        cursor: "initial",
      });
    } else {
      nextBtn.css({
        opacity: 1,
        cursor: "pointer",
      });
    }

    switch (currentCristal) {
      case 1:
        sectionCristal.html(nodeC1);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;
      case 2:
        sectionCristal.html(nodeC2);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;
      case 3:
        sectionCristal.html(nodeC3);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;
      case 4:
        sectionCristal.html(nodeC4);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;
      case 5:
        sectionCristal.html(nodeC5);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;
       case 6:
        sectionCristal.html(nodeC6);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;
      case 7:
        sectionCristal.html(nodeC7);
        $("#cristal figure img").attr("src", "https://cdngroup.sfo3.cdn.digitaloceanspaces.com/sembra-images/Telas/Cristal/cristal.webp");
        break;
    }
  });
});
