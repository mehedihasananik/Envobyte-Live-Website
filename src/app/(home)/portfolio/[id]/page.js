import PortfolioDetails from "@/Components/PagesComponents/PortfolioDetails/PortfolioDetails";
import { singlePortfolio } from "@/config/apis";

async function getProduct(id) {
  const response = await fetch(`${singlePortfolio}/${id}`);
  const data = await response.json();
  return data;
}

const SinglePage = async ({ params }) => {
  const singlePortfolio = await getProduct(params.id);

  return (
    <div>
      <PortfolioDetails singlePortfolio={singlePortfolio} />
    </div>
  );
};

export default SinglePage;
