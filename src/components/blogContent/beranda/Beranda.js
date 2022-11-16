import React from 'react'
import './beranda.css'
import {Carousel, Button, Card} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { pertemuan1, pertemuan2, pertemuan3, card1, card2,card3 } from '../../assets/index';

const Beranda = () => {
    
  return (
    <div className="desa__beranda">
      <div className="desa__beranda-artikel">
        <div className="desa__beranda-artikel__corusel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={pertemuan1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={pertemuan2}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 h-50"
                src={pertemuan3}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div />
          <div className="desa__beranda-artikel__content">
            <div className="artikel">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={card1} />
                <Card.Body>
                  <Card.Title>
                    Musdus penetapan daftar penerima BLT tahun 2023
                  </Card.Title>
                  <Card.Text>
                    Jumlah penerima BLT tahun 2023 sebanyak 58 orang dimana
                    jumlah tersebut ditentukan dari maksimal 25% dari pagu dana
                    desa tahun 2022, musdus diselenggarakan tanggal 15 Oktober
                    2022 ...
                  </Card.Text>
                  <Button variant="primary">Baca Lebih Lanjut</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={card2} />
                <Card.Body>
                  <Card.Title>
                    rapat penanganan balita stunting desa sekartaji
                  </Card.Title>
                  <Card.Text>
                    rapat ini dilaksanakan tanggal 2 november 2022 dan dihadiri
                    oleh narasumber dinas kesehatan kabupaten klungkung,
                    Puskesmas NP I, perangkat desa, kader posyandu, kader desa
                    siaga ...
                  </Card.Text>
                  <Button variant="primary">Baca Lebih Lanjut</Button>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={card3} />
                <Card.Body>
                  <Card.Title>
                    Penegerian TK Tunas Harapan Desa Sekartaji
                  </Card.Title>
                  <Card.Text>
                    Penegerian TK Tunas Harapan Desa Sekartaji di hadiri oleh
                    Bapak Bupati I Nyoman Suwirta, Bapak Camat, Dinas Pendidikan
                    Kabupaten Klungkung, Guru TK, Perangkat Desa dan Murid TK
                    serta ...
                  </Card.Text>
                  <Button variant="primary">Baca Lebih Lanjut</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beranda