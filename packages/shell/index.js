import importHTML from "import-html-entry";
const index = "index.html";
const APP_REACT_ENDPOINT = "http://localhost:3001"
const APP_VUE_ENDPOINT = "http://localhost:4173/"

function appendStyle(styleContent) {
  const document = window.document;
  const styleTag = document.createElement("style");
  styleTag.appendChild(document.createTextNode(styleContent));
  const headElement = document.head || document.getElementsByTagName("head")[0];
  headElement.appendChild(styleTag);
}

function loadDemo(endpoint = '') {
  return importHTML(`${endpoint}/${index}`).then((res) => {
    const loadStyle = async () => {
      const styles = await res.getExternalStyleSheets();
      styles.map((s) => appendStyle(s));
    };
    loadStyle();
    return res.execScripts();
  });
}

async function main() {
  [APP_REACT_ENDPOINT, APP_VUE_ENDPOINT].map(loadDemo)
}

main();
