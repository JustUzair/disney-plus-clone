import React from "react";
import styled from "styled-components";
import ctaLogo1 from "../../images/cta-logo-one.svg";
import ctaLogo2 from "../../images/cta-logo-two.png";
import loginBg from "../../images/login-background.jpg";
function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src={ctaLogo1} alt="cta-logo-one"></CTALogoOne>
        <Signup>GET ALL THERE</Signup>
        <Descritption>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Descritption>
        <CTALogoTwo src={ctaLogo2} alt="cta-logo-two"></CTALogoTwo>
      </CTA>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;

  align-items: center;
  opacity: 0.95;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: calc(100vh - 70px);
    background: url(${loginBg}) no-repeat center center / cover;
    z-index: -1;
  }
`;
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
  margin-top: 15px;
  width: 90%;
`;
const Signup = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: 600;
  text-align: center;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 17px 0;
  letter-spacing: 1.5px;
  color: #f9f9f9;
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 12px;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    background-color: #0483ee;
  }
`;
const Descritption = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
export default Login;
