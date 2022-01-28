import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: var(--color-light);
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;