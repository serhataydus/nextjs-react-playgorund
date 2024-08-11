const fs = require("fs");
const path = require("path");
const axios = require("axios");

const languagePath = path.join(__dirname, "../localizations");

const config = {
  headers: {
    "X-SimpleLocalize-Token": `token`,
  },
};

async function fetchLanguages() {
  try {
    // API'den dilleri al
    const response = await axios.get(
      "https://api.simplelocalize.io/api/v1/languages",
      config
    );
    const languages = response.data.data;
    console.log("-----------languages---------");
    console.log(languages);

    // Her dil için bir JSON dosyası oluştur
    for (const language in languages) {
      const key = languages[language].key;
      const localizations = await fetchLocalization(key);

      console.log("----------- key : localizations---------");
      console.log(localizations);
      const filePath = path.join(languagePath, `${key}.json`);
      fs.writeFileSync(filePath, JSON.stringify(localizations, null, 2));
    }

    console.log("Languages fetched and saved successfully!");
  } catch (error) {
    console.error("Error fetching languages:", error);
  }
}

async function fetchLocalization(lang) {
  try {
    // API'den dilleri al
    const response = await axios.get(
      `https://api.simplelocalize.io/api/v2/translations?language=${lang}`,
      config
    );
    const localizations = response.data.data;
    let localizationsList = [];
    for (const localization in localizations) {
      localizationsList.push({
        [localizations[localization].key]: localizations[localization].text,
      });
    }

    const jsonObject = localizationsList.reduce((obj, item) => {
      const key = Object.keys(item)[0];
      obj[key] = item[key];
      return obj;
    }, {});

    console.log("Languages fetched and saved successfully!");

    return jsonObject;
  } catch (error) {
    console.error("Error fetching languages:", error);
  }

  return {};
}

fetchLanguages();
