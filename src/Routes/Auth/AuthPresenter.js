import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import light from "../../Styles/light.jpg"
import TweenMax from "gsap/all";


const Wrapper = styled.div`
  background-image:url(${light});
  background-size:cover;
  background-repeat:no-repeat;
  height: 100vh;
  width:100%;
  position:absolute;
  top:0;
  left:0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Box = styled.div`
  opacity:0.9
  border-radius: 0px;
  width: 100%;
  max-width: 350px;
  color:white;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: white;
  cursor: pointer;
`;

const TextWrapper= styled.div`{
  position: relative;
  -webkit-perspective: 100px;
          perspective: 100px;
  text-transform: uppercase;
}
`
const Title = styled.span`
  text-align:center;
  font-size:100px;
  color:white;
  margin-top:-40px;
  font-family: 'Hanalei Fill', cursive;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 10vw;

    
  &:first-child {
    position: relative;
    // transform: translate3d(1px, 1px, 5px);
  }
`

const Form = styled(Box)`
  padding: 50px 0 10px 0 ;
  padding-bottom: 30px;
  form{
      width: 100%;
      input {
          width: 100%;
          &:not(:last-child){
              margin-bottom: 7px;
          }
      }
      button {
          margin-top: 10px;
      }
  }
`;

export default ({
    action,
    username,
    firstName,
    lastName,
    email,
    setAction,
    onSubmit,
    secret
}) => {
const text = document.querySelectorAll('.text');
const halfX = window.innerWidth / 2;
const halfY = window.innerHeight / 2;

text.forEach((el, i) => {
  TweenMax.to(el, 1, {
    z: 1 * (i + 8)
  });
});

document.addEventListener('mousemove', (e) => {
  text.forEach((el, i) => {
    TweenMax.to(el, 0.5, {
      x: (e.clientX - halfX) * (i + 1) * 0.01,
      y: (e.clientY - halfY) * (i + 1) * 0.01
    });
  });
})
return(
    <Wrapper>
      <TextWrapper>
        <div className="text">
                Dancegram
        </div>
        <div className="text">
                Dancegram
        </div>
        <div className="text">
                Dancegram
        </div>
        <div className="text">
                Dancegram
        </div>
        <div className="text">
                Dancegram
        </div>
        <div className="text">
                Dancegram
        </div>
        <div className="text">
                Dancegram
        </div>
        <div className="text">
                Dancegram
        </div>
      </TextWrapper>
      <Form>
          {action === "logIn" && (
            <>
             <Helmet>
               <title>Log In | Dancegram </title>
             </Helmet>
              <form onSubmit={onSubmit}>
               <Input placeholder={"Email"} {...email} type="email" />
               <Button text={"Log in"} />
              </form>
            </>
          )}
          {action === "signUp" && (
            <>
             <Helmet>
               <title>Sign Up | Dancegram </title>
             </Helmet>
              <form onSubmit={onSubmit}>
                <Input placeholder={"First name"} {...firstName} />
                <Input placeholder={"Last name"} {...lastName} />
                <Input placeholder={"Email"} {...email} type="email" />
                <Input placeholder={"Username"} {...username} />
                <Button text={"Sign up"} />
              </form>
            </>
          )}
          {action === "confirm" && (
            <>
              <Helmet>
                <title> Confirm secret | Dancegram </title>
              </Helmet>
              <form onSubmit={onSubmit}>
                <Input placeholder="Paste your secret" required {...secret} />
                <Button text={"confirm"} />
              </form>
            </>
          )}
     </Form>

     {action !== "confirm" && (
      <StateChanger>
         {action === "logIn" ? (
             <>
              Don't have an account?{" "}
              <Link onClick={() => setAction("signUp")}>Sign up</Link>
             </> 
         ) : (
             <>
             Have an account?{" "}
             <Link onClick={() => setAction("logIn")}>Log in</Link>
             </>
         )}
      </StateChanger>
     )}
     </Wrapper>
)}