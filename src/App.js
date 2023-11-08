import React, { useContext } from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Home from './components/SideEffect/Home/Home';
import Login from './components/SideEffect/Login/Login';

// 컨텍스트 불러오기
import AuthContext from './store/auth-context';

const App = () => {
  // 화면이 리렌더링 될 때 localStorage를 확인해서
  // 현재 login-flag가 존재하는지 검사
  console.log('app.js render');
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login />}
      </main>
    </>
  );
};

export default App;
