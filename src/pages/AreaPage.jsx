import React from "react";
import { useParams } from "react-router-dom";
import GarageList from "../components/GarageList";
import Feedback from "../components/Feedback";
import Header from "../components/Header";

const AreaPage = () => {
  const { areaName, imgUrl } = useParams();

  const decodedAreaName = decodeURIComponent(areaName);
  const decodedImgUrlRaw = decodeURIComponent(imgUrl);
  const decodedImgUrl = decodedImgUrlRaw.replace(/\\/g, "/");

  return (
    <>
      <Header />
      <div className="container-fluid p-0">
        {/* Big Image */}
        <div
          className="w-100"
          style={{
            height: "400px",
            backgroundImage: `url(${decodedImgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
            <h1 className="text-white fw-bold">{decodedAreaName}</h1>
          </div>
        </div>

        {/* Garages List */}
        <div className="container py-5">
          <h3 className="text-center mb-4" style={{ color: "#F36D1D" }}>
            Garages in {decodedAreaName}
          </h3>
          <GarageList />
        </div>
        <Feedback />
      </div>
    </>
  );
};

export default AreaPage;
