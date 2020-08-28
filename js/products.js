<!DOCTYPE html>
<!-- saved from url=(0049)https://getbootstrap.com/docs/4.3/examples/album/ -->
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <title>eMercado - Todo lo que busques está aquí</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/album/">
    <link href="https://fonts.googleapis.com/css?family=Raleway:300,300i,400,400i,700,700i,900,900i" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet">
    <style>
      #cerrarSesion:hover, #showEmail:hover {
          text-decoration: underline;
        }
    </style>
  </head>
  <body>
    <nav class="site-header sticky-top py-1 bg-dark">
      <div class="container d-flex flex-column flex-md-row justify-content-between">
        <a class="py-2 d-none d-md-inline-block" href="index.html">Inicio</a>
        <a class="py-2 d-none d-md-inline-block" href="categories.html">Categorías</a>
        <a class="py-2 d-none d-md-inline-block" href="products.html">Productos</a>
        <a class="py-2 d-none d-md-inline-block" href="sell.html">Vender</a>
        <a class="py-2 d-none d-md-inline-block" href="cart.html">Mi carrito</a>
        <div class="btn-group">
          <button id="showEmail" class="py-2 d-none d-md-inline-block dropdown-toggle" type="button" data-toggle="dropdown" style="width: 180px; background-color: #343a40; color: white; border-style: hidden;">
            <script>
              let htmlContentToAppend = "";
              if (localStorage.getItem('usuario') != null) {
                htmlContentToAppend += `
              <span> ` + localStorage.getItem("usuario") + ` </span>
              `
              }else{
                htmlContentToAppend += `
              <span> ` + sessionStorage.getItem("usuario") + ` </span>
              `
              }
              document.getElementById("showEmail").innerHTML = htmlContentToAppend;
            </script>
          </button>
  
          <ul class="dropdown-menu">
            <button id="cerrarSesion" class="py-2 d-none d-md-inline-block" style="width: 178px; background-color: white; color: #343a40; border-style: hidden;" onclick="cerrar()">Cerrar sesión</button>
          </ul>
        </div>
      </div>
    </nav>
    <script type="text/javascript">
      function cerrar(){
          localStorage.clear();
          sessionStorage.clear();
          location.href="login.html";
       }
    </script>
    <main role="main" class="pb-5">
      <div class="text-center p-4">
        <h2>Listado</h2>
        <p class="lead">Conocé nuestros productos.</p>
      </div>
      
      <div class="container">
  
  <!-- botones para ordenar -->
  
        <div class="row">
          <div class="col text-right">
              <div class="btn-group btn-group-toggle mb-4" data-toggle="buttons">
                  <label class="btn btn-light" id="sortAsc" >
                      <input type="radio" name="options" autocomplete="off"><i class="fas fa-sort-amount-down mr-1"></i>$</label>
                  <label class="btn btn-light" id="sortDesc" >
                      <input type="radio" name="options" autocomplete="off"><i class="fas fa-sort-amount-up mr-1"></i>$</label>
                  <label class="btn btn-light" id="sortByCount" >
                      <input type="radio" name="options" autocomplete="off"><i class="fas fa-sort-amount-down mr-1"></i>Rel.
                  </label>
              </div>
          </div>
  
            <!-- campo de busqueda -->
  
          <div class="col-3 p-0">
            <input type="text" name="" class="form-control" placeholder="Buscar..." id="barraBusqueda"/>
          </div>
      </div>
  
      <!-- Campos para filtrar -->
  
      <div class="row justify-content-end">
        <div class="col-md-6"></div>
          <div class="col-md-6 col-sm-12 mb-1 container">
            <div class="row container p-0 m-0">
              <div class="col">
                <p class="font-weight-normal text-right my-2">Precio:</p>
              </div>
              <div class="col">
                <input class="form-control" type="number" placeholder="min." id="rangeFilterCountMin">
              </div>
              <div class="col">
                <input class="form-control" type="number" placeholder="máx." id="rangeFilterCountMax">
              </div>
              <div class="col-3 p-0">
                <div class="btn-group" role="group">
                  <button class="btn btn-light btn-sm" style="width: 75px; height: 37px;" id="rangeFilterCount">Filtrar</button>
                  <button class="btn btn-light btn-sm" style="width: 75px; height: 37px;" id="clearRangeFilter">Limpiar</button> <!-- BOTON PARA RESTABLECER LA PAGINA -->
                </div>
              </div>
            </div>
          </div>
        </div>
      
      
        <div class="row">
          <div class="list-group" id="cat-list-container">
          </div>
        </div>
      </div>
    </main>
    
    
    <div id="spinner-wrapper"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
    <footer class="text-muted">
      <div class="container">
        <p class="float-right">
          <a href="#">Volver arriba</a>
        </p>
        <p>Este sitio forma parte de Desarrollo Web - JAP - 2020</p>
        <p>Clickea <a target="_blank" href="Letra.pdf">aquí</a> para descargar la letra del obligatorio.</p>
      </div>
    </footer>
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/init.js"></script>
    <script src="js/products.js"></script>
  </body>
  </html>
