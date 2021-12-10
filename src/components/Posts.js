import { useMutation, useQuery, useQueryClient } from "react-query"
import { API } from "../api"

const Posts = () => {
  const queryClient = useQueryClient();
  const { status, data, error } = useQuery('/posts', API.fetchPostList, {
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation(API.deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries('/posts');
    }
  })

  if (status === 'loading') {
    return <span>Loading...</span>
  }

  if (status === 'error') {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <button onClick={() => queryClient.invalidateQueries('/posts')}>Refetch</button>
      <ul>
        {data.data.map(todo => (
          <li
            key={todo.id}
            onClick={() => mutation.mutate(todo.id)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;