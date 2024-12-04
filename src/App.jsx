import KakaoLogin from "react-kakao-login";
import './App.css'

function App() {

const kakaoClientId = "<카카오 클라이언트 아이디>";

  const kakaoOnSuccess = async (data)=>{
    console.log(data)
    const idToken = data.response.access_token  // 엑세스 토큰 백엔드로 전달
}
const kakaoOnFailure = (error) => {
    console.log(error);
};

  return (
    <>
       <KakaoLogin
              token={kakaoClientId}
              onSuccess={kakaoOnSuccess}
              onFail={kakaoOnFailure}
          />

    </>
  )
}

export default App
