

datos.forEach((dato) => {
  let plantilla = `
	<div class="plantilla" _ngcontent-ymd-c247="">
      <div _ngcontent-ymd-c247="" class="card h-100 border-start-lg border-start-primary">
         <div _ngcontent-ymd-c247="" class="card-body">
            <div _ngcontent-ymd-c247="" class="small text-muted">${dato.especialidad}</div>
            <div _ngcontent-ymd-c247="" class="h3">${dato.tecnologia}</div>
            <a _ngcontent-ymd-c247="" href="${dato.enlace.href}" class="text-arrow-icon ${dato.enlace.clases}">
               ${dato.enlace.texto}
               <i-feather _ngcontent-ymd-c247="" name="arrow-right" _nghost-ymd-c59="">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="feather feather-arrow-right" style="
                     ">
                     <line x1="5" y1="12" x2="19" y2="12"></line>
                     <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
               </i-feather>
            </a>
         </div>
      </div>
   </div>`;
  document.querySelector(".fila").innerHTML += plantilla;
});
