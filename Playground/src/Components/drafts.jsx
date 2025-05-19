import React, { useEffect, useState } from "react";
import '../styles/drafts.css'

const Drafts = () => {
  const [drafts, setDrafts] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("heehee-drafts")) || [];
    setDrafts(saved);
  }, []);

    const handleDelete = (indexToRemove) => {
        const updatedDrafts = drafts.filter((_, index) => index !== indexToRemove);
        setDrafts(updatedDrafts);
        localStorage.setItem("heehee-drafts", JSON.stringify(updatedDrafts));
    }


  return (
    <div className="drafts-page">
      <h2>Your Drafts</h2>
      {drafts.length === 0 ? (
        <p>No drafts saved yet.</p>
      ) : (
        <div className="drafts-grid">
          {drafts.map((draft, index) => (
            <div key={index} className="draft-card">
            <div className="image-container">
              <img src={draft.image} alt="Meme draft" className="draft-image" />
              <h3 className="draftText top" style={{ color: draft.fontColor }}>
                {draft.topText}
              </h3>
              <h3 className="draftText bottom" style={{ color: draft.fontColor }}>
                {draft.bottomText}
              </h3>
            </div>
            <button onClick={() => handleDelete(index)} className="delete">Remove from Drafts</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Drafts;
