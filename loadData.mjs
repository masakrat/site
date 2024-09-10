import fs from "fs";
import path from "path";
import yaml from "js-yaml";

function parseMassacres() {
    const dir = path.join(process.cwd(), "../data");

    // check if dir exists
    if (!fs.existsSync(dir)) {
        throw new Error("No data found in data directory. Returning sample data.");
    }

    const files = fs.readdirSync(dir);

    // ingore files that are dont have a info.yaml file
    let massacres = files
        .map((file) => {
            const filePath = path.join(dir, file, "info.yaml");
            if (!fs.existsSync(filePath)) {
                return null;
            }
            const fileContents = fs.readFileSync(filePath, "utf8");
            try {
                return yaml.load(fileContents);
            } catch (e) {
                console.error(e);
                return null;
            }
        })
        .filter((file) => file !== null);

    fs.writeFileSync("./data/massacres.json", JSON.stringify(massacres));
}



parseMassacres();