# 리액트 카카오 SDK 이용해서 소셜 로그인 간단하게 구현하기

터미널에 `npm i react-kakao-login` 입력해 라이브러리 다운로드.

`App.jsx`에서 볼 수 있는 `KakaoLogin`을 import한 후 카카오 클라이언트 아이디와 성공, 실패 시 동작을 주입해 사용한다.
클라이언트 아이디의 경우 보안 이슈가 있을 수 있으니 `.env` 파일로 관리하는 것이 좋아보임.

아래 함수의 결과로 전달받는 `data`를 log찍어서 확인하면 개발자가 카카오 소셜 로그인에서 설정해둔 다양한 정보들이 넘어오는 것을 알 수 있음.
추가적으로 카카오 API를 이용하고 싶다면 전달받은 엑세스 토큰(data.response.access_token)을 활용해서 호출하면 됨. 

사용자 정보를 저장하고자 한다면 `data.profile`에 로그인한 유저에 대한 정보가 담겨져 있으니, 이를 백엔드에게 전달해 저장하면 된다.

```js
  const kakaoOnSuccess = async (data)=>{
    console.log(data)
    const idToken = data.response.access_token  
}

```