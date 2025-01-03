import React from "react";
import styled from "styled-components";

const Heart = () => {
  return (
    <StyledWrapper>
      <label className="container">
        <input type="checkbox" disabled />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z" />
        </svg>
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .container {
    display: block;
    position: relative;
    cursor: pointer;
    user-select: none;
  }

  .container svg {
    position: relative;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    transition: transform 0.3s;
    fill: #e3474f;
  }

  .container svg:hover {
    transform: scale(1.1);
  }
`;

export default Heart;
