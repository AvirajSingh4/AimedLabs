import React, { useState } from 'react';
import styled from 'styled-components';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const LoginForm = styled.div`
    padding: 50px 60px 50px 60px;
    border-radius: 12px;
    box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
    text-align: center;
    margin-top: 40px;
    height: 614px;
    //margin-left: 555px;
`;

const Title = styled.h2`
    font-weight: 700;
    font-size: 48px;
    font-family: 'Poppins', sans-serif;
`;

const Input = styled.input`
  width: 824px;
  padding-left: 18px;
  height: 56px;
  margin: 10px 0px 30px 0px;
  border: 1px solid rgba(4, 7, 47, 0.4);
  border-radius: 8px;
  font-size: 18px;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
`;

const Button = styled.button`
  width: 538px;
  height: 56px;
  padding: 10px;
  background: rgba(21, 117, 167, 1);
  color: rgba(255, 255, 255, 1);
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 18px;
  margin-top: 40px;
  margin-bottom: 50px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
`;

const Label = styled.label`
font-size: 18px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
display: block;
text-align: justify;
font-family: 'Poppins', sans-serif;
`;

const Log=styled.div`
width: 824px;
height: 555px;
`;

const Change=styled.p`
width: 164px;
height: 20px;
font-size: 18px;
font-weight: 400;
line-height: 20px;
margin-left: 678px;
margin-top:-42px;
color:rgba(247, 135, 25, 1);
font-family: 'Poppins', sans-serif;
&:hover{
  cursor: pointer;
}
`;

const CheckboxContainer = styled.div`
  text-align-last: start;
`;

const CheckboxLabel = styled.label`
  font-size: 18px;
  font-weight: 400;
  margin-left: 10px;
  color:${props => (props.primary?'rgba(247, 135, 25, 1)':'rgba(115, 123, 134, 1)')};
  text-decoration:${props => (props.primary?'underline':'none')} ;
  font-family: 'Poppins', sans-serif;
  &:hover{
  cursor:${props=>(props.primary?'pointer':'none')};
}
`;

const CheckboxLabel1 = styled.label`
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
  color:${props => (props.primary?'rgba(247, 135, 25, 1)':'rgba(115, 123, 134, 1)')};
  text-decoration:${props => (props.primary?'underline':'none')} ;
  margin-top:20px;
  font-family: 'Poppins', sans-serif;
  &:hover{
  cursor:${props=>(props.primary?'pointer':'none')};
}
`;

const Cont=styled.div`
display: flex;
flex-direction: column;

`;

const ShowPasswordButton = styled.button`
    transform: translateX(460px);
    position: absolute;
    margin: -70px;
    background: none;
    border: none;
    color:rgba(115, 123, 134, 1);
    cursor: pointer;
`;

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword,setShowPassword]=useState(false)

  const handleLogin = () => {
    console.log(username);
    console.log(password)
  };

  const showpass=()=>{
    setShowPassword(!showPassword)
  }

  return (
    <Cont>
    <Container>
      <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"/>
      <LoginForm>
        <Log>
        <Title>Login</Title>
        <Label>Login ID</Label>
        <Input
          type="text"
          placeholder="Enter Login ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label>Password</Label>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          <ShowPasswordButton onClick={showpass}>
                    {showPassword ? <VisibilityOffIcon />:<VisibilityIcon /> }
              </ShowPasswordButton>    
          <CheckboxContainer>
            <input
              type="checkbox"
            />
            <CheckboxLabel>Remember Me</CheckboxLabel>
            <br/>
            <input
              type="checkbox"
            />
            <CheckboxLabel>Agree to<CheckboxLabel primary>Terms & Conditions</CheckboxLabel></CheckboxLabel>
          </CheckboxContainer>

        <Change>Change Password</Change>
        
        
        
        <Button onClick={handleLogin}>Login</Button>
        <br/>
        <CheckboxLabel1>Don't have an account?<CheckboxLabel1 primary>Register Here</CheckboxLabel1></CheckboxLabel1>
        </Log>
      </LoginForm>
    </Container>
    </Cont>
  );
};
export default App;