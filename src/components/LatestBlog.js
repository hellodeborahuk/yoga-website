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
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(() => {
    getData()
  },[])

  
  return (
    <>
      <h2 className="latest-blog-title">Latest Posts</h2>
      <div className="latest-blog">
        {data.map((data) => {
          return (
            <div>
              <img
                src={data.image}
                className="blog-thumbnail"
                alt={data.title}
              />
              <h4>{data.title}</h4>
              <p>{data.copy}</p>
              <button>Read more</button>
            </div>
          );
        })}
      </div>
    </>
  );
    
}