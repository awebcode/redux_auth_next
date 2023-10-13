import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center">About Us</h2>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet ex vitae
          mi aliquam laoreet. Ut dapibus vel sem ut consequat. Sed vitae tristique justo,
          eu facilisis ligula. Suspendisse potenti. Sed scelerisque nisl et suscipit
          efficitur.
        </p>
        <p className="text-gray-700 mb-4">
          Proin pellentesque, velit et aliquet euismod, mauris neque fermentum justo, a
          rhoncus arcu dolor ut massa. Sed ut erat neque. Duis vel odio id mauris volutpat
          iaculis.
        </p>
        <p className="text-gray-700 mb-4">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Nam at velit non nisl fringilla vehicula ut vel urna. Vivamus tristique
          posuere lectus, non varius mi finibus vel.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
