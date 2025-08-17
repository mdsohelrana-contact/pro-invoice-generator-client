import React, { useState, useMemo, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setName } from "@/store/slices/searchSlice";
import { debounce } from "lodash";
import { Search } from "lucide-react";

const SearchInput: React.FC<{ placeholder?: string }> = ({ placeholder }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const reduxName = useSelector((state: RootState) => state.search.name);

  const [localValue, setLocalValue] = useState(reduxName || "");

  // Debounced update function (for Redux and router)
  const updateQuery = useMemo(
    () =>
      debounce((value: string) => {
        dispatch(setName(value));
        const path = value.trim() ? `/dashboard` : `/dashboard`;
        router.replace(path);
      }, 300),
    [dispatch, router]
  );

  useEffect(() => {
    updateQuery(localValue);
    return () => updateQuery.cancel();
  }, [localValue, updateQuery]);

  return (
    <div className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        type="search"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        placeholder={placeholder || "Search..."}
        className="pl-10 w-full"
      />
    </div>
  );
};

export default SearchInput;
