import fetch from "node-fetch";
import mongoose from "mongoose";

export const hf = (connector) => {
  return new Promise((resolve, reject) => {
    if (!connector) {
      return reject(new Error("Bad connector"));
    }

    resolve(
      fetch(connector, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: "Some days, I feel like I'm a text classification agent, just trying to make sense of the world one label at a time.",
        }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
    );
  });
};
export const mdb = (connector) => mongoose.connect(connector);
