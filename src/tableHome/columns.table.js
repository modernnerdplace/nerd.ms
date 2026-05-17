import React from "react";

export const columns = [
  {
    id: "category",
    accessorKey: "category",
    header: "",
    meta: { className: "commands-data-table" },
    filterFn: (row, columnId, filterValue) => {
      if (!filterValue) return true;
      return row.getValue(columnId) === filterValue;
    },
    cell: ({ row }) => (
      <img
        alt={row.original.category}
        className={`cat-${row.original.categoryShortName}`}
      />
    ),
  },
  {
    id: "description",
    accessorKey: "description",
    header: "Name",
    meta: { className: "commands-data-table whitespace-nowrap left" },
    cell: ({ row, getValue }) => (
      <a href={row.original.url} target="_blank" rel="noreferrer noopener">
        {getValue()}
      </a>
    ),
  },
  {
    id: "command",
    accessorKey: "command",
    header: "Command",
    meta: { className: "commands-data-table right" },
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <a
          href={`https://${value}.cmd.ms`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <b>{value}</b>.cmd.ms
        </a>
      );
    },
  },
  {
    id: "alias",
    accessorKey: "alias",
    header: "Alias",
    meta: { className: "commands-data-table left" },
  },
  {
    id: "keywords",
    accessorKey: "keywords",
    header: "Keywords",
    meta: { className: "commands-data-table left" },
  },
  {
    id: "url",
    accessorKey: "url",
    header: "Url",
    meta: { className: "commands-data-table left col-url" },
    cell: ({ getValue }) => {
      const value = getValue();
      return (
        <a href={value} target="_blank" rel="noreferrer noopener">
          {value}
        </a>
      );
    },
  },
];