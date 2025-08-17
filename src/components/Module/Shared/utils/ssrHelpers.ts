/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchUsers } from "@/components/services/userService";


interface DashboardSSRProps {
  query: { [key: string]: any };
}

export const getDashboardSSRProps = async ({ query }: DashboardSSRProps) => {
  const name = query.name || "";
  const results = await fetchUsers(name);

  return {
    props: {
      initialName: name,
      initialResults: results,
      initialReduxState: { search: { name } },
    },
  };
};
