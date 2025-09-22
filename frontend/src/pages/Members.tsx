import Navigation from '@/components/Navigation';
import MembersSection from '@/components/Members';

const MembersPage = () => {
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


