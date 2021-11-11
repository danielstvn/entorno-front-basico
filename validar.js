
const usuario = "admin";
const pwd = "654321"

function validar(){
    if( document.getElementById("usuario").value == usuario){
        if(document.getElementById("pwd").value == pwd){
            alert("Acceso valido");
            document.forms.submit()
            
        }else{
            alert("Contraseña incorrecta");
        }
    }else{
        alert("El nombre de usuario es incorrecto!");
    }

}

var vehiculosFicticios = [
    {
      marca: "mustang",
      modelo: "Gtx",
      anio: "2019",
      color: "gris",
      precio: 10000000,
    },
    {
      marca: "Ford",
      modelo: "cx",
      anio: "2016",
      color: "Azul Oscuro",
      precio: 97000000,
    },
    
  ];
  

  function registrarVehiculo() {

    if (localStorage.getItem("vehiculos") != null) {
        var vehiculos = JSON.parse(localStorage.getItem("vehiculos"));
      } else {
        var vehiculos = [];
    }

      const vehiculo = {
        marca: document.getElementById("marca").value,
        modelo: document.getElementById("modelo").value,
        anio: document.getElementById("anio").value,
        color: document.getElementById("color").value,
        precio: document.getElementById("precio").value,
      };
      vehiculos.push(vehiculo);
      localStorage.setItem("vehiculos", JSON.stringify(vehiculos));
      document.getElementById("marca").value = "";
      document.getElementById("color").value = "";
      document.getElementById("modelo").value = "";
      document.getElementById("anio").value = "";
      document.getElementById("color").value = "";
      document.getElementById("precio").value = "";
      document.getElementById("marca").focus();
    }
  
  
  function mostrarVehiculos() {
    if (localStorage.getItem("vehiculos") != null) {
      var vehiculos = JSON.parse(localStorage.getItem("vehiculos"));
    } else {
      var vehiculos = [];
    }
    vehiculos = vehiculos.concat(vehiculosFicticios);
    var container = document.getElementById("container");
    var cards = "";
    vehiculos.forEach((vehiculo) => {
      cards += `<br> <div class="card col">
      <div class="card-header"> <b>
        ${vehiculo.marca} - ${vehiculo.modelo}</b>
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0 block">
          
          <footer class="blockquote-footer">
          <div class="row">
              <div class="col-4"> Precio: $${vehiculo.precio} </div> 
              <div class="col-4"> Color: ${vehiculo.color}</div> 
              <div class="col-4"> Año: ${vehiculo.anio}</div> 
          </div>
      </div></cite></footer>
        </blockquote>
      </div>
    </div> <br> `;
    });
    if (container) container.innerHTML = cards;
  }
  
  mostrarVehiculos();
  