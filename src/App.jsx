import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikePostHoc from './components/LikePostHoc';
import LikeimageHoc from './components/likeimageHoc';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        {/* <LikePost/>
        <LikeImage/> */}
        <LikePostHoc/>
        <LikeimageHoc/>
      </div>
    </div>
  );
}

export default App;
