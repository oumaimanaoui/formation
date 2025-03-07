import React from 'react';
import './categories.css'; // Importez votre fichier CSS
 // Assurez-vous que le chemin est correct

function Categories() {
  return (
    <div class="container-xxl py-5 category">
       <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;">
            <h6 class="section-title bg-white text-center text-primary px-3">
                ::before
                 <font style="vertical-align: inherit;">
                    <font style="vertical-align: inherit;">Catégories</font>
                 </font>
               ::after
            </h6>
           <h1 class="mb-5">
        <font style="vertical-align: inherit;">
          <font style="vertical-align: inherit;">Catégories de cours</font>
        </font>
      </h1>
    </div>
    <div class="row g-3">
      <div class="col-lg-7 col-md-6">
        <div class="row g-3">
          <div class="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: zoomIn;">
            <a class="position-relative d-block overflow-hidden" href="">
              <img class="img-fluid" src="img/cat-1.jpg" alt=""/>
                 <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin: 1px;">
                    <h5 class="m-0">
                        <font style="vertical-align: inherit;">
                           <font style="vertical-align: inherit;">Conception de sites Web</font>
                        </font>
                     </h5>
                     <small class="text-primary">
                         <font style="vertical-align: inherit;">
                           <font style="vertical-align: inherit;">49 cours</font>
                            </font>
                       </small>
                
                
                  </div>
            </a>
          </div>
         
   <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s" style="visibility: visible; animation-delay: 0.3s; animation-name: zoomIn;">
      <a class="position-relative d-block overflow-hidden" href="">
        <img class="img-fluid" src="img/cat-2.jpg" alt=""/>
        <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin: 1px;"></div>
      </a>
   </div>
    <div class="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: zoomIn;"></div>
      </div>
  </div>
  <div class="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style="min-height: 350px; visibility: visible; animation-delay: 0.7s; animation-name: zoomIn;">
    <a class="position-relative d-block h-100 overflow-hidden" href="">
       <img class="img-fluid position-absolute w-100 h-100" src="img/cat-4.jpg" alt="" style="object-fit: cover;"/>
       <div class="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style="margin: 1px;">
           <h5 class="m-0">
               <font style="vertical-align: inherit;">
               <font style="vertical-align: inherit;">Marketing en ligne</font>
               </font>
             </h5>
               <small class="text-primary">
                    <font style="vertical-align: inherit;">
                   <font style="vertical-align: inherit;">49 cours</font>
                   </font>
                 </small>
         </div>
      </a>
   </div>
  </div>
   </div>
</div>
  );
}

export default Categories;