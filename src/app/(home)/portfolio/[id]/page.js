import PortfolioDetails from "@/Components/PagesComponents/PortfolioDetails/PortfolioDetails";
import ServiceDetails from "@/Components/PagesComponents/ServiceDetails/ServiceDetails";
import API_ROUTES from "@/app/api/confiq";

async function getProduct(id) {
  const response = await fetch(`${API_ROUTES.route}/portfolio_details/${id}`);
  const data = await response.json();
  return data;
}

const SinglePage = async ({ params }) => {
  const singleService = await getProduct(params.id);

  return (
    <div>
      <PortfolioDetails />
    </div>
  );
};

export default SinglePage;
