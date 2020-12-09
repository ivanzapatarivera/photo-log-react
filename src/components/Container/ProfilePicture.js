import React, { useState, useEffect } from "react";

import "../../style.css";

const Profile = () => {
  const [data, setData] = useState(null);
  const fetchURL = "https://photo-logger.herokuapp.com";
  const getData = () =>
    fetch(`${fetchURL}/profilepic`).then((res) => res.json());
  //   fetch(`${fetchURL}/profilepic`, {
  //     method: "POST",
  //     header: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ item }),
  //   }).then((data) => data.json());

  useEffect(() => {
    getData().then((data) => setData(data));
  }, []);

  return (
    <div>
      <div
        className="col-12 col-md-6 col-lg-3 mx-auto text-center"
        id="show"
        onClick={profilePictureDivEventListener}
      >
        {data?.map((item, index, array) =>
          // Declaring last item of the array
          index === array.length - 1 ? (
            <ul>
              <li>
                {/* Obtaining URL of last item of the array */}
                <img
                  src={item.URL}
                  className="profilepic profilePicture"
                  id="profilePicture"
                />
              </li>
            </ul>
          ) : (
            console.log(item)
          )
        )}
      </div>
      <div
        id="newProfilePic"
        className="col-12 col-md-6 mx-auto newProfilePic"
        // style={{ display: "none" }}
      >
        <form
          action="/profilepic"
          method="post"
          class="hidden col-10 col-md-6 mx-auto"
          id="form"
        >
          <input
            type="text"
            name="URL"
            id="URL"
            placeholder="New profile picture's URL"
            className="pl-3"
          />
          <br />
          <button
            class="button btn btn-primary"
            id="buttonSumbitProfilePicture"
            onClick={buttonClickedEventListener}
          >
            <i class="fas fa-check"></i>
          </button>
          <span
            class="buttonCancel btn px-2 ml-1"
            id="buttonCancelProfilePicture"
            onClick={buttonClickedEventListener}
          >
            <i class="fas fa-times"></i>
          </span>
        </form>
      </div>
    </div>
  );

  // Display the latest posted image as profile picture
  function profilePictureDivEventListener(e) {
    const profilePictureUpdateForm = document.querySelector("#newProfilePic");
    e.preventDefault();
    if (profilePictureUpdateForm.style.display === "block") {
      profilePictureUpdateForm.style.display = "none";
      profilePictureUpdateForm.classList.remove("scale-in-center");
    } else {
      profilePictureUpdateForm.style.display = "block";
      profilePictureUpdateForm.classList.add("scale-in-center");
    }
  }

  // Event handler to close div when clicking on cancel button
  function buttonClickedEventListener(e) {
    const profilePictureUpdateForm = document.querySelector("#newProfilePic");
    e.preventDefault(e);
    profilePictureUpdateForm.style.display = "none";
    profilePictureUpdateForm.classList.remove("scale-in-center");
  }
};

export default Profile;