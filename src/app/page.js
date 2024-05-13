"use client";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Content from "@/components/mainContent";
import { Provider } from "react-redux";
import store from "@/app/utils/redux/store";
import { IoArrowUpCircleSharp } from "react-icons/io5";
export default function Home() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="container">
      <Provider store={store}>
        <IoArrowUpCircleSharp
          className="fixed bottom-0 right-[10px] cursor-pointer"
          onClick={() => scrollTop()}
          size={60}
        />
        <Header />
        <hr className="my-5"></hr>
        <Nav />
        <hr className="my-5"></hr>
        <Content />
      </Provider>
    </main>
  );
}
