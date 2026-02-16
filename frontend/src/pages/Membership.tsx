import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import MembershipSection from '@/components/Membership';

const MembershipPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <MembershipSection />
      </main>
    </div>
  );
};

export default MembershipPage;
