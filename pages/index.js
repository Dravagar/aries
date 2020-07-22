
import Layout from '../layouts/layout';

export default function Beranda(){
  return(
  <Layout>
    
  <div class="card-group">
  <div class="card">
    <img src="/images/zonakamera.jpg"/>
    <div class="card-body">
      <h5 class="card-title"><center>KAMERA & ACTIONCAM TERBARU</center></h5>
    </div>
</div>
</div>
<div class="container">
  <div class="row row-cols-1 row-cols-sm-3 row-cols-md-5">
      <div>
        <img src="/images/kam1.png" width="160px"></img>
        <h4> Sony A6000 </h4>
        <h5> Rp 10.000.000,- </h5>
        <a class="tombol tombol-detail" href="#">Detail</a>
        <a class="tombol tombol-beli" href="#">Beli</a>
        </div>
      <div>
        <img src="/images/act1.png" width="150px"></img>
        <h4> Xiaomi Yi 5 </h4>
        <h5> Rp 4.000.000,- </h5>
        <a class="tombol tombol-detail" href="#">Detail</a>
        <a class="tombol tombol-beli" href="/pages/pay">Beli</a>
      </div>
  </div>
</div>
    </Layout>
    ); 
  }