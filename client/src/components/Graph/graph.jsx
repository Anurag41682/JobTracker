import { PieChart } from "@mui/x-charts/PieChart";
import { useContext, useState, useEffect } from "react";
import MyDataContext from "../../ApplicationDataContext";
export default function Pie() {
  const { applicationData } = useContext(MyDataContext);
  const [pendingCnt, setPendingCnt] = useState(0);
  const [acceptedCnt, setAcceptedCnt] = useState(0);
  const [rejectedCnt, setRejectedCnt] = useState(0);
  useEffect(() => {
    const newPendingCount = applicationData.reduce((count, item) => {
      if (item.status === "pending") {
        return count + 1;
      }
      return count;
    }, 0);
    const newAcceptedCount = applicationData.reduce((count, item) => {
      if (item.status === "accepted") {
        return count + 1;
      }
      return count;
    }, 0);
    const newRejectedCount = applicationData.reduce((count, item) => {
      if (item.status === "rejected") {
        return count + 1;
      }
      return count;
    }, 0);
    setAcceptedCnt(newAcceptedCount);
    setPendingCnt(newPendingCount);
    setRejectedCnt(newRejectedCount);
  }, [applicationData]);

  // Update the state with the new count
  return (
    <PieChart
      colors={["#d10808", "#009c24", "#bfcc35"]}
      series={[
        {
          data: [
            { id: 0, value: rejectedCnt, label: "Rejected" },
            { id: 1, value: acceptedCnt, label: "Accepted" },
            { id: 2, value: pendingCnt, label: "Pending" },
          ],
        },
      ]}
      width={400}
      height={200}
      // sx={{ padding: "50px" }}
    />
  );
}
