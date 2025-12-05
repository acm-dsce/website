import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import MembersSection from '@/components/Members';

const MembersPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <MembersSection />
      </main>
    </div>
  );
};

export default MembersPage;


