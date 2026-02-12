import { useEffect, useState } from 'react';
import { ddlApi } from '@/api';

import type { DDLResponse  } from "@/api/generated/api";

function App() {
  const [ddlData, setDdlData] = useState<DDLResponse | null>(null);

  const fetchDDL = async () => {
      try {
        const response:any = await ddlApi.getDDLTransactionDetail();
        if (response) {
          console.log('DDL Response:', response);
          setDdlData(response);
        } else {
          console.log('DDL Response:', response);
        }
      } catch (error) {
        console.error('Error fetching DDL:', error);
      }
    };


  useEffect(() => {
    fetchDDL();
  }, []);

  return (
    <>
      <p className="text-5xl text-amber-800">
        {ddlData && ddlData.costCenterDDL && ddlData.costCenterDDL.length > 0 ? <>
          { ddlData.costCenterDDL.map((item:any) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </>: 'No DDL Data'}
      </p>
    </>
  )
}

export default App
