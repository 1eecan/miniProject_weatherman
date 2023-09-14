import Bard from "bard-ai";

const myBard = new Bard(import.meta.env.VITE_BARD_API_KEY);

console.log(await myBard.ask(`hello`));
