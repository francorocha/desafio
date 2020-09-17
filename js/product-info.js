var currentProductsArray = [];
var currentCommentsArray = [];
var currentRelatedArray = [];
var product = {};

function showImagesGallery(array) {
    let htmlContentToAppend = "";
    var activar;

	for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];
        
        if(i == 0) activar = "active";
        else activar = "";

		htmlContentToAppend +=
			`<div class="carousel-item  `+ activar +`">
                <img src="` + imageSrc + `" class="d-block w-100" alt="">
         </div>
        `

		document.getElementById("Carrosel").innerHTML = htmlContentToAppend;
	}
}
function createCard(object){
    let card = `
        <div class="card withzoom" style="width: 18em; height:23em; margin-right: 1em";>
        <img class="card-img-top" src="`+ object.imgSrc +`" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">`+ object.name +`</h5>
            <p class="card-text"><hr>`+ object.description +`</p>
        </div>
        </div>
    `
    return card;
}

function showRelatedProducts(array){

    let htmlContentToAppend = "";
		let product1 = array[1];
        let product2 = array[3]; 

            htmlContentToAppend += `
            <div style="display:flex;">
            <div> <a class="custom-card" href="./product-info.html" style="text-decoration: none;">`+
            createCard(product1) + `
            </div> </a>
            <div> <a class="custom-card" href="./product-info.html" style="text-decoration: none">` +
            createCard(product2) + `            
            </div> </a>
            </div>
            `
        document.getElementById("productRelated").innerHTML = htmlContentToAppend;
}



function showComments(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
		let comment = array[i];  
		let stars = "";

		for (let i=0; i<comment.score; i++){
			stars += `
				<span class="fa fa-star checked"></span>
			`;
		}
		for (let i=comment.score; i<5; i++){
			stars += `
				<span class="fa fa-star"></span>
			`;
		}
		
            htmlContentToAppend += `
            <div class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                    <i class="fas fa-user"></i>`+ " " + comment.user +`
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">` + stars + `
                            <small class="text-muted">` + comment.dateTime + ` </small>
                        </div>
                        <p class="mb-1">` + comment.description + `</p>
                    </div>
                </div>
            </div>
            `
        document.getElementById("productComments").innerHTML = htmlContentToAppend;
	}
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
	getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
		if (resultObj.status === "ok") {
			product = resultObj.data;

			let productNameHTML = document.getElementById("productName");
			let productCostHTML = document.getElementById("productCost");
			let productDescriptionHTML = document.getElementById(
				"productDescription"
			);
			let productCategoryHTML = document.getElementById(
				"productCategory"
			);
			let productSoldCountHTML = document.getElementById(
				"productSoldCount"
			);

			productNameHTML.innerHTML = product.name;
			productCostHTML.innerHTML = "USD " + product.cost;
			productDescriptionHTML.innerHTML = product.description;
			productCategoryHTML.innerHTML =
				'<a href="./category-info.html">' + product.category + "</a>";
			productSoldCountHTML.innerHTML = product.soldCount;

			//Muestro las imagenes en forma de galería
			showImagesGallery(product.images);
		}
	});
});
	
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            currentCommentsArray = resultObj.data;
            showComments(currentCommentsArray);
        }
    });
});

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            currentRelatedArray = resultObj.data;
            showRelatedProducts(currentRelatedArray);
        }
    });
});

document.getElementById("enviar").addEventListener("click", function(){
    var comentario = document.getElementById("productComments").value;

    var puntuacion = document.getElementById("puntua").value;

    var dateTime = new Date().toLocaleDateString();

    var user = localStorage.getItem("usuario");

    user = user.email;

    var objetoComentario = {

        comment: comentario,
        score: puntuacion,
        fecha: dateTime,
        usuario: user
    }

    var cadObjetComment = JSON.stringify(objetoComentario);

    localStorage.setItem("Comment", cadObjetComment);

})
