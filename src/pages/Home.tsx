import Insights from "../components/Home/Insights"
import BillsAndTenants from "../components/Home/BillsAndTenants"
import Charts from "../components/Home/Charts";

const Home = () => {

  return (
    <div>
      <Insights />
      <BillsAndTenants />
      <Charts/>
    </div>
  );
}

export default Home