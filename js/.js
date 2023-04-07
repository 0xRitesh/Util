/*
const detectNoScriptCode = (document) => {
  "use strict";

  const removeClass = () => {
    const bodyElement = document.body;

    !!bodyElement.classList
      ? bodyElement.classList.remove("noscript")
      : bodyElement.className.replace("noscript", "");
  };

  document.addEventListener("DOMContentLoaded", removeClass);
  // use this when calling inside a script tag in the <head> element:
  // removeClass()
};
*/

export const detectNoScript = `!function(b) {"use strict";var c=b.body;c.classList?c.classList.remove("noscript"):c.className.replace("noscript","")}(document);`;

/*
const detectYesScriptCode = (document) => {
  "use strict";

  const addClassIfSupported = () => {
    const html = document.documentElement;

    !!html.classList
      ? html.classList.add("yesscript")
      : (html.className += " yesscript");
  };

  document.addEventListener("DOMContentLoaded", addClassIfSupported);
  // use this when calling inside a script tag in the <head> element:
  // addClassIfSupported()
};
*/

export const detectYesScript = `!function(b){"use strict";var c=b.documentElement;c.classList?c.classList.add("yesscript"):c.className+=" yesscript"}(document);`;
