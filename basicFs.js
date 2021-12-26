const fs = require("fs");
const employees = [];
const employee1 = [];
const employee2 = [];

async function writeFile() {
  employees.push({ name: "Employee 1 Name", salary: 2000 });
  await fs.promises.writeFile(
    "employees.json",
    JSON.stringify(employees),
    "utf-8"
  );
}

async function readFile() {
  return await fs.promises.readFile("employees.json", "utf8");
}

async function appendFile() {
  await fs.promises.writeFile("employees.json", "", "utf-8");
  employees.push({ name: "Employee 2 Name", salary: 3000 });
  await fs.promises.appendFile("employees.json", JSON.stringify(employees));
}

async function unlink() {
  await fs.promises.unlink("employees.json");
}

async function main() {
  await writeFile();
  console.log("v1: ", await readFile());
  await appendFile();
  console.log("v2: ", await readFile());
  await unlink();
}

main();
