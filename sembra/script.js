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
    var nameImgS = `./${this.id}.jpg`;

    muestraImgS.attr("src", nameImgS);
    colorButtonS.removeClass("button-color-active");
    $(this).addClass("button-color-active");
  });

  //Detecta click en botones para seleccionar color SEMBRA7000
  var colorButton = $(".color-button");
  var muestraImg = $("#muestra7000 img");

  colorButton.click(function () {
    var nameImg = `./${this.id}.jpg`;

    muestraImg.attr("src", nameImg);
    colorButton.removeClass("button-color-active");
    $(this).addClass("button-color-active");
  });

    //Detecta click en botones para seleccionar color SEMBRA4000
    var colorButton = $(".color-button");
    var muestraImg = $("#muestra4000 img");
  
    colorButton.click(function () {
      var nameImg = `./${this.id}.jpg`;
  
      muestraImg.attr("src", nameImg);
      colorButton.removeClass("button-color-active");
      $(this).addClass("button-color-active");
    });

  //Detecta click en botones para seleccionar color SEMBRA MICROPERFODADO
  var colorButtonMP = $(".color-button-microperforado");
  var muestraImgMP = $("#muestra-microperforado img");

  colorButtonMP.click(function () {
    var nameImgMP = `./${this.id}.jpg`;

    muestraImgMP.attr("src", nameImgMP);
    colorButtonMP.removeClass("button-color-active");
    $(this).addClass("button-color-active");
  });

  //Detecta click en botones para seleccionar color SEMBRA SCREEN EXTERIOR
  var colorButtonSE = $(".color-button-screen-exterior");
  var muestraImgSE = $("#muestra-screen-exterior img");

  colorButtonSE.click(function () {
    var nameImgSE = `./${this.id}.jpg`;

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
        $("#cristal figure img").attr("src", "./cristal.jpg");
        break;
      case 2:
        sectionCristal.html(nodeC2);
        $("#cristal figure img").attr("src", "./cristal.jpg");
        break;
      case 3:
        sectionCristal.html(nodeC3);
        $("#cristal figure img").attr("src", "./cristal.jpg");
        break;
      case 4:
        sectionCristal.html(nodeC4);
        $("#cristal figure img").attr("src", "./cristal.jpg");
        break;
      case 5:
        sectionCristal.html(nodeC5);
        $("#cristal figure img").attr("src", "./cristal.jpg");
        break;
      case 6:
        sectionCristal.html(nodeC6);
        $("#cristal figure img").attr("src", "./cristal.jpg");
        break;
      case 7:
        sectionCristal.html(nodeC7);
        $("#cristal figure img").attr("src", "./cristal.jpg");
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
        $("#cristal figure img").attr("src", "./cristal.jpg");
        break;
      case 2:
        sectionCristal.html(nodeC2);
        $("#cristal figure img").attr("src", "./cristal.jpg");
        break;
      case 3:
        sectionCristal.html(nodeC3);
        $("#cristal figure img").attr("src", "./cristal.jpg");
        break;
      case 4:
        sectionCristal.html(nodeC4);
        $("#cristal figure img").attr("src", "./cristal.jpg");
        break;
      case 5:
        sectionCristal.html(nodeC5);
        $("#cristal figure img").attr("src", "./cristal.jpg");
        break;
       case 6:
        sectionCristal.html(nodeC6);
        $("#cristal figure img").attr("src", "./cristal.jpg");
        break;
      case 7:
        sectionCristal.html(nodeC7);
        $("#cristal figure img").attr("src", "./cristal.jpg");
        break;
    }
  });
});
