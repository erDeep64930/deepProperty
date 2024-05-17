import React from "react";
import propertyList from "@/properties.json";
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
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {propertyList.map(({ name, _id }) => {
              console.table(name);
              <div key={_id}>
                <h2>{name}</h2>
              </div>;
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PropertiesPage;
