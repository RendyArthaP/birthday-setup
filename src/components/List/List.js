import React from 'react'

const List = ({ peoples }) => {
  return (
    <div className="flex flex-col">
      {peoples.map(person => (
        <div
          key={person.id}
          className="flex flex-row py-2"
        >
          <img src={person.image} alt="" className="w-20 rounded-full"/>
          <div className="flex flex-col text-left my-auto ml-4">
            <h2>{person.name}</h2>
            <p>{person.age}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default List
