import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';
// styled components
import { Button, Column, InputText, Row } from '../../globalStyles';
import { 
    CreateAccountLink,
    Extras,
    ForgotPasswordLink,
    HeartIcon,
    IconContainer, 
    LoginContainer, 
    LoginTitle, 
    LogoIcon,
    MemberBenefits,
    TickIcon} from './Login.element';
// styled components


const Login = ({isOpened}) => {
    console.log(isOpened, "===> open login");
    return (
        <>
        {isOpened? (
            <Modal childComp={
                (
                    <Row fullheight>
                        <Column lg="4" nopadding nomargin>
                            <IconContainer>
                                <LogoIcon/>
                            </IconContainer>
                        </Column>
                        <Column lg="8" nopadding nomargin>
                            <LoginContainer>
                                <LoginTitle>Sign in to Shoply</LoginTitle>
                                <Row>
                                    <Column lg="6">
                                        <MemberBenefits>
                                            <HeartIcon/>Save products to your personal cart
                                        </MemberBenefits>
                                        <MemberBenefits>
                                            <TickIcon/>Get news about your favourite product
                                        </MemberBenefits>
                                        <MemberBenefits>
                                            <TickIcon/>Be first to know about exclusive offers
                                        </MemberBenefits>
                                    </Column>
                                    <Column lg="6" nopadding>
                                        <InputText placeholder="Username or Email"/>
                                        <InputText placeholder="Password"/>
                                        <Button fullwidth>Sign in</Button>
                                        <Row>
                                            <Column lg="6" nomargin>
                                                <ForgotPasswordLink to="#">Forgot Password?</ForgotPasswordLink>
                                            </Column>
                                            <Column lg="6" nomargin>
                                                <CreateAccountLink to="#">Create Account</CreateAccountLink>
                                            </Column>
                                        </Row>
                                    </Column>
                                </Row>
                            </LoginContainer>
                        </Column>
                </Row>
                )
            }/>
        ): null}
        </>
    )
}

export default Login
