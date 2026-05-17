import React from "react";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import "./style.css";
import { SortIcon, SortDownIcon, SortUpIcon } from "../../shared/icons";

const CommandsDataTable = ({
  columns,
  data,
  applyFilter = "",
  columnsToHide = [""],
}) => {
  const [globalFilter, setGlobalFilter] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState(
    applyFilter ? [{ id: "category", value: applyFilter }] : []
  );

  const columnVisibility = React.useMemo(() => {
    const hidden = ["keywords", ...columnsToHide].filter(Boolean);
    return Object.fromEntries(hidden.map((id) => [id, false]));
  }, [columnsToHide]);

  const table = useReactTable({
    data,
    columns,
    state: { globalFilter, columnFilters, columnVisibility },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <>
      <div className="commands-toolbar">
        <GlobalFilter value={globalFilter} onChange={setGlobalFilter} />
        {applyFilter.length === 0 && (
          <CategoryFilter column={table.getColumn("category")} />
        )}
      </div>

      <div className="commands-table-wrapper">
        <div className="overflow-x-auto">
          <table className="commands-table">
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const sorted = header.column.getIsSorted();
                    const canSort = header.column.getCanSort();
                    return (
                      <th
                        key={header.id}
                        scope="col"
                        onClick={
                          canSort
                            ? header.column.getToggleSortingHandler()
                            : undefined
                        }
                        style={{ cursor: canSort ? "pointer" : "default" }}
                      >
                        <div className="flex items-center justify-between">
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                          {canSort && (
                            <span>
                              {sorted === "desc" ? (
                                <SortDownIcon className="sort-indicator active" />
                              ) : sorted === "asc" ? (
                                <SortUpIcon className="sort-indicator active" />
                              ) : (
                                <SortIcon className="sort-indicator" />
                              )}
                            </span>
                          )}
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    const baseClass = cell.column.columnDef.meta?.className ?? "";
                    const colClass = `col-${cell.column.id}`;
                    return (
                      <td
                        key={cell.id}
                        className={`${baseClass} ${colClass}`.trim()}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

function GlobalFilter({ value, onChange }) {
  const [local, setLocal] = React.useState(value ?? "");

  React.useEffect(() => {
    const id = setTimeout(() => onChange(local || ""), 200);
    return () => clearTimeout(id);
  }, [local, onChange]);

  return (
    <input
      type="text"
      autoFocus
      className="searchbox"
      value={local}
      onChange={(e) => setLocal(e.target.value)}
      placeholder="Zoek een command, omschrijving, URL…"
      aria-label="Zoek commands"
    />
  );
}

function CategoryFilter({ column }) {
  if (!column) return null;

  const options = Array.from(column.getFacetedUniqueValues().keys())
    .filter((v) => v !== undefined && v !== "")
    .sort();

  return (
    <select
      className="category-filter"
      aria-label="Filter op categorie"
      name={column.id}
      id={column.id}
      value={column.getFilterValue() ?? ""}
      onChange={(e) => column.setFilterValue(e.target.value || undefined)}
    >
      <option value="">Alle categorieën</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default CommandsDataTable;
