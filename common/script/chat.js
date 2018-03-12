$(function(){
    

    $("body").prepend(`
    <button type="button" class=" chat-show "><i class="fa fa-angle-double-left" id="arrowBtn" aria-hidden="true"></i></button>
    <div class="container-fluid position-fixed p-0 m-0 chatContainer" style="padding:50px;">
       <div class="row ">
           <!-- let part of chat pepople online -->
           <div class="col col-sm-12 col-md-3 col-lg-3 p-0 m-0 colum-left">   
               <div class="card p-0 right-colum ">
              <div class="card-header p-0 px-3">
                <input type="password" class="form-control mt-3 mb-2" id="exampleInputPassword1" placeholder="Search mesages...">
            </div>
             </div>
        
             <div class="card-block mesage-history p-0 m-0">
               <a href="#" class="mesage-link">
                  <div class="media mesages pt-3 pl-2  text-muted">
                      <img class="d-flex mr-3   rounded-circle" src="../common/img/images2.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                      <div class="media-body text-muted  ">
                        <span>Tomas Aleksievic</span> <span class="time ml-3"> 7:23 pm</span>
                       <p class="text-justufy "><small class="text-muted  ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium.
                       </small></p> 
                      </div>
                 
                    </div>
               </a>
               <a href="#" class="mesage-link">
                  <div class="media mesages pt-3 pl-2  text-muted">
                      <img class="d-flex mr-3   rounded-circle" src="../common/img/images2.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                      <div class="media-body text-muted ">
                        <span>Tomas Aleksievic</span> <span class="time ml-3"> 7:23 pm</span>
                       <p class="text-justufy "><small class="text-muted  ">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium.
                       </small></p> 
                      </div>
                 
                    </div>
               </a>
               <a href="#" class="mesage-link">
            <div class="media mesages pt-3 pl-2  text-muted">
                <img class="d-flex mr-3   rounded-circle" src="../common/img/images2.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                <div class="media-body text-muted  ">
                  <span>Tomas Aleksievic</span> <span class="time ml-3"> 7:23 pm</span>
                 <p class="text-justufy "><small class="text-muted  ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium.
                 </small></p> 
                </div>
           
              </div>
            </a>
            <a href="#" class="mesage-link">
                <div class="media mesages pt-3 pl-2  text-muted">
                    <img class="d-flex mr-3   rounded-circle" src="../common/img/images0.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                    <div class="media-body text-muted  ">
                      <span>Tomas Aleksievic</span> <span class="time ml-3"> 7:23 pm</span>
                     <p class="text-justufy "><small class="text-muted  ">
                       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae saepe earum cum quaerat suscipit quod.
                     </small></p> 
                    </div>
               
                  </div>
            </a>
            <a href="#" class="mesage-link">
                <div class="media mesages pt-3 pl-2  text-muted">
                    <img class="d-flex mr-3   rounded-circle" src="../common/img/images5.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                    <div class="media-body text-muted ">
                      <span>Tomas Aleksievic</span> <span class="time ml-3"> 7:23 pm</span>
                     <p class="text-justufy "><small class="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium.
                     </small></p> 
                    </div>
               
                  </div>
                  </a>
                  <a href="#" class="mesage-link">
                  <div class="media mesages pt-3 pl-2  text-muted">
                      <img class="d-flex mr-3   rounded-circle" src="../common/img/images4.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                      <div class="media-body text-muted ">
                        <span>Tomas Aleksievic</span> <span class="time ml-3"> 7:23 pm</span>
                       <p class="text-justufy "><small class="text-muted  ">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium.
                       </small></p> 
                      </div>
                 
                    </div>
                  </a>
                  <a href="#" class="mesage-link">
                    <div class="media mesages pt-3 pl-2  text-muted">
                        <img class="d-flex mr-3   rounded-circle" src="../common/img/images1.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                        <div class="media-body text-muted  ">
                          <span>Tomas Aleksievic</span> <span class="time ml-3"> 7:23 pm</span>
                         <p class="text-justufy "><small class="text-muted  ">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium.
                         </small></p> 
                        </div>
                   
                      </div>
                  </a>
                    <!-- </div> -->
          </div> 




            
           </div>
           <!-- online profile and search input -->
           <div class="col col-sm-12 col-md-9 col-lg-9 m-0 colum-middle">
          
            <!-- row input -->
            <div class="row p-0">
                <!-- chat with -->
                    <div class="col col-sm-8 p-0 m-0 colum-right ">
                            <div class="card p-0">
                                    <div class="card-header">
                                            <button type="button" class="btn btn-outline-danger">Back</button>
                                            <span class="profileName">Vesna Vasilevska</span>
                                            <button type="button" class="btn btn-outline-danger" style="float:right;">View Profile</button>
                                    </div>
                                    <div class="card-block chat-history">
                                        <div class="media pt-1 text-muted">
                                            <img class="d-flex mr-3   rounded-circle" src="../common/img/images2.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                                            <div class="media-body text-muted pt-1 ">
                                             <p class="caht-text p-2 mr-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, minus!</p>
                                            
                                             <p class="text-center pt-1"><small class="text-muted  ">
                                               Thrsday,March 21,2018 at 10:53AM
                                             </small></p> 
                                            </div>
                                       
                                          </div>
                                          <div class="media pt-1 text-muted ">
                                              
                                              <div class="media-body text-muted pt-1 ">
                                               <p class="chat-text-domain p-2 ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit repellendus qui, tempora incidunt perferendis quos eligendi et iure? Ratione, eos.
                                                  Odit repellendus qui, tempora incidunt perferendis quos eligendi et iure? Ratione, eos.
                                               </p>
                                              
                                               <p class="text-center pt-1"><small class="text-muted">
                                                  Thrsday,March 21,2018 at 10:54AM
                                               </small></p> 
                                              </div>
                                              <img class="d-flex ml-3  rounded-circle" src="../common/img/images5.jpg" alt="Generic placeholder image "  style="width :30px; height:30px; ">
                                            </div>
                                            <div class="media pt-1 text-muted  ">
                                                <img class="d-flex mr-3   rounded-circle" src="../common/img/images2.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                                                <div class="media-body text-muted pt-1 ">
                                                 <p class="caht-text p-2 mr-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus porro possimus provident aliquid praesentium animi suscipit cumque repudiandae dolorum odio, quia natus minima dolore accusamus laborum dignissimos debitis aspernatur iusto sint veniam modi ratione? Voluptate.</p>
                                                
                                                 <p class="text-center pt-1"><small class="text-muted  ">
                                                    Thrsday,March 21,2018 at 10:56 AM
                                                 </small></p> 
                                                </div>
                                           
                                              </div>
                                              <div class="media pt-1 text-muted ">
                                              
                                                  <div class="media-body text-muted pt-1 ">
                                                   <p class="chat-text-domain p-2 ml-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.Odit repellendus qui, tempora incidunt perferendis quos eligendi et iure? Ratione, eos.
                                                      Odit repellendus qui, tempora incidunt perferendis quos eligendi et iure? Ratione, eos.
                                                   </p>
                                                  
                                                   <p class="text-center pt-1"><small class="text-muted">
                                                      Thrsday,March 21,2018 at 10:58AM
                                                   </small></p> 
                                                  </div>
                                                  <img class="d-flex ml-3  rounded-circle" src="../common/img/images5.jpg" alt="Generic placeholder image "  style="width :30px; height:30px; ">
                                                </div>
                                                <div class="media pt-1 text-muted  ">
                                                    <img class="d-flex mr-3   rounded-circle" src="../common/img/images2.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                                                    <div class="media-body text-muted pt-1 ">
                                                     <p class="caht-text p-2 mr-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus porro possimus provident aliquid praesentium animi suscipit cumque repudiandae dolorum odio, quia natus minima dolore accusamus laborum dignissimos debitis aspernatur iusto sint veniam modi ratione? Voluptate.</p>
                                                    
                                                     <p class="text-center pt-1"><small class="text-muted  ">
                                                        Thrsday,March 21,2018 at 10:59 AM
                                                     </small></p> 
                                                    </div>
                                               
                                                  </div>
                                              
                                   </div>
                                   <div class="media-body caht-text-submit p-2">
                                      <form class="form-inline ml-2 pt-2">
                                          <label for="inlineFormInput"> <img class="d-flex ml-2  rounded-circle" src="../common/img/images5.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; "></label>
                                          <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0 ml-2" id="inlineFormInput" placeholder="Type your text..." style="width:60%;">
                                          
                                          <button type="submit" class="btn btn-primary ml-5">Chat</button>
                                        </form>
                                    
                                    </div>

                                  </div>

            </div>

            <div class="col col-sm-4 p-0 colum-right">
                   <div class="card p-0  text-muted ">
                      <div class="card" style="width: 18rem;">
                          <img class="card-img-top usrer-card mx-auto mt-3" src="../common/img/images5.jpg" alt="Card image cap" style="width:100px; width:100px; border-radius:50px;">
                          <div class="card-body">
                            <h5 class="card-title text-center mt-2">Saso Davidovik</h5>
                          </div>
                        </div>
                        <p class="card-text mt-2"><small class="text-muted pl-3">NAVIGATION</small></p>
                   <p class="card-text text-muted pl-3">
                    <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i><span class="navig pl-4">GROUPS</span> </a>
                     </p>
                     <p class="card-text text-muted pl-3 "  >
                     <a href="#" class="active"><i class="fa fa-commenting-o" aria-hidden="true"></i></i><span class="navig pl-4"  >MEMBERS</span> </a>
                     </p>
                     
                      <p class="card-text mt-2"><small class="text-muted pl-3">PEOPLE ONLINE</small></p>
                      <div class="card-body users-body">
                      <a href="#" class="media_link"> 
                      <div class="media pl-3">
                            <img class="d-flex mr-3 mt-2  rounded-circle" src="../common/img/images0.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                            <div class="media-body text-info p-0 m-0">
                              Bojan Gjorgievski
                             <p> <small class="text-muted">Electrical engineer</small></p>
   
                            </div>
                          </div>
                      </a>
                      <a href="#" class="media_link"> 
                          <div class="media pl-3">
                                <img class="d-flex mr-3 mt-2  rounded-circle" src="../common/img/images4.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                                <div class="media-body text-info p-0 m-0">
                                  Bojan Gjorgievski
                                 <p> <small class="text-muted">Electrical engineer</small></p>
       
                                </div>
                              </div>
                          </a>
                          <a href="#" class="media_link"> 
                              <div class="media pl-3">
                                    <img class="d-flex mr-3 mt-2  rounded-circle" src="../common/img/images5.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                                    <div class="media-body text-info p-0 m-0">
                                      Bojan Gjorgievski
                                     <p> <small class="text-muted">Electrical engineer</small></p>
           
                                    </div>
                                  </div>
                              </a>
                          <a href="#" class="media_link">
                          <div class="media pl-3">
                                <img class="d-flex mr-3 mt-2  rounded-circle" src="../common/img/images1.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                                <div class="media-body text-info p-0 m-0">
                                  Rihaim Vendor
                                 <p><small class="text-muted">Programer</small></p> 
                                </div>
                              </div>
                              </a>
                              <a href="#" class="media_link"> 
                              <div class="media pl-3">
                                    <img class="d-flex mr-3 mt-2  rounded-circle" src="../common/img/images2.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                                    <div class="media-body text-info p-0 m-0">
                                      Vrnar Bolder
                                     <p><small class="text-muted">Seales </small></p> 
                                    </div>
                                  </div>
                                </a>
                                  <a href="#" class="media_link"> 
                                      <div class="media pl-3">
                                        <img class="d-flex mr-3 mt-2  rounded-circle" src="../common/img/images4.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                                        <div class="media-body text-info p-0 m-0">
                                          Majlo Some
                                         <p><small class="text-muted">Owner</small></p> 
                                        </div>
                                   
                                      </div>
                                  </a>
                                  <a href="#" class="media_link"> 
                                        <div class="media pl-3">
                                          <img class="d-flex mr-3 mt-2  rounded-circle" src="../common/img/images5.jpg" alt="Generic placeholder image"  style="width :30px; height:30px; ">
                                          <div class="media-body text-info p-0 m-0">
                                            Dejan Dimovski
                                           <p><small class="text-muted">Disaenr</small></p> 
                                          </div>
                                     
                                        </div>
                                    </a>
                                  </div>
                                   
                        <p class="card-text text-muted mt-0 pb-4 text-center">
                          
                         <a class="text-muted footer" href="#">ABOUTH </a><a class="text-muted footer pl-3" href="#">HELP </a><a class="text-muted footer pl-3" href="#">CONTACT </a>
                         </p>
                     

             </div> 
          
               </div>
           </div>
       </div>
    </div>
    `);

    let chatContainer=$('.container-fluid');
    let chatBtn=$('.chat-show');

    $('.chat-show').on('click',()=>{
        if(chatContainer.css('display')==="none"){
            chatContainer.show("slide", { direction: "right" }, 1000,()=>{
                chatBtn.css({
                    "right":`${ chatContainer.width() +15}px`
                });
                chatBtn.html('<i class="fa fa-angle-double-right" aria-hidden="true"></i>').css({
                "height":"6vh",
                "top":"10px",
                "outline":"none",
                "border":"none"});
            });
        }
        else {
            chatBtn.hide();
                chatContainer.hide("slide", { direction: "right" }, 1000, ()=>{
                    chatBtn.css("right","0px");
                    chatBtn.html('<i class="fa fa-angle-double-left" aria-hidden="true"></i>').css({
                        "height":"6vh",
                        "top": "6vh"
                                        });
                    chatBtn.show("slide", { direction: "right" }, 200);
                });
        }
    });
});