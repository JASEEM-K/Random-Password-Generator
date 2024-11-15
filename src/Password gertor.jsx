import { useState } from 'react';
import HackerText from './HackerText';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('Click Generate!');

  const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const length = 12;
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(newPassword);
  };
const setPasswordasHash = true
  return (
    <div>
      <HackerText text={password} speed={50} />
      <button onClick={generatePassword} className="bg-blue-500 text-white px-5 py-2 rounded mt-3">
        Generate New Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
