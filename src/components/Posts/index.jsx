import './styles.css'
import { PostCard } from '../PostCard';

export const Posts = ({ posts }) => (
    <div className='posts'>
        {posts.map(post => (
            <PostCard key={post.id} title={post.title} id={post.id} cover={post.cover} body={post.body} />
        ))}
    </div>
);