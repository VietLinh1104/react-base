import { useEffect } from 'react';
import { ddlApi } from '@/api';

// import { DDLResponse  } from "@/api/generated/api";

function App() {
  useEffect(() => {
    const fetchDDL = async () => {
      try {
        const response:any = await ddlApi.getDDLTransactionDetail();
        if (response?.data) {
          console.log('DDL Response:', response);
        } else {
          console.log('DDL Response:', response);
        }
      } catch (error) {
        console.error('Error fetching DDL:', error);
      }
    };

    fetchDDL();
  }, []);

  return (
    <>
      <p className="text-5xl text-amber-800">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
