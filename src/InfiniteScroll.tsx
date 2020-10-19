import React, { useState } from "react";
import { InfiniteLoader, List } from "react-virtualized";
import "react-virtualized/styles.css";

export default function InfiniteLoaderComp() {
  const [list, setDino] = useState([]);

  async function fetchData() {
    //need to add error handeling, consider try catch statement
    const response = await fetch(
      "http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=10"
    );
    const json = await response.json();
    await setDino((prev) => [...prev, ...json[0]]);
  }

  // this allows the infinite scroll
  let remoteRowCount = list.length + 20;

  //const list = [];

  function isRowLoaded({ index }) {
    return !!list[index];
  }

  function loadMoreRows({ startIndex, stopIndex }) {
    // grab data and store it in list here
    return fetchData();
  }

  function rowRenderer({ key, index, style }) {
    return (
      <div key={key} style={style}>
        {list[index]}
      </div>
    );
  }

  console.log(38, list)


  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={remoteRowCount}
    >
      {({ onRowsRendered, registerChild }) => (
        <List
          height={100}
          onRowsRendered={onRowsRendered}
          ref={registerChild}
          rowCount={remoteRowCount}
          rowHeight={20}
          rowRenderer={rowRenderer}
          width={300}
        />
      )}
    </InfiniteLoader>
  );
}
