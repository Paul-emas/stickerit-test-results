import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import YAML from "yaml";

const ns = ["common", "MaterialChooser"];
const supportedLngs = ["en-GB", "de-DE"];

export class YAMLLoaderBackend {
  constructor() {
    this.type = "backend";
  }

  init(_services, backendOptions, _i18nextOptions) {
    console.log("YAMLLoaderBackend");
    /*services:any, backendOptions: any, i18nextOptions: any*/
  }

  read(language, namespace, callback) {
    const forLanguage = language.toLowerCase();

    fetch(`/translations/${forLanguage}/${namespace}.yaml`)
      .then((resp) => {
        return resp.text();
      })
      .then((resp) => {
        const parsed = YAML.parse(resp);
        callback(null, parsed);
      })
      .catch((err) => {
        callback(err, null);
      });
  }
}

i18n
  .use(initReactI18next)
  .use(new YAMLLoaderBackend())
  .init({
    debug: true,

    lng: "en-GB",
    fallbackLng: "en-GB",
    interpolation: {
      escapeValue: false,
    },
    defaultNS: "common",
    ns,
    supportedLngs,
  });

export { i18n };
