import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
    const [apiData, setApiData] = useState([]);
    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const apiKey = "AIzaSyB18FqBJ3VKubboJjAs_ZYn-2jNBsP1sEk";
    const videoSearchUrl = `${baseUrl}/search?part=snippet&q=cats&type=video&key=${apiKey}`;
    const url = "https://www.youtube.com/embed/";

    useEffect(() => {
        axios
            .get(videoSearchUrl)
            .then(res => {
                let items = res.data.items;
                setApiData(items);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div className="row mt-5 mb-5">
                {apiData.map(item => (
                    <div
                        className="col-xs-12 col-sm-6 col-md-4"
                        key={item.id.videoId}
                    >
                        <div
                            className="card mb-5"
                            style={{ width: "18rem", minHeight: "550px" }}
                        >
                            <a href={url + item.id.videoId}>
                                <img
                                    className="card-img-top"
                                    src={item.snippet.thumbnails.default.url}
                                    alt="Card image cap"
                                />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    {item.snippet.title}
                                </h5>
                                <small className="font-weight-bold">
                                    {item.snippet.publishedAt}
                                </small>
                                <p className="card-text">
                                    {item.snippet.description}
                                </p>
                                <a href="#" className="btn btn-primary">
                                    + Add to Collection
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Home;
