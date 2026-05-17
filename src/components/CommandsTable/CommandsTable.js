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
      <div className="flex gap-x-2">
        {applyFilter.length === 0 && (
          <CategoryFilter column={table.getColumn("category")} />
        )}
        <GlobalFilter
          value={globalFilter}
          onChange={setGlobalFilter}
          applyFilter={applyFilter}
        />
      </div>

      <div className="py-2 ">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 table-fixed">
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
                        className="group px-6 py-2 text-left text-xs font-medium uppercase tracking-wider"
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
                          <span>
                            {sorted === "desc" ? (
                              <SortDownIcon className="w-4 h-4 text-gray-400" />
                            ) : sorted === "asc" ? (
                              <SortUpIcon className="w-4 h-4 text-gray-400" />
                            ) : (
                              <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                            )}
                          </span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-gray-200">
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={cell.column.columnDef.meta?.className}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

function GlobalFilter({ value, onChange, applyFilter }) {
  const [local, setLocal] = React.useState(value ?? "");

  React.useEffect(() => {
    const id = setTimeout(() => onChange(local || ""), 200);
    return () => clearTimeout(id);
  }, [local, onChange]);

  return (
    <label
      className={`flex items-baseline w-96 ${
        applyFilter.length === 0 ? "gap-x-2" : ""
      }`}
    >
      <span></span>
      <input
        type="text"
        autoFocus
        className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-gray-700 searchbox"
        value={local}
        onChange={(e) => setLocal(e.target.value)}
        placeholder="Search commands..."
      />
    </label>
  );
}

function CategoryFilter({ column }) {
  if (!column) return null;

  const options = Array.from(column.getFacetedUniqueValues().keys())
    .filter((v) => v !== undefined && v !== "")
    .sort();

  return (
    <label className="flex gap-x-2 items-baseline">
      <select
        className="mt-1 block rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 dark:bg-zinc-800 dark:border-gray-700"
        aria-label="Select category"
        name={column.id}
        id={column.id}
        value={column.getFilterValue() ?? ""}
        onChange={(e) => column.setFilterValue(e.target.value || undefined)}
      >
        <option value="">All Microsoft Portals</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

export default CommandsDataTable;
