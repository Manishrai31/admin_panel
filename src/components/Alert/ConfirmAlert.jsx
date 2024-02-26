import React, { useState } from 'react';
import styled from 'styled-components';
import './confirm.scss';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f0f0f0;
`;

const AlertContainer = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform : translate(-50% , -50%);
  background: #f0f0f0;
  border-radius: 15px;
  box-shadow: 10px 10px 20px #cbced1, -10px -10px 20px #ffffff;
  padding: 30px;
  text-align: center;
  z-index:999
`;
// const Backdrop = styled.div`
// z-index:998

//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// //   background: rgba(0, 0, 0, 0.3);
//   display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
// `;
const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Button = styled.button`
  margin: 0 15px;
  padding: 15px 25px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  background-color: #4caf50;
  color: #fff;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #45a049;
    // box-shadow: 8px 8px 16px #3d8b3d, -8px -8px 16px #6edc6e;
  }
`;

const CancelButton = styled(Button)`
  background-color: #e74c3c;
  &:hover {
    background-color: #c0392b;
    // box-shadow: 8px 8px 16px #a53d3d, -8px -8px 16px #e06b6b;
  }
`;

const ConfirmAlert = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <>
    {/* <Backdrop isOpen={isOpen} onClick={onCancel} /> */}
    <AlertContainer style={{ display: isOpen ? 'block' : 'none' }}>
      <p>Are you sure you want to proceed?</p>
      <ButtonsContainer>
        <button className='btn-check' onClick={onConfirm}>Yes</button>
        <CancelButton onClick={onCancel}>No</CancelButton>
      </ButtonsContainer>
    </AlertContainer>
    </>
  );
};

export default ConfirmAlert;