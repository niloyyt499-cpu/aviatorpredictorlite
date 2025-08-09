import BettingSiteSelector from "./betting-site-selector";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviator Predictor Lite',
};

export default function Page() {
  return (
    <div>
      <BettingSiteSelector />
    </div>
  );
}
