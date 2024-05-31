import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import { CommandsTable } from "@site/src/components/CommandsTable";
import { columns } from "@site/src/tableHome/columns.table";
import commandsData from '/static/commands.json';

export default function Start() {
  return (
    <>

      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-0">
              <h1 className="hero__title">
                  >_ Nerd.ms
              </h1>
            </div>
            <div className="col col--offset-0">
              <CommandsTable columns={columns} data={commandsData} applyFilter="" />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
