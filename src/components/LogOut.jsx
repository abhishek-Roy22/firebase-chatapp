import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
};

const LogOut = () => {
  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <button onClick={handleSignOut} className={style.button}>
      Logout
    </button>
  );
};

export default LogOut;
