// @pages/dashboard/HomePage.tsx
interface HomePageProps {
  userRole?: string;
}

const HomePage: React.FC<HomePageProps> = ({ userRole }) => {
  return (
    <>
      <h1>Chào mừng {userRole || "khách"}!</h1>
    </>
  );
};

export default HomePage;