import React from "react";
import Layout from "./shared/Layout.js";
import Project from "./Project";
import { Link } from "react-router-dom";
import data from "../data.json"

export default function Home() {
  return (
    <div>
      <Layout>
        {data.map((item) => (
          <Link to={`/${item.key}/details`} key={item.key}>
            <Project src={item.src} alt={item.alt} />
          </Link>
        ))}
      </Layout>
    </div>
  );
}
