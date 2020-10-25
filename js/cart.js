var articlesArray = [ ];

function showArticles(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.articles.length; i++){
        let article = array.articles[i];

        htmlContentToAppend += `
          <tr>
            <td style="width: 10%"><img width="80%" src="` + article.src + `"></td>
            <td style="width: 22%;">`+ article.name +`</td>
            <td style="width: 15%;">`+ article.currency +`</td>
            <td style="width: 15%;">`+ article.unitCost + `</td>
            <td style="width: 15%"><input min="1" style="width: 43%; border: 1px solid lightgray; border-radius:0.2rem;" type="number" value="` + article.count + `"></td>
            <td style="width: 1%">`+ article.count*article.unitCost +`</td>
            <td class="btn-removeItem">
                    <button type="button"" class="button btn-danger">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </td>
          </tr>
        `
        document.getElementById("articles-container").innerHTML = htmlContentToAppend;        
        
            document.getElementsByTagName("input")[1].addEventListener("change", function(){
                document.getElementsByTagName("td")[11].textContent = ($(this).val()*article.unitCost);
                document.getElementById("productCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40));

                if (document.getElementById("goldradio").checked === true){
                    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.15);
                    document.getElementById("totalCostText").innerHTML = parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40) + parseInt(document.getElementById("comissionText").textContent);
    
                }
                if (document.getElementById("premiumradio").checked === true){
                    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.07);
                    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);
    
                }
            
                if (document.getElementById("standardradio").checked === true){
                    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.05);
                    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);

                }

            });
            
            document.getElementsByTagName("input")[0].addEventListener("change", function(){
                document.getElementsByTagName("td")[5].textContent = $(this).val()*array.articles[0].unitCost;
                document.getElementById("productCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40));

                if (document.getElementById("goldradio").checked === true){
                    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.15);
                    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);
    
                }
                if (document.getElementById("premiumradio").checked === true){
                    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.07);
                    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);

                }
            
                if (document.getElementById("standardradio").checked === true){
                    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.05);
                    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);
    
                }

            });     
    }
            document.getElementById("productCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40));
        
let envío = `<div class="d-block my-3">
<div class="custom-control custom-radio">
  <input id="goldradio" name="publicationType" type="radio" class="custom-control-input" checked="" required="">
  <label class="custom-control-label" for="goldradio">Premium: 2 a 5 días (15%)</label>
</div>
<div class="custom-control custom-radio">
  <input id="premiumradio" name="publicationType" type="radio" class="custom-control-input" required="">
  <label class="custom-control-label" for="premiumradio">Express: 5 a 8 días (7%)</label>
</div>
<div class="custom-control custom-radio">
  <input id="standardradio" name="publicationType" type="radio" class="custom-control-input" required="">
  <label class="custom-control-label" for="standardradio">Estándar: 12 a 15 días (5%)</label>
</div>
</div>`

document.getElementById("envío").innerHTML = envío;

function getCardType() {
    let num = document.getElementById("ccNumber").value;
    let numArr = num.split('');
    if (numArr[0] == 3 && (numArr[1] == 4 || numArr[1] == 7)) {
        alert('American Express');
    }
    if (numArr[0] == 4) {
        alert('Visa');
    }
    if (numArr[0] == 3 && numArr[1] == 0 && ((1 <= numArr[2]) && (numArr[2] <= 5) || (numArr[2] == 9))) {
        alert('Diners Club');
    }
    if (((numArr[0] == 5) && ((numArr[1] >= 1) && (numArr[1] <= 5))) || ((numArr[0] == 2) && ((numArr[1] >= 2) && (numArr[1] <= 7)))) {
        alert('MasterCard');
    }
    if((num.split('',2) == '3,5') || (num.split('',4) == '2,1,3,1') || (num.split('',4) == '1,8,0,0')){
        alert('JCB');
    }
    if((num.split('',4) == '6,0,1,1') || (num.split('',2) == '6,5') || ((num.split('', 2) == '6,4') && (numArr[2] >= 4) && (numArr[2] <= 9))){
        alert('Discover');
    }
}

function validateCard(){
    //funcion tomada de https://gist.github.com/DiegoSalazar/4075533
    let value = document.getElementById("ccNumber").value;
    if (/[^0-9-\s]+/.test(value)) return false;
    
	let nCheck = 0, bEven = false;
	value = value.replace(/\D/g, "");

	for (var n = value.length - 1; n >= 0; n--) {
		var cDigit = value.charAt(n),
			  nDigit = parseInt(cDigit, 10);

		if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

		nCheck += nDigit;
		bEven = !bEven;
	}

	alert((nCheck % 10) == 0);
}
document.getElementById("ccNumber").addEventListener("change", function () {
    getCardType();
    validateCard();
})

document.getElementById("goldradio").addEventListener("change", function(){
        document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.15);
        document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);
    });
document.getElementById("premiumradio").addEventListener("change", function(){
    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.07);
    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);

});

document.getElementById("standardradio").addEventListener("change", function(){
    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.05);
    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);

});

if (document.getElementById("goldradio").checked === true){
    document.getElementById("comissionText").innerHTML = Math.round((parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) * 0.15);
    document.getElementById("totalCostText").innerHTML = (parseInt(document.getElementsByTagName("td")[5].textContent) + parseInt(document.getElementsByTagName("td")[11].textContent*40)) + parseInt(document.getElementById("comissionText").textContent);

}
}



//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData("https://japdevdep.github.io/ecommerce-api/cart/654.json").then(function(resultObj){
        if (resultObj.status === "ok")
        {
            articlesArray = resultObj.data;
            //Muestro los artículos ordenados
            showArticles(articlesArray);
        }
    });
});;

