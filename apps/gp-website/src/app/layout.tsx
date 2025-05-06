import './global.css';

import Wrapper from '@/components/wrapper';

export const metadata = {
  title: 'Geonet Properties',
  description: 'Geonet Properties',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  );
}
