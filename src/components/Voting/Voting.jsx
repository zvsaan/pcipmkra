import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'reactstrap';
import './voting.css';

// Dummy data for 9 Formatur candidates with names, vision, and mission
const candidates = [
  {
    id: '01',
    name: 'Ahmad Fauzi',
    vision: 'Mewujudkan organisasi yang transparan, akuntabel, dan berdaya saing.',
    mission: '1. Meningkatkan partisipasi anggota.\n2. Memperkuat hubungan eksternal.\n3. Membangun sistem kaderisasi berkelanjutan.',
  },
  {
    id: '02',
    name: 'Budi Santoso',
    vision: 'Membangun generasi muda yang kreatif dan inovatif.',
    mission: '1. Meningkatkan kreativitas pelajar.\n2. Menjalankan program pendidikan berbasis teknologi.\n3. Mendorong kolaborasi antar-bidang.',
  },
  {
    id: '03',
    name: 'Citra Rahmawati',
    vision: 'Menjadikan IPM sebagai organisasi terdepan dalam pengembangan karakter.',
    mission: '1. Melaksanakan program penguatan karakter.\n2. Memfasilitasi pelatihan kepemimpinan.\n3. Mendorong peningkatan kualitas kader.',
  },
  {
    id: '04',
    name: 'Dewi Astuti',
    vision: 'Mewujudkan komunitas pelajar yang solid dan inovatif.',
    mission: '1. Mempererat hubungan antar-anggota.\n2. Menjalankan program-program kreatif.\n3. Mengembangkan potensi anggota.',
  },
  {
    id: '05',
    name: 'Eko Nugroho',
    vision: 'Menciptakan lingkungan belajar yang kondusif dan mendukung pengembangan diri.',
    mission: '1. Meningkatkan fasilitas belajar.\n2. Menjalankan pelatihan pengembangan diri.\n3. Mendorong kolaborasi lintas bidang.',
  },
  {
    id: '06',
    name: 'Fitri Wulandari',
    vision: 'Membentuk generasi pelajar yang berakhlak mulia dan berprestasi.',
    mission: '1. Menanamkan nilai-nilai keislaman.\n2. Mengembangkan program-program pendidikan berkualitas.\n3. Membangun kolaborasi antar sekolah.',
  },
  {
    id: '07',
    name: 'Gilang Mahardika',
    vision: 'Mewujudkan organisasi yang berorientasi pada prestasi dan pelayanan.',
    mission: '1. Meningkatkan kualitas layanan anggota.\n2. Menjalankan program peningkatan prestasi pelajar.\n3. Mendorong partisipasi dalam lomba-lomba.',
  },
  {
    id: '08',
    name: 'Hendra Saputra',
    vision: 'Menjadikan IPM sebagai organisasi yang mandiri dan berdaya saing global.',
    mission: '1. Mendorong kemandirian organisasi.\n2. Meningkatkan kerjasama internasional.\n3. Mengembangkan potensi global anggota.',
  },
  {
    id: '09',
    name: 'Ika Sari Dewi',
    vision: 'Menciptakan komunitas pelajar yang inklusif dan berdaya saing.',
    mission: '1. Membangun kebersamaan antar anggota.\n2. Menjalankan program inklusivitas pelajar.\n3. Mendorong pengembangan prestasi.',
  },
];

const Voting = () => {
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // Function to handle voting
  const handleVote = (candidateId) => {
    if (selectedCandidates.includes(candidateId)) {
      setSelectedCandidates(selectedCandidates.filter(id => id !== candidateId));
    } else if (selectedCandidates.length < 9) {
      setSelectedCandidates([...selectedCandidates, candidateId]);
    }
  };

  const handleSubmit = () => {
    if (selectedCandidates.length === 9) {
      setSubmitted(true);
      // Here you can send the selectedCandidates to the backend or process further
    } else {
      alert('Please select exactly 9 candidates.');
    }
  };

  return (
    <Container>
      <Row className="text-center mb-4">
        <Col>
          <h2>Pemilihan 9 Formatur</h2>
          <p>Pilih 9 kandidat yang menurut Anda layak menjadi ketua dan kepala bidang di setiap bidang IPM.</p>
        </Col>
      </Row>
      
      <Row>
        {candidates.map((candidate) => (
          <Col lg="4" md="6" sm="12" key={candidate.id} className="mb-4">
            <Card className={`p-3 shadow-sm ${selectedCandidates.includes(candidate.id) ? 'selected' : ''}`} onClick={() => handleVote(candidate.id)}>
              <h5>{candidate.name}</h5>
              <h6><strong>Visi:</strong></h6>
              <p>{candidate.vision}</p>
              <h6><strong>Misi:</strong></h6>
              <p>{candidate.mission.split('\n').map((line, index) => (<span key={index}>{line}<br /></span>))}</p>
              <Button color={selectedCandidates.includes(candidate.id) ? 'success' : 'primary'} block>
                {selectedCandidates.includes(candidate.id) ? 'Deselect' : 'Vote'}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <Button color="primary" size="lg" onClick={handleSubmit} disabled={submitted}>
            {submitted ? 'Vote Submitted' : 'Submit Votes'}
          </Button>
          {submitted && <Alert color="success" className="mt-3">Thank you for submitting your votes!</Alert>}
        </Col>
      </Row>
    </Container>
  );
};

export default Voting;