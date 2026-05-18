import app from "./src/app.js";
import dns from "dns";
dns.setServers(["1.1.1.1", "0.0.0.0"]);
import { connectDB } from "./src/config/db.js";

connectDB()


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})