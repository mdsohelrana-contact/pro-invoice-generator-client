export const fetchUsers = async (name: string) => {
  try {
    const res = await fetch(
      `https://api.example.com/users?name=${encodeURIComponent(name)}`
    );
    if (!res.ok) throw new Error("Failed to fetch users");
    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error(err);
    return [];
  }
};
