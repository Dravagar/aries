import Layout from '../layouts/layout'; 

export default function feedback(){
  return(
    <div>
      <Layout>
        <h1>Feedback Pelanggan</h1>
        <div>
          <input type="text" name="nama" placeholder="Nama" />
        </div>
        <div>
          <input type="text" name="email" placeholder="Email" />
        </div>
        <div>
          <textarea name="komentar" rows="10" placeholder="Ketik Feedback..."></textarea>
        </div>
        <div>
          <input  type="submit" value="Kirim Feedback"/>
        </div>
      </Layout>
    </div>     
  );
}

