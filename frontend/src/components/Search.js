import React, { useState } from "react";
import { fetchRepos } from "../services/githubService";
import Spinner from "./Spinner";

const Search = ({ setRepos, orgName, setOrgName }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setRepos([]);
    setError("");
    try {
      const repos = await fetchRepos(orgName);
      setRepos(repos);
    } catch (error) {
      setError(
        "Failed to fetch repositories. Please check the organization name and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <input
        type="text"
        value={orgName}
        onChange={(e) => setOrgName(e.target.value)}
        placeholder="Enter GitHub organization name"
        className="input border-2 border-gray-300 p-2 rounded-md mb-2 w-full max-w-xs"
      />
      <button
        onClick={handleSearch}
        disabled={!orgName || loading}
        className="btn flex justify-center gap-4 items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full max-w-xs mb-5 disabled:bg-opacity-50"
      >
        {loading && <Spinner />} Search
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default Search;
