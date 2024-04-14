import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title, cover, posted_date, reading_time, author, author_img, hashtag} = blog;
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${cover}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-21xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
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