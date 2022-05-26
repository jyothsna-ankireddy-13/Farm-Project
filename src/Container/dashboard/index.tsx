import React, { FC } from "react";

const DashboardContainer: FC<any> = () => {
  return (
    <section className="page">
      <div className="table-container">
        <ul className={`$table-head`}>
          <li>Dashboard Container</li>
        </ul>
      </div>
    </section>
  );
};

export default DashboardContainer;
