"use client";
import ServiceDetails from "@/Components/PagesComponents/ServiceDetails/ServiceDetails";
import API_ROUTES from "@/app/api/confiq";
import { useEffect, useState } from "react";

const SinglePage = ({ params }) => {
  const [service, setService] = useState([]);
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const serviceResponse = await fetch(
          `${API_ROUTES.route}/sevice_items_details/${params.id}`
        );
        const sliderResponse = await fetch(
          `${API_ROUTES.route}/service_items_slider/${params.id}`
        );
        const serviceData = await serviceResponse.json();
        const sliderData = await sliderResponse.json();
        setService(serviceData);
        setSliders(sliderData);
        setLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching banner data:", error);
        setLoading(false); // Set loading to false even if there's an error
      }
    };

    fetchData();
  }, []);
  console.log(sliders);

  return (
    <div>
      {" "}
      <ServiceDetails service={service} sliders={sliders} />{" "}
    </div>
  );
};

export default SinglePage;
