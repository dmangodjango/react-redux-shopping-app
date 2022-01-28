import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        --color-primary: #ab7c42;
        --color-secondary: #553b29;
        --color-light: #ffffff;
        --color-grey: #929294;
        --color-light-grey: #e9eae9;
        --color-dark: #101010;
        --color-success: #00bd74;
        --color-warning: #ff7b00;
        --color-danger: #f02800;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    } 

    body {
      background-color: var(--color-light-grey);
    }

    html, body, #root {
      height: 100%;
    }
`;


export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding: 10px 50px;
    
    @media screen and (min-width: 991px) {
      padding: 20px 30px;
    }
    @media screen and (max-width: 991px) {
      padding: 10px 20px;
    }
`;

export const MainContainer = styled(Container)`
    min-height: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: ${({fullheight}) => (fullheight? "100%" : "auto")};

  &::after{
    content: "";
    display: table;
    clear: both;
  }
`;

export const Column = styled.div`
  float: left;
  padding: ${({ nopadding }) => (nopadding ? '0' : '0 10px')} ;
  margin-bottom: ${({ nomargin }) => (nomargin? "0" : "20px")};
  width: 100%;

  @media screen and (min-width: 768px) {
    ${({sm}) => sm && getWidthString(sm) }
  }

  @media screen and (min-width: 992px) {
    ${({md}) => md && getWidthString(md) }
  }

  @media screen and (min-width: 1200px) {
    ${({lg}) => lg && getWidthString(lg) }
  }
`;

const getWidthString = (span) => {
  if(!span) return;

  const width = span / 12 * 100;
  return `width: ${width}%`;
}

export const Card = styled.div`
  box-shadow: 0 6px 20px var(--color-light-grey);
  border-radius: 10px;
  width: 100%;

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
`;

export const CardInfoWrapper = styled.div`
  padding: 10px;
`;

export const CardTitle = styled.h4`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CardSubtitle = styled.h4`
  font-weight: 600;
  color: var(--color-grey);
`;

export const CardImage = styled.img`
    width: 100%;
    height: 300px;
    padding: 50px;
    border-radius: 12px;
    background: white;
    object-fit: contain;
`;


export const PageTitle = styled.h1`
  font-weight: bold;
  text-align: center;
  margin: 1rem;

  @media screen and (min-width: 768px) {
    margin: 3rem;
  }
`;


export const InputText = styled.input.attrs({ type: "text" })`
    padding: 10px;
    width: 100%;
    border: var(--color-light-grey) 1px solid;
    border-radius: 5px;
    margin-bottom: 10px;

    &:focus {
      border: var(--color-dark) 2px solid !important;
    }
`;


export const Button = styled.button`
  border-radius: 4px;
  background: var(--color-dark);
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  width: ${({fullwidth}) => (fullwidth? "100%": "auto")};

  &:hover {
    transition: all 0.3s ease-out;
    background-color: var(--color-primary);
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;

