import React, { useState, useEffect, useRef } from 'react'
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache
} from 'react-virtualized'
import faker from 'faker'

function Accordion2() {
  const cache = useRef(new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 100
  }))
  const [people, setPeople] = useState([])
  const [dino, setDino] = useState([])

  React.useEffect(() => {
    let myKeys: any = Array(10000).keys()
    setPeople(
      [...myKeys].map(key => {
        return {
          id: key,
          name: `Tom${key}`,
          bio: faker.lorem.lines(Math.random() * 100),
        }
      })
    )
  }, [])

  async function fetchData() {
    //need to add error handeling, consider try catch statement
    const response = await fetch("http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=15")
    const json = await response.json()
    await setDino(prev => [...prev, ...json[0]])
  }

  console.log(46, dino);

  return (
    <div>
      <button onClick={fetchData}>Grab data</button>
      {/* <h3>Title</h3> */}
      <div style={{ width: "100%", height: "100vh" }}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              rowHeight={cache.current.rowHeight}
              deferredMeasurementCache={cache.current}
              rowCount={people.length}
              rowRenderer={({ key, index, style, parent }) => {
                const person = people[index]

                return (
                  <CellMeasurer key={key} cache={cache.current} parent={parent} columnIndex={0} rowIndex={index}>
                    <div style={style}>
                      <h2>{person.name}</h2>
                      <p>{person.bio}</p>
                    </div>
                  </CellMeasurer>
                );
              }}
            />

          )}

        </AutoSizer>
      </div>

      {/* {people.map(person => (
        <li key={person.id}>
          <h2>{person.name}</h2>
        </li>
      ))} */}
    </div>
  )
}

export default Accordion2
