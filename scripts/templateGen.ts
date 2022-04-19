import { readFile, writeFile, readdir, opendir, mkdir } from "fs/promises";
import { existsSync } from "fs";
import subjects from "../src/configs/subjects";

const processHTML = (html: string) => {
  const temp = html
    .split("\n")
    .map((line: string) => line.trim())
    .join(" ")
    .replace(/(\>[\t ]+([A-Z(\{\{)]))/g, ">$2");

  var text = temp
    .replace(/<br\s*[\/]?>/gi, "\n")
    .replace(/<p\s*[\/]?>/gi, "\n")
    .replace(/(<([^>]+)>)/gi, "");

  if (text.startsWith("\n")) text = text.replace("\n", "");

  return [temp, text];
};

const templateGen = async () => {
  const userTypes = await readdir("./src/templates");
  for (const userType of userTypes) {
    if (!existsSync(`./src/generated/templates/${userType}`)) 
      mkdir(`./src/generated/templates/${userType}`, { recursive: true });

    const files = await readdir(`./src/templates/${userType}`);
    const typeSubjects = subjects[userType as keyof typeof subjects];
    for (const file of files) {
      const [name, ext] = file.split(".");
      if (ext === "html") {
        const fileData = await readFile(
          `./src/templates/${userType}/${file}`,
          "utf8"
        );
        const [html, text] = processHTML(fileData);

        let config = {
          Template: {
            TemplateName: userType + "_" + name.trim(),
            SubjectPart: typeSubjects[name as keyof typeof typeSubjects],
            HtmlPart: html.trim(),
            TextPart: text.trim(),
          },
        };

        await writeFile(
          `./src/generated/templates/${userType}/` + name + ".json",
          JSON.stringify(config, null, 4)
        );
      }
    }
  }
};

templateGen();
