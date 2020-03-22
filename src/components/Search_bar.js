import React, { useState, useEffect } from "react";
import axios from "axios";

function Search_bar() {
    const [apiData, setApiData] = useState([]);
    const [search, setSearch] = useState("trending");
    const baseUrl = "https://www.googleapis.com/youtube/v3";
    const apiKey = "AIzaSyAakxYQit1DRIQag9AXDESHnUc2P6lNwBk";
    const videoSearchUrl = `${baseUrl}/search?part=snippet&maxResults=7&q=${search}&type=video&key=${apiKey}`;
    const [currentVideo, setCurrentVideo] = useState("");
    const url = "https://www.youtube.com/embed/" + currentVideo;

    const handleChange = e => {
        const userInput = e.target.value;
        setSearch(userInput);
    };

    const handleSubmit = e => {
        e.preventDefault();

        axios
            .get(videoSearchUrl)
            .then(res => {
                let items = res.data.items;
                console.log(res.data.items);
                setApiData(items);
            })
            .catch(err => console.log(err));
    };

    const handleCurrentVideo = e => {
        console.log(e.target.attributes[0].value);
        setCurrentVideo(e.target.attributes[0].value);
    };

    const handleSave = e => {
        console.log(e.target);
    };

    const getDate = date => {
        return (
            date.getDate() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getFullYear()
        );
    };

    return (
        <>
            <div className="input-group mb-5 mt-3 bg-dark">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search for"
                    onChange={handleChange}
                />
                <div className="input-group-prepend">
                    <button
                        onClick={handleSubmit}
                        className="btn btn-secondary"
                    >
                        submit
                    </button>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="video-detail col-md-8">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                src={url}
                                className="embed-responsive-item"
                            ></iframe>
                        </div>

                        <div className="detail">
                            <div>{""}</div>
                        </div>
                    </div>
                    <ul className="col-md-4 borderDefault">
                        {apiData.map(video => (
                            <li
                                className="text-center"
                                style={{
                                    display: "inline",
                                    backgroundColor: "#242424"
                                }}
                                key={video.id.videoId}
                            >
                                <img
                                    style={{ cursor: "pointer", width: "100%" }}
                                    onClick={handleCurrentVideo}
                                    data={video.id.videoId}
                                    src={video.snippet.thumbnails.high.url}
                                />
                                <div className="title">
                                    {video.snippet.title}
                                </div>

                                {/* <a
                                    href={""}
                                    className="badge badge-secondary btn-sm my-2 p-2"
                                >
                                    SAVE
                                </a> */}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Search_bar;
