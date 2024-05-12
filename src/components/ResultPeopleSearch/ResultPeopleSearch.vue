<script setup></script>
<template>
  <main class="container">
    <div class="row">
      <div class="col-auto d-flex align-items-center gap-2">
        <img
          width="27"
          height="27"
          src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
          alt=""
          style="border-radius: 50%"
          class="img-fluid"
        />
        <p>People Search</p>
      </div>

      <div class="col-auto mt-3" style="border: solid 1px; padding: 15px">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="d-flex flex-col md:flex-row gap-3">
                <div>
                  <div class="people_result">
                    <img
                      src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-5-2.jpg"
                      width="100%"
                      alt=""
                    />

                    <button
                      class="btn_prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="btn_next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                  <p class="text-center">Search result : 100</p>
                </div>

                <div style="border: solid 1px; padding: 15px">
                  <p class="mb-2">Name: Nguyễn Văn A</p>
                  <div class="d-flex justify-between">
                    <p>Gender: Male</p>
                    <p>Falther: Trần Văn A</p>
                  </div>
                  <div class="d-flex justify-between">
                    <p>Age: 21</p>
                    <p>Falther's BirthDay: 20/08/1974</p>
                  </div>
                  <p>CCCD/Passport:</p>
                  <p>Phone:</p>
                  <p>Mail:</p>
                  <p>Address:</p>
                  <p>MST:</p>
                  <div class="d-flex justify-between">
                    <p>IP:</p>
                    <p>Relationship:</p>
                  </div>

                  <div class="mt-3">
                    <h2>Biography</h2>

                    <p class="mt-2">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis iste,
                      maxime sint amet vel odio fugit maiores beatae animi obcaecati?
                    </p>
                  </div>

                  <div class="mt-3">
                    <h2 class="mb-2">Lastest location found</h2>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.8929062797033!2d105.82203937393297!3d20.996929588873623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac88b1bd20e7%3A0xd7065b87f7315542!2zUC4gSG_DoG5nIFbEg24gVGjDoWksIFRoYW5oIFh1w6JuLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1712117570338!5m2!1svi!2s"
                      width="150"
                      height="120"
                      style="border: 0"
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
