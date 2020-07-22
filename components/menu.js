import Link from 'next/link';
function Menu(){
    return(
<nav class="navbar navbar-expand-lg dark- bg-dark">  
<a class="navbar-brand" href="#">
    <img src="/images/brand.png" width="50" height="30" alt="zonakamera" ></img>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link " href="/">Beranda</a> 
      </li>
      <li class="nav-item ">
        <a class="nav-link " href="/kamera">Kamera</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/actioncam">Action Cam</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/feedback">Feedback</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/tentang">Tentang Kami</a>
      </li>
      <li class="nav-item dropdown" >
        <a class="nav-link dropdown-toggle" href="/akun/index" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Akun
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/akun/daftar">Daftar</a>
          <a class="dropdown-item" href="/akun/login">Masuk</a>
        </div>
      </li>
    </ul>
  </div>
  <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Cari...." aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Cari</button>
    </form>
</nav>
);
}
export default Menu;
