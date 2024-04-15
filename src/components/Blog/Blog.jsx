import PropTypes from 'prop-types';
import {FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmarks}) => {
    const {id, title, cover, posted_date, reading_time, author, author_img, hashtag} = blog;
    const addToBookmarks = () => {
        // Pass the blog id to the parent component's handler function
        handleAddToBookmarks(id);
    };
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${cover}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-21xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button 
                    onClick={addToBookmarks}
                    className='ml-2 text-red-600 text-2xl'
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            {
                hashtag.map((hash, idx) => <span key={idx}> <a href=''> {hash} </a></span>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;