import styled from 'styled-components';
import googleBtn from './googleBtn.png';
import naverBtn from './naverBtn.PNG';

const LoginDivBlock = styled.div`
  margin: auto 0;
`;

const LoginButtonBlock = styled.button`
  background-color: white;
  border: none;
  width: 100%;

  img {
    width: 100%;
  }
`;

function LoginButton({ provider, src, onClick }) {
  return (
    <LoginButtonBlock onClick={onClick}>
      <img provider={provider} src={src} alt={`${provider} login`} />
    </LoginButtonBlock>
  );
}

export default function Login() {
  localStorage.removeItem('token');

  const login = (e) => {
    const provider = e.target.attributes['provider'].value;
    window.location = `http://ec2-13-58-15-226.us-east-2.compute.amazonaws.com/oauth2/authorize/${provider}?redirect_uri=http://ec2-13-58-15-226.us-east-2.compute.amazonaws.com:3000/login/callback`;
  };

  const providers = [
    { provider: 'google', src: googleBtn },
    { provider: 'naver', src: naverBtn },
  ];

  return (
    <LoginDivBlock>
      {providers.map((provider) => (
        <LoginButton
          provider={provider.provider}
          src={provider.src}
          onClick={login}
        />
      ))}
    </LoginDivBlock>
  );
}
