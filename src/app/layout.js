
import './globals.css';
import { MercaderProvider } from '../context/MercaderContext';
import Header from '../components/Header';
import FabButton from '../components/FabButton';
import BalanzaDrawer from '../components/BalanzaDrawer';

export const metadata = {
  title: 'D&D Arcane Compendium',
  description: 'Tomo de Insumos & Reliquias',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col relative overflow-x-hidden">
        <MercaderProvider>
          <Header />
          {children}
          <FabButton />
          <BalanzaDrawer />
        </MercaderProvider>
      </body>
    </html>
  )
}
