import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <div className="desa__footer">
      <div className="desa__footer-alamat">
        <h1>DESA SEKARTAJI</h1>
        <p>
          Banjar Dinas Sekartaji, Desa Sekartaji, Nusa Penida Kecamatan Nusa
          Penida Kabupaten Klungkung Provinsi Bali Kode Pos 80771
        </p>
        <p>Email: info@sekartaji.desa.id Telp: 081338925201</p>
      </div>
      <div className="desa__footer-links">
        <h1>LINK</h1>
        <button>Berita Desa</button>
        <button>Agenda DEsa</button>
        <button>Peraturan Desa</button>
        <button>Perpustakaan Desa</button>
        <button>Transparansi Keuangan</button>
      </div>
    </div>
  );
};

export default Footer;
