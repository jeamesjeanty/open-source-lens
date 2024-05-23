import React, { useState } from "react";
import { fetchCommits } from "../services/githubService";
import CommitDetails from "./CommitDetails";
import Spinner from "./Spinner";

const CommitsView = ({ repoName, orgName }) => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasFetched, setHasFetched] = useState(false);

  const handleFetchCommits = () => {
    if (!hasFetched) {
      setLoading(true);
      fetchCommits(orgName, repoName)
        .then((commits) => {
          setCommits(commits);
          setLoading(false);
          setHasFetched(true); // Ensure commits are fetched only once unless specifically intended otherwise
        })
        .catch(() => {
          setLoading(false);
          setHasFetched(true); // Handle error but prevent refetching on error
        });
    }
  };

  return (
    <div>
      <h3 className="text-md font-semibold mt-2">Recent Commits:</h3>
      <button
        onClick={handleFetchCommits}
        className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded my-2"
      >
        {loading && <Spinner />} Load Commits
      </button>
      {!loading && (
        <div>
          {commits.map((commit) => (
            <CommitDetails key={commit.sha} commitData={commit} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommitsView;
