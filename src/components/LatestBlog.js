import React, {useEffect, useState} from "react";

export default function LatestBlog() {
 const [data, setData] = useState([]);
  const getData = () => {
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  },[])

  data.map((data) => {
  return (
    <div>
      <img
        src={data.image}
        className="blog-thumbnail"
        alt={data.title}
      />
      <h2>{data.title}</h2>
      <p>{data.copy}</p>
      <button>Read more</button>
    </div>
    ) } );
}