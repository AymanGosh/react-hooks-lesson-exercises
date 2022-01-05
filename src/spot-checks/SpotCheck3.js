import React, { useState, useEffect } from "react";

export default function SpotCheck3() {
  let [likesNum, setLikesNum] = useState(0);

  useEffect(() => {
    document.title = `${likesNum}`;
  });

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
        <h5>My Shoobi Doobi Status</h5>
        <button
          onClick={() => {
            setLikesNum(likesNum + 1);
          }}
        >
          Like
        </button>
      </div>
    </div>
  );
}
