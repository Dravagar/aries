import Layout from '../layouts/layout';


export default function Pay(){
    return (
    <Layout>
                <div class="bayar">
                <center>
                <div class="form">
                    <div class="input_text">
                        <span>Nama</span><br/>
                        <input type="text"/>
                    </div>
                    <div class="input_text">
                        <span>E-mail</span><br/>
                        <input type="text"/>
                    </div>
                    <div class="select">
                        <span>Jenis Kamera</span><br/>
                        <select class="jenis_kamera">
                            <option value="">Canon</option>
                            <option value="">Sony</option>
                            <option value="">Xiaomi</option>
                        </select>
                    </div>
                    <div class="input_text">
                        <span>Jumlah Barang</span><br/>
                        <input type="number"/>
                    </div>
                    <div class="select">
                        <span>Pembayaran</span><br/>
                        <select class="type_bayar">
                            <option value="">BCA</option>
                            <option value="">BNI</option>
                            <option value="">MANDIRI</option>
                        </select>
                    </div>
                    <div class="input_button">
                    <div class="cancel">
                       <a><button class="b_1">Cancel</button></a></div>
                    </div>
                </div></center>
                </div>
    </Layout>
);
    }