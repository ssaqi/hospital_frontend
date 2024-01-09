import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import Nav from './src/Config/Navigation';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <>
      <Nav />
    </>
  )
}
