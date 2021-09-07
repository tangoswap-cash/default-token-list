const { version } = require("../package.json");

const bch = require("../tokens/smartbch.json");
const bchAmber = require("../tokens/smartbch-amber.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "MISTswap Menu",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/mistswapdex/art/master/mist/logo-256x256.png",
    keywords: ["mistswap", "default"],
    tokens: [
      ...bch,
      ...bchAmber,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
