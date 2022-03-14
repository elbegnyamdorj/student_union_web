import React from "react";
import EventRoll from "../../components/EventRoll";
import Layout from "../../components/Layout";
const ClubsIndex = () => {
  return (
    <Layout>
      <div
        className="full-width-image-container margin-top-0"
        style={{
          backgroundImage: `url('/img/huluub.jpg')`,
        }}
      >
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            color: "white",
            padding: "1rem",
          }}
        >
          Арга хэмжээнүүд
        </h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="content">
            <EventRoll />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ClubsIndex;
