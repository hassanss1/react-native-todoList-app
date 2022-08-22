import { StatusBar } from 'react-native';
import Home from './src/pages/Home/index';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor='transparent'
        translucent
        barStyle='light-content'
      />
      <Home />
    </>
  );
}
