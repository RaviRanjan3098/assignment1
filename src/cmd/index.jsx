 import { Link } from "react-router-dom";
import React from "react";
import "./Nextpage/index"

function Home() {
  return (
    <>
    <div style={{backgroundColor:"rgb(185, 240, 240" }}>
     <div>  
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" 
  style={{backgroundColor:"rgb(210, 241, 241)",marginBottom:"-8px",
   marginTop:"-8px"}}>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Relevance
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          All brands
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>

   </div>

   <div>
   <div className="row align-items-start" >
       <div className="col">
               
       <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/download3.jpg"class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img/download4.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img/download5.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
              </div>
             <div>
                <div className="main1">
                  <div className="main3"><h6> Toyota RAV4</h6> </div>
                  <div className="main4"> <p> 2021</p>  </div>
                  </div>  
                  <div className="container text-center">
            <div className="row">
              <div className="col-6 col-sm-4">
                <img
                  src="./img/people.png"
                  style={{ float: "left", width: "15%", Color: "blue" }}
                />
                 <p> 4 people</p>             </div>
              <div className="col-6 col-sm-6">
                <img
                  src="./img/location.png"
                  style={{ float: "left", width: "15%" }}
                />
                  <p>Gasoline</p>
              </div>
              <div className="col-6 col-sm-4">
                <img
                  src="./img/sm.png"
                  style={{ float: "left", width: "15%" }}
                />
                  <p> 8.2km/1-Litre</p>
               
              </div>
              <div className="col-6 col-sm-6">
                <img
                  src="./img/direction.png"
                  style={{ float: "left", width: "15%" }}
                />
                <p> Automatic</p>
               
              </div>
              <hr  />
              <div className="main10">
                 <div style={{marginTop:"15px"}}> <h6> $350<subscript>/month</subscript></h6></div>
                 <div> 
                     <div> <img src="./img/heart.png"
                      style={{ float: "left", width: "15%", Color: "blue" }}/></div>
                    <div> <button style={{backgroundColor:"green"}}> Rent now</button></div>
                     </div>
               </div>
            </div>
            
          </div>

                  
          </div>
    </div>
              <div className="col">
              <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/download13.jpg"class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img/download14.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img/download16.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
                </div>
                <div>
                <div className="main1">
                  <div className="main3"><h6> Toyota RAV4</h6> </div>
                  <div className="main4"> <p> 2021</p>  </div>
                  </div>  
                  <div className="container text-center">
            <div className="row">
              <div className="col-6 col-sm-4">
                <img
                  src="./img/people.png"
                  style={{ float: "left", width: "15%", Color: "blue" }}
                />
                 <p> 4 people</p>             </div>
              <div className="col-6 col-sm-6">
                <img
                  src="./img/location.png"
                  style={{ float: "left", width: "15%" }}
                />
                  <p>Hybrid</p>
              </div>
              <div className="col-6 col-sm-4">
                <img
                  src="./img/sm.png"
                  style={{ float: "left", width: "15%" }}
                />
                  <p> 6.1km/1-Litre</p>
               
              </div>
              <div className="col-6 col-sm-6">
                <img
                  src="./img/direction.png"
                  style={{ float: "left", width: "15%" }}
                />
                <p> automatic</p>
               
              </div>
              <hr  />
              <div className="main10">
                 <div style={{marginTop:"15px"}}> <h6> $440<subscript>/month</subscript></h6></div>
                 <div> 
                     <div> <img src="./img/heart.png"
                      style={{ float: "left", width: "15%", Color: "blue" }}/></div>
                    <div> <button style={{backgroundColor:"green"}}> Rent now</button></div>
                     </div>
               </div>
            </div>
            
          </div>

                  
          </div>
              </div>
              <div className="col">
              <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/download16.jpg"class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img/download14.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img/download5.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
                </div>
                <div>
                <div className="main1">
                  <div className="main3"><h6> Toyota RAV4</h6> </div>
                  <div className="main4"> <p> 2021</p>  </div>
                  </div>  
                  <div className="container text-center">
            <div className="row">
              <div className="col-6 col-sm-4">
                <img
                  src="./img/people.png"
                  style={{ float: "left", width: "15%", Color: "blue" }}
                />
                 <p> 4 people</p>             </div>
              <div className="col-6 col-sm-6">
                <img
                  src="./img/location.png"
                  style={{ float: "left", width: "15%" }}
                />
                  <p>Hybrid</p>
              </div>
              <div className="col-6 col-sm-4">
                <img
                  src="./img/sm.png"
                  style={{ float: "left", width: "15%" }}
                />
                  <p> 6.1km/1-Litre</p>
               
              </div>
              <div className="col-6 col-sm-6">
                <img
                  src="./img/direction.png"
                  style={{ float: "left", width: "15%" }}
                />
                <p> automatic</p>
               
              </div>
              <hr  />
              <div className="main10">
                 <div style={{marginTop:"15px"}}> <h6> $440<subscript>/month</subscript></h6></div>
                 <div> 
                     <div> <img src="./img/heart.png"
                      style={{ float: "left", width: "15%", Color: "blue" }}/></div>
                    <div> <button style={{backgroundColor:"green"}}> Rent now</button></div>
                     </div>
               </div>
            </div>
            
          </div>

                  
          </div>
              </div>
             
            </div>
      </div>

      <div>
            <div className="row align-items-start" style={{ gap: "0%" }}>
              <div className="col">
               
       <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/download13.jpg"class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img/download4.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img/download5.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
              </div>
              <div>
                <div className="main1">
                  <div className="main3"><h6> Volkswagan T-cross</h6> </div>
                  <div className="main4"> <p> 2019</p>  </div>
                  </div>  
                  <div className="container text-center">
            <div className="row">
              <div className="col-6 col-sm-4">
                <img
                  src="./img/people.png"
                  style={{ float: "left", width: "15%", Color: "blue" }}
                />
                 <p> 4 people</p>             </div>
              <div className="col-6 col-sm-6">
                <img
                  src="./img/location.png"
                  style={{ float: "left", width: "15%" }}
                />
                  <p>Gasoline</p>
              </div>
              <div className="col-6 col-sm-4">
                <img
                  src="./img/sm.png"
                  style={{ float: "left", width: "15%" }}
                />
                  <p> 5.3km/1-Litre</p>
               
              </div>
              <div className="col-6 col-sm-6">
                <img
                  src="./img/direction.png"
                  style={{ float: "left", width: "15%" }}
                />
                <p> automatic</p>
               
              </div>
              <hr  />
              <div className="main10">
                 <div style={{marginTop:"15px"}}> <h6> $400<subscript>/month</subscript></h6></div>
                 <div> 
                     <div> <img src="./img/heart.png"
                      style={{ float: "left", width: "15%", Color: "blue" }}/></div>
                    <div> <button style={{backgroundColor:"green"}}> Rent now</button></div>
                     </div>
               </div>
            </div>
            
          </div>

                  
          </div>
              </div>
              <div className="col">
              <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/download3.jpg"class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img/download14.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img/download16.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
                </div>
                <div>
                <div className="main1">
                  <div className="main3"><h6> Cadillac Escalade </h6> </div>
                  <div className="main4"> <p> 2020</p>  </div>
                  </div>  
                  <div className="container text-center">
            <div className="row">
              <div className="col-6 col-sm-4">
                <img
                  src="./img/people.png"
                  style={{ float: "left", width: "15%", Color: "blue" }}
                />
                 <p> 4 people</p>             </div>
              <div className="col-6 col-sm-6">
                <img
                  src="./img/location.png"
                  style={{ float: "left", width: "15%" }}
                />
                  <p>Hybrid</p>
              </div>
              <div className="col-6 col-sm-4">
                <img
                  src="./img/sm.png"
                  style={{ float: "left", width: "15%" }}
                />
                  <p> 7.7km/1-Litre</p>
               
              </div>
              <div className="col-6 col-sm-6">
                <img
                  src="./img/direction.png"
                  style={{ float: "left", width: "15%" }}
                />
                <p> automatic</p>
               
              </div>
              <hr  />
              <div className="main10">
                 <div style={{marginTop:"15px"}}> <h6> $620<subscript>/month</subscript></h6></div>
                 <div> 
                     <div> <img src="./img/heart.png"
                      style={{ float: "left", width: "15%", Color: "blue" }}/></div>
                    <div> <button style={{backgroundColor:"green"}}> Rent now</button></div>
                     </div>
               </div>
            </div>
            
          </div>

                  
          </div>
              </div>
              <div className="col">
              <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./img/download14.jpg"class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img/download16.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src="./img/download5.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
                </div>
                <div>
                <div className="main1">
                  <div className="main3"><h6>BMW 4 Series GTI</h6> </div>
                  <div className="main4"> <p> 2021</p>  </div>
                  </div>  
                  <div className="container text-center">
            <div className="row">
              <div className="col-6 col-sm-4">
                <img
                  src="./img/people.png"
                  style={{ float: "left", width: "15%", Color: "blue" }}
                />
                 <p> 4 people</p>             </div>
              <div className="col-6 col-sm-6">
                <img
                  src="./img/location.png"
                  style={{ float: "left", width: "15%" }}
                />
                  <p>Hybrid</p>
              </div>
              <div className="col-6 col-sm-4">
                <img
                  src="./img/sm.png"
                  style={{ float: "left", width: "15%" }}
                />
                  <p> 7.6km/1-Litre</p>
               
              </div>
              <div className="col-6 col-sm-6">
                <img
                  src="./img/direction.png"
                  style={{ float: "left", width: "15%" }}
                />
                <p> automatic</p>
               
              </div>
              <hr  />
              <div className="main10">
                 <div style={{marginTop:"15px"}}> <h6> $530<subscript>/month</subscript></h6></div>
                 <div> 
                     <div> <img src="./img/heart.png"
                      style={{ float: "left", width: "15%", Color: "blue" }}/></div>
                    <div> <button style={{backgroundColor:"green"}}> Rent now</button></div>
                     </div>
               </div>
            </div>
            
          </div>

                  
          </div>
              </div>
             
            </div>
      </div>
      
      <nav className="next">
         <ul class="pagination">
          <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><Link class="page-link" to="/Nextpage">1</Link></li>
    <li class="page-item"><Link class="page-link" to="/Nextpage">2</Link></li>
    <li class="page-item"><Link class="page-link" to="/Nextpage">3</Link></li>
    <li class="page-item"><Link class="page-link" to="/Nextpage">4</Link></li>
    <li class="page-item"><Link class="page-link" to="/Nextpage">5</Link></li>
    <li class="page-item"><Link class="page-link" to="/Nextpage">6</Link></li>
    <li class="page-item"><Link class="page-link" to="/Nextpage">7</Link></li>
    <li class="page-item"><Link class="page-link" to="/Nextpage">8</Link></li>
    <li class="page-item"><Link class="page-link" to="/Nextpage">9</Link></li>
    <li class="page-item"><Link class="page-link" to="/Nextpage">10</Link></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          </a>
         </li>
        </ul>
   </nav>
   
    </div>

    </>
  );
}

export default Home;