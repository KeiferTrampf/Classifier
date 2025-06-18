const userInput = document.querySelector("#userInput").value;

const response = async (userInput) =>
  await fetch("https://skeevywonder-textclassagent.hf.space/classify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: userInput,
    }),
  });

const data = await response.json();

console.log("Response from server:", data);
