import React from "react";
import Layout from "@theme/Layout";
import { CommandsTable } from "@site/src/components/CommandsTable";
import { columns } from "@site/src/tableHome/columns.table";
import commandsData from '/static/commands.json';

export default function Start() {
  return (
    <Layout>
      <main className="container margin-vert--lg">
        <header className="margin-bottom--md">
          <h1 className="hero__title" style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace' }}>
            &gt;_ Nerd.ms
          </h1>
          <p style={{ marginTop: '0.25rem', color: 'var(--ifm-color-emphasis-700)' }}>
            Doorzoek alle Microsoft-portals, tools en bronnen.
          </p>
        </header>
        <CommandsTable columns={columns} data={commandsData} applyFilter="" />
      </main>
    </Layout>
  );
}
