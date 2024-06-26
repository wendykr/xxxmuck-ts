import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';

export const App = (): JSX.Element => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};