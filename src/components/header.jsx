"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { setDataBerita, setHeadline } from "@/app/utils/redux/slices/DataSlice";
import { useDispatch } from "react-redux";

let url = process.env.NEXT_PUBLIC_URL;

const header = () => {
  const [data, setData] = useState();
  const [headnews, setHeadnews] = useState("cnbc");
  const [bgtheme, setBgTheme] = useState("dark");
  const { setTheme } = useTheme();
  const dispatch = useDispatch();

  const firstLoad = async () => {
    await axios.get(url).then((key) => {
      setData(key.data.endpoints);
      dispatch(setDataBerita(key.data.endpoints));
    });
  };

  useEffect(() => {
    firstLoad();
  }, []);

  useEffect(() => {
    dispatch(setHeadline(headnews));
  }, [headnews]);

  return (
    <header className="flex justify-between pt-5 items-center">
      <span className="kotak font-extrabold">MY NEWS</span>
      <div className="flex items-center gap-5">
        {data && (
          <Select value={headnews} onValueChange={setHeadnews}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Pilih Portal Berita" />
            </SelectTrigger>
            <SelectContent>
              {data.map((key, index) => {
                return (
                  <SelectItem key={index} value={key.name}>
                    {key.name.toUpperCase()}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        )}
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            setBgTheme(`${bgtheme == "dark" ? "light" : "dark"}`);
            setTheme(`${bgtheme == "dark" ? "light" : "dark"}`);
          }}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
};

export default header;
