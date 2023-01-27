import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CardSection from "../components/CardSection";
import MainScreen from "../components/MainScreen";
import { Navbar } from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <MainScreen />
      <CardSection />
    </div>
  );
};

export default Home;
