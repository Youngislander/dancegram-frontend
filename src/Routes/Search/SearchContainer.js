import React from "react";
import { withRouter } from "react-router-dom";
import SearchPresenter from "./SearchPresenter";
import { useQuery } from "react-apollo-hooks";
import { SEARCH } from "./SearchQueries";

export default withRouter(({ location: { search } }) => {
  const term = search.split("=")[1];
  console.log(term);
  const { loading, error, data } = useQuery(SEARCH, {
    skip: term === undefined,
    variables: {
      term
    }
  });

return <SearchPresenter searchTerm={term} loading={loading} data={data} error={error} />;
});