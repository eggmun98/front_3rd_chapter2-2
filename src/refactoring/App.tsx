import { useToggle } from './hooks/useToggle.ts';
import Navigation from './components/Layouts/Navigation/Navigation.tsx';
import Main from './components/Layouts/Main/Main.tsx';

const App = () => {
  const {value: isAdmin, toggle: onClickToggleAdmin} = useToggle()

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation isAdmin={isAdmin} onClickToggleAdmin={onClickToggleAdmin}/>
      <Main isAdmin={isAdmin}/>
    </div>
  );
};

export default App;
