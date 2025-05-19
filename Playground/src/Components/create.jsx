import React, { useState } from 'react';
import '../styles/create.css';
import { useNavigate } from 'react-router-dom';
import { CloudUpload } from 'lucide-react';

const Create = () => {

    const [image, setImage] = useState(null);
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');
    const [fontSize, setFontSize] = useState(32);
    const [fontColor, setFontColor] = useState('#ffffff');
    const [textAlign, setTextAlign] = useState('center');
    const [aiCaption, setAiCaption] = useState('');

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
      }
    }

    const handleAICaption = () => {
        setAiCaption('When you realize it’s Monday again...')
    }

    const nav=useNavigate()

    const handleSaveDrafts=()=>{
    
        const draft={
            image,topText,bottomText,fontSize,fontColor,textAlign,aiCaption,createdAt:new Date().toISOString()
        }

        const existingDrafts = JSON.parse(localStorage.getItem("heehee-drafts")) || [];
        existingDrafts.push(draft);
        localStorage.setItem("heehee-drafts", JSON.stringify(existingDrafts));

        nav("/drafts")
    }
    

  return (
    <div className="create-meme-container">
      <h2>Create a Meme</h2>

      <div className="input-section">
        <label>Upload Image:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <button className="template-btn">Choose from Templates</button>
      </div>

      <div className="meme-preview" style={{ textAlign }}>
        {image && (
          <div className="meme-canvas">
            <img src={image} alt="meme" className="meme-image" />
            <h3 style={{ color: fontColor, fontSize: `${fontSize}px`, top: '5%' }} className="meme-text top">
              {topText}
            </h3>
            <h3 style={{ color: fontColor, fontSize: `${fontSize}px`, bottom: '5%' }} className="meme-text bottom">
              {bottomText}
            </h3>
          </div>
        )}
      </div>

      <div className="text-controls">
        <input type="text" placeholder="Top Text" value={topText} onChange={(e) => setTopText(e.target.value)} />
        <input type="text" placeholder="Bottom Text" value={bottomText} onChange={(e) => setBottomText(e.target.value)} />
      </div>

      <div className="style-controls">
        <label>Font Size:</label>
        <input type="range" min="12" max="72" value={fontSize} onChange={(e) => setFontSize(e.target.value)} />
        
        <label>Font Color:</label>
        <input type="color" value={fontColor} onChange={(e) => setFontColor(e.target.value)} />

        <label>Text Align:</label>
        <select value={textAlign} onChange={(e) => setTextAlign(e.target.value)}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>

      <div className="ai-section">
        <button onClick={handleAICaption}>Generate AI Caption</button>
        {aiCaption && <p className="ai-caption">💡 {aiCaption}</p>}
      </div>

      <div className="action-buttons">
        <button className="draft-btn" onClick={handleSaveDrafts}>Save as Draft</button>
        <button className="publish-btn">Publish</button>
      </div>
    </div>
  );
};

export default Create;


