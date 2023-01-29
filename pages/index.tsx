import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CardSection from "../components/CardSection";
import CustomDeckSection from "../components/CustomDeckSection";
import EpicBackground from "../components/EpicBackground";
import Footer from "../components/Footer";
import MainScreen from "../components/MainScreen";
import { Navbar } from "../components/Navbar";
import Subscription from "../components/Subscription";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-black ">
      <Navbar />
      <MainScreen />
      <CardSection />
      <CustomDeckSection />
      <Subscription />
      <EpicBackground />
      <Footer />
    </div>
  );
};

export default Home;
