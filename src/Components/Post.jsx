import React from "react";
import { useState } from "react";
import confetti from "canvas-confetti";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import "../../src/App.css";

const Post = (abc) => {
  console.log("post debug :", abc);
  const triggerconfetti = () => {
    confetti({
      particleCount: 100,
      spread: 150,
      origin: { y: 0.5, x: 0.5 },
    });
  };
  return (
    <div>
      <img src={abc.image} alt="thanos" className="post-image" />
      <div className="icon-bar">
        <FaHeart className="icon heart-icon" onClick={triggerconfetti} />
        <FaComment className="icon comment-icon" onClick={triggerconfetti} />
        <FaShare className="icon share-icon" onClick={triggerconfetti} />
      </div>
    </div>
  );
};

export default Post;
