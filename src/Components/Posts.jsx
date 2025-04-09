import { useState } from "react";
import Post from "./Post";

const Posts = () => {
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
          <Post image="https://wallpapercat.com/w/full/a/2/d/1195279-1441x2560-phone-hd-geometric-abstract-background.jpg" />
          <Post image="https://i0.wp.com/picjumbo.com/wp-content/uploads/digital-art-dark-natural-scenery-with-a-large-sun-and-another-planet-free-image.jpeg?w=2210&quality=70" />
          <Post image="https://piktochart.com/wp-content/uploads/2023/10/large-198.jpg" />
          <Post image="https://w0.peakpx.com/wallpaper/206/563/HD-wallpaper-simple-winter-minimal-forest-nature-abstract-sunset-minimalism-thumbnail.jpg" />
          <Post image="https://t3.ftcdn.net/jpg/13/10/22/04/360_F_1310220450_0p8N5vKe99wA2FT96VYfuTroFYtF5wvl.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Posts;
