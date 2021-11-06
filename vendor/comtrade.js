document.querySelector("body").addEventListener("load", getJSON);

//! JSON LOCAL - CJENOVNIK COMTRADE
function getJSON() {
  fetch("vendor/cjenovnik-comtrade.json")
    .then((res) => res.json()) //? function(res){return res.json()}
    .then((data) => {
      console.log(data); //? Suvi tekst ce izbaciti
      let output = "";
      data.forEach((item) => {
        output += `
        <div class="grid_1_of_4 images_1_of_4 hvr-float">
             <a href="#">
                 <img src="https://www.comtradedistribution.com/wp-content/themes/comtrade_distribution/images/distribution-share.jpg" alt="" /></a>
             <h2 style="margin-top:8px;" class="text-center text-uppercase font-weight-bolder purple">
             ${item.naziv}
             </h2>
             <p><span style="color: #000;" class="price">${item.vpcena}
                     €</span></p>
             <br>
             <a href="#">
                 <input class="btn btn-secondary" type="button" value="Detalji">
             </a>
        </div>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}
