import React from "react";
import propertyList from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
const PropertiesPage = () => {
  return (
    <section class="px-4 py-6">
      <div class="container-xl lg:container m-auto">
        <h2 class="text-3xl font-bold text-blue-500 mb-6 text-center">
          Recent Properties
        </h2>

        {propertyList.length === 0 ? (
          <p>no property list has been found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {propertyList?.map((property) => {
            return <PropertyCard property={property} key={property._id} />;
            })}
          )
        </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
