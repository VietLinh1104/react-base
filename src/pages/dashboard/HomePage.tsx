// @pages/dashboard/HomePage.tsx
import { ButtonSpin } from "@components/common/ButtonSpin";
import { useState } from "react";
interface HomePageProps {
  userRole?: string;
}

const HomePage: React.FC<HomePageProps> = ({ userRole }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <h1>Chào mừng {userRole || "khách"}!</h1>
      <ButtonSpin
        variant="secondary"
        isLoading={isLoading}
        loadingText="Generating..."
        onClick={() => setIsLoading(true)}
        className="mt-4"
      >
        Generate DOC
      </ButtonSpin>
      <ButtonSpin variant="outline" onClick={() => setIsLoading(!isLoading)} className="mt-4">
        Download DOC
      </ButtonSpin>
    </>
  );
};

export default HomePage;