const Footer = () => (   
<footer class="page-footer font-small pt-4 text-white bg-dark mb-3" >
    <div class="container-fluid text-center text-md-left">
      <div class="row ">
        <div class="col-md-3 mt-md-0 mt-3">
          <h5 class="text-uppercase">Ketentuan Dan Kebijakan</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#! " className="text-red">Syarat dan Ketentuan</a>
              </li>
              <li>
                <a href="#!"className="text-red">Kebijakan Privasi</a>
              </li>
            </ul>
        </div>
        {/* <hr class="clearfix w-100 d-md-none pb-3"></hr> */}
        <div class="col-md-3 mb-md-0 mb-3">
            <h5 class="text-uppercase">Jam Pelayanan</h5>
            <section> 
Senin s/d Sabtu  : 10:00 - 16:00 WIB.
Minggu / Libur    : 11:00 - 16:00 WIB.
Kecuali Hari Raya Besar dan Tahun Baru.</section>
          </div>
          <div class="col-md-2 mb-md-0 mb-3">
            <h5 class="text-uppercase" >Media Sosial</h5>
            <div class="row mx-md-n0">
            <div class="col"><img src="/images/fb.png" width="40px;" height="40px;"/></div>
            <div class="col"><img src="/images/wa.png" width="40px;" height="40px;"/></div>
            <div class="col"><img src="/images/ig.png" width="40px;" height="40px;"/></div>
          </div>
          </div>
      </div>
    </div>
    <div class="footer-copyright text-center py-3 text-white bg-secondary mb-3">© 2020 Copyright ZonaKamera.com
    </div>
  </footer>
)
export default Footer;