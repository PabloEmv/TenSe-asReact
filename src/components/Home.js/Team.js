import React from "react";
import diegoImg from '../../assets/team/diego.jpeg'
import nelsonImg from '../../assets/team/nelson.jpeg'
import mariImg from '../../assets/team/mari.jpeg'
import pabloImg from '../../assets/team/pablo.png'
import kiaraImg from '../../assets/team/kiara.jpeg'

const TeamComponent = () => {
  return (
    <div>
      <header class="text-center py-2 mb-4 mt-5" style={{background: "rgba(37,162,213,255)"}}>
        <div class="container">
          <h2 class="fw-light text-white fs-3">Conoce al Equipo</h2>
        </div>
      </header>

      <div class="container">
        <div class="row">
          {/* <!-- Team Member 1 --> */}
          <div class="col mb-4">
            <div class="card border-0 shadow">
              <img
                src={kiaraImg}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Kiara Díaz</h5>
                <div class="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          {/* <!-- Team Member 2 --> */}
          <div class="col mb-4">
            <div class="card border-0 shadow">
              <img
                src={mariImg}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Mariana Pezoa</h5>
                <div class="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          {/* <!-- Team Member 3 --> */}
          <div class="col mb-4">
            <div class="card border-0 shadow">
              <img
                src={nelsonImg}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Nelson Baez</h5>
                <div class="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          {/* <!-- Team Member 4 --> */}
          <div class="col mb-4">
            <div class="card border-0 shadow">
              <img
                src={diegoImg}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Diego Olmos</h5>
                <div class="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
          {/* <!-- Team Member 5 --> */}
          <div class="col mb-4">
            <div class="card border-0 shadow">
              <img
                src={pabloImg}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body text-center">
                <h5 class="card-title mb-0">Pablo Martínez</h5>
                <div class="card-text text-black-50">Web Developer</div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- /.row --> */}
      </div>
      {/* <!-- /.container --> */}
    </div>
  );
};

export default TeamComponent;
