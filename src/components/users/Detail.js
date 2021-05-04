import axios from "axios";
import React, { useState, useEffect } from "react";

const Detail = (props) => {
  const [userDetail, setUserDetail] = useState([]);

  useEffect(() => {
    //console.log(user.login);
    props.getUser(props.match.params.name);
    console.log(props.match.params.name);
    props.getRepos(props.match.params.name);
    // const response = await axios.get(user.url);

    // setUserDetail(response.data);

    // console.log(userDetail);
  }, []);
  const {
    login,
    avatar_url,
    html_url,
    followers,
    following,
    public_repos,
    email,
    company,
    blog,
    bio,
    public_gists,
  } = props.singleUser;

  return (
    <div>
      <div className="grid-2 card">
        <div style={{ display: "block", margin: "0 auto" }}>
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: "200px" }}
          />
          <h3>{login}</h3>
        </div>

        <div
          style={{
            display: "grid",

            gridGap: "1.5rem",
          }}
        >
          <div>
            <h4>Bio</h4>

            <p>{bio ? bio : "this user has no bio"}</p>
          </div>

          <a
            href={html_url}
            className="btn"
            style={{
              padding: "10px",
              paddingLeft: "50px",
              maxWidth: "15rem",
              backgroundColor: "#333",
              color: "white",
            }}
          >
            View GitHub Profile
          </a>

          <div>
            <p>{`Username: ${login}`}</p>
            <p>{`Company: ${
              company ? company : "this user has no company"
            }`}</p>
            <p> {`Website: ${blog ? blog : "this user has no webiste"}`}</p>
          </div>
        </div>
      </div>

      <div className="card">
        <div style={{ display: "block", margin: "0 auto", width: "50%" }}>
          <button className="btn btn-danger">{`followers : ${followers}`}</button>
          <button className="btn btn-dark">{`following ${following}`}</button>
          <button className="btn btn-success">{`public repos : ${public_repos}`}</button>
          <button className="btn btn-light">{`public Gists : ${public_gists}`}</button>
        </div>
      </div>

      <div>
        {props.repos.map((repo) => (
          <p key={repo.id} className="card">
            {" "}
            {repo.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Detail;
