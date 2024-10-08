import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import './courses.css';

// Use the updated coursesData
const coursesData = [
  {
    id: "01",
    namaKegiatan: "Pelantikan",
    tanggal: "Rabu, 11 Agustus 2022",
    deskripsi: "Pelantikan kader baru IPM di SMA Muhammadiyah 1 Karanganyar untuk mengukuhkan kader dengan semangat perubahan di era 4.0.",
    imgUrl: courseImg1,
  },
  {
    id: "02",
    namaKegiatan: "Upgrading",
    tanggal: "Ahad, 17 September 2022",
    deskripsi: "Kegiatan upgrading yang berlangsung di SMP Muhammadiyah 2 Karanganyar bertujuan untuk meningkatkan kompetensi kader dalam menjalankan program-program organisasi.",
    imgUrl: courseImg2,
  },
  {
    id: "03",
    namaKegiatan: "Safari Kader",
    tanggal: "Sabtu, 14 Oktober 2022",
    deskripsi: "Safari kader diadakan untuk mempererat hubungan antar anggota IPM di Rumah Ipmawati Kirani, Suruh Kalang, Jaten, Karanganyar.",
    imgUrl: courseImg3,
  },
  {
    id: "04",
    namaKegiatan: "Rakercab 2023 (Rapat Koordinasi Cabang)",
    tanggal: "Sabtu, 27 Januari 2023",
    deskripsi: "Rapat Koordinasi Cabang (Rakercab) di SMK Muhammadiyah 2 Karanganyar untuk merencanakan dan mengevaluasi program kerja selama satu periode ke depan.",
    imgUrl: courseImg2,
  },
  {
    id: "05",
    namaKegiatan: "IPM Berbagi 2023",
    tanggal: "Ahad, 7 April 2023",
    deskripsi: "Kegiatan berbagi di Lampu Merah Bejen, dimana kader IPM menunjukkan kepedulian sosial dengan berbagi kepada masyarakat sekitar.",
    imgUrl: courseImg2,
  },
  {
    id: "06",
    namaKegiatan: "Pelatihan Kader Taruna Melati I 2023",
    tanggal: "Jumat - Ahad, 8-10 September 2023",
    deskripsi: "Pelatihan kader intensif dengan tema 'Wujudkan Pelajar Berdedikasi dengan Aksi' di SMK Muhammadiyah 2 Karanganyar.",
    imgUrl: courseImg3,
  },
  {
    id: "07",
    namaKegiatan: "Ahmad Dahlan Cup",
    tanggal: "Ahad, 10 Desember 2023",
    deskripsi: "Turnamen futsal tahunan Ahmad Dahlan Cup di Lapangan Futsal Desa Sepanjang, mempererat kebersamaan dan semangat sportivitas di antara kader.",
    imgUrl: courseImg2,
  },
  {
    id: "08",
    namaKegiatan: "Turba (Turun Kebawah)",
    tanggal: "17 Januari - 25 Januari 2024",
    deskripsi: "Kunjungan pengurus IPM ke berbagai sekolah Muhammadiyah di Karanganyar untuk mendengarkan aspirasi serta memberikan arahan langsung kepada anggota.",
    imgUrl: courseImg2,
  },
  {
    id: "09",
    namaKegiatan: "IPM Berbagi 2024",
    tanggal: "Sabtu, 24 Maret 2024",
    deskripsi: "IPM Berbagi di Proliman Beji yang bertujuan untuk meningkatkan kesadaran sosial dan kepedulian terhadap sesama melalui aksi nyata.",
    imgUrl: courseImg3,
  },
  {
    id: "10",
    namaKegiatan: "Makrab",
    tanggal: "Ahad - Senin, 23 - 24 Juni 2024",
    deskripsi: "Malam Keakraban (Makrab) di Erkha Homestay Tawangmangu, diadakan untuk mempererat solidaritas dan kekeluargaan antar anggota IPM.",
    imgUrl: courseImg2,
  },
  {
    id: "11",
    namaKegiatan: "Pelatihan Kader Taruna Melati I 2024",
    tanggal: "Jumat - Ahad, 13-15 September 2024",
    deskripsi: "Pelatihan Kader dengan tema 'Bergerak dalam Kontinuitas Wujudkan Kader Berintegritas' di SMA Muhammadiyah Darul Arqom Karanganyar.",
    imgUrl: courseImg2,
  },
];


const Courses = () => {
  const [currentActivity, setCurrentActivity] = useState(coursesData[0]); // Set default activity
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % coursesData.length;
      setCurrentActivity(coursesData[newIndex]);
      setCurrentIndex(newIndex);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);

  return (
    <section>
      <Container>
        {/* Section Title */}
        <Row>
          <Col lg="12" className="text-center mb-4">
            <h2 className="section__title">Kegiatan PC IPM</h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          {/* Left: Activity Details */}
          <Col lg="4" md="4">
            <div className="event__details">
              <h6 className="event__title">{currentActivity.namaKegiatan}</h6>
              <p className="event__date">
                <i className="ri-calendar-line"></i> {currentActivity.tanggal}
              </p>
              <p>{currentActivity.deskripsi}</p>
            </div>
          </Col>

          {/* Middle: Activity Image */}
          <Col lg="4" md="4">
            <div className="image__event">
              <img
                src={currentActivity.imgUrl}
                alt={currentActivity.namaKegiatan}
                className="event__image"
              />
            </div>
          </Col>

          {/* Right: List of Activities */}
          <Col lg="4" md="4">
            <div className="event__list">
              {coursesData.slice(0, 4).map((item, index) => (
                <div
                  key={item.id}
                  className={`event__item mb-3 ${
                    index === currentIndex ? "active" : ""
                  }`}
                  onClick={() => {
                    setCurrentActivity(item);
                    setCurrentIndex(index);
                  }}
                >
                  <h6>{item.namaKegiatan}</h6>
                  <p>
                    <i className="ri-calendar-line"></i> {item.tanggal}
                  </p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Courses