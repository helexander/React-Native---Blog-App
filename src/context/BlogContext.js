import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':
            return [...state, {
                id: Date.now(),
                title: action.payload.title,
                content: action.payload.content
            }];
        case 'edit_blogpost':
            return state.map((blogPost) => {
                // If the id of the blogpost is found, replace the id's blog post entry with the new edited/updated data obtained from action.payload
                if (blogPost.id === action.payload.id) {
                    return action.payload;
                } else {
                    return blogPost;
                }
            });
        case 'delete_blogpost':
            return state.filter((blogPost) => {
                return blogPost.id !== action.payload
            });
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title: title, content: content } });
        if (callback) {
            callback();
        }
    }
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    };
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_blogpost', payload: { id: id, title: title, content: content } })
        if (callback) {
            callback();
        }
    };
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'Test Post', content: 'Test Content', id: 1 }]
);