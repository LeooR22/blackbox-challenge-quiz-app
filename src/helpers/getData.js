export const getData = async () => {
  const url = `https://opentdb.com/api.php?amount=10`;

  const resp = await fetch(url);
  const { results } = await resp.json();

  const parsedData = results.map((data, i) => {
    return {
      ...data,
      id: i + 1,
    };
  });

  return parsedData;
};
