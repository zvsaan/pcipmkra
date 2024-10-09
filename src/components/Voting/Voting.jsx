import React, { useState, useEffect } from "react";
import axios from "axios";
import img2022 from "../../assests/images/9.png";
import { useNavigate } from "react-router-dom";
import { FaTimes } from 'react-icons/fa'; // Import the close icon
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

import "./voting.css";

const Voting = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [votingCode, setVotingCode] = useState("");
  const navigate = useNavigate();

  // Fetch candidates from the server
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/formaturs")
      .then((response) => setCandidates(response.data))
      .catch((error) => console.error("Error fetching formaturs:", error));
  }, []);

  // Handle voting logic
  const handleVote = async (e) => {
    e.preventDefault();

    if (!selectedCandidate) {
      toast.error("Silakan pilih seorang kandidat.");
      return;
    }

    if (!votingCode) {
      toast.error("Silakan masukkan kode voting unik Anda.");
      return;
    }

    try {
      // Send vote to server
      const response = await axios.post("http://localhost:8000/api/vote", {
        candidate_id: selectedCandidate.id_formatur,
        voting_code: votingCode,
      });

      if (response.data.success) {
        // Success notification
        toast.success(`Voting berhasil untuk ${selectedCandidate.nama_formatur}!`);
        setShowVoteModal(false); // Close modal on successful vote
      } else {
        // Show error message from the server
        toast.error(response.data.message);
      }
    } catch (error) {
      // Handle different error cases with specific messages
      if (error.response && error.response.data) {
        const apiMessage = error.response.data.message;

        if (apiMessage === "This voting code has already been used.") {
          toast.error("Kode voting ini sudah digunakan. Silakan coba lagi dengan kode lain.");
        } else if (apiMessage === "Invalid code") {
          toast.error("Kode yang Anda masukkan salah. Silakan coba lagi.");
        } else {
          toast.error("Terjadi kesalahan saat memproses voting.");
        }
      } else {
        toast.error("Error saat mengirim vote.");
      }
    }
  };

  // Show candidate details
  const handleCandidateDetail = (candidate) => {
    setSelectedCandidate(candidate);
    setShowDetails(true);
  };

  // Show the voting modal
  const handleVoteClick = (candidate) => {
    setSelectedCandidate(candidate);
    setShowVoteModal(true);
  };

  // Close modals
  const closeModals = () => {
    setShowDetails(false);
    setShowVoteModal(false);
    setVotingCode(""); // Clear the input field when closing the modal
  };

  return (
    <div className="voting__div">
      <h2 className="section__title">Voting Formatur</h2>
      <h6>PC IPM Karanganyar Periode 2024/2026</h6>
      <div className="candidates-grid">
        {candidates.map((candidate) => (
          <div key={candidate.id_formatur} className="candidate-card">
            <img
              src={img2022}
              alt={candidate.nama_formatur}
              className="candidate-image"
            />
            <h2>{candidate.nama_formatur}</h2>
            <div className="buttons">
              <button onClick={() => handleCandidateDetail(candidate)} className="btn">
                View Details
              </button>
              <button onClick={() => handleVoteClick(candidate)} className="btn btn-vote votebtn1">
                Vote
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Candidate Details */}
      {showDetails && selectedCandidate && (
        <div className="modal-overlay">
          <div className="modal-content">
            <FaTimes className="modal-close-icon" onClick={closeModals} />
            <h2>{selectedCandidate.nama_formatur}</h2>
            <img src={img2022} alt="Candidate" className="modal-image" />
            <p><strong>Vision:</strong> {selectedCandidate.visi}</p>
            <p><strong>Mission:</strong> {selectedCandidate.misi}</p>
          </div>
        </div>
      )}

      {/* Modal for Voting */}
      {showVoteModal && selectedCandidate && (
        <div className="modal-overlay">
          <div className="modal-content">          
            <FaTimes className="modal-close-icon" onClick={closeModals} />
            <h2>Pilih {selectedCandidate.nama_formatur}</h2>
            <img src={img2022} alt="Candidate" className="modal-image" />
            <form onSubmit={handleVote} className="voting-form">
              <input
                type="text"
                id="voting-code"
                value={votingCode}
                onChange={(e) => setVotingCode(e.target.value)}
                placeholder="Masukkan Code"
              />
              <button type="submit" className="btn btn-vote">Submit Vote</button>
            </form>
          </div>
        </div>
      )}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Voting;