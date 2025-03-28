import { useState } from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import Post from "./Components/Post";
import "./App.css";

function App() {
  const [count] = useState([...Array(50).keys()]);

  return (
    <div className="appRoot">
      <div className="top">
        {count.map((element) => (
          <div key={element} className="story">
            Story
          </div>
        ))}
      </div>
      <div className="bottom">
        <div className="home">
          <Post
            image={
              "https://wallpapercat.com/w/full/a/2/d/1195279-1441x2560-phone-hd-geometric-abstract-background.jpg"
            }
          />
          <Post
            image={
              "https://i0.wp.com/picjumbo.com/wp-content/uploads/digital-art-dark-natural-scenery-with-a-large-sun-and-another-planet-free-image.jpeg?w=2210&quality=70"
            }
          />
          <Post
            image={
              "https://piktochart.com/wp-content/uploads/2023/10/large-198.jpg"
            }
          />
          <Post
            image={
              "https://w0.peakpx.com/wallpaper/206/563/HD-wallpaper-simple-winter-minimal-forest-nature-abstract-sunset-minimalism-thumbnail.jpg"
            }
          />

          <Post
            image={
              "https://t3.ftcdn.net/jpg/13/10/22/04/360_F_1310220450_0p8N5vKe99wA2FT96VYfuTroFYtF5wvl.jpg"
            }
          />
        </div>

        {/* <div className='post'>
      <img
        src='https://wallpapercat.com/w/full/a/2/d/1195279-1441x2560-phone-hd-geometric-abstract-background.jpg'
        alt='thanos'
        className='post-image'/>
    <div className="icon-bar">
    <FaHeart className="icon" />
    <FaComment className="icon" />
    <FaShare className="icon" />
  </div>
  </div>
    </div>
    <div className='postwo'>
      <img
        src='https://i0.wp.com/picjumbo.com/wp-content/uploads/digital-art-dark-natural-scenery-with-a-large-sun-and-another-planet-free-image.jpeg?w=2210&quality=70'
        alt='thor'
        className='post-image'
      />
    <div className="icon-bar">
    <FaHeart className="icon" />
    <FaComment className="icon" />
    <FaShare className="icon" />
    </div>
    </div>
    <div className='posthree'>
      <img
        src='https://piktochart.com/wp-content/uploads/2023/10/large-198.jpg'
        alt='thor'
        className='post-image'
      />
    <div className="icon-bar">
    <FaHeart className="icon" />
    <FaComment className="icon" />
    <FaShare className="icon" />
    </div>
    </div>
  </div> */}
      </div>
    </div>
  );
}

export default App;
