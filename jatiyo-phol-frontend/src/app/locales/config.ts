import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import bn from "./bn.json";

i18next.use(initReactI18next).init(
  {
    lng: "bn",
    debug: true,
    resources: {
      en,
      bn,
    },
  },
  (err, t) => {
    if (err) return console.log("something went wrong loading", err);
    console.log(t("title")); // -> same as i18next.t
  }
);
