import './global.css';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'Geonet Properties',
  description: 'Geonet Properties',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ToastContainer theme="light" autoClose={5000} />
      </body>
    </html>
  );
}
