import React from "react";

const withData = (Component, urlToFetch) => {
  return (props) => {
    const [data, setData] = React.useState({});
    React.useEffect(() => {
      fetchData(urlToFetch);
    }, []);

    const fetchData = async (url) => {
      const data = await fetch(url);
      const dataJson = await data.json();
      setData(dataJson);
    };

    return <Component {...props} data={data} fetchData={fetchData} />;
  };
};

export default withData;
