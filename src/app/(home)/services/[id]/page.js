import ServiceDetails from "@/Components/PagesComponents/ServiceDetails/ServiceDetails";
import API_ROUTES from "@/app/api/confiq";

async function serviceData(id) {
  const res = await fetch(`${API_ROUTES.route}/sevice_items_details/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function slidersData(id) {
  const res = await fetch(`${API_ROUTES.route}/service_items_slider/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function packageData(id) {
  const res = await fetch(`${API_ROUTES.route}/service_package/${id}`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const SinglePage = async ({ params }) => {
  const service = await serviceData(params.id);
  const sliders = await slidersData(params.id);
  const packages = await packageData(params.id);
  console.log(packages);

  return (
    <div>
      {" "}
      <ServiceDetails
        service={service}
        sliders={sliders}
        packages={packages}
      />{" "}
    </div>
  );
};

export default SinglePage;
