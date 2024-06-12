import React, { useEffect, useState } from 'react'
import "../styles/Categories.css"

const Categories = ({ data }) => {

    const [Data, setData] = useState([]);

    // Fetching function
    const fetchData = async () => {

        let url;
        if (data == 'Home') {
            url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6b2587fb97184cd9bc2a2674eacef73b";
        }
        else {
            url = `https://newsapi.org/v2/top-headlines?country=in&category=${data}&apiKey=6b2587fb97184cd9bc2a2674eacef73b`
        }

        //Checking value of data and url
        console.log(data);
        console.log(url);

        //fetching data
        const newsData = await fetch(url)
            .then(response => response.json())

        console.log(newsData.articles);
        setData(newsData.articles)
    }

    // rendering when the component mounts and when the categories get changed
    useEffect(() => {
        fetchData()
    }, [data])



    return (
        <div className="cat-main">
            <div className="cat-container">

                <div className="cat-title">
                    {
                        Data.length > 0 ?
                            (Data.map((item, index) => {        //always use return method if using {}
                                return (
                                    <div className='content' key={index}>
                                        <h1>{item.title}</h1>
                                        <img src={item.urlToImage} alt="img" />
                                        <p className='para_desc'>{item.description}</p>
                                        <a href={item.url} target='_blank'>Read More</a>
                                    </div>)
                            }))
                            :
                            (
                                <p>Loading...</p>
                            )

                    }
                </div>



            </div>
        </div>
    )
}

export default Categories
