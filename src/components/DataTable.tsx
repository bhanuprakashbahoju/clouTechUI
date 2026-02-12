import { useState } from 'react';
import { Search, ChevronUp, ChevronDown, MoreVertical, Edit2, Trash2, Eye } from 'lucide-react';

interface Column<T> {
  key: keyof T | string;
  label: string;
  sortable?: boolean;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  onView?: (item: T) => void;
  searchPlaceholder?: string;
}

export default function DataTable<T extends { id: string }>({
  data,
  columns,
  onEdit,
  onDelete,
  onView,
  searchPlaceholder = 'Search...',
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleSort = (key: string) => {
    setSortConfig((current) => {
      if (current?.key === key) {
        return { key, direction: current.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const sortedData = sortConfig
    ? [...filteredData].sort((a, b) => {
        const aValue = (a as Record<string, unknown>)[sortConfig.key];
        const bValue = (b as Record<string, unknown>)[sortConfig.key];
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      })
    : filteredData;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-300 transition-all"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                >
                  {column.sortable ? (
                    <button
                      onClick={() => handleSort(String(column.key))}
                      className="flex items-center gap-1 hover:text-black transition-colors"
                    >
                      {column.label}
                      {sortConfig?.key === column.key ? (
                        sortConfig.direction === 'asc' ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )
                      ) : (
                        <ChevronUp className="w-4 h-4 opacity-30" />
                      )}
                    </button>
                  ) : (
                    column.label
                  )}
                </th>
              ))}
              {(onEdit || onDelete || onView) && (
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sortedData.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors"
              >
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="px-6 py-4 text-sm text-gray-700"
                  >
                    {column.render
                      ? column.render(item)
                      : String((item as Record<string, unknown>)[String(column.key)] ?? '')}
                  </td>
                ))}
                {(onEdit || onDelete || onView) && (
                  <td className="px-6 py-4 text-right relative">
                    <button
                      onClick={() => setOpenDropdown(openDropdown === item.id ? null : item.id)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <MoreVertical className="w-5 h-5 text-gray-400" />
                    </button>

                    {openDropdown === item.id && (
                      <div className="absolute right-6 top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden min-w-[140px]">
                        {onView && (
                          <button
                            onClick={() => {
                              onView(item);
                              setOpenDropdown(null);
                            }}
                            className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                            View
                          </button>
                        )}
                        {onEdit && (
                          <button
                            onClick={() => {
                              onEdit(item);
                              setOpenDropdown(null);
                            }}
                            className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
                          >
                            <Edit2 className="w-4 h-4" />
                            Edit
                          </button>
                        )}
                        {onDelete && (
                          <button
                            onClick={() => {
                              onDelete(item);
                              setOpenDropdown(null);
                            }}
                            className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        )}
                      </div>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        {sortedData.length === 0 && (
          <div className="py-12 text-center text-gray-400">
            No data found
          </div>
        )}
      </div>
    </div>
  );
}
