import React from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';



const SinglePage = () => {
  const {id} = useParams()
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  // const goBack = () => navigate('/posts', {state: 123}) // получаем state из useLocate, можно передать сосояние страницы на момент перехода по ней
  const goBack = () => navigate(-1)  //useNavigate хорош ели нам нужно куда то переадресовать пользователя, если нужен переход по страницам то лучше использовать Link (навигация на конкретный адрес, мало чем отличается от Link)
  const goHome = () => navigate('/', {replace: true}); // replace позволяет перемещаться на любой адрес если он true(плюс к этому еще адрес не сохранится в истории), если false то replace работает как обычный navigate

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
  }, [id]);




  return (
    <div>
      <button onClick={goBack}>Go back</button>
      <button onClick={goHome}>Go HomePage</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
};

export default SinglePage;