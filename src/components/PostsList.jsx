import { useSelector, useDispatch } from "react-redux";
import { postDelete } from "../slices/postSlice";

const PostsList = () => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()

    const renderPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description.substring(0,100)}</p>
            <button onClick={() => dispatch(postDelete({id: post.id})) }>x</button>
        </article>
    ))

    return (
        <section>
            <h2>Posts</h2>
            {renderPosts}
        </section>
    )
    
}


export default PostsList
