
const initialState = {
  reviewCount: 0,
  newsData: [],
}

const ADD_REVIEWS = 'add_reviews';
const SAVE_NEWS = 'save_news';

const add_reviews = () => ({
  type: ADD_REVIEWS,
  payload: 1,
});

const add_reviews = (news) => ({
  type: SAVE_NEWS,
  payload: news,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEWS:
      return Object.assign({}, state, {
        reviewCount: state.reviewCount + action.payload
      });

    case SAVE_NEWS:
      return Object.assign({}, state, {
        newsData: action.payload
      })

    default: return state
  }
};

export {reducer, add_reviews};