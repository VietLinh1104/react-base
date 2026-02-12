// @pages/dashboard/HomePage.tsx
import { ButtonSpin } from "@components/common/ButtonSpin";
import { useToastApp } from "@hooks/use-toast-app";
import { useState } from "react";

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { success } = useToastApp();

  const handleGenerate = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      success("Document generated successfully!");
    }, 300);
  };

  return (
    <>
      <ButtonSpin
        variant="secondary"
        isLoading={isLoading}
        loadingText="Generating..."
        onClick={handleGenerate}
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