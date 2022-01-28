import { FaHeart, FaShopify } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const IconContainer = styled.div`
    background-color: var(--color-dark);
    height: 100%;
    border-radius: 9px 0 0 9px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LogoIcon = styled(FaShopify)`
    color: var(--color-light);
    font-size: 10em;
`;

export const LoginContainer = styled.div`
    padding: 15px;
    height: 100%;
`;

export const LoginTitle = styled.h2`
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
`;

export const MemberBenefits = styled.div`
    font-size: 0.9em;
    padding: 0 15px 15px 0;
    display: flex;
`;

export const HeartIcon = styled(FaHeart)`
    color: var(--color-danger);
    margin-right: 15px;
    font-size: 1.5em;
`;

export const TickIcon = styled(TiTick)`
    color: var(--color-success);
    margin-right: 11px;
    font-size: 2em;
`;

export const Extras = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ForgotPasswordLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 0.8em;
    text-align: center;
`;

export const CreateAccountLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 0.8em;
    text-align: center;
`;