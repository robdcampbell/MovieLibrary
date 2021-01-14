import React from "react";
import Form from "../components/SearchForm";
import Movies from "../components/Movies";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <main>
      <Form />
      <Movies />
      <Footer />
    </main>
  );
};

export default Home;
