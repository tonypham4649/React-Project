import { useState } from "react";

export default function useFilter(initialData) {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);

  const applyFilter = (filterFunc) => {
    const result = data.filter(filterFunc);
    setFilteredData(result);
  };

  return [filteredData, applyFilter, setData];
}
