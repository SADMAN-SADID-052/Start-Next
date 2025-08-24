import React from "react";

export default function ServiceDetailPage({ params }) {

  const  data = [
  {
    "_id": "1",
    "service_name": "Web Development",
    "service_image": "https://example.com/images/web-dev.jpg",
    "service_description": "We provide modern and responsive web development services using the latest technologies like React, Node.js, and MongoDB."
  },
  {
    "_id": "2",
    "service_name": "Mobile App Development",
    "service_image": "https://example.com/images/mobile-app.jpg",
    "service_description": "Our team builds scalable and user-friendly mobile apps for both Android and iOS platforms."
  },
  {
    "_id": "3",
    "service_name": "Graphic Design",
    "service_image": "https://example.com/images/graphic-design.jpg",
    "service_description": "We create stunning designs including logos, posters, banners, and UI/UX mockups tailored to your brand."
  },
  {
    "_id": "4",
    "service_name": "SEO Optimization",
    "service_image": "https://example.com/images/seo.jpg",
    "service_description": "Boost your online visibility and rank higher on search engines with our expert SEO strategies."
  },
  {
    "_id": "5",
    "service_name": "Cloud Hosting",
    "service_image": "https://example.com/images/cloud-hosting.jpg",
    "service_description": "We offer fast, secure, and reliable cloud hosting solutions with 24/7 support."
  }
]

  const id = params.id;
  const singleData = data.find((d) => d._id == id); 
  return (
    <div>
      <h1>ServiceDetailPage</h1>

      <p>ID:{id} </p>

      <p>{singleData.service_name}</p>
      <img src={singleData.service_image} alt="image" />
    </div>
  );
}
