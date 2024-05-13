"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { IoSearchSharp } from "react-icons/io5";
import { Skeleton } from "@/components/ui/skeleton";
import { useSelector, useDispatch } from "react-redux";
import { setNewsByCategory } from "@/app/utils/redux/slices/DataSlice";
import axios from "axios";

const nav = () => {
  const [nav, setNav] = useState();
  const [url, setUrl] = useState(
    "https://api-berita-indonesia.vercel.app/cnbc/tech/"
  );
  const [underline, setUnderline] = useState("");
  const headline = useSelector((state) => state.headline) || "cnbc";
  const berita = useSelector((state) => state.berita);
  const dispatch = useDispatch();
  const refClickDiffNav = useRef(null);

  const selectedNavData = async () => {
    await axios.get(url).then((item) => {
      // if (item.data.data == null) return ;
      setUnderline(url.split("/").slice(-2)[0]);
      dispatch(setNewsByCategory(item.data.data));
    });
  };

  useEffect(() => {
    selectedNavData();
  }, [url]);

  useEffect(() => {
    // refClickDiffNav?.current?.click();
    setNav(berita.find((key) => key.name == headline));
  }, [headline, berita]);

  return (
    <>
      <nav className="nav-content flex justify-between">
        {nav
          ? nav?.paths?.map((key, index) => {
              return (
                <a
                  key={index}
                  className={`text-nav dark:text-white ${
                    key.name == underline && "underline underline-offset-2"
                  }`}
                  onClick={() => setUrl(key.path)}
                  // ref={refClickDiffNav}
                >
                  {key.name.toUpperCase()}
                </a>
              );
            })
          : Array(5)
              .fill()
              .map((key) => {
                return <Skeleton key={key} className="h-4 w-[200px]" />;
              })}
      </nav>
    </>
  );
};

export default nav;
